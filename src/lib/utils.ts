/** Antepone el `base` del sitio a una ruta de `public/` (necesario en GitHub Pages de proyecto). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

const monthFormatter = new Intl.DateTimeFormat('es-GT', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

/** `2023-12` → `dic 2023` */
export function formatMonth(isoMonth: string): string {
  const [year, month] = isoMonth.split('-').map(Number);
  return monthFormatter.format(new Date(Date.UTC(year!, month! - 1))).replace('.', '');
}

export function formatPeriod(start: string, end: string | null): string {
  return `${formatMonth(start)} – ${end ? formatMonth(end) : 'Actualidad'}`;
}

export function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href);
}
