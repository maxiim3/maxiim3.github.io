/**
 * Content Type System
 * Type-safe content structure for bilingual (FR/EN) content
 */

export interface CaseStudyResult {
  metric: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  context: string;
  role: string;
  deliverables: string[];
  results: CaseStudyResult[];
  impact?: string;
  stack: string[];
  link: { label: string; url: string };
  screenshots: string[];
}

export interface Narrative {
  title: string;
  paragraphs: string[];
}

export interface Content {
  meta: Meta;
  links: Link[];
  skills: Skills;
  experience: ExperienceEntry[];
  projects: Project[];
  cv: CV;
  caseStudies: CaseStudy[];
  narrative: Narrative;
}

export interface Meta {
  title: string;
  description: string;
  lang: 'fr' | 'en';
}

export interface Link {
  label: string;
  url: string;
  icon?: string;
}

export interface Skills {
  expertise: string[];
  experience: string[];
  curiosity: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Project {
  name: string;
  url: string;
  description: string;
}

export interface CV {
  label: string;
  href: string;
}
