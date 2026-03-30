# AGENTS.md — Development Guide for trunc8.github.io

## Site Identity

This is the personal portfolio of **Siddharth Saha**, a Robotics & ML Engineer at Tesla working on Optimus. The site's core message: **"This person does cutting-edge ML for robotics."** Every design and content decision should reinforce this.

## Design Philosophy

### 1. Polished Minimal

The aesthetic is a **polished portfolio** — not raw engineering-minimal, not flashy over-designed. Think clean surfaces, intentional whitespace, and subtle visual refinements that signal care without drawing attention to themselves. The work is the star; the design supports it.

- Prefer whitespace over decoration
- Use borders and shadows sparingly — only to create hierarchy
- Every visual element should serve a purpose (communicate structure, guide the eye, or aid comprehension)

### 2. Subtle Motion

Interactivity is **restrained but present**. Smooth hover transitions, gentle fade-ins, and page transitions add polish. No scroll-jacking, no particle effects, no animation for animation's sake.

- Hover states on all interactive elements (links, cards, buttons)
- CSS transitions preferred over JS animations
- Respect `prefers-reduced-motion`
- Page loads should feel instant — no loading spinners or skeleton screens for static content

### 3. Show Everything, Highlight the Best

All 30+ projects and 16+ blog posts remain accessible, but **featured content is prominently surfaced**. The homepage curates the strongest work; listing pages show everything with filtering and grouping.

- Homepage: 3 featured projects, 3 recent articles, video showreel
- Projects page: filterable grid, featured items first
- Writing page: grouped by theme, most recent first within groups

### 4. Video-First for Robotics

The hero showreel is a defining feature. Robotics work is best demonstrated through video — static screenshots don't capture a robot navigating debris or a manipulator arm picking objects. Keep `lite-youtube-embed` for performance.

### 5. Content over Chrome

- Never add a feature that increases cognitive load without proportional value
- No comments system, no social share counters, no "like" buttons
- No cookie banners (privacy-respecting analytics only, no cookies)
- No newsletter popups or modals on page load

## Visual System

### Color Palette

Blue + slate. Professional, trustworthy, works in both light and dark mode.

- **Brand**: `#2563eb` (light) / `#60a5fa` (dark) — used for links, primary buttons, active states
- **Surface**: white (light) / slate-900 (dark) — page background
- **Surface Alt**: slate-50 (light) / slate-800 (dark) — cards, code blocks, alternate sections
- **Text**: slate-900 (light) / slate-100 (dark) — body text
- **Muted**: slate-500 (light) / slate-400 (dark) — secondary text, dates, metadata
- **Border**: slate-200 (light) / slate-700 (dark)

Do not introduce additional accent colors. The palette is intentionally limited.

### Typography

- **Primary font**: San Francisco Display → system font stack
- **Monospace**: system monospace (no custom mono font loaded)
- **Heading scale**: Use Tailwind's default scale (text-sm through text-5xl)
- **Body text**: `text-base` (16px) for readability, `prose-lg` for blog content

### Spacing

Use Tailwind's spacing scale consistently:
- Section padding: `py-12` on mobile, `py-16` or `py-20` on desktop
- Card gaps: `gap-6`
- Content max-width: `max-w-5xl` for grids, `max-w-3xl` for prose

### Dark Mode

- Toggled via `data-theme` attribute on `<html>`
- CSS custom properties switch all colors
- Inline script in `<head>` prevents FOUC
- `localStorage` persists preference, falls back to `prefers-color-scheme`
- Shiki provides dual-theme syntax highlighting (github-light / github-dark)

### Iconography

- Use a subtle robotics/tech icon as the site's visual mark (to be designed)
- Social icons: inline SVG in Footer component
- UI icons: inline SVG (no icon library dependency)

## Architecture

### Tech Stack

| Layer | Tool | Rationale |
|-------|------|-----------|
| Framework | Astro 5.x | Static-first, content collections, zero JS by default |
| Styling | Tailwind CSS 3.x | Utility-first, consistent with design tokens via CSS vars |
| Typography | @tailwindcss/typography | Prose styling for markdown content |
| Search | Pagefind | Static index, zero JS until opened, no server needed |
| Video | lite-youtube-embed | 100 Lighthouse vs raw iframes |
| Math | remark-math + rehype-mathjax | Build-time rendering, no client JS |
| Deploy | GitHub Actions → GitHub Pages | Free, automatic, no vendor lock-in |

### Content Model

- **Blog posts**: `src/content/blog/*.md` — Zod-validated frontmatter, grouped by `theme`
- **Projects**: `src/content/projects/*.md` — Zod-validated, filterable by `category`, sortable by `order`
- **Work/Education**: `src/data/*.ts` — TypeScript data files, sorted by `sortDate`
- **Static assets**: `public/` — images, fonts, resume PDF + LaTeX source

### URL Scheme

