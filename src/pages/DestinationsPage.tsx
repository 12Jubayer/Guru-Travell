import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { allDestinations } from '../data/destinations';

const DestinationsPage: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDestinations, setFilteredDestinations] = useState(allDestinations);

  useEffect(() => {
    const results = allDestinations.filter(
      destination =>
        destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        destination.country.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDestinations(results);
  }, [searchTerm]);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative overflow-hidden bg-cover bg-center py-24" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div className="container-custom relative">
          <div className="max-w-2xl text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              {t('destinations')}
            </h1>
            <p className="text-lg text-gray-200">
              Explore over 50 amazing destinations across the globe with Guru Travel
            </p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-gray-50 py-8">
        <div className="container-custom">
          <div className="mx-auto max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-10 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
              <Search className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="container-custom py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
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
            </motion.div>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-500">No destinations found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationsPage;