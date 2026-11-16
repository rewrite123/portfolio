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

The plumber and golfer SVGs in [`frontend/src/assets/scenes/`](./frontend/src/assets/scenes/) were generated with the Higgsfield CLI's Ideogram Vector model, flattened to grayscale, and separated into animation layers. [`ProjectScenes.tsx`](./frontend/src/components/ProjectScenes.tsx) drives their poses from scroll position: the plumber turns a wrench, and the golfer addresses the tee, winds up, strikes, and follows through as the ball takes off. Scrolling back reverses the sequence. Reduced-motion preferences show a still illustration.

The golfer's arms use a two-segment joint rig with fixed shoulder anchors and a shared hand position. The elbows bend without changing arm length, and the club rotates around the grip so it stays in the hands throughout the swing.

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