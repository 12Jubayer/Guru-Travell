import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Plane, Train, Bus, Building } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FlightSearchForm from '../booking/FlightSearchForm';
import TrainSearchForm from '../booking/TrainSearchForm';
import BusSearchForm from '../booking/BusSearchForm';
import HotelSearchForm from '../booking/HotelSearchForm';

type TabType = 'flights' | 'trains' | 'buses' | 'hotels';

const BookingTabs: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabType>('flights');

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg">
      {/* Tabs */}
      <div className="flex border-b">
        <TabButton 
          active={activeTab === 'flights'} 
          onClick={() => setActiveTab('flights')}
          icon={<Plane size={18} />}
        >
          {t('flights')}
        </TabButton>
        <TabButton 
          active={activeTab === 'trains'} 
          onClick={() => setActiveTab('trains')}
          icon={<Train size={18} />}
        >
          {t('trains')}
        </TabButton>
        <TabButton 
          active={activeTab === 'buses'} 
          onClick={() => setActiveTab('buses')}
          icon={<Bus size={18} />}
        >
          {t('buses')}
        </TabButton>
        <TabButton 
          active={activeTab === 'hotels'} 
          onClick={() => setActiveTab('hotels')}
          icon={<Building size={18} />}
        >
          {t('hotels')}
        </TabButton>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <AnimatePresence mode="wait">
          {activeTab === 'flights' && (
            <TabContent key="flights">
              <FlightSearchForm />
            </TabContent>
          )}
          {activeTab === 'trains' && (
            <TabContent key="trains">
              <TrainSearchForm />
            </TabContent>
          )}
          {activeTab === 'buses' && (
            <TabContent key="buses">
              <BusSearchForm />
            </TabContent>
          )}
          {activeTab === 'hotels' && (
            <TabContent key="hotels">
              <HotelSearchForm />
            </TabContent>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Tab Button Component
interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, icon, children }) => {
  return (
    <button
      className={`relative flex flex-1 items-center justify-center py-3 text-sm font-medium transition-colors sm:py-4 md:text-base ${
        active 
          ? 'text-primary-600' 
          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
      }`}
      onClick={onClick}
    >
      <span className="mr-2">{icon}</span>
      <span>{children}</span>
      {active && (
        <motion.div
          layoutId="activeTab"
          className="absolute bottom-0 left-0 h-0.5 w-full bg-primary-600"
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}
    </button>
  );
};

// Tab Content Component
interface TabContentProps {
  children: React.ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default BookingTabs;