# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal CV/Portfolio website built as a Nuxt 3 static site for GitHub Pages deployment. The goal is to showcase front-end expertise in Vue/Nuxt while providing an ATS-optimized resume and interactive portfolio.

**Current Status:** Planning phase complete. Technical implementation not yet started.

## Stack

- **Framework:** Nuxt 3 with TypeScript (strict mode)
- **Deployment:** GitHub Pages (static site generation)
- **Build Tool:** Bun (not npm/node)
- **CI/CD:** GitHub Actions for automated builds

## Development Commands

Once the Nuxt project is initialized, use these commands:

```bash
# Install dependencies
bun install

# Development server
bun run dev

# Build for production (static generation)
bun run generate

# Preview production build locally
bun run preview

# Type checking
bun run typecheck

# Linting (if configured)
bun run lint
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
The site positions the developer as a "Développeur Front-End Vue/Nuxt" specialist (not a generalist). Content and design should reflect deep expertise in the Vue ecosystem.

### Skills Hierarchy
When displaying technical skills, use this three-tier structure:
1. **Expertise:** Core Vue/Nuxt competencies
2. **Expérience:** Secondary but proven skills
3. **Curiosité:** Technologies being explored

## GitHub Pages Deployment

- Site will be deployed from the `gh-pages` branch or `/docs` folder
- Static files generated via `nuxt generate`
- GitHub Actions workflow should automate the build and deployment process
- Ensure `baseURL` and router configuration are compatible with GitHub Pages subdirectory routing if not using a custom domain

## Project Goals

The CV ecosystem aims to:
- Generate 3+ technical interviews within 2 months
- Receive 1+ freelance request via the site within 3 months
- Improve application response rate by 50%
- Transform a non-traditional tech background (10 years outside tech) into a competitive advantage
