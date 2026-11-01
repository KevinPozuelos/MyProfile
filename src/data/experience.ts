import type { Experience } from '@/types';

export const experience: Experience[] = [
  {
    organization: 'Superintendencia de Administración Tributaria',
    organizationShort: 'SAT',
    role: 'Desarrollador Full Stack',
    location: 'Ciudad de Guatemala',
    start: '2023-12',
    end: null,
    achievements: [
      'Desarrollo y mantengo sistemas críticos (Fiscalización Integral y Expediente Electrónico) que soportan procesos de administración tributaria a nivel nacional.',
      'Diseño e implemento APIs REST con Spring Boot que mejoran la integración entre sistemas institucionales.',
      'Contribuyo a decisiones de arquitectura orientadas a microservicios, enfocadas en escalabilidad y mantenibilidad.',
      'Integro frontends en Angular con servicios de backend.',
      'Trabajo en equipos ágiles con Scrum y entrega continua.',
    ],
    tags: ['Java', 'Spring Boot', 'APIs REST', 'Microservicios', 'Angular', 'Scrum'],
  },
  {
    organization: 'Universidad de San Carlos de Guatemala',
    organizationShort: 'USAC',
    role: 'Tutor Académico, Desarrollo de Software Avanzado',
    location: 'Ciudad de Guatemala',
    start: '2026-01',
    end: null,
    achievements: [
      'Imparto arquitectura de software, desarrollo backend y prácticas DevOps aplicadas a escenarios reales.',
      'Asesoro a estudiantes en Clean Code, principios SOLID y flujos de CI/CD.',
      'Desarrollo laboratorios prácticos con Docker, Kubernetes y Helm.',
      'Enseño observabilidad con OpenTelemetry, Loki y el stack ELK.',
      'Configuro entornos en Google Cloud Platform para despliegues y laboratorios.',
    ],
    tags: ['Docker', 'Kubernetes', 'Helm', 'CI/CD', 'OpenTelemetry', 'GCP'],
  },
];
