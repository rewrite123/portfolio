import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const root = path.resolve(import.meta.dirname, "../..");
const blogDirectory = path.join(root, "blog");
const generatedDirectory = path.join(root, "frontend/src/generated");
const outputFile = path.join(generatedDirectory, "blogs.json");

async function findMarkdown(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return findMarkdown(fullPath);
    return entry.isFile() && entry.name.endsWith(".md") ? [fullPath] : [];
  }));
  return files.flat();
}

function slugify(value) {
  return value
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
}

const files = (await findMarkdown(blogDirectory)).sort();
const articles = [];
const ids = new Set();

for (const file of files) {
  const source = await readFile(file, "utf8");
  const { data, content } = matter(source);
  const relativePath = path.relative(blogDirectory, file).split(path.sep).join("/");
  const title = typeof data.title === "string" ? data.title.trim() : "";
  const description = typeof data.description === "string" ? data.description.trim() : "";
  const date = data.date instanceof Date
    ? data.date.toISOString().slice(0, 10)
    : typeof data.date === "string" ? data.date.trim() : "";

  if (!title || !description || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !content.trim()) {
    throw new Error(`Blog post "${relativePath}" must have title, description, ISO date, and markdown content.`);
  }

  const shortCode = createHash("sha256").update(relativePath).digest("hex").slice(0, 6);
  const id = `${slugify(title)}-${shortCode}`;
  if (ids.has(id)) throw new Error(`Duplicate generated blog shortcode "${id}".`);
  ids.add(id);
  articles.push({ id, title, description, date, content: content.trim(), source: relativePath });
}

await mkdir(generatedDirectory, { recursive: true });
await writeFile(outputFile, `${JSON.stringify(articles, null, 2)}\n`);
console.log(`Prepared ${articles.length} markdown article(s).`);
