import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import SystemCore from './pages/SystemCore';
import Labs from './pages/Labs';
import { ROUTES } from '@constants/routes';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LABS} element={<Labs />} />
          <Route path={ROUTES.SYSTEM_CORE} element={<SystemCore />} />
          <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
