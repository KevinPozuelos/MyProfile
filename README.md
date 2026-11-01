# Kevin Pozuelos · Portafolio

[![Build & Deploy](https://github.com/KevinPozuelos/MyProfile/actions/workflows/deploy.yml/badge.svg)](https://github.com/KevinPozuelos/MyProfile/actions/workflows/deploy.yml)

Landing page personal tipo CV/portafolio de **Kevin Raúl Pozuelos Estrada**, desarrollador Backend & Cloud. Sitio de una sola página, 100% estático, con experiencia, proyectos destacados, stack técnico y contacto.

🔗 **Sitio:** https://kevinpozuelos.github.io/MyProfile/

## Stack

| Área          | Tecnología                                                                 |
| ------------- | -------------------------------------------------------------------------- |
| Framework     | [Astro](https://astro.build) (salida estática, cero JS por defecto)        |
| Estilos       | [Tailwind CSS v4](https://tailwindcss.com) vía plugin de Vite              |
| Lenguaje      | TypeScript (modo `strict`) + `astro check` en el build                     |
| Tipografía    | Inter Variable auto-hospedada (`@fontsource-variable/inter`)               |
| Íconos        | [Iconify](https://iconify.design) (Simple Icons + Lucide), SVG inline en build |
| Imágenes      | `astro:assets`: AVIF/WebP responsivos e imagen Open Graph generada         |
| SEO           | Meta tags, Open Graph, JSON-LD (`Person`), sitemap y `robots.txt`          |
| CI/CD         | GitHub Actions → GitHub Pages                                              |

**Lighthouse (local):** 100 en Rendimiento, Accesibilidad, Buenas prácticas y SEO, en móvil y escritorio.

## Características

- Contenido separado de la presentación: todo vive en `src/data/*.ts`, tipado con interfaces en `src/types`.
- Modo claro y oscuro automático según `prefers-color-scheme`, con tokens de color en CSS.
- Accesible: HTML semántico, enlace "Saltar al contenido", foco visible, menú móvil con `aria-expanded` y cierre con `Esc`, contraste AA.
- Animaciones sutiles al hacer scroll con `IntersectionObserver`; se desactivan con `prefers-reduced-motion` y el contenido sigue visible sin JS.
- La ruta base se configura sola: funciona en `usuario.github.io` o en `usuario.github.io/repo`.

## Estructura

```text
.
├── .github/workflows/deploy.yml   # CI: type check + build; CD: deploy a GitHub Pages
├── public/                        # Archivos servidos tal cual (CV, favicon)
├── src/
│   ├── assets/foto.jpg            # Foto de perfil (Astro la optimiza)
│   ├── components/                # Una sección por componente + piezas reutilizables
│   ├── data/                      # ✏️ Contenido editable del sitio
│   │   ├── profile.ts             #   nombre, título, sobre mí, redes, contacto
│   │   ├── experience.ts          #   línea de tiempo de experiencia
│   │   ├── projects.ts            #   proyectos destacados
│   │   ├── skills.ts              #   stack técnico agrupado
│   │   ├── education.ts           #   formación e idiomas
│   │   └── navigation.ts          #   enlaces de la barra de navegación
│   ├── layouts/BaseLayout.astro   # <head> con SEO, fuentes y script de animaciones
│   ├── lib/utils.ts               # Helpers (fechas, rutas con base)
│   ├── pages/                     # index.astro y robots.txt
│   ├── styles/global.css          # Tailwind + tokens de tema
│   └── types/index.ts             # Modelos del contenido
└── astro.config.mjs
```

## Correr localmente

Requisitos: **Node.js 22.12+** (ver `.nvmrc`) y npm.

```bash
npm install
npm run dev        # servidor de desarrollo en http://localhost:4321
npm run build      # astro check + build estático en ./dist
npm run preview    # sirve ./dist para revisar el build
```

## Actualizar el contenido

Edita los archivos de `src/data/`. Por ejemplo, para agregar un proyecto, añade un objeto a `src/data/projects.ts`:

```ts
{
  name: 'Mi nuevo servicio',
  focus: 'Kubernetes',
  description: 'Descripción breve de dos líneas.',
  tags: ['Go', 'Kubernetes', 'Helm'],
  repo: 'https://github.com/KevinPozuelos/mi-repo',
  demo: 'https://mi-demo.example.com', // opcional
}
```

TypeScript valida la forma de los datos en el build. Los íconos usan nombres de Iconify (`simple-icons:docker`, `lucide:server`); puedes buscarlos en [icon-sets.iconify.design](https://icon-sets.iconify.design).

- **Foto:** reemplaza `src/assets/foto.jpg` (cuadrada, mínimo 600×600 px).
- **CV:** reemplaza `public/CV_Kevin_Pozuelos.pdf`.

## Despliegue

Cada push a `main` ejecuta [`deploy.yml`](.github/workflows/deploy.yml):

1. **Build:** instala dependencias con `npm ci`, ejecuta `astro check` y genera `./dist`. `actions/configure-pages` le pasa a Astro la URL y la ruta base reales del sitio.
2. **Deploy:** publica el artefacto en GitHub Pages con `actions/deploy-pages`.

En los pull requests solo corre el build, como verificación. El workflow también se puede lanzar a mano desde la pestaña *Actions*.

**Configuración única:** en el repositorio, *Settings → Pages → Build and deployment → Source:* **GitHub Actions**.

## Licencia

El código está bajo licencia [MIT](LICENSE). El contenido personal (textos, foto y CV) pertenece a Kevin Raúl Pozuelos Estrada.
