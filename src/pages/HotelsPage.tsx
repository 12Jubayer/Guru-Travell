import React from 'react';
import { useTranslation } from 'react-i18next';
import { Building } from 'lucide-react';
import HotelSearchForm from '../components/booking/HotelSearchForm';

const HotelsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative overflow-hidden bg-cover bg-center py-24" style={{ backgroundImage: 'url(https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div className="container-custom relative">
          <div className="max-w-2xl text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              {t('hotels')}
            </h1>
            <p className="text-lg text-gray-200">
              Book hotels for comfortable stays at the best prices
            </p>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div className="container-custom py-12">
        <div className="mx-auto max-w-4xl rounded-xl bg-white p-6 shadow-lg">
          <HotelSearchForm />
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <h2 className="mb-12 text-center text-3xl font-bold">Why Book Hotels with Guru Travel?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Building className="h-10 w-10 text-primary-600" />}
              title="Global Selection"
              description="Choose from thousands of hotels around the world, from budget to luxury."
            />
            <FeatureCard
              icon={<Building className="h-10 w-10 text-primary-600" />}
              title="Best Price Guarantee"
              description="Find the lowest rates with our best price guarantee policy."
            />
            <FeatureCard
              icon={<Building className="h-10 w-10 text-primary-600" />}
              title="Free Cancellation"
              description="Many of our hotel bookings offer free cancellation options."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-md">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default HotelsPage;