import { useEffect, useRef, useState, type ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import TechnologyExplorer from "../components/TechnologyExplorer";
import { GolfScene, PlumbingScene } from "../components/ProjectScenes";

const domains = [
  ["01", "AI & automation", "Practical AI features and automations that solve real workflow problems."],
  ["02", "Backend systems", "Reliable APIs and business logic designed around how your team works."],
  ["03", "Frontend products", "Fast, accessible web apps that make complex work feel straightforward."],
  ["04", "Server management", "Cloud environments, deployment, and dependable application operations."],
  ["05", "Database management", "Thoughtful data models, queries, and search that scale with your needs."],
  ["06", "Website design", "Distinctive, responsive websites that turn a first visit into a conversation."],
  ["07", "Tech infrastructure", "Connected systems and integrations that make your tools work together."],
];

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.18 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, className: `reveal${visible ? " is-visible animate-in" : ""}` };
}

function MailScene() {
  return (
    <svg viewBox="0 0 360 260" role="img" aria-labelledby="mail-title mail-desc">
      <title id="mail-title">An email reaches the inbox</title>
      <desc id="mail-desc">A message moves into a digital inbox, representing Haiyou's marketing and sales software.</desc>
      <rect className="scene-dark" x="62" y="83" width="236" height="122" rx="8" />
      <g className="mail-envelope">
        <rect className="scene-light" x="126" y="59" width="108" height="69" rx="5" />
        <path className="scene-line-dark" d="m129 66 51 35 51-35" />
      </g>
      <path className="scene-mid" d="M62 145h72l14 20h64l14-20h72v52a8 8 0 0 1-8 8H70a8 8 0 0 1-8-8z" />
      <circle className="scene-light" cx="273" cy="78" r="16" />
      <path className="scene-line-dark mail-check" d="m266 78 5 5 9-10" />
    </svg>
  );
}

