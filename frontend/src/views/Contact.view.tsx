import { Helmet } from "react-helmet-async";
import { PopupButton } from "react-calendly";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Isaac Hormel — Let’s build something useful</title>
        <meta name="description" content="Book a conversation with software engineer Isaac Hormel about your product, website, or business software project." />
        <link rel="canonical" href="https://isaachormel.com/contact" />
      </Helmet>
      <section className="page-hero">
        <div className="page-wrap">
          <p className="eyebrow">CONTACT</p>
          <h1>Let’s talk about <span>what’s next.</span></h1>
          <p>Have an idea, a bottleneck, or a system that needs a fresh start? Tell me a little about it and we’ll figure out whether I can help.</p>
        </div>
      </section>
      <section className="section page-wrap">
        <div className="contact-layout">
          <div className="contact-card">
            <p className="eyebrow">A GOOD FIRST STEP</p>
            <h2>Book a quick conversation.</h2>
            <p>Choose a time that works for you through my existing Calendly page. We can talk through the goal, the challenges, and what a sensible next step might look like.</p>
            <div className="contact-actions">
              <PopupButton
                url="https://calendly.com/isaachormel"
                rootElement={document.body}
                text="Schedule with Calendly ↗"
                className="button"
              />
            </div>
          </div>
          <nav className="social-links" aria-label="Other ways to connect">
            <a href="https://www.linkedin.com/in/isaac-hormel/" target="_blank" rel="noreferrer">LinkedIn · Isaac Hormel <span aria-hidden="true">↗</span></a>
            <a href="https://github.com/rewrite123" target="_blank" rel="noreferrer">GitHub · rewrite123 <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </section>
    </>
  );
}
