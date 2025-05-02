import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import FlightsPage from './pages/FlightsPage';
import TrainsPage from './pages/TrainsPage';
import BusesPage from './pages/BusesPage';
import HotelsPage from './pages/HotelsPage';
import DestinationsPage from './pages/DestinationsPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Get preferred language from localStorage or set default
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="flights" element={<FlightsPage />} />
        <Route path="trains" element={<TrainsPage />} />
        <Route path="buses" element={<BusesPage />} />
        <Route path="hotels" element={<HotelsPage />} />
        <Route path="destinations" element={<DestinationsPage />} />
        <Route path="destinations/:id" element={<DestinationDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;