# Bibhu Prasad Baliarsingh — Portfolio (React + Vite + Tailwind CSS)

A modern, animated rebuild of your portfolio.

## Stack
- **React 19** + **Vite 8** (fast dev server & build)
- **Tailwind CSS v4** (via `@tailwindcss/vite`, theme tokens in `src/index.css`)
- **Framer Motion** — scroll reveals, hover interactions, page-load animation, scroll progress bar
- **React Icons** — social, tech-stack and UI icons

## What's new vs. the original
- Terminal-style hero card that **types out your role** (Frontend Developer, UI Engineer, React Specialist, Problem Solver) with a blinking cursor
- Profile photo sits inside a **slow-morphing gradient blob** with **orbiting tech-stack icons** (React, Tailwind, JS, Node, MongoDB) — the "picture in motion" effect you asked for
- Scroll-triggered fade/slide-in animations on every section (About, Stats, Projects, Contact)
- New **Projects** section (placeholder case studies — swap in your real work)
- Animated scroll-progress bar, sticky glassmorphism navbar, hover tilt on cards, animated send button on the contact form
- Fully responsive, keyboard-focusable, and respects `prefers-reduced-motion`

## Getting started
```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Customize
- **Profile photo**: `src/assets/profile.jpg`
- **Colors / fonts**: `@theme` block at the top of `src/index.css`
- **Role words for the typing effect**: `roles` array in `src/components/Hero.jsx`
- **Skills**: `skillGroups` array in `src/components/About.jsx`
- **Projects**: `projects` array in `src/components/Projects.jsx`
- **Social links**: update the `href="#"` placeholders in `Hero.jsx` and `Footer.jsx`
- **Resume/CV**: drop your PDF into the `public/` folder as `Bibhucv.pdf` (the Download CV buttons already link to `/Bibhucv.pdf`)
- **Contact form**: currently shows a "sent!" confirmation only. Wire it up to a service like Formspree, EmailJS, or your own backend to actually deliver messages.
