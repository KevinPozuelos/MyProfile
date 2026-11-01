/**
 * Modelos del contenido del sitio.
 * Los íconos usan nombres de Iconify: `simple-icons:<marca>` o `lucide:<ícono>`.
 */

export type IconName = `simple-icons:${string}` | `lucide:${string}`;

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
}

export interface Profile {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  /** Asset de `src/assets`: Astro lo optimiza (AVIF/WebP, tamaños responsivos). */
  photo: { src: ImageMetadata; alt: string };
  /** Ruta relativa a `public/`; se resuelve con el `base` del sitio. */
  cv: { href: string; fileName: string };
  about: string[];
  highlights: { value: string; label: string }[];
  socials: SocialLink[];
}

export interface Experience {
  organization: string;
  organizationShort: string;
  role: string;
  location: string;
  /** Formato ISO `YYYY-MM`; se formatea al renderizar. */
  start: string;
  /** `null` = puesto actual. */
  end: string | null;
  achievements: string[];
  tags: string[];
}

export interface Project {
  name: string;
  /** Lo que el proyecto demuestra, en pocas palabras (p. ej. "Microservicios"). */
  focus: string;
  description: string;
  tags: string[];
  repo: string;
  demo?: string;
}

export interface Skill {
  name: string;
  icon?: IconName;
}

export interface SkillGroup {
  title: string;
  icon: IconName;
  skills: Skill[];
}

export interface Education {
  degree: string;
  institution: string;
  status: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface NavItem {
  label: string;
  href: `#${string}`;
}
