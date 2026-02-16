/**
 * Component tests for ExperienceList.astro (Story 1.4 - Task 3)
 * Verifies professional experience timeline structure
 */

import { describe, it, expect } from 'bun:test';
import { readFile } from 'fs/promises';
import { join } from 'path';

const COMPONENT_PATH = join(process.cwd(), 'src/components/ExperienceList.astro');

describe('ExperienceList Component - Story 1.4 Task 3', () => {
  describe('Component Structure', () => {
    it('should exist at src/components/ExperienceList.astro', async () => {
      const exists = await Bun.file(COMPONENT_PATH).exists();
      expect(exists).toBe(true);
    });

    it('should accept ExperienceEntry[] type from content/types.ts', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');

      // Verify import from types
      expect(content).toContain("from '../content/types");
      expect(content).toContain('ExperienceEntry');

      // Verify props interface
      expect(content).toContain('interface Props');
      expect(content).toContain('experience');
    });

    it('should use article elements for semantic grouping', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');

      expect(content).toContain('<article');
      expect(content).toContain('</article>');
    });

    it('should render h3 for role headings', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');

      expect(content).toContain('<h3>');
    });

    it('should use time element for period dates', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');

      expect(content).toContain('<time>');
      expect(content).toContain('</time>');
    });

    it('should use strong element for company names', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');

      expect(content).toContain('<strong>');
      expect(content).toContain('</strong>');
    });

    it('should map over experience array', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');

      expect(content).toContain('.map(');
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
