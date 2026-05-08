# EnglishExcellence

A modern, responsive landing platform for an English language learning service, built with a performance-focused Vanilla JavaScript architecture. This project demonstrates front-end engineering fundamentals without relying on heavy frameworks, emphasizing maintainable structure, responsive design, clean UI implementation, and production-ready workflows.

## Live Demo

https://vosan.github.io/project-pixelflo/

---

## Overview

EnglishExcellence was developed as a fully responsive promotional website for an English learning platform. The project focuses on creating a polished user experience while maintaining a lightweight and scalable codebase using modern frontend tooling.

The application follows a component-based structure using reusable HTML partials, modular CSS architecture, and Vanilla JavaScript for interactive functionality.

---

## Key Highlights

- Responsive mobile-first design
- Component-based architecture without React/Vue
- Clean and scalable project structure
- Modern CSS using Flexbox, Grid, and CSS Variables
- Optimized asset bundling with Vite
- Serverless form submission workflow using Google Apps Script + Google Sheets
- Accessible and interactive mobile navigation
- Automated deployment pipeline using GitHub Actions

---

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (ES6+)

### Tooling & Build System
- Vite
- PostCSS
- Prettier
- GitHub Actions

---

## Architecture & Engineering Decisions

### Component-Based Structure

Instead of using a JavaScript framework, the project uses reusable HTML partials injected during build time. This keeps the application lightweight while still maintaining a scalable structure similar to component-driven frameworks.

Example structure:

```text
src/
├── partials/
├── css/
├── img/
├── main.js
└── index.html
```

This approach improves:
- Maintainability
- Reusability
- Separation of concerns
- Team collaboration

---

### Responsive Design Strategy

The project follows a mobile-first methodology with carefully planned breakpoints for:
- Mobile
- Tablet
- Desktop

CSS is organized into reusable modules with centralized variables for:
- Colors
- Typography
- Spacing
- Breakpoints

PostCSS media query sorting is used to optimize final production stylesheets.

---

### Performance Optimization

Performance was treated as a core requirement rather than an afterthought.

Optimizations include:
- Asset bundling and minification via Vite
- WebP image usage
- Consolidated CSS output
- Modular loading structure
- Optimized responsive media queries

The result is a fast-loading static website with minimal overhead.

---

### Interactive Features

#### Mobile Burger Navigation

Custom Vanilla JS implementation featuring:
- Animated open/close states
- Scroll locking while menu is active
- Automatic menu closing on navigation
- ESC key accessibility support

#### Lead Collection Workflow

A lightweight serverless backend solution was implemented using:
- Google Apps Script
- Google Sheets
- Fetch API

This allows form submissions to be collected without maintaining a dedicated backend server or database.

---

## What This Project Demonstrates

This project was intentionally built to showcase practical frontend engineering skills relevant to production environments:

- Writing scalable Vanilla JavaScript
- Organizing maintainable CSS architecture
- Building responsive layouts from scratch
- Working with modern frontend tooling
- Performance optimization practices
- UX-focused implementation decisions
- CI/CD automation with GitHub Actions
- Solving real-world problems without overengineering

---

## Local Development

```bash
npm install
npm run dev
```

---

## Production Build

```bash
npm run build
```

---

## Deployment

The project is automatically deployed to GitHub Pages using GitHub Actions.
