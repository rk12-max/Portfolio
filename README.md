# Rishu Kumar — Portfolio

A responsive portfolio built with React, Vite, reusable components and plain CSS.

## Component structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── SectionHeading.jsx
├── data/
│   └── portfolio.js
├── styles/
│   ├── about.css
│   ├── base.css
│   ├── contact.css
│   ├── contactform.css
│   ├── experience.css
│   ├── header.css
│   ├── hero.css
│   ├── projects.css
│   ├── responsive.css
│   └── typography.css
│   └── variables.css
├── App.jsx
├── main.jsx
└── styles.css
vite.config.js
```

## Run locally

```bash
npm install
npm run dev
```

## If you already extracted an older version

Replace the old project files with this updated archive, then run:

```bash
npm install
npm run dev
```

## Before publishing

1. Replace the portrait placeholder in `src/components/Hero.jsx` with your own photo.
2. Add your resume at `public/Rishu-Kumar-CV.pdf`.
3. Replace sample project preview images with approved project screenshots.
4. Verify experience dates and project descriptions.

## Production build

```bash
npm run build
```

Vite writes the production build to `dist/`.
