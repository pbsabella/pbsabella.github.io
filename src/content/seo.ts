import { ROUTES } from '@constants/routes';

type SeoMeta = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const SITE_URL = 'https://pbsabella.github.io';
export const SITE_NAME = 'Paula Abella';
const OG_IMAGE = '/og/home-hero.jpg';
const OG_IMAGE_ALT = 'Hero view of Paula Abella portfolio with editorial dotted grid and structured interface layout.';

export const DEFAULT_SEO_META: SeoMeta = {
  title: 'Paula Abella | Frontend & Design Systems',
  description: 'Design systems engineer building accessible, scalable frontend platforms for complex products.',
  image: OG_IMAGE,
  imageAlt: OG_IMAGE_ALT,
};

export const ROUTE_SEO_META: Record<string, SeoMeta> = {
  [ROUTES.HOME]: DEFAULT_SEO_META,
  [ROUTES.LABS]: {
    title: 'Labs | Paula Abella',
    description: 'Design systems engineer building accessible, scalable frontend platforms for complex products.',
    image: OG_IMAGE,
    imageAlt: OG_IMAGE_ALT,
  },
  [ROUTES.SYSTEM_CORE]: {
    title: 'System Core | Paula Abella',
    description: 'Design systems engineer building accessible, scalable frontend platforms for complex products.',
    image: OG_IMAGE,
    imageAlt: OG_IMAGE_ALT,
  },
  [ROUTES.DESIGN_SYSTEM_BUILD_NOTES]: {
    title: 'Design System Build Notes | Paula Abella',
    description: 'Design systems engineer building accessible, scalable frontend platforms for complex products.',
    image: OG_IMAGE,
    imageAlt: OG_IMAGE_ALT,
  },
};

export const getRouteSeoMeta = (pathname: string): SeoMeta => ROUTE_SEO_META[pathname] ?? DEFAULT_SEO_META;

export const toAbsoluteUrl = (pathOrUrl: string): string => {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }

  const normalized = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${normalized}`;
};

export const toCanonicalHashUrl = (pathname: string): string => {
  if (pathname === ROUTES.HOME) {
    return `${SITE_URL}/#/`;
  }
  return `${SITE_URL}/#${pathname}`;
};
