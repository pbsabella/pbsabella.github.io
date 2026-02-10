import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import Labs from './pages/labs/Labs';
import SystemCore from './pages/system-core/SystemCore';
import DesignSystemCaseStudy from './pages/design-system-case-study/DesignSystemCaseStudy';
import { ROUTES } from '@constants/routes';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LABS} element={<Labs />} />
          <Route path={ROUTES.DESIGN_SYSTEM_CASE_STUDY} element={<DesignSystemCaseStudy />} />
          <Route path={ROUTES.SYSTEM_CORE} element={<SystemCore />} />
          <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