function CaseStudy({ kind, title, kicker, description, tags, children }: {
  kind: string;
  title: string;
  kicker: string;
  description: string;
  tags: string[];
  children: ReactNode;
}) {
  const reveal = useReveal();
  return (
    <article ref={reveal.ref} className={`case-card ${reveal.className}`}>
      <div className="case-copy">
        <p className="case-kicker">{kicker}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="case-tags" aria-label="Project capabilities">
          {tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
      <div className={`case-visual case-${kind}`}>{children}</div>
    </article>
  );
}

export default function Landing() {
  return (
    <>
      <Helmet>
        <title>Isaac Hormel — Custom software for ambitious businesses</title>
        <meta name="description" content="Build the software your business needs to move forward. Custom web apps, AI-enabled tools, APIs, and cloud infrastructure by Isaac Hormel." />
        <link rel="canonical" href="https://isaachormel.com/" />
      </Helmet>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">INDEPENDENT SOFTWARE ENGINEERING</p>
            <h1>Software built to move your <span>business forward.</span></h1>
            <p className="hero-lede">I turn complicated workflows and ambitious ideas into useful software: thoughtful websites, custom applications, and reliable systems that help your business do its best work.</p>
            <div className="hero-actions">
              <Link className="button" to="/contact">Tell me what you’re building <span aria-hidden="true">↗</span></Link>
              <a className="button button-outline" href="#work">Explore the work</a>
            </div>
            <div className="signal-row" aria-label="Services">
              <span>Web applications</span><span>Business systems</span><span>Cloud & AI</span>
            </div>
          </div>
          <div className="hero-aside">
            <img src="/images/software-systems.svg" alt="A simplified illustration of a software workspace" width={480} height={380} fetchPriority="high" />
            <div className="hero-terminal" aria-label="Development terminal illustration">
              <div><b>isaac@studio</b>:~$ build --for-people</div>
              <div><span>✓</span> idea → useful software</div>
              <div><span>✓</span> ready for what’s next</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section page-wrap" aria-labelledby="domains-heading">
        <div className="section-heading">
          <p className="eyebrow">WHAT I CAN HELP WITH</p>
          <h2 id="domains-heading">One partner across the whole stack.</h2>
          <p>From the first sketch to the production server, I connect design, engineering, and operations so the parts work better together.</p>
        </div>
        <div className="domain-grid">
          {domains.map(([number, title, description]) => (
            <article className="domain-card" key={number}>
              <span className="domain-index">{number} / 07</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section page-wrap" id="work" aria-labelledby="work-heading">
        <div className="section-heading">
          <p className="eyebrow">A FEW PLACES THE WORK HAS TAKEN ME</p>
          <h2 id="work-heading">Software for the real world.</h2>
          <p>Different industries, same goal: make important work simpler, clearer, and easier to grow.</p>
        </div>
        <div className="case-list">
          <CaseStudy
            kind="mail"
            title="Haiyou.co"
            kicker="Marketing & sales software"
            description="Marketing and sales tools need to make every touchpoint feel deliberate. I helped build software to support the workflows behind reaching prospects, organizing follow-up, and turning conversations into lasting customer relationships."
            tags={["Sales workflows", "Marketing tools", "Customer journeys"]}
          ><MailScene /></CaseStudy>
          <CaseStudy
            kind="plumbing"
            title="Gibson Plumbing"
            kicker="Operations & field service"
            description="When a team works across jobs, people, and inventory, disconnected spreadsheets slow everything down. Custom job and inventory management software brings the moving parts into one practical workflow."
            tags={["Job management", "Inventory", "Field operations"]}
          ><PlumbingScene /></CaseStudy>
          <CaseStudy
            kind="sports"
            title="Built around the game."
            kicker="Sports technology"
            description="At ThrivSports, BatRX, and Sports Vet, I worked on software that helps teams and athletes get more from their data—from coaching and customer management to sports performance and mobile experiences."
            tags={["ThrivSports", "BatRX", "Sports Vet", "Analytics"]}
          ><GolfScene /></CaseStudy>
        </div>
      </section>

      <section className="section page-wrap" aria-labelledby="technology-heading">
        <div className="section-heading">
          <p className="eyebrow">TOOLS ARE PART OF THE SOLUTION</p>
          <h2 id="technology-heading">A toolkit for turning ideas into systems.</h2>
          <p>Explore the languages, platforms, and tools represented across my projects and development work.</p>
        </div>
        <TechnologyExplorer />
      </section>

      <section className="section page-wrap section-tight" aria-labelledby="approach-heading">
        <div className="section-heading">
          <p className="eyebrow">HOW I PUT THE PIECES TOGETHER</p>
          <h2 id="approach-heading">More than a list of tools.</h2>
          <p>Across past projects, the work has included product thinking, hands-on delivery, and the details that make software useful after launch.</p>
        </div>
        <div className="domain-grid">
          <article className="domain-card">
            <span className="domain-index">01 / APPROACH</span>
            <h3>APIs & integrations</h3>
            <p>TypeScript and Express services that connect products, partners, and business data.</p>
          </article>
          <article className="domain-card">
            <span className="domain-index">02 / APPROACH</span>
            <h3>Workflow-first products</h3>
            <p>CRM, booking, inventory, and job workflows designed around how people actually work.</p>
          </article>
          <article className="domain-card">
            <span className="domain-index">03 / APPROACH</span>
            <h3>Data people can use</h3>
            <p>Data entry, reporting, charts, and KPIs that make the next decision clearer.</p>
          </article>
          <article className="domain-card">
            <span className="domain-index">04 / APPROACH</span>
            <h3>End-to-end delivery</h3>
            <p>Scoping, interface development, APIs, containers, and deployment considered as one product.</p>
          </article>
        </div>
      </section>

      <section className="section page-wrap section-tight" aria-labelledby="contact-heading">
        <div className="contact-band">
          <div className="contact-band-inner">
            <div>
              <p className="eyebrow">HAVE A GOOD PROBLEM TO SOLVE?</p>
              <h2 id="contact-heading">Let’s make your next idea real.</h2>
              <p>Tell me where the friction is. We can figure out the right next step together.</p>
            </div>
            <Link className="button" to="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
