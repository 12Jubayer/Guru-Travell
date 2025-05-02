import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { popularDestinations } from '../../data/destinations';

const FeaturedDestinations: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t('popularDestinations')}</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Explore our most popular destinations and start planning your next adventure with Guru Travel.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {popularDestinations.slice(0, 8).map((destination) => (
            <motion.div key={destination.id} variants={itemVariants}>
              <DestinationCard destination={destination} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            to="/destinations"
            className="inline-flex items-center text-primary-600 hover:text-primary-700"
          >
            <span className="font-medium">{t('viewAllDestinations')}</span>
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

interface DestinationCardProps {
  destination: {
    id: number;
    name: string;
    country: string;
    image: string;
    featuredAttractions: string[];
  };
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <Link
      to={`/destinations/${destination.id}`}
      className="group block h-full overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-xl font-semibold">{destination.name}</h3>
          <p className="text-gray-200">{destination.country}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedDestinations;