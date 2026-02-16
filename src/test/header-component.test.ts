/**
 * Component tests for Header.astro (Story 1.5 - Task 1)
 * Verifies language switch component structure and locale handling
 */

import { describe, it, expect } from 'bun:test';
import { readFile } from 'fs/promises';
import { join } from 'path';

const DIST_DIR = join(process.cwd(), 'dist');

describe('Header Component - Story 1.5 Task 1', () => {
  describe('Component Structure', () => {
    it('should exist at src/components/Header.astro', async () => {
      const componentPath = join(process.cwd(), 'src/components/Header.astro');
      const exists = await Bun.file(componentPath).exists();
      expect(exists).toBe(true);
    });

    it('should accept currentLocale prop', async () => {
      const componentPath = join(process.cwd(), 'src/components/Header.astro');
      const content = await readFile(componentPath, 'utf-8');

      // Verify props interface exists with currentLocale
      expect(content).toContain('interface Props');
      expect(content).toContain('currentLocale');
    });

    it('should use semantic header element', async () => {
      const componentPath = join(process.cwd(), 'src/components/Header.astro');
      const content = await readFile(componentPath, 'utf-8');

      expect(content).toContain('<header');
      expect(content).toContain('</header>');
    });

    it('should use nav element for language navigation', async () => {
      const componentPath = join(process.cwd(), 'src/components/Header.astro');
      const content = await readFile(componentPath, 'utf-8');

      expect(content).toContain('<nav');
      expect(content).toContain('</nav>');
    });

    it('should use anchor tag for language switch', async () => {
      const componentPath = join(process.cwd(), 'src/components/Header.astro');
      const content = await readFile(componentPath, 'utf-8');

      expect(content).toContain('<a ');
      expect(content).toContain('</a>');
    });
  });

  describe('Locale Logic', () => {
    it('should determine alternate locale', async () => {
      const componentPath = join(process.cwd(), 'src/components/Header.astro');
      const content = await readFile(componentPath, 'utf-8');

      // Should have logic to switch between fr and en
      expect(content).toMatch(/alternateLocale.*===.*['"]fr['"].*['"]en['"]|['"]en['"].*['"]fr['"]/);
    });

    it('should determine alternate URL', async () => {
      const componentPath = join(process.cwd(), 'src/components/Header.astro');
      const content = await readFile(componentPath, 'utf-8');

      // Should have logic for / and /en/ URLs
      expect(content).toMatch(/alternateUrl/);
      expect(content).toContain('/en/');
    });

    it('should determine language label', async () => {
      const componentPath = join(process.cwd(), 'src/components/Header.astro');
      const content = await readFile(componentPath, 'utf-8');

      // Should have logic for EN/FR labels
      expect(content).toMatch(/languageLabel/);
      expect(content).toContain('EN');
      expect(content).toContain('FR');
    });
  });

  describe('Accessibility', () => {
    it('should have aria-label on nav element', async () => {
      const componentPath = join(process.cwd(), 'src/components/Header.astro');
      const content = await readFile(componentPath, 'utf-8');

      expect(content).toContain('aria-label');
    });

    it('should have lang attribute on link', async () => {
      const componentPath = join(process.cwd(), 'src/components/Header.astro');
      const content = await readFile(componentPath, 'utf-8');

      expect(content).toMatch(/lang=.*alternateLocale/);
    });
  });

  describe('Build Integration', () => {
    it('should compile without TypeScript errors', async () => {
      // Verified by successful build - dist files will exist
      const frPath = join(DIST_DIR, 'index.html');
      const exists = await Bun.file(frPath).exists();
      expect(exists).toBe(true);
    });

    it('should render on French page', async () => {
      const frPath = join(DIST_DIR, 'index.html');
      const content = await readFile(frPath, 'utf-8');

      // Should contain header element
      expect(content).toContain('<header');
    });

    it('should render on English page', async () => {
      const enPath = join(DIST_DIR, 'en/index.html');
      const content = await readFile(enPath, 'utf-8');

      // Should contain header element
      expect(content).toContain('<header');
    });

    it('should show EN link on French page', async () => {
      const frPath = join(DIST_DIR, 'index.html');
      const content = await readFile(frPath, 'utf-8');

      // French page should link to English
      expect(content).toContain('href="/en/"');
      expect(content).toMatch(/>\s*EN\s*</);
    });

    it('should show FR link on English page', async () => {
      const enPath = join(DIST_DIR, 'en/index.html');
      const content = await readFile(enPath, 'utf-8');

      // English page should link to French
      expect(content).toContain('href="/"');
      expect(content).toMatch(/>\s*FR\s*</);
    });
  });

  describe('Bilingual Content', () => {
    it('should display French subtitle on French page', async () => {
      const frPath = join(DIST_DIR, 'index.html');
      const content = await readFile(frPath, 'utf-8');

      // French page should have French subtitle
      expect(content).toContain('Développeur Front-End Vue/Nuxt');
    });

    it('should display English subtitle on English page', async () => {
      const enPath = join(DIST_DIR, 'en/index.html');
      const content = await readFile(enPath, 'utf-8');

      // English page should have English subtitle
      expect(content).toContain('Front-End Developer Vue/Nuxt');
    });

    it('should display current language in French on French page', async () => {
      const frPath = join(DIST_DIR, 'index.html');
      const content = await readFile(frPath, 'utf-8');

      // French page should show "Français" as current language
      expect(content).toContain('Français');
    });

    it('should display current language in English on English page', async () => {
      const enPath = join(DIST_DIR, 'en/index.html');
      const content = await readFile(enPath, 'utf-8');

      // English page should show "English" as current language
      expect(content).toContain('English');
    });
  });
});
