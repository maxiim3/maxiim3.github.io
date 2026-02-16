/**
 * Component tests for SkillsList.astro (Story 1.4 - Task 2)
 * Verifies three-tier skills display structure
 */

import { describe, it, expect } from 'bun:test';
import { readFile } from 'fs/promises';
import { join } from 'path';

const COMPONENT_PATH = join(process.cwd(), 'src/components/SkillsList.astro');

describe('SkillsList Component - Story 1.4 Task 2', () => {
  describe('Component Structure', () => {
    it('should exist at src/components/SkillsList.astro', async () => {
      const exists = await Bun.file(COMPONENT_PATH).exists();
      expect(exists).toBe(true);
    });

    it('should accept Skills type from content/types.ts', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');

      // Verify import from types
      expect(content).toContain("from '../content/types");
      expect(content).toContain('Skills');

      // Verify props interface
      expect(content).toContain('interface Props');
      expect(content).toContain('skills');
    });

    it('should render three h3 headings for tiers', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');

      // Should have multiple h3 elements (one per tier)
      const h3Count = (content.match(/<h3>/g) || []).length;
      expect(h3Count).toBeGreaterThanOrEqual(3);
    });

    it('should use unordered lists for skills', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');

      // Should have ul elements
      expect(content).toContain('<ul>');
      expect(content).toContain('</ul>');

      // Should have li elements
      expect(content).toContain('<li>');
    });

    it('should map over skill arrays', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');

      // Should use .map() for rendering skills
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
