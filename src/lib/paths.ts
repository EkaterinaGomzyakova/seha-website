import type { Locale } from '../data/translations';

/** Resolve site-local URLs against the build's deployment base. */
export function withBase(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (base && (path === base || path.startsWith(`${base}/`))) return path;
  return `${base}${path}`;
}

export function unlocalizedPath(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const relative = base && path.startsWith(`${base}/`) ? path.slice(base.length) : path;
  return relative.replace(/^\/(ru|en)(?=\/|$)/, '') || '/';
}

export function localizedPath(path: string, locale: Locale): string {
  const [pathname, hash] = unlocalizedPath(path).split('#');
  const normalized = pathname.replace(/\/$/, '');
  return withBase(
    `/${locale}${normalized === '' ? '/' : `${normalized}/`}${hash ? `#${hash}` : ''}`
  );
}
