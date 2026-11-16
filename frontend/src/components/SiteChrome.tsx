import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const links = [
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Work" },
  { to: "/philosophy", label: "Philosophy" },
  { to: "/blog", label: "Journal" },
];

export default function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="site-header-inner">
          <Link className="wordmark" to="/" onClick={() => setMenuOpen(false)}>
            <span className="wordmark-mark" aria-hidden="true">IH</span>
            <span>ISAAC HORMEL</span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
          <nav id="primary-navigation" className={`primary-navigation${menuOpen ? " is-open" : ""}`} aria-label="Primary navigation">
            {links.map(({ to, label }) => (
              <NavLink key={to} to={to} onClick={() => setMenuOpen(false)}>{label}</NavLink>
            ))}
            <NavLink className="nav-cta" to="/contact" onClick={() => setMenuOpen(false)}>Let’s talk <span aria-hidden="true">↗</span></NavLink>
          </nav>
        </div>
      </header>
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="site-footer-inner">
          <Link className="wordmark footer-wordmark" to="/">
            <span className="wordmark-mark" aria-hidden="true">IH</span>
            <span>ISAAC HORMEL</span>
          </Link>
          <p>Independent software engineering for work that matters.</p>
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/blog">Journal</Link>
            <Link to="/contact">Contact</Link>
            <a href="https://github.com/rewrite123" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
          <small>© {new Date().getFullYear()} Isaac Hormel</small>
        </div>
      </footer>
    </>
  );
}
