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
  const userInteracted = useRef(false);
  const detailRef = useRef<HTMLElement>(null);
  const matchingTechnologies = useMemo(() => searchTechnologies(query), [query]);
  const categories = [...new Set(matchingTechnologies.map((technology) => technology.category))];

  useEffect(() => {
    if (demoStopped || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => {
      if (userInteracted.current) return;
      const term = suggestions[Math.floor(Math.random() * suggestions.length)];
      const matches = searchTechnologies(term);
      setQuery(term);
      setSelected(matches[Math.floor(Math.random() * matches.length)] ?? null);
    }, 2600);
    return () => window.clearTimeout(timer);
  }, [demoStopped]);

  const stopDemo = () => {
    userInteracted.current = true;
    setDemoStopped(true);
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
      onPointerDownCapture={stopDemo}
      onFocusCapture={stopDemo}
      onKeyDownCapture={stopDemo}
    >
      <div className="tech-search">
        <label className="visually-hidden" htmlFor="technology-search">Search technologies</label>
        <input
          id="technology-search"
          className="search-field"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search technologies or categories…"
          aria-controls="technology-results"
        />
        <p className="tech-hint" aria-live="polite">
          {matchingTechnologies.length} technologies · select one to explore
        </p>
      </div>
      <div className="tech-results" id="technology-results" role="region" aria-label="Technology results" tabIndex={0}>
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
      <aside ref={detailRef} className="tech-detail" aria-live="polite" aria-label="Technology details">
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
