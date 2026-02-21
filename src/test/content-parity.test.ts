/**
 * Test: Content Structure Parity (FR/EN)
 * Validates that French and English content have identical structure
 */

import { describe, test, expect } from 'bun:test';
import frContent from '../content/fr';
import enContent from '../content/en';

describe('Content Structure Parity', () => {
  test('Both content files should have same number of links', () => {
    expect(frContent.links.length).toBe(enContent.links.length);
  });

  test('Both content files should have same number of skills in each tier', () => {
    expect(frContent.skills.expertise.length).toBe(enContent.skills.expertise.length);
    expect(frContent.skills.experience.length).toBe(enContent.skills.experience.length);
    expect(frContent.skills.curiosity.length).toBe(enContent.skills.curiosity.length);
  });

  test('Both content files should have same number of experience entries', () => {
    expect(frContent.experience.length).toBe(enContent.experience.length);
  });

  test('Both content files should have same number of projects', () => {
    expect(frContent.projects.length).toBe(enContent.projects.length);
  });

  test('French content should have lang set to fr', () => {
    expect(frContent.meta.lang).toBe('fr');
  });

  test('English content should have lang set to en', () => {
    expect(enContent.meta.lang).toBe('en');
  });

  test('All links should have the same structure', () => {
    frContent.links.forEach((frLink, index) => {
      const enLink = enContent.links[index];
      expect(typeof frLink.label).toBe('string');
      expect(typeof enLink.label).toBe('string');
      expect(frLink.url).toBe(enLink.url); // URLs should be identical
      expect(frLink.icon).toBe(enLink.icon); // Icons should be identical
    });
  });

  test('All experience entries should have same field structure', () => {
    frContent.experience.forEach((frExp, index) => {
      const enExp = enContent.experience[index];
      expect(typeof frExp.role).toBe('string');
      expect(typeof enExp.role).toBe('string');
      expect(typeof frExp.company).toBe('string');
      expect(typeof enExp.company).toBe('string');
      expect(typeof frExp.period).toBe('string');
      expect(typeof enExp.period).toBe('string');
      expect(typeof frExp.description).toBe('string');
      expect(typeof enExp.description).toBe('string');
    });
  });

  test('All projects should have same field structure', () => {
    frContent.projects.forEach((frProj, index) => {
      const enProj = enContent.projects[index];
      expect(typeof frProj.name).toBe('string');
      expect(typeof enProj.name).toBe('string');
      expect(frProj.url).toBe(enProj.url); // URLs should be identical
      expect(typeof frProj.description).toBe('string');
      expect(typeof enProj.description).toBe('string');
    });
  });

  test('CV section should have same structure', () => {
    expect(typeof frContent.cv.label).toBe('string');
    expect(typeof enContent.cv.label).toBe('string');
    expect(frContent.cv.href).toBe('/cv/cv-fr.pdf');
    expect(enContent.cv.href).toBe('/cv/cv-en.pdf');
  });

  test('All required top-level fields should exist', () => {
    const requiredFields = ['meta', 'links', 'skills', 'experience', 'projects', 'cv', 'caseStudies', 'narrative'];
    requiredFields.forEach((field) => {
      expect(frContent).toHaveProperty(field);
      expect(enContent).toHaveProperty(field);
    });
  });

  test('Both content files should have same number of case studies', () => {
    expect(frContent.caseStudies.length).toBe(enContent.caseStudies.length);
  });

  test('Case study slugs should be identical across locales', () => {
    frContent.caseStudies.forEach((frCase, index) => {
      const enCase = enContent.caseStudies[index];
      expect(enCase).toBeDefined();
      expect(frCase.slug).toBe(enCase.slug);
    });
  });

  test('Case study stack arrays should be identical across locales', () => {
    frContent.caseStudies.forEach((frCase, index) => {
      const enCase = enContent.caseStudies[index];
      expect(enCase).toBeDefined();
      expect(frCase.stack).toEqual(enCase.stack);
    });
  });

  test('Case study link URLs should be identical across locales', () => {
    frContent.caseStudies.forEach((frCase, index) => {
      const enCase = enContent.caseStudies[index];
      expect(enCase).toBeDefined();
      expect(frCase.link.url).toBe(enCase.link.url);
    });
  });

  test('Case study results count should match across locales', () => {
    frContent.caseStudies.forEach((frCase, index) => {
      const enCase = enContent.caseStudies[index];
      expect(enCase).toBeDefined();
      expect(frCase.results.length).toBe(enCase.results.length);
    });
  });

  test('Case study deliverables count should match across locales', () => {
    frContent.caseStudies.forEach((frCase, index) => {
      const enCase = enContent.caseStudies[index];
      expect(enCase).toBeDefined();
      expect(frCase.deliverables.length).toBe(enCase.deliverables.length);
    });
  });

  test('Both content files should have a narrative section', () => {
    expect(frContent.narrative).toBeDefined();
    expect(enContent.narrative).toBeDefined();
  });

  test('Narrative title should be a non-empty string in both locales', () => {
    expect(typeof frContent.narrative.title).toBe('string');
    expect(frContent.narrative.title.length).toBeGreaterThan(0);
    expect(typeof enContent.narrative.title).toBe('string');
    expect(enContent.narrative.title.length).toBeGreaterThan(0);
  });

  test('Narrative paragraphs count should match across locales', () => {
    expect(frContent.narrative.paragraphs.length).toBe(enContent.narrative.paragraphs.length);
    frContent.narrative.paragraphs.forEach((p, i) => expect(p.length, `FR paragraph ${i} is empty`).toBeGreaterThan(0));
    enContent.narrative.paragraphs.forEach((p, i) => expect(p.length, `EN paragraph ${i} is empty`).toBeGreaterThan(0));
  });
});
