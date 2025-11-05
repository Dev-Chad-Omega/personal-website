# Dave Patel – Personal Website

A Next.js 16 site inspired by modern newsrooms and press kits. It highlights my AI + data storytelling work, interactive dashboards, and media-friendly collateral.

## Features

- Animated hero headline with RAG/IoT storytelling focus
- Split-flap style rotating highlights and glassmorphism cards
- Project grid with imagery, tech badges, and narrative bullet points
- Responsive layout with prefers-reduced-motion support
- Static export ready for GitHub Pages or any static host

## Tech Stack

- Next.js 16 (App Router)
- React 19 + Framer Motion
- Tailwind CSS with custom design tokens (`src/styles/tokens.css`)
- GSAP parallax helpers

## Local Development

```bash
npm install          # run inside the my-site directory the first time
npm run dev          # start the dev server at http://localhost:3000
```

To run linting:

```bash
npm run lint
```

## Build & Preview

The project exports to static HTML. Build output lands in `my-site/out`.

```bash
npm run build        # generate the static site into out/
npm run preview      # serve the out/ folder locally for a spot check
```

## Deployment (GitHub Pages)

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and publishes the site to GitHub Pages whenever commits land on `main`.

1. Enable GitHub Pages in **Settings ? Pages** and choose "GitHub Actions" as the source.
2. Ensure the repository name matches the Pages path you want. The workflow passes the repo name to Next.js so assets resolve correctly under `/<repo>`.
3. Push to `main`. The workflow will build, upload the `out/` artifact, and deploy to Pages. Track progress in the Actions tab.

> Tip: If you use a custom domain, add a `CNAME` file inside `public/` and update the domain in repository settings.

## Updating Content

- **Hero text & rotating highlights:** `src/components/HeroContent.tsx`
- **Projects, experience, education data:** `src/app/page.tsx`
- **Theme colors & gradient:** tweak CSS variables in `src/styles/tokens.css`
- **Media assets:** add to `public/` and reference them via `/asset-name.ext`

## Resume & Media Assets

The "View resume" button links to `public/Dev Patel Resume fall 2025.pdf`. Replace that file with the latest PDF while keeping the filename (or update the link in `HeroContent.tsx`). Project images live in `public/` as well (e.g., `OpenCast.png`).

## License

This repository is personal. Feel free to reference structure or styling, but please do not publish the site wholesale as your own.
