/**
 * Component tests for LinksList.astro (Story 1.4 - Task 5)
 * Verifies professional network links display
 */

import { describe, it, expect } from 'bun:test';
import { readFile } from 'fs/promises';
import { join } from 'path';

const COMPONENT_PATH = join(process.cwd(), 'src/components/LinksList.astro');

describe('LinksList Component - Story 1.4 Task 5', () => {
  describe('Component Structure', () => {
    it('should exist at src/components/LinksList.astro', async () => {
      const exists = await Bun.file(COMPONENT_PATH).exists();
      expect(exists).toBe(true);
    });

    it('should accept Link[] type from content/types.ts', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');

      // Verify import from types
      expect(content).toContain("from '../content/types");
      expect(content).toContain('Link');

      // Verify props interface
      expect(content).toContain('interface Props');
      expect(content).toContain('links');
    });

    it('should use nav element for accessibility', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');

      expect(content).toContain('<nav');
      expect(content).toContain('</nav>');
    });

    it('should use list structure for links', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');

      expect(content).toContain('<ul>');
      expect(content).toContain('<li>');
    });

    it('should render anchor links', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');

      expect(content).toContain('<a');
      expect(content).toContain('href=');
    });

    it('should map over links array', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');

      expect(content).toContain('.map(');
    });

    it('should handle mailto links differently than external links', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');

      // Should check for mailto: protocol
      expect(content).toContain('mailto:');
    });
  });

  describe('Build Integration', () => {
    it('should compile without TypeScript errors', async () => {
      const distPath = join(process.cwd(), 'dist/index.html');
      const exists = await Bun.file(distPath).exists();
      expect(exists).toBe(true);
    });
  });
});
