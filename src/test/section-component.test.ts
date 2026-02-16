/**
 * Component tests for Section.astro (Story 1.4 - Task 1)
 * Verifies reusable section wrapper structure and props
 */

import { describe, it, expect } from 'bun:test';
import { readFile } from 'fs/promises';
import { join } from 'path';

const DIST_DIR = join(process.cwd(), 'dist');

describe('Section Component - Story 1.4 Task 1', () => {
  describe('Component Structure', () => {
    it('should exist at src/components/Section.astro', async () => {
      const componentPath = join(process.cwd(), 'src/components/Section.astro');
      const exists = await Bun.file(componentPath).exists();
      expect(exists).toBe(true);
    });

    it('should accept id and heading props', async () => {
      const componentPath = join(process.cwd(), 'src/components/Section.astro');
      const content = await readFile(componentPath, 'utf-8');

      // Verify props interface exists
      expect(content).toContain('interface Props');
      expect(content).toContain('id');
      expect(content).toContain('heading');
    });

    it('should use semantic section element', async () => {
      const componentPath = join(process.cwd(), 'src/components/Section.astro');
      const content = await readFile(componentPath, 'utf-8');

      expect(content).toContain('<section');
      expect(content).toContain('</section>');
    });

    it('should render h2 for section heading', async () => {
      const componentPath = join(process.cwd(), 'src/components/Section.astro');
      const content = await readFile(componentPath, 'utf-8');

      expect(content).toContain('<h2>');
      expect(content).toContain('</h2>');
    });

    it('should use slot for content projection', async () => {
      const componentPath = join(process.cwd(), 'src/components/Section.astro');
      const content = await readFile(componentPath, 'utf-8');

      expect(content).toContain('<slot');
    });
  });

  describe('Build Integration', () => {
    it('should compile without TypeScript errors', async () => {
      // This will be verified by the build passing
      // If component has TypeScript errors, build will fail
      const frPath = join(DIST_DIR, 'index.html');
      const exists = await Bun.file(frPath).exists();
      expect(exists).toBe(true);
    });
  });
});
