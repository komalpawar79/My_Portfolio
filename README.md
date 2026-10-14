# Komal Pawar — Creative Developer Portfolio

A responsive developer portfolio website designed for **Komal Pawar — Frontend & MERN Stack Developer**, inspired by modern editorial aesthetics and creative engineering portfolios.

## 🚀 Quick Start

```bash
# 1. Install dependencies (already installed)
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🎨 Visual Identity & Design System

- **Palette:**
  - Charcoal: `#171717` (Deep dark contrast, typography, and closing sections)
  - Warm Off-White: `#F5F2EA` (Primary editorial background)
  - Electric Lime: `#C7FF4A` (Selected highlights, active accents, CTAs)
  - Muted Gray: `#858585` (Technical metadata, subtext, captions)
  - Light Divider: `#D9D5CC` (Thin editorial hairline borders)
  - Secondary Surface: `#EAE6DC` (Section contrast)
- **Typography:** Space Grotesk (Expressive editorial headlines) & Inter (Readable body text).
- **Motion:** Powered by `motion/react` with graceful fallbacks and `prefers-reduced-motion` compliance.

---

## 📁 How to Update Your Information

All demo information is centralized so you can replace it in minutes:

1. **Personal Info & Socials:** [`src/data/siteConfig.js`](file:///c:/Users/Komal/Downloads/myportfolio/src/data/siteConfig.js)
   - Change your email (`email`), GitHub (`github`), LinkedIn (`linkedin`), location, and availability text.
2. **Projects & Case Studies:** [`src/data/projects.js`](file:///c:/Users/Komal/Downloads/myportfolio/src/data/projects.js)
   - Edit, add, or customize details for **Clinix**, **ResearchFlow**, **CampusConnect**, and **QuickBite**.
   - Set `liveUrl` and `githubUrl` when you deploy real repositories or live demos.
3. **Toolkit & Skills:** [`src/data/skills.js`](file:///c:/Users/Komal/Downloads/myportfolio/src/data/skills.js)
   - Organized into 4 categories: Frontend, Backend, Database & Data, Tools & Workflow.
4. **Learning Journey / Milestones:** [`src/data/journey.js`](file:///c:/Users/Komal/Downloads/myportfolio/src/data/journey.js)
   - Replace demo milestone entries with your education, internships, or achievements.
5. **Resume:** Replace [`public/resume.pdf`](file:///c:/Users/Komal/Downloads/myportfolio/public/resume.pdf) with your real PDF resume.

---

## 🧭 Routes & Architecture

- `/` — Homepage (Hero, Marquee, Editorial Introduction, Selected Projects gallery, Skills toolkit, Process, About, Journey, Contact, Footer)
- `/work/:slug` — Reusable dynamic case study pages:
  - `/work/clinix`
  - `/work/researchflow`
  - `/work/campusconnect`
  - `/work/quickbite`
- `*` — Custom 404 Not Found page

