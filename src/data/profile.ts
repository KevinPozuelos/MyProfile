import type { Profile } from '@/types';

export const profile: Profile = {
  name: 'Kevin Raúl Pozuelos Estrada',
  shortName: 'Kevin Pozuelos',
  role: 'Desarrollador Backend & Cloud',
  tagline:
    'Construyo sistemas backend escalables y confiables, del diseño de APIs al despliegue en Kubernetes.',
  location: 'Ciudad de Guatemala, Guatemala',
  email: 'kevin.pozuelosestrada@gmail.com',
  photo: {
    src: 'foto.jpg',
    alt: 'Fotografía de perfil de Kevin Raúl Pozuelos Estrada',
  },
  cv: {
    href: 'CV_Kevin_Pozuelos.pdf',
    fileName: 'CV_Kevin_Pozuelos.pdf',
  },
  about: [
    'Desarrollador de software enfocado en backend, con casi 3 años de experiencia construyendo y manteniendo sistemas críticos para la administración tributaria de Guatemala (SAT). Pensum cerrado en Ingeniería en Ciencias y Sistemas (USAC).',
    'Especializado en Java y Spring Boot, diseño de APIs REST y arquitecturas de microservicios con Docker y Kubernetes. Me enfoco en rendimiento, escalabilidad y observabilidad en producción.',
    'También soy tutor académico en la USAC, donde enseño arquitectura de software y DevOps.',
  ],
  highlights: [
    { value: '~3 años', label: 'en sistemas críticos de la SAT' },
    { value: 'Java · Spring', label: 'APIs REST y microservicios' },
    { value: 'K8s · Helm', label: 'despliegue y observabilidad' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/KevinPozuelos', icon: 'simple-icons:github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/kevinpozuelos', icon: 'lucide:linkedin' },
    { label: 'Correo', href: 'mailto:kevin.pozuelosestrada@gmail.com', icon: 'lucide:mail' },
  ],
};
