# Memphis Portfolio — SvelteKit + Svelte 5

Academic personal profile page built with **SvelteKit**, **Svelte 5**, **TypeScript**, **Tailwind CSS**, and **shadcn-svelte** style components. Designed for **Vercel** deployment.

Layout inspired by [leonz.work](https://www.leonz.work/).

---

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Deploy to Vercel

```bash
npm install -g vercel   # if not already installed
vercel                  # follow prompts
```

Or connect your GitHub repo at [vercel.com](https://vercel.com/new).

---

## Project Structure

```
src/
├── app.css                         # Global styles (Tailwind)
├── app.html                        # HTML shell (fonts loaded here)
├── lib/
│   ├── components/
│   │   ├── ui/                     # shadcn-style components (Button, Badge, Separator)
│   │   ├── Navbar.svelte           # Top navigation bar
│   │   ├── Footer.svelte           # Footer
│   │   ├── Hero.svelte             # Home page hero section
│   │   ├── ProjectCard.svelte      # Featured project card
│   │   ├── FeaturedProjects.svelte # Featured projects grid
│   │   └── Playground.svelte       # Side projects grid with filter tabs
│   ├── data/
│   │   ├── site.ts                 # ⭐ Your name, bio, nav links, socials
│   │   ├── projects.ts             # ⭐ Your featured + playground projects
│   │   └── cv.ts                   # ⭐ Your education, experience, skills
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces
│   └── utils.ts                    # cn() utility (shadcn pattern)
├── routes/
│   ├── +layout.svelte              # Root layout (Navbar + Footer)
│   ├── +page.svelte                # Home page (Route 1)
│   ├── about/+page.svelte          # About page (Route 2)
│   ├── cv/+page.svelte             # CV page (Route 3)
│   └── projects/[slug]/            # Project detail (Route 4 — dynamic)
│       ├── +page.server.ts
│       └── +page.svelte
static/
├── images/
│   ├── avatar.png                  # ← Put your photo here
│   ├── projects/                   # ← Put project thumbnails here
│   └── playground/                 # ← Put side project thumbnails here
└── favicon.png
```

---

## How to Customize

### 1. Your Info (`src/lib/data/site.ts`)
Edit `personalInfo` with your name, title, email, bio, avatar path, and social links.
Edit `navLinks` to change navigation items.

### 2. Your Projects (`src/lib/data/projects.ts`)
- **`projects`** array: Featured projects shown prominently on home page
- **`playgroundItems`** array: Side projects shown in the grid with filter tabs
- Add images to `static/images/projects/` and `static/images/playground/`

### 3. Your CV (`src/lib/data/cv.ts`)
Edit `education`, `experience`, and `skills` arrays with your info.
Optionally put a PDF at `static/cv/Memphis_CV.pdf` for download.

### 4. Your Images
- Avatar: `static/images/avatar.png`
- Project thumbnails: `static/images/projects/[name].png`
- Playground thumbs: `static/images/playground/[name].png`

### 5. Styling
- Fonts: Edit in `tailwind.config.js` and `app.html`
- Colors: Edit `tailwind.config.js` → `theme.extend.colors`
- Global CSS: `src/app.css`

---

## Routes (4 total, meets requirement)

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/routes/+page.svelte` | Home — hero, featured projects, playground |
| `/about` | `src/routes/about/+page.svelte` | About me page |
| `/cv` | `src/routes/cv/+page.svelte` | CV — education, experience, skills |
| `/projects/[slug]` | `src/routes/projects/[slug]/+page.svelte` | Dynamic project detail pages |

---

## Tech Stack (meets all requirements)

- ✅ **Svelte 5** with `$state`, `$derived`, `$props`, Snippets
- ✅ **SvelteKit** with file-based routing
- ✅ **Vercel** adapter pre-configured
- ✅ **shadcn-style components** (Button, Badge, Separator)
- ✅ **TypeScript** for all data and component props
- ✅ **Tailwind CSS** for styling
- ✅ **4+ routes** (home, about, cv, projects/[slug])
