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
export const HOME_CANONICAL_URL = `${SITE_URL}/#/`;

export const toAbsoluteUrl = (pathOrUrl: string): string => {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }

  const normalized = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${normalized}`;
};
