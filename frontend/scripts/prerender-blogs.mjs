import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

const root = path.resolve(import.meta.dirname, "..");
const dist = path.join(root, "dist");
const articles = JSON.parse(await readFile(path.join(root, "src/generated/blogs.json"), "utf8"));
const template = await readFile(path.join(dist, "index.html"), "utf8");
const origin = "https://isaachormel.com";
const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#39;");

for (const article of articles) {
  const articleUrl = `${origin}/blog/${article.id}/`;
  const renderedMarkdown = sanitizeHtml(marked.parse(article.content));
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: { "@type": "Person", name: "Isaac Hormel", url: origin },
    mainEntityOfPage: articleUrl,
    image: `${origin}/images/phoenixWingSquaredBlogs.png`,
  }).replaceAll("<", "\\u003c");
  const metadata = `
    <meta name="description" content="${escapeHtml(article.description)}">
    <link rel="canonical" href="${articleUrl}">
    <meta property="og:type" content="article">
    <meta property="og:title" content="${escapeHtml(article.title)}">
    <meta property="og:description" content="${escapeHtml(article.description)}">
    <meta property="og:url" content="${articleUrl}">
    <meta property="og:image" content="${origin}/images/phoenixWingSquaredBlogs.png">
    <meta property="article:published_time" content="${article.date}">
    <meta name="twitter:card" content="summary_large_image">
    <script type="application/ld+json">${jsonLd}</script>`;
  const body = `
    <header class="site-header"><div class="site-header-inner">
      <a class="wordmark" href="/"><span class="wordmark-mark" aria-hidden="true">IH</span><span>ISAAC HORMEL</span></a>
      <nav class="primary-navigation" aria-label="Primary navigation">
        <a href="/about">About</a><a href="/portfolio">Work</a><a href="/philosophy">Philosophy</a><a href="/blog">Journal</a><a class="nav-cta" href="/contact">Let’s talk ↗</a>
      </nav>
    </div></header>
    <main id="main-content"><article class="article page-wrap">
      <a class="text-link" href="/blog">← Journal</a>
      <p class="blog-date" style="margin-top:2rem">${article.date}</p>
      <h1>${escapeHtml(article.title)}</h1>
      <p class="article-summary">${escapeHtml(article.description)}</p>
      <div class="markdown-body">${renderedMarkdown}</div>
    </article></main>
    <footer class="site-footer"><div class="site-footer-inner">
      <a class="wordmark footer-wordmark" href="/"><span class="wordmark-mark" aria-hidden="true">IH</span><span>ISAAC HORMEL</span></a>
      <p>Independent software engineering for work that matters.</p>
      <div class="footer-links"><a href="/about">About</a><a href="/blog">Journal</a><a href="/contact">Contact</a><a href="https://github.com/rewrite123">GitHub ↗</a></div>
      <small>© ${new Date().getFullYear()} Isaac Hormel</small>
    </div></footer>`;
  let html = template.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(article.title)} — Isaac Hormel</title>`);
  html = html.replace(/<meta\s+name="description"[^>]*>|<meta\s+name="twitter:card"[^>]*>|<meta\s+property="og:[^"]+"[^>]*>|<meta\s+property="article:[^"]+"[^>]*>|<link\s+rel="canonical"[^>]*>/gi, "");
  html = html.replace("</head>", `${metadata}\n</head>`);
  html = html.replace(/<script\b[^>]*type="module"[^>]*>\s*<\/script>|<script\b[^>]*type="module"[^>]*><\/script>/gi, "");
  html = html.replace(/<link\b[^>]*rel="modulepreload"[^>]*>/gi, "");
  html = html.replace(/<div id="portfolio"><\/div>/, body);

  const articleDirectory = path.join(dist, "blog", article.id);
  await mkdir(articleDirectory, { recursive: true });
  await writeFile(path.join(articleDirectory, "index.html"), html);
}

await writeFile(path.join(dist, "404.html"), template);
const staticRoutes = ["", "about", "portfolio", "contact", "philosophy", "blog"];
const urls = [
  ...staticRoutes.map((route) => `${origin}/${route}`),
  ...articles.map((article) => `${origin}/blog/${article.id}/`),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}\n</urlset>\n`;
await writeFile(path.join(dist, "sitemap.xml"), sitemap);
