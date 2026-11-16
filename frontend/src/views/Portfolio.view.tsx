import { Helmet } from "react-helmet-async";

const projects = [
  {
    name: "Haiyou.co",
    category: "Marketing & sales",
    description: "Marketing and sales software for customer acquisition, outreach, and follow-up workflows.",
    capabilities: "Customer journeys · Sales workflows · Marketing tools",
  },
  {
    name: "Gibson Plumbing",
    category: "Operations software",
    description: "Inventory and job management software that helps a plumbing business coordinate people, materials, and work in the field.",
    capabilities: "Inventory · Job management · Field operations",
  },
  {
    name: "ThrivSports",
    category: "Sports technology",
    description: "Led full-stack work across APIs, a CRM portal, booking flows, and coach profile applets.",
    capabilities: "TypeScript · Express · React · Docker",
  },
  {
    name: "BatRX",
    category: "Sports performance",
    description: "Built a React single-page app for entering, reviewing, and sorting performance data.",
    capabilities: "React · Data entry · Charts",
  },
  {
    name: "Sports Vet",
    category: "Mobile & consulting",
    description: "Led a short engagement creating APIs, design work, and React Native mobile views.",
    capabilities: "React Native · APIs · Product design",
  },
  {
    name: "UtopiaCompression",
    category: "Desktop applications",
    description: "Created a React-based interface and Electron app for a Navy interface development project.",
    capabilities: "React · Electron · Desktop",
  },
];

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Selected work — Isaac Hormel</title>
        <meta name="description" content="Selected software projects across marketing, sales, field operations, sports, and custom business applications." />
        <link rel="canonical" href="https://isaachormel.com/portfolio" />
      </Helmet>
      <section className="page-hero">
        <div className="page-wrap">
          <p className="eyebrow">SELECTED WORK</p>
          <h1>Different problems. <span>Useful software.</span></h1>
          <p>A selection of product and engineering work across the industries I’ve had the chance to support.</p>
        </div>
      </section>
      <section className="section page-wrap">
        <div className="work-list">
          {projects.map((project) => (
            <article className="work-row" key={project.name}>
              <div>
                <p className="eyebrow">{project.category}</p>
                <h2>{project.name}</h2>
              </div>
              <div>
                <p>{project.description}</p>
                <p className="case-kicker">{project.capabilities}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
