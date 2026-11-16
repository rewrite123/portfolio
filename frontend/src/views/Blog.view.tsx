import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import articles from "../generated/blogs.json";

type Article = (typeof articles)[number];

export default function Blog() {
  const sortedArticles = [...articles].sort((a: Article, b: Article) => b.date.localeCompare(a.date));
  return (
    <>
      <Helmet>
        <title>Journal — Isaac Hormel</title>
        <meta name="description" content="Notes on software engineering, building useful products, and the technology behind them." />
        <link rel="canonical" href="https://isaachormel.com/blog" />
      </Helmet>
      <section className="page-hero">
        <div className="page-wrap">
          <p className="eyebrow">THE JOURNAL</p>
          <h1>Ideas, notes, and <span>things I’m learning.</span></h1>
          <p>Writing about software, product thinking, and the practical details of getting good ideas into the world.</p>
        </div>
      </section>
      <section className="section page-wrap">
        {sortedArticles.length > 0 ? (
          <div className="blog-list">
            {sortedArticles.map((article) => (
              <Link className="blog-card" to={`/blog/${article.id}`} key={article.id}>
                <span className="blog-date">{article.date}</span>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <span className="text-link">Read article ↗</span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="content-card" style={{ padding: "2rem" }}>New writing is on the way.</p>
        )}
      </section>
    </>
  );
}
