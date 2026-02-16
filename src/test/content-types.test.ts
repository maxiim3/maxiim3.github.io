/**
 * Test: Content Type System
 * Validates that the Content interface enforces structure and type safety
 */

import { describe, test, expect } from 'bun:test';
import type { Content, Meta, Link, Skills, ExperienceEntry, Project, CV } from '../content/types';

describe('Content Type System', () => {
  test('Content interface should enforce all required fields', () => {
    // This will fail to compile if types.ts doesn't exist or is missing fields
    const validContent: Content = {
      meta: {
        title: 'Test Title',
        description: 'Test Description',
        lang: 'fr',
      },
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/test',
        },
      ],
      skills: {
        expertise: ['Vue 3'],
        experience: ['React'],
        curiosity: ['Svelte'],
      },
      experience: [
        {
          role: 'Developer',
          company: 'Test Corp',
          period: 'Jan 2024 - Present',
          description: 'Building things',
        },
      ],
      projects: [
        {
          name: 'Test Project',
          url: 'https://example.com',
          description: 'A test project',
        },
      ],
      cv: {
        label: 'Download CV',
        href: '/cv/cv-fr.pdf',
      },
    };

    expect(validContent.meta.lang).toBe('fr');
    expect(validContent.links.length).toBeGreaterThan(0);
    expect(validContent.skills.expertise.length).toBeGreaterThan(0);
  });

  test('Meta interface should enforce lang to be fr or en only', () => {
    const frMeta: Meta = {
      title: 'French Title',
      description: 'French Description',
      lang: 'fr',
    };

    const enMeta: Meta = {
      title: 'English Title',
      description: 'English Description',
      lang: 'en',
    };

    expect(frMeta.lang).toBe('fr');
    expect(enMeta.lang).toBe('en');
  });

  test('Skills interface should have three-tier structure', () => {
    const skills: Skills = {
      expertise: ['Vue', 'TypeScript'],
      experience: ['React', 'Node.js'],
      curiosity: ['Rust', 'Go'],
    };

    expect(skills.expertise).toBeInstanceOf(Array);
    expect(skills.experience).toBeInstanceOf(Array);
    expect(skills.curiosity).toBeInstanceOf(Array);
  });

  test('Link interface should support optional icon', () => {
    const linkWithIcon: Link = {
      label: 'GitHub',
      url: 'https://github.com/test',
      icon: 'github',
    };

    const linkWithoutIcon: Link = {
      label: 'LinkedIn',
      url: 'https://linkedin.com/test',
    };

    expect(linkWithIcon.icon).toBe('github');
    expect(linkWithoutIcon.icon).toBeUndefined();
  });

  test('ExperienceEntry should have all required fields', () => {
    const entry: ExperienceEntry = {
      role: 'Senior Developer',
      company: 'Tech Company',
      period: 'Jan 2023 - Present',
      description: 'Led development team',
    };

    expect(entry.role).toBe('Senior Developer');
    expect(entry.company).toBe('Tech Company');
    expect(entry.period).toBe('Jan 2023 - Present');
    expect(entry.description).toBe('Led development team');
  });

  test('Project should have name, url, and description', () => {
    const project: Project = {
      name: 'Portfolio Site',
      url: 'https://portfolio.example.com',
      description: 'Personal portfolio website',
    };

    expect(project.name).toBe('Portfolio Site');
    expect(project.url).toBe('https://portfolio.example.com');
    expect(project.description).toBe('Personal portfolio website');
  });

  test('CV should have label and href', () => {
    const cv: CV = {
      label: 'Télécharger mon CV',
      href: '/cv/cv-fr.pdf',
    };

    expect(cv.label).toBe('Télécharger mon CV');
    expect(cv.href).toBe('/cv/cv-fr.pdf');
  });
});
