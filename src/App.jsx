import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Styleguide from './pages/Styleguide';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/labs/styleguide" element={<Styleguide />} />
                    {/* Labs main page can be added later */}
                    <Route path="/labs" element={<Home />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
