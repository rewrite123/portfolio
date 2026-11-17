import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { readFile, readdir, stat } from "node:fs/promises";
import net from "node:net";
import path from "node:path";
import { after, before, test } from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const dist = path.join(root, "dist");
let preview;
let origin;
let previewOutput = "";

async function findFreePort() {
  const server = net.createServer();
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });
  const address = server.address();
  if (!address || typeof address === "string") throw new Error("Unable to allocate a local port.");
  await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  return address.port;
}

before(async () => {
  const port = await findFreePort();
  origin = `http://127.0.0.1:${port}`;
  preview = spawn(process.execPath, ["node_modules/vite/bin/vite.js", "preview", "--host", "127.0.0.1", "--port", String(port), "--strictPort"], {
    cwd: root,
    stdio: ["ignore", "pipe", "pipe"],
  });
  preview.stdout.setEncoding("utf8").on("data", (chunk) => { previewOutput += chunk; });
  preview.stderr.setEncoding("utf8").on("data", (chunk) => { previewOutput += chunk; });

  for (let attempt = 0; attempt < 40; attempt += 1) {
    if (preview.exitCode !== null) throw new Error(`Vite preview exited early:\n${previewOutput}`);
    try {
      const response = await fetch(origin);
      if (response.ok) return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 150));
    }
  }
  throw new Error(`Vite preview did not start:\n${previewOutput}`);
});

after(() => {
  preview?.kill("SIGTERM");
});

test("the production build serves the SPA and prerendered SEO article routes", async () => {
  const index = await readFile(path.join(dist, "index.html"), "utf8");
  assert.match(index, /Isaac Hormel/);
  assert.match(index, /\/assets\/[^"]+\.js/);
  assert.match(index, /name="description"/);
  await assert.rejects(stat(path.join(dist, "Resume.pdf")), { code: "ENOENT" });

  for (const route of ["/", "/about", "/portfolio", "/contact", "/philosophy", "/blog"]) {
    const response = await fetch(`${origin}${route}`);
    assert.equal(response.status, 200, `${route} should be served`);
    assert.match(await response.text(), /id="portfolio"/, `${route} should return the SPA entry point`);
  }

  const articles = JSON.parse(await readFile(path.join(root, "src/generated/blogs.json"), "utf8"));
  assert.ok(articles.length > 0, "at least one Markdown article should be generated");
  const listing = await fetch(`${origin}/blog`);
  const listingHtml = await listing.text();
  for (const article of articles) {
    assert.match(listingHtml, /id="portfolio"/);
    const articlePath = path.join(dist, "blog", article.id, "index.html");
    const staticArticle = await readFile(articlePath, "utf8");
    assert.match(staticArticle, new RegExp(`<title>${article.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`));
    assert.match(staticArticle, /property="og:title"/);
    assert.match(staticArticle, /application\/ld\+json/);
    assert.match(staticArticle, /<article class="article/);
    assert.doesNotMatch(staticArticle, /<script\b[^>]*type="module"/);

    const response = await fetch(`${origin}/blog/${article.id}/`);
    assert.equal(response.status, 200, `direct article route ${article.id} should be served`);
    assert.match(await response.text(), new RegExp(`<title>${article.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`));
  }

  const fallback = await fetch(`${origin}/404.html`);
  assert.equal(fallback.status, 200, "S3 website error-document fallback should be present");
  assert.match(await fallback.text(), /id="portfolio"/);
  const sitemap = await fetch(`${origin}/sitemap.xml`);
  assert.equal(sitemap.status, 200);
  assert.match(await sitemap.text(), /<urlset/);

  const files = await readdir(dist);
  assert.ok(files.includes("assets"));
});

test("the site and static articles use matching, available favicon assets", async () => {
  const index = await readFile(path.join(dist, "index.html"), "utf8");
  assert.match(index, /rel="icon" type="image\/svg\+xml" href="\/images\/favicon.svg"/);
  const svg = await readFile(path.join(dist, "images/favicon.svg"), "utf8");
  assert.match(svg, /#111311/);
  assert.match(svg, /#b7ff3c/);
  for (const [file, size] of [
    ["favicon-16x16.png", 16], ["favicon-32x32.png", 32],
    ["apple-touch-icon.png", 180], ["android-chrome-192x192.png", 192],
    ["android-chrome-512x512.png", 512],
  ]) {
    const png = await readFile(path.join(dist, "images", file));
    assert.equal(png.subarray(1, 4).toString(), "PNG");
    assert.equal(png.readUInt32BE(16), size);
    assert.equal(png.readUInt32BE(20), size);
    const response = await fetch(`${origin}/images/${file}?v=2`);
    assert.equal(response.status, 200);
  }
  const ico = await readFile(path.join(dist, "images/favicon.ico"));
  assert.equal(ico.readUInt16LE(2), 1);
  assert.equal(ico.readUInt16LE(4), 3);
  const manifest = JSON.parse(await readFile(path.join(dist, "site.webmanifest"), "utf8"));
  for (const icon of manifest.icons) {
    assert.equal((await fetch(`${origin}${icon.src}`)).status, 200);
  }
  const articles = JSON.parse(await readFile(path.join(root, "src/generated/blogs.json"), "utf8"));
  for (const article of articles) {
    const html = await readFile(path.join(dist, "blog", article.id, "index.html"), "utf8");
    assert.match(html, /href="\/images\/favicon.svg"/);
  }
});

test("the production build does not publish the removed personal email address", async () => {
  const removedAddress = ["caasilemroh", "gmail.com"].join("@");
  for (const entry of await readdir(dist, { recursive: true, withFileTypes: true })) {
    if (!entry.isFile()) continue;
    const file = path.join(entry.parentPath, entry.name);
    const contents = await readFile(file);
    assert.ok(!contents.toString("utf8").toLowerCase().includes(removedAddress), `${path.relative(dist, file)} must not contain the personal email`);
  }
});
