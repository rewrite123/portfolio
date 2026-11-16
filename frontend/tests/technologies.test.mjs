import assert from "node:assert/strict";
import { test } from "node:test";
import { searchTechnologies, technologies } from "../src/components/technologies.ts";

test("the grouped toolkit includes the requested and previously listed technologies", () => {
  const expected = [
    "Node.js", "TypeScript", "C#", ".NET", "ASP.NET", "React", "React Native", "Angular", "Vue",
    "Handlebars", "PostgreSQL", "MySQL", "SQL Server", "HTML", "CSS", "SCSS / Sass",
    "Material UI", "Bootstrap", "Git", "GitHub Actions", "Vite", "Webpack", "Grunt", "Rust",
    "Yew", "Kubernetes", "AWS S3", "AWS EC2", "AWS CloudFront", "Docker", "Nginx", "Java",
    "Ubuntu", "Linux", "Google Maps", "Chart.js", "Express.js", "TypeORM", "Elasticsearch",
    "Redis", "Valkey", "Claude Code", "ChatGPT", "OpenRouter", "Apify", "OpenClaw", "Ollama",
    "Tailwind CSS", "Electron", "Gulp", "Rollup", "Terraform", "DigitalOcean", "Proxmox",
    "iDRAC", "MongoDB", "Puppeteer", "Jest", "Husky", "Playwright", "Jasmine", "Prettier",
    "Swagger", "Postman", "Azure DevOps", "GitLab", "Slack", "Microsoft Teams",
    "Agile methodology", "Scrum", "Python", "vLLM", "Higgsfield",
    "JavaScript", "AWS", "Heroku", "GitHub", "ESLint",
    "nftables", "GDB", "Ghidra", "fail2ban", "WordPress", "SSH", "grep", "Vim", "CUDA",
    "JWT", "XML", "JSON", "Postfix", "Nmap", "Hashcat", "AES-256", "SHA-2", "SHA-1",
    "GUID", "UUID v4", "i3", "NixOS", "WebGL", "GLSL", "Three.js", "Tesseract",
  ];
  const names = technologies.map(({ name }) => name);
  assert.equal(new Set(names).size, names.length, "technology names should be unique");
  for (const name of expected) assert.ok(names.includes(name), `${name} should be included`);
  assert.ok(technologies.every(({ category, mark, description }) => category && mark && description));

  const completed = new Set();
  let previous;
  for (const { category } of technologies) {
    if (category !== previous) {
      assert.ok(!completed.has(category), `${category} should appear as one contiguous group`);
      if (previous) completed.add(previous);
      previous = category;
    }
  }
});

test("search finds names, categories, aliases, and each demo term", () => {
  for (const [query, name] of [
    ["nodejs", "Node.js"], ["postgres", "PostgreSQL"], ["materialui", "Material UI"],
    ["chartjs", "Chart.js"], ["chat gpt", "ChatGPT"], ["open claw", "OpenClaw"],
    ["scrum tachtics", "Scrum"], ["teams", "Microsoft Teams"], ["database", "Redis"],
    ["aes256", "AES-256"], ["sha2", "SHA-2"], ["sha1", "SHA-1"], ["uuid v4", "UUID v4"],
    ["threejs", "Three.js"], ["json web token", "JWT"], ["security", "nftables"],
  ]) {
    assert.ok(searchTechnologies(query).some((technology) => technology.name === name), `${query} should find ${name}`);
  }
  for (const term of ["backend", "database", "frontend", "cloud", "React"]) {
    assert.ok(searchTechnologies(term).length > 0, `${term} should have demo results`);
  }
  assert.equal(searchTechnologies("not a technology").length, 0);
  assert.equal(searchTechnologies("").length, technologies.length);
});
