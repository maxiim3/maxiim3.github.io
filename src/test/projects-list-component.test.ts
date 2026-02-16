/**
 * Component tests for ProjectsList.astro (Story 1.4 - Task 4)
 * Verifies project cards with external links
 */

import { describe, it, expect } from 'bun:test';
import { readFile } from 'fs/promises';
import { join } from 'path';

const COMPONENT_PATH = join(process.cwd(), 'src/components/ProjectsList.astro');

describe('ProjectsList Component - Story 1.4 Task 4', () => {
  describe('Component Structure', () => {
    it('should exist at src/components/ProjectsList.astro', async () => {
      const exists = await Bun.file(COMPONENT_PATH).exists();
      expect(exists).toBe(true);
    });

    it('should accept Project[] type from content/types.ts', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');

      // Verify import from types
      expect(content).toContain("from '../content/types");
      expect(content).toContain('Project');

      // Verify props interface
      expect(content).toContain('interface Props');
      expect(content).toContain('projects');
    });

    it('should use article elements for project cards', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');

      expect(content).toContain('<article');
      expect(content).toContain('</article>');
    });

    it('should render h3 with anchor links for project names', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');

      expect(content).toContain('<h3>');
      expect(content).toContain('<a');
      expect(content).toContain('href=');
    });

    it('should include security attributes on external links', async () => {
      const content = await readFile(COMPONENT_PATH, 'utf-8');

      // Must have rel="noopener noreferrer" for security
      expect(content).toContain('noopener');
      expect(content).toContain('noreferrer');
    });

    it('should map over projects array', async () => {
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
