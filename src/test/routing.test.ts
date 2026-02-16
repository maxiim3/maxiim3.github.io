/**
 * Integration tests for bilingual routing (Story 1.1)
 * Verifies i18n configuration and build output
 */

import { describe, it, expect } from 'bun:test';
import { readFile } from 'fs/promises';
import { join } from 'path';

const DIST_DIR = join(process.cwd(), 'dist');

describe('Bilingual Routing - Story 1.1', () => {
  describe('French Route (Default Locale)', () => {
    it('should generate index.html at root', async () => {
      const frPath = join(DIST_DIR, 'index.html');
      const html = await readFile(frPath, 'utf-8');
      expect(html).toContain('<!DOCTYPE html>');
    });

    it('should have lang="fr" attribute', async () => {
      const frPath = join(DIST_DIR, 'index.html');
      const html = await readFile(frPath, 'utf-8');
      expect(html).toContain('lang="fr"');
    });

    it('should contain French content', async () => {
      const frPath = join(DIST_DIR, 'index.html');
      const html = await readFile(frPath, 'utf-8');
      expect(html).toContain('Développeur Front-End');
    });

    it('should include skip link in French', async () => {
      const frPath = join(DIST_DIR, 'index.html');
      const html = await readFile(frPath, 'utf-8');
      expect(html).toContain('Aller au contenu principal');
    });
  });

  describe('English Route', () => {
    it('should generate index.html in /en/ directory', async () => {
      const enPath = join(DIST_DIR, 'en', 'index.html');
      const html = await readFile(enPath, 'utf-8');
      expect(html).toContain('<!DOCTYPE html>');
    });

    it('should have lang="en" attribute', async () => {
      const enPath = join(DIST_DIR, 'en', 'index.html');
      const html = await readFile(enPath, 'utf-8');
      expect(html).toContain('lang="en"');
    });

    it('should contain English content', async () => {
      const enPath = join(DIST_DIR, 'en', 'index.html');
      const html = await readFile(enPath, 'utf-8');
      expect(html).toContain('Front-End Developer');
    });

    it('should include skip link in English', async () => {
      const enPath = join(DIST_DIR, 'en', 'index.html');
      const html = await readFile(enPath, 'utf-8');
      expect(html).toContain('Skip to main content');
    });
  });

  describe('Semantic HTML Structure', () => {
    it('should include semantic landmarks in French page', async () => {
      const frPath = join(DIST_DIR, 'index.html');
      const html = await readFile(frPath, 'utf-8');
      expect(html).toContain('<header>');
      expect(html).toContain('<main');
      expect(html).toContain('<footer>');
    });

    it('should include semantic landmarks in English page', async () => {
      const enPath = join(DIST_DIR, 'en', 'index.html');
      const html = await readFile(enPath, 'utf-8');
      expect(html).toContain('<header>');
      expect(html).toContain('<main');
      expect(html).toContain('<footer>');
    });
  });
});
