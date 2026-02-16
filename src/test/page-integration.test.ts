/**
 * Integration tests for page templates (Story 1.4 - Task 6)
 * Verifies all components are wired up correctly on both FR and EN pages
 */

import { describe, it, expect } from 'bun:test';
import { readFile } from 'fs/promises';
import { join } from 'path';

const DIST_DIR = join(process.cwd(), 'dist');

describe('Page Integration - Story 1.4 Task 6', () => {
  describe('French Page (/)', () => {
    it('should render all five sections in correct order', async () => {
      const frPath = join(DIST_DIR, 'index.html');
      const html = await readFile(frPath, 'utf-8');

      // Check for section IDs in order
      const linksPos = html.indexOf('id="links"');
      const skillsPos = html.indexOf('id="skills"');
      const experiencePos = html.indexOf('id="experience"');
      const projectsPos = html.indexOf('id="projects"');
      const cvPos = html.indexOf('id="cv"');

      expect(linksPos).toBeGreaterThan(0);
      expect(skillsPos).toBeGreaterThan(linksPos);
      expect(experiencePos).toBeGreaterThan(skillsPos);
      expect(projectsPos).toBeGreaterThan(experiencePos);
      expect(cvPos).toBeGreaterThan(projectsPos);
    });

    it('should render French section headings', async () => {
      const frPath = join(DIST_DIR, 'index.html');
      const html = await readFile(frPath, 'utf-8');

      expect(html).toContain('Compétences'); // Skills in French
      expect(html).toContain('Expérience'); // Experience in French
      expect(html).toContain('Projets'); // Projects in French
    });

    it('should render skills tiers', async () => {
      const frPath = join(DIST_DIR, 'index.html');
      const html = await readFile(frPath, 'utf-8');

      expect(html).toContain('Expertise');
      expect(html).toContain('Expérience'); // Tier label
      expect(html).toContain('Curiosité');
    });

    it('should render professional links', async () => {
      const frPath = join(DIST_DIR, 'index.html');
      const html = await readFile(frPath, 'utf-8');

      expect(html).toContain('github.com');
      expect(html).toContain('linkedin.com');
      expect(html).toContain('mailto:');
    });
  });

  describe('English Page (/en/)', () => {
    it('should render all five sections in correct order', async () => {
      const enPath = join(DIST_DIR, 'en/index.html');
      const html = await readFile(enPath, 'utf-8');

      // Check for section IDs in order
      const linksPos = html.indexOf('id="links"');
      const skillsPos = html.indexOf('id="skills"');
      const experiencePos = html.indexOf('id="experience"');
      const projectsPos = html.indexOf('id="projects"');
      const cvPos = html.indexOf('id="cv"');

      expect(linksPos).toBeGreaterThan(0);
      expect(skillsPos).toBeGreaterThan(linksPos);
      expect(experiencePos).toBeGreaterThan(skillsPos);
      expect(projectsPos).toBeGreaterThan(experiencePos);
      expect(cvPos).toBeGreaterThan(projectsPos);
    });

    it('should render English section headings', async () => {
      const enPath = join(DIST_DIR, 'en/index.html');
      const html = await readFile(enPath, 'utf-8');

      expect(html).toContain('Skills'); // Skills in English
      expect(html).toContain('Experience'); // Experience in English (tier label)
      expect(html).toContain('Projects'); // Projects in English
    });

    it('should render skills tiers with English labels', async () => {
      const enPath = join(DIST_DIR, 'en/index.html');
      const html = await readFile(enPath, 'utf-8');

      expect(html).toContain('Expertise');
      expect(html).toContain('Experience'); // English tier label
      expect(html).toContain('Curiosity'); // English tier label
    });
  });

  describe('Semantic HTML Structure', () => {
    it('should use proper heading hierarchy on French page', async () => {
      const frPath = join(DIST_DIR, 'index.html');
      const html = await readFile(frPath, 'utf-8');

      // Should have h1 for page title
      expect(html).toContain('<h1>');
      // Should have h2 for section headings
      expect(html).toContain('<h2>');
      // Should have h3 for subsections
      expect(html).toContain('<h3>');
    });

    it('should have semantic elements on French page', async () => {
      const frPath = join(DIST_DIR, 'index.html');
      const html = await readFile(frPath, 'utf-8');

      expect(html).toContain('<section');
      expect(html).toContain('<article'); // For experience/projects
      expect(html).toContain('<nav'); // For links list
      expect(html).toContain('<time>'); // For experience dates
    });
  });
});
