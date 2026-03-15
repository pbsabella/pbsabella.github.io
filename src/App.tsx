import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import Layout from '@/components/layout/Layout';
import Home from '@pages/home/Home';
import Labs from '@pages/labs/Labs';
import SystemCore from '@pages/system-core/SystemCore';
import DesignSystemBuildNotes from '@pages/design-system-build-notes/DesignSystemBuildNotes';
import YieldFlowCaseStudy from '@pages/yield-flow-case-study/YieldFlowCaseStudy';
import ThemingBuildNotes from '@pages/theming-build-notes/ThemingBuildNotes';
import { ROUTES } from '@constants/routes';

const App = () => {
  // TODO: Remove HashRouter shim once fully migrated from GitHub Pages to Vercel.
  // GitHub Pages requires HashRouter for deep-linking; Vercel uses BrowserRouter with rewrites.
  const hostname = window.location.hostname;
  const isGitHubPages = hostname === 'github.io' || hostname.endsWith('.github.io');
  const Router = isGitHubPages ? HashRouter : BrowserRouter;

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LABS} element={<Labs />} />
          <Route path={ROUTES.DESIGN_SYSTEM_BUILD_NOTES} element={<DesignSystemBuildNotes />} />
          <Route path={ROUTES.SYSTEM_CORE} element={<SystemCore />} />
          <Route path={ROUTES.YIELD_FLOW_CASE_STUDY} element={<YieldFlowCaseStudy />} />
          <Route path={ROUTES.THEMING_BUILD_NOTES} element={<ThemingBuildNotes />} />
          <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
        </Routes>
      </Layout>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
};

export default App;
