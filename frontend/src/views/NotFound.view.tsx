import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page not found — Isaac Hormel</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="not-found page-wrap">
        <p className="eyebrow">404 · PAGE NOT FOUND</p>
        <h1>Looks like a dead end.</h1>
        <p className="article-summary">The page may have moved, or the link may be out of date.</p>
        <Link className="button" to="/">Back to the homepage</Link>
      </section>
    </>
  );
}
