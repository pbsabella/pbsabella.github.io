import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  SITE_NAME,
  getRouteSeoMeta,
  toAbsoluteUrl,
  toCanonicalHashUrl,
} from '@/content/seo';

const upsertMeta = (
  attr: 'name' | 'property',
  key: string,
  content: string,
) => {
  const selector = `meta[${attr}="${key}"]`;
  let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const upsertLink = (rel: string, href: string) => {
  const selector = `link[rel="${rel}"]`;
  let link = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

export const useSeoMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getRouteSeoMeta(pathname);
    const canonicalUrl = toCanonicalHashUrl(pathname);
    const imageUrl = toAbsoluteUrl(seo.image);

    document.title = seo.title;

    upsertMeta('name', 'description', seo.description);
    upsertMeta('name', 'author', SITE_NAME);

    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', imageUrl);
    upsertMeta('property', 'og:image:alt', seo.imageAlt);

    upsertLink('canonical', canonicalUrl);
  }, [pathname]);
};

export default useSeoMeta;
