import React from 'react';
import { useTranslation } from 'react-i18next';
import { Train } from 'lucide-react';
import TrainSearchForm from '../components/booking/TrainSearchForm';

const TrainsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative overflow-hidden bg-cover bg-center py-24" style={{ backgroundImage: 'url(https://images.pexels.com/photos/730134/pexels-photo-730134.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div className="container-custom relative">
          <div className="max-w-2xl text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              {t('trains')}
            </h1>
            <p className="text-lg text-gray-200">
              Book train tickets for comfortable and scenic journeys
            </p>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div className="container-custom py-12">
        <div className="mx-auto max-w-4xl rounded-xl bg-white p-6 shadow-lg">
          <TrainSearchForm />
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <h2 className="mb-12 text-center text-3xl font-bold">Why Book Trains with Guru Travel?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Train className="h-10 w-10 text-primary-600" />}
              title="Extensive Routes"
              description="Access train tickets for all major routes across the country."
            />
            <FeatureCard
              icon={<Train className="h-10 w-10 text-primary-600" />}
              title="Instant Confirmation"
              description="Get instant confirmation and e-tickets directly to your email."
            />
            <FeatureCard
              icon={<Train className="h-10 w-10 text-primary-600" />}
              title="Seat Selection"
              description="Choose your preferred seats or berths during the booking process."
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

export default TrainsPage;