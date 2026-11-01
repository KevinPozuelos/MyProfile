import type { SkillGroup } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Lenguajes',
    icon: 'lucide:code-xml',
    skills: [
      { name: 'Java', icon: 'simple-icons:openjdk' },
      { name: 'Python', icon: 'simple-icons:python' },
      { name: 'TypeScript', icon: 'simple-icons:typescript' },
      { name: 'Go', icon: 'simple-icons:go' },
    ],
  },
  {
    title: 'Backend',
    icon: 'lucide:server',
    skills: [
      { name: 'Spring Boot', icon: 'simple-icons:springboot' },
      { name: 'NestJS', icon: 'simple-icons:nestjs' },
      { name: 'FastAPI', icon: 'simple-icons:fastapi' },
      { name: 'APIs REST', icon: 'lucide:arrow-left-right' },
      { name: 'Clean Architecture', icon: 'lucide:layers' },
      { name: 'SOLID', icon: 'lucide:blocks' },
    ],
  },
  {
    title: 'Bases de datos',
    icon: 'lucide:database',
    skills: [
      { name: 'Oracle', icon: 'lucide:database' },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
      { name: 'MySQL', icon: 'simple-icons:mysql' },
      { name: 'MongoDB', icon: 'simple-icons:mongodb' },
      { name: 'Neo4j', icon: 'simple-icons:neo4j' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: 'lucide:cloud',
    skills: [
      { name: 'Docker', icon: 'simple-icons:docker' },
      { name: 'Kubernetes', icon: 'simple-icons:kubernetes' },
      { name: 'Helm', icon: 'simple-icons:helm' },
      { name: 'CI/CD', icon: 'lucide:git-merge' },
      { name: 'AWS · EC2, S3, RDS, Cognito, IAM, ECS', icon: 'lucide:cloud-cog' },
      { name: 'Google Cloud Platform', icon: 'simple-icons:googlecloud' },
    ],
  },
  {
    title: 'Observabilidad',
    icon: 'lucide:activity',
    skills: [
      { name: 'OpenTelemetry', icon: 'simple-icons:opentelemetry' },
      { name: 'Loki', icon: 'simple-icons:grafana' },
      { name: 'ELK Stack', icon: 'simple-icons:elastic' },
    ],
  },
  {
    title: 'Metodologías',
    icon: 'lucide:workflow',
    skills: [
      { name: 'Ágil / Scrum', icon: 'lucide:refresh-cw' },
      { name: 'Microservicios', icon: 'lucide:boxes' },
      { name: 'Entrega continua', icon: 'lucide:rocket' },
    ],
  },
];
