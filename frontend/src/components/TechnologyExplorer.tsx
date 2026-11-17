import { useEffect, useMemo, useRef, useState } from "react";
import { searchTechnologies, type Technology } from "./technologies";

const suggestions = ["backend", "database", "frontend", "cloud", "React"];

function TechnologyMark({ technology }: { technology: Technology }) {
  return (
    <svg className="tech-mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="60" height="60" rx="8" fill="#343434" />
      <rect x="2" y="2" width="60" height="6" rx="3" fill="#767676" />
      <text x="32" y="37" textAnchor="middle" dominantBaseline="middle" fill="#e0e0e0"
        fontFamily="monospace" fontSize={technology.mark.length > 4 ? 12 : 16} fontWeight="700">
        {technology.mark}
      </text>
    </svg>
  );
}

export default function TechnologyExplorer() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Technology | null>(null);
  const [demoStopped, setDemoStopped] = useState(false);
  const [demoPlaying, setDemoPlaying] = useState(false);
  const userInteracted = useRef(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const detailRef = useRef<HTMLElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const matchingTechnologies = useMemo(() => searchTechnologies(query), [query]);
  const categories = [...new Set(matchingTechnologies.map((technology) => technology.category))];

  useEffect(() => {
    if (demoStopped) return;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const search = searchRef.current;
    if (!search) return;
    let timer: number;
    let visible = false;
    let pending: (() => void) | undefined;
    let pendingDelay = 900;
    let previousTerm = "";
    let previousSelection = "";
    const schedule = (callback: () => void, delay: number) => {
      pending = callback;
      pendingDelay = delay;
      if (!visible || motionPreference.matches || userInteracted.current) return;
      timer = window.setTimeout(() => {
        if (visible && !userInteracted.current && !motionPreference.matches) {
          pending = undefined;
          callback();
        }
      }, delay);
    };
    const startSearch = () => {
      const terms = suggestions.filter((term) => term !== previousTerm);
      const term = terms[Math.floor(Math.random() * terms.length)];
      previousTerm = term;
      setSelected(null);
      let length = 0;
      const erase = () => {
        setQuery(term.slice(0, --length));
        if (length > 0) schedule(erase, 65);
        else schedule(startSearch, 500);
      };
      const select = () => {
        const matches = searchTechnologies(term);
        const alternatives = matches.filter(({ name }) => name !== previousSelection);
        const choices = alternatives.length ? alternatives : matches;
        const technology = choices[Math.floor(Math.random() * choices.length)];
        setSelected(technology);
        previousSelection = technology.name;
        schedule(() => {
          setSelected(null);
          erase();
        }, 2200);
      };
      const type = () => {
        setQuery(term.slice(0, ++length));
        if (length < term.length) schedule(type, 120);
        else schedule(select, 650);
      };
      type();
    };
    const updateMotion = () => {
      window.clearTimeout(timer);
      setDemoPlaying(visible && !motionPreference.matches);
      if (!motionPreference.matches) schedule(startSearch, 900);
      else {
        setQuery("");
        setSelected(null);
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio > 0;
      window.clearTimeout(timer);
      setDemoPlaying(visible && !motionPreference.matches && !userInteracted.current);
      if (visible && pending) schedule(pending, pendingDelay);
    });
    observer.observe(search);
    updateMotion();
    motionPreference.addEventListener("change", updateMotion);
    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
      motionPreference.removeEventListener("change", updateMotion);
    };
  }, [demoStopped]);

  useEffect(() => {
    if (!demoPlaying || !selected || userInteracted.current) return;
    const results = resultsRef.current;
    const card = results?.querySelector<HTMLElement>('[aria-pressed="true"]');
    if (results && card) {
      const containerBounds = results.getBoundingClientRect();
      const cardBounds = card.getBoundingClientRect();
      if (cardBounds.top < containerBounds.top || cardBounds.bottom > containerBounds.bottom) {
        results.scrollTop += cardBounds.top - containerBounds.top;
      }
    }
  }, [demoPlaying, selected]);

  const stopDemo = () => {
    userInteracted.current = true;
    setDemoStopped(true);
    setDemoPlaying(false);
  };

  const selectTechnology = (technology: Technology) => {
    setSelected(technology);
    if (window.matchMedia("(max-width: 820px)").matches) {
      requestAnimationFrame(() => detailRef.current?.scrollIntoView({ block: "nearest" }));
    }
  };

  return (
    <div
      className="tech-explorer"
      onClickCapture={stopDemo}
      onPointerDownCapture={stopDemo}
      onFocusCapture={stopDemo}
      onKeyDownCapture={stopDemo}
    >
      <div className="tech-search">
        <label className="visually-hidden" htmlFor="technology-search">Search technologies</label>
        <div className={`tech-search-input${demoPlaying ? " is-demo-playing" : ""}`}>
          <input
            ref={searchRef}
            id="technology-search"
            className="search-field"
            type="search"
            value={query}
            onChange={(event) => {
              stopDemo();
              setQuery(event.target.value);
            }}
            placeholder="Search technologies or categories…"
            aria-controls="technology-results"
          />
          {demoPlaying && (
            <span className="tech-demo-text" aria-hidden="true">
              {query}<span className="tech-demo-caret" />
            </span>
          )}
        </div>
        <p className="tech-hint" aria-live={demoPlaying ? "off" : "polite"}>
          {matchingTechnologies.length} technologies · select one to explore
        </p>
      </div>
      <div ref={resultsRef} className="tech-results" id="technology-results" role="region" aria-label="Technology results" tabIndex={0}>
        {categories.map((category) => (
          <section className="tech-group" key={category} aria-label={category}>
            <h3>{category}</h3>
            <div className="tech-grid">
              {matchingTechnologies.filter((technology) => technology.category === category).map((technology) => (
                <button
                  className={`tech-card${selected?.name === technology.name ? " is-selected" : ""}`}
                  key={technology.name}
                  type="button"
                  onClick={() => selectTechnology(technology)}
                  aria-pressed={selected?.name === technology.name}
                >
                  <TechnologyMark technology={technology} />
                  <b>{technology.name}</b>
                </button>
              ))}
            </div>
          </section>
        ))}
        {matchingTechnologies.length === 0 && (
          <p className="tech-empty">No matches yet. Try another technology or category.</p>
        )}
      </div>
      <aside ref={detailRef} className="tech-detail" aria-live={demoPlaying ? "off" : "polite"} aria-label="Technology details">
        {selected ? (
          <div className="detail-enter" key={selected.name}>
            <div className="tech-detail-top">
              <TechnologyMark technology={selected} />
              <button
                className="tech-close"
                type="button"
                aria-label="Clear selected technology"
                onClick={() => setSelected(null)}
              >×</button>
            </div>
            <small>{selected.category}</small>
            <h3>{selected.name}</h3>
            <p>{selected.description}</p>
            <span className="tech-hint">IN THE TOOLKIT</span>
          </div>
        ) : (
          <p className="tech-hint">Choose a technology to see how it fits into the work.</p>
        )}
      </aside>
    </div>
  );
}
