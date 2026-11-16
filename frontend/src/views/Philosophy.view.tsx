import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Philosophy() {
  return (
    <>
      <Helmet>
        <title>Engineering philosophy — Isaac Hormel</title>
        <meta name="description" content="A work in progress: the principles behind how Isaac Hormel approaches software and collaboration." />
        <link rel="canonical" href="https://isaachormel.com/philosophy" />
      </Helmet>
      <section className="page-hero">
        <div className="page-wrap">
          <p className="eyebrow">ENGINEERING PHILOSOPHY</p>
          <h1>Build with purpose. <span>Keep it useful.</span></h1>
          <p>This page is taking shape. For now, the short version is simple: listen carefully, choose the right-sized solution, and leave things better than you found them.</p>
          <Link className="button" to="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  );
}
