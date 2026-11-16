# Isaac Hormel — Portfolio

The portfolio frontend is a React 19, Material UI, and Vite application.

## Local development

```sh
cd frontend
npm ci
npm run dev
```

## Build and test

```sh
cd frontend
npm test
npm run preview
```

`npm test` type-checks and builds the site, generates static HTML for Markdown blog posts, then starts Vite's production preview and verifies SPA routes and article metadata.

## Landing-page illustrations

The plumber SVG in [`frontend/src/assets/scenes/`](./frontend/src/assets/scenes/) was generated with the Higgsfield CLI's Ideogram Vector model, flattened to grayscale, and separated into animation layers. [`ProjectScenes.tsx`](./frontend/src/components/ProjectScenes.tsx) drives its wrench from scroll position; scrolling back reverses the motion.

The golfer was animated with Higgsfield's Kling 3.0 image-to-video model using the generated illustration as a reference, then encoded as a 640-by-480 grayscale MP4 with independently seekable frames. Scroll position directly controls the video time, email position, and plumber's wrench: scrolling down advances each scene and scrolling up reverses it. Nothing autoplays. Reduced-motion preferences show still illustrations and the golfer's PNG poster, including when that preference changes while the page is open.

The golfer spans 90% of the viewport's height in scroll distance (versus 65% for the other scenes), keeping the swing slower on both desktop and mobile.

## Blog posts

Write Markdown files in [`blog/`](./blog/) with front matter:

```yaml
---
title: "A useful article title"
date: "2026-11-16"
description: "A concise summary for search results and social previews."
---
```

During the build, each article receives a stable title slug plus a short source-path code. Its HTML is emitted under `frontend/dist/blog/<shortcode>/index.html`, with canonical, Open Graph, Twitter, and structured-data metadata.

See [`frontend/deploy/README.md`](./frontend/deploy/README.md) for S3 hosting notes and the bucket-policy template.

## Docker

From the repository root, run `docker compose up --build`; the production site is available at `http://localhost:3000`.