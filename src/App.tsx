import { lazy, Suspense } from 'react';
import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import Layout from '@/components/layout/Layout';
import PageLoader from '@/components/ui/PageLoader/PageLoader';
import { ROUTES } from '@constants/routes';

// Route-level code splitting: each page is a separate JS chunk downloaded on demand.
// Vite creates one output file per dynamic import; the browser fetches it only on first navigation.
const Home = lazy(() => import('@pages/home/Home'));
const Labs = lazy(() => import('@pages/labs/Labs'));
const SystemCore = lazy(() => import('@pages/system-core/SystemCore'));
const DesignSystemBuildNotes = lazy(() => import('@pages/design-system-build-notes/DesignSystemBuildNotes'));
const YieldFlowCaseStudy = lazy(() => import('@pages/yield-flow-case-study/YieldFlowCaseStudy'));
const ThemingBuildNotes = lazy(() => import('@pages/theming-build-notes/ThemingBuildNotes'));

const App = () => {
  // TODO: Remove HashRouter shim once fully migrated from GitHub Pages to Vercel.
  // GitHub Pages requires HashRouter for deep-linking; Vercel uses BrowserRouter with rewrites.
  const hostname = window.location.hostname;
  const isGitHubPages = hostname === 'github.io' || hostname.endsWith('.github.io');
  const Router = isGitHubPages ? HashRouter : BrowserRouter;

  return (
    <Router>
      <Layout>
        {/* Suspense inside Layout so Header/Footer stay visible during route transitions. */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.LABS} element={<Labs />} />
            <Route path={ROUTES.DESIGN_SYSTEM_BUILD_NOTES} element={<DesignSystemBuildNotes />} />
            <Route path={ROUTES.SYSTEM_CORE} element={<SystemCore />} />
            <Route path={ROUTES.YIELD_FLOW_CASE_STUDY} element={<YieldFlowCaseStudy />} />
            <Route path={ROUTES.THEMING_BUILD_NOTES} element={<ThemingBuildNotes />} />
            <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
          </Routes>
        </Suspense>
      </Layout>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
};

export default App;
