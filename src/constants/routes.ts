/**
 * Route configuration and constants
 * Centralized route definitions for type-safe navigation
 */

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  LABS: '/labs',
  DESIGN_SYSTEM_BUILD_NOTES: '/labs/design-system-build-notes',
  SYSTEM_CORE: '/labs/core',
  YIELD_FLOW_CASE_STUDY: '/labs/yield-flow-case-study',
  THEMING_BUILD_NOTES: '/labs/theming-build-notes',
} as const;
