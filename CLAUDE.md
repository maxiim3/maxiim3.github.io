# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal CV/Portfolio website built with Astro for GitHub Pages deployment. The goal is to showcase front-end expertise while providing an ATS-optimized resume and interactive portfolio.

**Current Status:** Astro project initialized and migrated to root level.

## Stack

- **Framework:** Astro with TypeScript
- **Deployment:** GitHub Pages (static site generation)
- **Build Tool:** Bun (not npm/node)
- **CI/CD:** GitHub Actions for automated builds

## Development Commands

```bash
# Install dependencies
bun install

# Development server
bun run dev

# Build for production (static generation)
bun run build

# Preview production build locally
bun run preview
```

## Architecture & Key Requirements

### Site Structure
- **Home page:** Landing with overview
- **Experiences:** Interactive timeline of professional experience
- **Projects:** Portfolio with screenshots/captures
- **PDF download:** One-click resume download functionality

### Non-Negotiable Requirements
- **Performance:** Lighthouse score > 90 across all metrics
- **Responsive:** Mobile-first design approach
- **SEO:** Fully optimized for search engines
- **Dark mode:** Toggle between light/dark themes
- **Static:** Must generate as static site for GitHub Pages

### Positioning
The site positions the developer as a front-end specialist. Content and design should reflect technical expertise and attention to detail.

## GitHub Pages Deployment

- Site will be deployed from the `gh-pages` branch or `/docs` folder
- Static files generated via `bun run build` (creates `dist/` directory)
- GitHub Actions workflow should automate the build and deployment process
- Ensure `base` configuration in `astro.config.mjs` is set correctly for GitHub Pages if using subdirectory routing

## Project Goals

The CV ecosystem aims to:
- Generate 3+ technical interviews within 2 months
- Receive 1+ freelance request via the site within 3 months
- Improve application response rate by 50%
- Transform a non-traditional tech background (10 years outside tech) into a competitive advantage