| Path | Content |
|------|---------|
| `/` | Homepage with hero, featured projects, recent articles |
| `/projects/` | Filterable project grid |
| `/projects/[slug]/` | Project detail page |
| `/writing/` | Articles grouped by theme |
| `/writing/[slug]/` | Blog post |
| `/about` | Bio, timeline, resume download |
| `/resume/Siddharth_Saha_Resume.pdf` | Direct PDF link |
| `/rss.xml` | RSS feed |

## Component Conventions

### Naming

- Components: PascalCase (e.g., `ProjectCard.astro`)
- Data files: camelCase (e.g., `navigation.ts`)
- Content files: kebab-case (e.g., `hil-serl-lerobot.md`)
- CSS files: kebab-case (e.g., `global.css`)

### Structure

Each component should:
1. Define a TypeScript `Props` interface in the frontmatter
2. Accept data via props, not fetch it internally (exception: `FeaturedProjects` and `RecentArticles` which query collections)
3. Use Tailwind classes, not custom CSS (exception: third-party overrides like MathJax, lite-youtube)
4. Include `is:inline` only when Vite bundling would break the script (e.g., Pagefind dynamic imports)

### Client-Side JavaScript

Minimize client JS. The site should work with JS disabled except for:
- Theme toggle
- Mobile menu
- Search dialog (Pagefind)
- Video showreel thumbnail switching
- Project category filtering

All client scripts must re-initialize on `astro:after-swap` for view transition compatibility.

## Content Guidelines

### Project Entries

Each project in `src/content/projects/` must have:
- Clear, specific title (not generic like "Robot Project")
- 1-2 sentence description that states what was built and the key result
- Accurate `category` from: Robotics, CV, Motion Planning, ML, Software
- Relevant `tags` array
- `image` path pointing to an existing file in `public/img/project/`
- `videoId` extracted from YouTube URL if a demo video exists
- Date format: `Mon 'YY` or `Mon 'YY - Mon 'YY`

### Blog Posts

Each post in `src/content/blog/` must have:
- `theme` from: "Motion Planning & Navigation", "Legged Locomotion", "CV & SLAM", "Paper Reviews", "Programming & Systems"
- No Liquid/Jekyll syntax (`{{ }}`, `{% %}`)
- Image paths relative to `/img/` (not `/assets/img/`)
- `mathjax: true` only if the post contains LaTeX math
- No `draft: true` unless intentionally hiding a post

### Resume

- Source: `public/resume/Siddharth_Saha_Resume.tex`
- Output: `public/resume/Siddharth_Saha_Resume.pdf`
- Compile with: `pdflatex Siddharth_Saha_Resume.tex` (requires BasicTeX or full TeX Live)
- Must fit on 1 page
- Do not commit `.aux`, `.log`, `.out` build artifacts

## Known Issues & Technical Debt

### High Priority
All resolved:
1. ~~**LaTeX build artifacts committed**~~: Fixed — `.aux`, `.log`, `.out` added to `.gitignore`
2. ~~**Image optimization**~~: Fixed — profile pics resized to display size (87KB→29KB, 284KB→96KB)
3. ~~**No font preloading**~~: Fixed — added `rel="preload"` for San Francisco Display woff
4. ~~**HeroShowreel JS builds HTML via string concatenation**~~: Fixed — rewritten to use DOM API (`createElement`, `replaceChildren`)
5. ~~**Button styling inconsistent**~~: Fixed — standardized tag padding to `py-0.5` across ProjectCard and ProjectLayout

### Medium Priority
All resolved:
6. ~~**Filter state not persisted**~~: Fixed — filter state persisted via URL hash (`/projects/#robotics`)
7. ~~**No prev/next navigation on blog posts**~~: Fixed — older/newer links at bottom of each post
8. ~~**Theme strings hardcoded in writing/index.astro**~~: Fixed — extracted to `src/data/themes.ts`
9. ~~**`projectentry` macro in .tex duplicates `entry` logic**~~: Fixed — unified into `\entry` with conditional subtitle via `\ifx`
10. ~~**No structured data (JSON-LD)**~~: Fixed — Person schema with employer, alumni, and social links in BaseHead
11. ~~**No `rel="preconnect"` for YouTube domains**~~: Fixed — preconnect to `i.ytimg.com` in BaseHead

### Low Priority
All resolved:
12. ~~**Monospace font declared but never loaded**~~: Fixed — replaced JetBrains Mono with system monospace stack
13. ~~**`@/*` path alias unused**~~: Fixed — removed from tsconfig.json
14. ~~**Legacy Jekyll references in .gitignore**~~: Fixed — removed `_site`, `.sass-cache`, etc.
15. ~~**No reading time on blog posts**~~: Fixed — added reading time estimate (words/200) to PostLayout header
16. ~~**No "copy code" button on code blocks**~~: Fixed — CopyCode component with hover-reveal button on all `<pre>` blocks
17. ~~**Search button missing from mobile header**~~: Fixed — added search button to mobile nav, refactored SearchDialog to use class-based selectors
