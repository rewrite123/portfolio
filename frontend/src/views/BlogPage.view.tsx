import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link, useParams } from "react-router-dom";
import articles from "../generated/blogs.json";

export default function BlogPage() {
  const { blogId } = useParams();
  const article = articles.find((item) => item.id === blogId);

  if (!article) {
    return (
      <>
        <Helmet>
          <title>Article not found — Isaac Hormel</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <section className="not-found page-wrap">
          <p className="eyebrow">404 · ARTICLE NOT FOUND</p>
          <h1>That page isn’t here.</h1>
          <Link className="button" to="/blog">Back to the journal</Link>
        </section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.title} — Isaac Hormel</title>
        <meta name="description" content={article.description} />
        <link rel="canonical" href={`https://isaachormel.com/blog/${article.id}/`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:url" content={`https://isaachormel.com/blog/${article.id}/`} />
        <meta property="og:image" content="https://isaachormel.com/images/phoenixWingSquaredBlogs.png" />
        <meta property="article:published_time" content={article.date} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <article className="article page-wrap">
        <Link className="text-link" to="/blog">← Journal</Link>
        <p className="blog-date" style={{ marginTop: "2rem" }}>{article.date}</p>
        <h1>{article.title}</h1>
        <p className="article-summary">{article.description}</p>
        <div className="markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>
        </div>
      </article>
    </>
  );
}
