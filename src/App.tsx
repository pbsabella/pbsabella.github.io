import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Styleguide from './pages/Styleguide';
import { ROUTES } from '@constants/routes';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.STYLEGUIDE} element={<Styleguide />} />
          <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
