import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout
import MainLayout from './layouts/MainLayout';

// Pages
import LandingPage from './pages/LandingPage';
import DataCleaner from './pages/DataCleaner';
import EdaGenerator from './pages/EdaGenerator';
import ExplainChart from './pages/ExplainChart';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="data-cleaner" element={<DataCleaner />} />
        <Route path="eda-generator" element={<EdaGenerator />} />
        <Route path="explain-chart" element={<ExplainChart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;