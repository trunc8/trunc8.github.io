# trunc8.github.io

Personal portfolio and technical blog of **Siddharth Saha** — Robotics & ML Engineer at Tesla, building intelligent robots with Optimus.

**Live site**: [trunc8.github.io](https://trunc8.github.io)

## Tech Stack

- [Astro 5](https://astro.build) — static site generator
- [Tailwind CSS 3](https://tailwindcss.com) — utility-first styling
- [Pagefind](https://pagefind.app) — static search
- [lite-youtube-embed](https://github.com/nicoritschel/lite-youtube-embed) — lazy-loaded YouTube
- [remark-math](https://github.com/remarkjs/remark-math) + [rehype-mathjax](https://github.com/remarkjs/rehype-mathjax) — build-time math rendering

## Development

```sh
npm install
npm run dev        # Start dev server at localhost:4321
npm run build      # Build site + Pagefind index
npm run preview    # Preview production build
```

## Project Structure

```
src/
├── components/    # Astro components (Header, Footer, ProjectCard, etc.)
├── content/
│   ├── blog/      # 16 technical blog posts (markdown)
│   └── projects/  # 30 project entries (markdown)
├── data/          # TypeScript data files (work, education, social, nav)
├── layouts/       # BaseLayout, PostLayout, ProjectLayout
├── pages/         # Route pages (index, projects, writing, about, 404)
├── styles/        # global.css (theme vars), prose.css (blog typography)
└── utils/         # Helper functions

public/
├── fonts/         # San Francisco Display
├── img/           # All images (content, project, work, education)
└── resume/        # Resume PDF + LaTeX source
```

## Content

### Adding a project

Create `src/content/projects/my-project.md`:

```markdown
---
title: "Project Title"
description: "One-line description of what was built and the key result"
image: /img/project/my-project.png
imageAlt: "Description of the image"
date: "Mon 'YY - Mon 'YY"
category: Robotics
tags: [Robotics, ML]
featured: false
order: 99
videoId: "dQw4w9WgXcQ"
repo: "https://github.com/..."
demo: "https://youtu.be/..."
---

Detailed project description in markdown.
```

### Adding a blog post

Create `src/content/blog/my-post.md`:

```markdown
---
title: "Post Title"
pubDate: 2026-01-15
description: "Brief description for SEO and listing"
theme: "Motion Planning & Navigation"
tags: [planning, robotics]
mathjax: false
draft: false
---

Post content in markdown.
```

Valid themes: `Motion Planning & Navigation`, `Legged Locomotion`, `CV & SLAM`, `Paper Reviews`, `Programming & Systems`

### Updating the resume

Edit `public/resume/Siddharth_Saha_Resume.tex`, then compile:

```sh
cd public/resume
pdflatex Siddharth_Saha_Resume.tex
```

Requires BasicTeX (`brew install --cask basictex`) or full TeX Live.

## Deployment

Pushes to `master` trigger GitHub Actions (`.github/workflows/deploy.yml`) which builds the site and deploys to GitHub Pages.

## Design Philosophy

See [AGENTS.md](./AGENTS.md) for the full design philosophy, visual system, component conventions, content guidelines, and known issues.

## Branches

- **master** — live site (Astro)
- **jekyll-backup** — archived Jekyll site (pre-migration)
