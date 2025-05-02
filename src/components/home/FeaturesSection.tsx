import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { DollarSign, Globe, HeadphonesIcon, Shield } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <DollarSign className="h-10 w-10 text-primary-600" />,
      title: t('feature1Title'),
      description: t('feature1Desc')
    },
    {
      icon: <Globe className="h-10 w-10 text-primary-600" />,
      title: t('feature2Title'),
      description: t('feature2Desc')
    },
    {
      icon: <HeadphonesIcon className="h-10 w-10 text-primary-600" />,
      title: t('feature3Title'),
      description: t('feature3Desc')
    },
    {
      icon: <Shield className="h-10 w-10 text-primary-600" />,
      title: t('feature4Title'),
      description: t('feature4Desc')
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t('featuresTitle')}</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-md transition-transform hover:-translate-y-2"
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default FeaturesSection;