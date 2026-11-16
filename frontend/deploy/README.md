# S3 deployment

The production build is written to `dist/`. It contains the SPA entry point, a `404.html` SPA fallback, and a static HTML page for each Markdown article. The blog pages include canonical URLs, Open Graph/Twitter metadata, and BlogPosting structured data so crawlers and link previews do not depend on client-side JavaScript.

## Current production setup

The production bucket is `isaachormel.com` in `us-east-2`, with `index.html` as its index document and `404.html` as its S3 website error document. The bucket has a public object-read policy using the current IAM policy version (`2012-10-17`).

The `isaachormel.com` CloudFront distribution uses the S3 website endpoint as its origin and maps origin `403`/`404` responses to `/index.html` with a `200` response, allowing React Router routes to render. Generated blog URLs are real files and return successfully without that fallback. Invalidate the CloudFront distribution after publishing a new build.

HTML entry points are uploaded with revalidation headers; fingerprinted files in `assets/` use a one-year immutable cache lifetime. The display and monospace fonts are self-hosted from OFL-licensed Fontsource packages, and the hero illustration is preloaded.

The site build has been published, the CloudFront SPA fallback is active, and its cache invalidation has completed. Existing bucket objects were preserved; only the obsolete `Resume.pdf` object was removed.

## Policy template

`s3-bucket-policy.template.json` is only a starting point for a **public S3 website endpoint**. Replace `REPLACE_WITH_BUCKET_NAME` with the actual bucket name before applying it. Direct S3 website hosting requires public object reads and the relevant S3 Block Public Access settings to permit that access. Do not apply this public-read policy to an existing bucket without confirming that public website hosting is intended.

For a new deployment, prefer a private bucket served through CloudFront with Origin Access Control (OAC); use a CloudFront-scoped bucket policy instead of the public-read template. S3 website endpoints cannot use OAC.

Build and validate locally:

```sh
npm ci
npm test
npm run preview
```
