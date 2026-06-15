# Project Brain 🧠

**Product Name:** SaymonPortfolio
**Description:** A professional, high-performance portfolio website for Saymon Hwaier, built with Next.js, React, and Tailwind CSS.

## 🌟 Core Goals
1.  **Visual Excellence:** "Wow" factors with animations and glassmorphism.
2.  **Performance:** 100/100 Lighthouse scores.
3.  **Dynamic Content:** Content managed via database (Supabase) in Phase 2.
4.  **SEO & Discovery:** Optimized for search engines and AI agents.

## 🛠️ Tech Stack
-   **Framework:** Next.js 16 (App Router)
-   **Styling:** Tailwind CSS, Framer Motion
-   **Language:** TypeScript
-   **Database:** Supabase (PostgreSQL) - *In Progress*
-   **Deployment:** Vercel

## 📂 Project Structure
-   `app/`: Next.js App Router pages (including `robots.ts` & `sitemap.ts`).
-   `components/`: Reusable UI components.
-   `data/`: Static JSON data (migrating to DB).
-   `public/`: Static assets (images, llms.txt).
-   `docs/`: Project documentation.
-   `supabase/`: Database schema and migrations.

## 📝 Current Status
-   **Phase 1 (Foundation)**: Complete. Hero, Projects (Bento), About (Timeline), SEO (Robots & Sitemap), Header/Footer (w/ Theme Toggle).
-   **Phase 2 (Dynamic Data)**: In Progress. Supabase client installed, schema defined.
-   **Next.js 16 Upgrade**: Complete. Upgraded to Next.js 16.2.6 and React 19, enabling Partial Prerendering (PPR) via `cacheComponents: true`. Refactored the admin layout structure to use dynamic Suspense-wrapped child components, resolving all prerender build blocks.
-   **Analytics Integration**: Complete. Unified tracking system using Google Tag Manager (for GA4) and the official `@microsoft/clarity` package. Event tracking implemented across all major components (Hero, Header, Footer, About, Skills, Projects, Contact).
-   **SEO Optimization**: Complete. Added dynamic `robots.txt` with environment-aware indexing rules and an automated `sitemap.xml`.
-   **Semantic Resume Page**: Complete. Created an interactive, animated visual resume page at `/resume` with direct PDF download integration, technical skill badges, responsive layout, and theme toggling.
-   **ESLint & Code Quality**: Complete. Resolved all project-wide ESLint warnings and errors natively (no disabled/silenced rules), achieving zero build or compile-time lint problems.
-   **React & Responsiveness Optimizations**: Complete. Applied React 19 performance patterns by hoisting static variables and animation variants outside component rendering flows (`ResumePage`, `HeroSection`, and `Header`). Conducted a full responsiveness check across viewports (320px to 2560px), refactoring the resume page's contact bar to a flexible wrapped layout to ensure perfect readable alignment on all devices.
-   **Tesla-Style Cinematic Redesign**: In Progress. Initiated a global UI overhaul to replace neon gradients and centered badge aesthetics with an architectural, minimal grid-based design (starting with the Hero Section and global layouts).
## 📜 Rules
1. Never change the rules yourself, only i can change them
2. Develop with a security first approach in mind
3. if you deem it fit, after major changes, or after patches, ask me to commit and push the changes to the repository (if that's ever the case, always ask me)
4. If it is a user facing change that you are making that affects the frontend, develop it with mobile resposivness in mind

