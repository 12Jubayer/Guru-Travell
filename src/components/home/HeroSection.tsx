import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import BookingTabs from './BookingTabs';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
        >
          {t('heroTitle')}
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl"
        >
          {t('heroSubtitle')}
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 w-full max-w-4xl"
        >
          <BookingTabs />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;