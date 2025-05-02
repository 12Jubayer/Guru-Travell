import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import FeaturesSection from '../components/home/FeaturesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedDestinations />
      <FeaturesSection />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;