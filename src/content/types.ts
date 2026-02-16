/**
 * Content Type System
 * Type-safe content structure for bilingual (FR/EN) content
 */

export interface Content {
  meta: Meta;
  links: Link[];
  skills: Skills;
  experience: ExperienceEntry[];
  projects: Project[];
  cv: CV;
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
