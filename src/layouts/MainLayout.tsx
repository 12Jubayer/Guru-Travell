import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import LoadingScreen from '../components/ui/LoadingScreen';

const MainLayout: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a better UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default MainLayout;