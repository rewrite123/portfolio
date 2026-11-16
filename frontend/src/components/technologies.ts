export type Technology = {
  name: string;
  category: string;
  mark: string;
  description: string;
  aliases?: string[];
};

type Entry = [name: string, mark: string, description: string, aliases?: string[]];

const groups: [category: string, entries: Entry[]][] = [
  ["Languages", [
    ["JavaScript", "JS", "JavaScript for browser interfaces, services, and integrations."],
    ["TypeScript", "TS", "Typed application code for interfaces, APIs, and shared models."],
    ["C#", "C#", "A language for applications and services in the .NET ecosystem."],
    ["Java", "JAVA", "A language for portable applications and backend services."],
    ["Python", "PY", "A language for automation, applications, and data workflows."],
    ["Rust", "RS", "Systems programming and experimentation with web services and IoT."],
  ]],
  ["Frontend & mobile", [
    ["HTML", "HTML", "Semantic, accessible page structure and standards-based markup."],
    ["CSS", "CSS", "Responsive layouts, design systems, and interactive experiences."],
    ["SCSS / Sass", "SASS", "Maintainable stylesheets with Sass and SCSS.", ["scss", "sass"]],
    ["React", "RE", "Component-driven interfaces and customer-facing web applications."],
    ["React Native", "RN", "Cross-platform mobile interfaces built with React Native."],
    ["Angular", "NG", "Frontend development for applications including inventory software."],
    ["Vue", "VUE", "A component-based framework for interactive web interfaces."],
    ["Yew", "YEW", "Rust-based frontend experiments and WebAssembly interfaces."],
    ["Handlebars", "HBS", "Templates for rendering dynamic HTML."],
    ["Material UI", "MUI", "React components, theming, and accessible interface building blocks.", ["materialui", "mui"]],
    ["Bootstrap", "BS", "Responsive UI patterns and interface components."],
    ["Tailwind CSS", "TW", "Utility-based styling for custom user interfaces.", ["tailwind"]],
    ["Electron", "EL", "Desktop applications built with web technologies."],
    ["Chart.js", "CHART", "Interactive charts for exploring and presenting data.", ["chartjs"]],
    ["WordPress", "WP", "Content management for websites and publishing."],
  ]],
  ["Graphics & compute", [
    ["WebGL", "WEBGL", "Hardware-accelerated graphics in the browser."],
    ["GLSL", "GLSL", "Shader programming for graphics rendering."],
    ["Three.js", "THREE", "A JavaScript library for 3D graphics on the web.", ["threejs"]],
    ["CUDA", "CUDA", "GPU-accelerated computing with NVIDIA hardware."],
  ]],
  ["Backend & APIs", [
    ["Node.js", "NODE", "Server-side JavaScript for APIs, integrations, and background work.", ["nodejs"]],
    [".NET", ".NET", "A platform for building applications and services.", ["dotnet"]],
    ["ASP.NET", "ASP", "Web applications and APIs in the .NET ecosystem.", ["asp"]],
    ["Express.js", "EXP", "HTTP APIs and integrations built with Express and Node.js.", ["express", "expressjs"]],
    ["TypeORM", "ORM", "Object-relational mapping for TypeScript and JavaScript applications."],
    ["Swagger", "API", "API documentation and exploration using OpenAPI.", ["openapi"]],
    ["Postman", "POST", "Tools for exploring and testing APIs."],
    ["Google Maps", "MAP", "Maps integrations and location-aware experiences."],
    ["Apify", "APFY", "Web data extraction and automation tools."],
    ["Puppeteer", "PUP", "Browser automation for web workflows and testing."],
    ["XML", "XML", "A structured markup format for exchanging and representing data."],
    ["JSON", "JSON", "A lightweight format for application data and APIs."],
    ["GUID", "GUID", "Globally unique identifiers for records and integrations."],
    ["UUID v4", "UUID", "Randomly generated universally unique identifiers.", ["uuid v4", "uuidv4", "uuid version 4"]],
  ]],
  ["Databases & search", [
    ["PostgreSQL", "PG", "Relational data modeling and SQL-backed application services.", ["postgres"]],
    ["MySQL", "MYSQL", "Relational database work for production systems."],
    ["SQL Server", "SQL", "Microsoft's relational database platform.", ["mssql"]],
    ["MongoDB", "MONGO", "Document-oriented data storage for applications."],
    ["Elasticsearch", "ES", "Search and indexing for fast data discovery.", ["elastic search"]],
    ["Redis", "REDIS", "In-memory data storage, caching, and messaging."],
    ["Valkey", "VAL", "In-memory data storage and caching."],
  ]],
  ["Cloud & infrastructure", [
    ["AWS", "AWS", "Cloud services, application hosting, and deployment workflows.", ["amazon web services"]],
    ["AWS S3", "S3", "Object storage and static website hosting.", ["amazon s3"]],
    ["AWS EC2", "EC2", "Cloud compute instances for applications and services.", ["amazon ec2"]],
    ["AWS CloudFront", "CDN", "Content delivery and caching at the edge.", ["cloudfront"]],
    ["DigitalOcean", "DO", "Cloud infrastructure and application hosting.", ["digital ocean"]],
    ["Heroku", "HK", "Application hosting and managed deployment workflows."],
    ["Docker", "DOCK", "Containerized development and deployment environments."],
    ["Kubernetes", "K8S", "Orchestration for containerized applications.", ["k8s"]],
    ["Nginx", "NGX", "Web serving, reverse proxying, and application delivery.", ["nginx"]],
    ["Terraform", "TF", "Infrastructure defined and managed as code."],
    ["Proxmox", "PMX", "Virtualization and infrastructure management."],
    ["iDRAC", "IDRAC", "Remote management for Dell servers.", ["idrac"]],
    ["Linux", "LINUX", "Linux-based development and server administration."],
    ["Ubuntu", "UB", "A Linux distribution for development and servers."],
    ["NixOS", "NIX", "A Linux distribution with declarative system configuration."],
    ["i3", "I3", "A tiling window manager for Linux."],
    ["SSH", "SSH", "Secure remote access and administration over encrypted connections."],
    ["Postfix", "MAIL", "Mail transfer and delivery for server environments."],
  ]],
  ["Security & analysis", [
    ["nftables", "NFT", "Firewall rules and packet filtering on Linux."],
    ["fail2ban", "F2B", "Log monitoring and automated blocking of suspicious activity."],
    ["Nmap", "NMAP", "Network discovery and service scanning."],
    ["Hashcat", "HASH", "Password recovery and security auditing."],
    ["GDB", "GDB", "Debugging and inspecting running programs."],
    ["Ghidra", "GHID", "Software reverse engineering and binary analysis."],
    ["JWT", "JWT", "A compact token format for exchanging claims between systems.", ["json web token"]],
    ["AES-256", "AES", "Symmetric encryption using a 256-bit key.", ["aes256"]],
    ["SHA-2", "SHA2", "A family of cryptographic hash functions.", ["sha2"]],
    ["SHA-1", "SHA1", "A legacy cryptographic hash function with known collision weaknesses.", ["sha1"]],
  ]],
  ["Build & quality", [
    ["Vite", "VITE", "A development server and production bundler for frontend applications."],
    ["Webpack", "WP", "Module bundling for web applications."],
    ["Rollup", "ROLL", "JavaScript module bundling for applications and libraries."],
    ["Grunt", "GRNT", "Task automation for build workflows."],
    ["Gulp", "GULP", "Streaming build and task automation."],
    ["ESLint", "LINT", "Automated checks for JavaScript and TypeScript code quality."],
    ["Prettier", "FMT", "Automated code formatting."],
    ["Husky", "HOOK", "Git hooks for automated project checks."],
    ["Jest", "JEST", "JavaScript and TypeScript testing."],
    ["Jasmine", "JASM", "Behavior-driven JavaScript testing."],
    ["Playwright", "PW", "Browser automation and end-to-end testing."],
    ["grep", "GREP", "Command-line text searching and filtering."],
    ["Vim", "VIM", "A keyboard-oriented text editor for development and administration."],
  ]],
  ["AI & automation", [
    ["Claude Code", "CC", "An AI coding assistant for software development."],
    ["ChatGPT", "GPT", "An AI assistant for reasoning, writing, and development.", ["chat gpt"]],
    ["OpenRouter", "OR", "A gateway for accessing AI models.", ["open router"]],
    ["OpenClaw", "CLAW", "An AI assistant and automation platform.", ["open claw"]],
    ["Ollama", "OLL", "Running and managing AI models locally."],
    ["vLLM", "VLLM", "Serving and inference for large language models."],
    ["Higgsfield", "HF", "AI-powered visual content creation."],
    ["Tesseract", "OCR", "Optical character recognition for extracting text from images."],
  ]],
  ["Collaboration & process", [
    ["Git", "GIT", "Version control for tracking and collaborating on code."],
    ["GitHub", "GH", "Repository hosting, code review, and collaborative development."],
    ["GitHub Actions", "GHA", "Automated workflows for builds, tests, and deployments.", ["github actions"]],
    ["GitLab", "GL", "Repository hosting and collaborative development workflows."],
    ["Azure DevOps", "ADO", "Tools for planning, repositories, and delivery pipelines.", ["azure devops"]],
    ["Slack", "SL", "Team communication and collaboration."],
    ["Microsoft Teams", "TEAM", "Team communication, meetings, and collaboration.", ["teams"]],
    ["Agile methodology", "AG", "Iterative planning and delivery informed by feedback.", ["agile"]],
    ["Scrum", "SCRUM", "Iterative team planning, collaboration, and delivery practices.", ["scrum tactics", "scrum tachtics"]],
  ]],
];

export const technologies: Technology[] = groups.flatMap(([category, entries]) =>
  entries.map(([name, mark, description, aliases]) => ({ name, category, mark, description, aliases })),
);

export function searchTechnologies(query: string): Technology[] {
  const search = query.trim().toLowerCase();
  return technologies.filter(({ name, category, aliases = [] }) =>
    [name, category, ...aliases].some((value) => value.toLowerCase().includes(search)),
  );
}
