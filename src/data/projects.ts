import type { Project } from '@/types';

const GITHUB = 'https://github.com/KevinPozuelos';

export const projects: Project[] = [
  {
    name: 'Product Service · Spring Boot',
    focus: 'Microservicios',
    description:
      'Servicio de productos con Spring Boot y entorno orquestado con Docker Compose. Aplica el patrón database per service con MongoDB, MySQL y PostgreSQL.',
    tags: ['Java', 'Spring Boot', 'MongoDB', 'MySQL', 'PostgreSQL', 'Docker'],
    repo: `${GITHUB}/Product-java-springboot`,
  },
  {
    name: 'NestJS Microservices',
    focus: 'API Gateway',
    description:
      'Arquitectura de microservicios en NestJS: un API Gateway expone HTTP y delega en el microservicio de productos mediante @nestjs/microservices.',
    tags: ['TypeScript', 'NestJS', 'Microservicios', 'API Gateway'],
    repo: `${GITHUB}/nestjs-ms`,
  },
  {
    name: 'Pipeline CI/CD con Jenkins',
    focus: 'CI/CD',
    description:
      'Pipeline declarativo que instala, compila, construye la imagen Docker de una API NestJS y la publica en Docker Hub con credenciales gestionadas.',
    tags: ['Jenkins', 'Docker', 'NestJS', 'CI/CD'],
    repo: `${GITHUB}/Test-jenkins`,
  },
  {
    name: 'Book Shelf API',
    focus: 'API REST',
    description:
      'API REST con autenticación JWT, persistencia con TypeORM sobre PostgreSQL, pruebas con Jest y Dockerfile listo para contenedores.',
    tags: ['NestJS', 'PostgreSQL', 'TypeORM', 'JWT', 'Jest', 'Docker'],
    repo: `${GITHUB}/Taller-de-NestJs`,
  },
  {
    name: 'FastAPI Archetype',
    focus: 'Arquetipo backend',
    description:
      'Plantilla base para APIs en FastAPI con capas separadas (routers, schemas, models, core), SQLAlchemy y PostgreSQL serverless en Neon.',
    tags: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Pydantic'],
    repo: `${GITHUB}/fastAPI_Archetype`,
  },
  {
    name: 'Laboratorio de Software Avanzado',
    focus: 'Docencia',
    description:
      'Material del curso que imparto en la USAC: ejemplos de principios SOLID, autenticación con JWT y arquitectura de microservicios.',
    tags: ['TypeScript', 'SOLID', 'JWT', 'Microservicios'],
    repo: `${GITHUB}/Laboratorio-SA-S12026-B`,
  },
];
