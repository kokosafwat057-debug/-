import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { WeeksList } from './pages/WeeksList';
import { WeekDetails } from './pages/WeekDetails';
import { DayDetails } from './pages/DayDetails';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weeks" element={<WeeksList />} />
          <Route path="/weeks/:weekId" element={<WeekDetails />} />
          <Route path="/weeks/:weekId/days/:dayId" element={<DayDetails />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;