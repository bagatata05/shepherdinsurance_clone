# Shepherd Insurance Clone (Next.js Re-Engineering)

An educational, high-fidelity replication and re-engineering of the modern marketing website for [Shepherd Insurance](https://www.shepherdinsurance.com/). 

This project was built from scratch as a practical study in replicating premium UI design systems, orchestrating advanced scroll-driven animations, and building modular React components with TypeScript and next-generation styling.

---

## ⚠️ Credits & Disclaimer
* **Design & Asset Credits**: All branding, asset resources (illustrations, logos, images, GIFs), layout structures, copy, and visual identity belong to **Shepherd Insurance**. 
* **Purpose**: This repository is a clone created **strictly for educational purposes, frontend replication study, and skill improvement**. It is not intended for commercial use or distribution.

---

## 🚀 Key Features Cloned & Re-Engineered
* **Yellow Hero Section**: Complete with animated inline symbols (⏩, ▲, ◆, 🖼️) running optimized local GIFs, and an infinite logo marquee ticker scroll running at a smooth 60fps via pure CSS keyframes.
* **Specialty Products Page Suite**: Rebuilt landing page and detailed casualty subpages (`/products`, `/products/primary-casualty`, `/products/excess-casualty`, `/products/builders-risk`) with state availability checklists and testimonial quote sliders.
* **Industries Page Suite**: Complete replication of the `/industries`, `/industry/construction`, and `/industry/renewable-energy-power` pages featuring responsive layouts, custom grids, local-hosted assets, and the scroll-locked vertical accordion reveal animations synced across all pages.
* **Interactive State Selector**: A fully responsive availability check engine mapping coverages (GL, Auto, Workers' Comp, Excess, and Builder's Risk) interactively across all 50 US States + DC.
* **Section 5 Scroll-Driven Accordion**: A custom scroll-locked vertical reveal accordion on `/products` and `/industries` pages powered by GSAP matchMedia. Clicking headers triggers smooth navigation scrolling via Lenis, and scrolling expands/collapses detailed content panels seamlessly on desktop.
* **Branded Testimonial Swiper**: An interactive sliding quote panel deployed across all product detail subpages (`/products/primary-casualty`, `/products/excess-casualty`, and `/products/builders-risk`) with arrow control click actions, automatic pagination counters (`< X OF Y >`), and responsive vertical flex stacking on mobile viewports.
* **Responsive Navigation & Branded Footer**: Premium dropdown toggle components aligned to desktop container query break points, featuring scroll-direction awareness that hides the header on downward scroll and slides it back into view when scrolling up.

---

## 🛠️ Technology Stack
* **Framework**: [Next.js](https://nextjs.org/) (App Router layout framework)
* **Language**: [TypeScript](https://www.typescriptlang.org/) (Strictly typed code compilation)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & custom vanilla CSS variables for fluid grid systems
* **Animation & Triggers**: [GSAP](https://gsap.com/) & `@gsap/react` (ScrollTrigger matchMedia configuration)
* **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/) (Buttery smooth scrolling synced with animation ticks)

---

## 💻 Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd shepherdinsurance
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the cloned product suite.

---

## 📦 Production Build
To check the production-ready build output:
```bash
npm run build
npm run start
```
The codebase compiles cleanly into optimized static routes with zero TypeScript errors or asset mapping warnings.
