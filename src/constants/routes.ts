/**
 * Route configuration and constants
 * Centralized route definitions for type-safe navigation
 */

export const ROUTES = {
  HOME: '/',
  LABS: '/labs',
  DESIGN_SYSTEM_BUILD_NOTES: '/labs/design-system-build-notes',
  SYSTEM_CORE: '/labs/core',
} as const;

export const SECTION_ANCHORS = {
  HERO: 'hero',
  WORK: 'work',
  ABOUT: 'about',
  CONTACT: 'contact',
} as const;

/**
 * Navigation links for header/sidenav
 */
export const NAV_LINKS = [
  { label: 'Work', anchor: SECTION_ANCHORS.WORK },
  { label: 'About', anchor: SECTION_ANCHORS.ABOUT },
  { label: 'Contact', anchor: SECTION_ANCHORS.CONTACT },
] as const;
