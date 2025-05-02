import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowLeft, Star } from 'lucide-react';
import { allDestinations } from '../data/destinations';

const DestinationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const [destination, setDestination] = useState(allDestinations[0]);

  useEffect(() => {
    // Find the destination by id
    if (id) {
      const foundDestination = allDestinations.find((d) => d.id === parseInt(id));
      if (foundDestination) {
        setDestination(foundDestination);
      }
    }
  }, [id]);

  if (!destination) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-20">
        <p>Destination not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container-custom">
            <Link to="/destinations" className="mb-4 inline-flex items-center text-white hover:text-primary-300">
              <ArrowLeft size={16} className="mr-2" />
              <span>Back to Destinations</span>
            </Link>
            <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {destination.name}
            </h1>
            <div className="flex items-center text-white">
              <MapPin size={18} className="mr-1" />
              <span>{destination.country}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">About {destination.name}</h2>
              <p className="text-gray-600">
                {destination.description || `${destination.name} is a beautiful destination in ${destination.country}, known for its unique culture and attractions. Visitors from around the world come to explore this fascinating location.`}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">Top Attractions</h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {destination.featuredAttractions.map((attraction, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="rounded-lg bg-white p-4 shadow-md"
                  >
                    <div className="flex items-start">
                      <Star size={16} className="mr-2 mt-1 text-yellow-500" />
                      <span>{attraction}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Travel Tips</h2>
              <div className="rounded-lg bg-gray-50 p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Calendar size={16} className="mr-2 mt-1 text-primary-600" />
                    <span>Best time to visit: March to November</span>
                  </li>
                  <li className="flex items-start">
                    <Calendar size={16} className="mr-2 mt-1 text-primary-600" />
                    <span>Plan your trip at least 2-3 months in advance</span>
                  </li>
                  <li className="flex items-start">
                    <Calendar size={16} className="mr-2 mt-1 text-primary-600" />
                    <span>Consider local customs and traditions during your visit</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold">Book Your Trip</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 font-medium">Flights to {destination.name}</h4>
                  <Link to="/flights" className="btn-primary inline-block w-full text-center">
                    Search Flights
                  </Link>
                </div>
                
                <div>
                  <h4 className="mb-2 font-medium">Hotels in {destination.name}</h4>
                  <Link to="/hotels" className="btn-secondary inline-block w-full text-center">
                    Find Hotels
                  </Link>
                </div>
                
                <div className="pt-4">
                  <h4 className="mb-2 font-medium">Need Help?</h4>
                  <p className="text-sm text-gray-600">
                    Contact our travel experts for personalized assistance with your trip to {destination.name}.
                  </p>
                  <Link to="/contact" className="mt-2 inline-flex items-center text-primary-600 hover:text-primary-700">
                    <span>Contact Us</span>
                    <ArrowLeft size={16} className="ml-1 rotate-180" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Destinations */}
            <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold">You Might Also Like</h3>
              
              <div className="space-y-4">
                {allDestinations
                  .filter(d => d.country === destination.country && d.id !== destination.id)
                  .slice(0, 3)
                  .map(relatedDest => (
                    <Link 
                      key={relatedDest.id}
                      to={`/destinations/${relatedDest.id}`}
                      className="flex items-center rounded-md p-2 transition-colors hover:bg-gray-50"
                    >
                      <div className="mr-3 h-12 w-12 overflow-hidden rounded-md">
                        <img 
                          src={relatedDest.image} 
                          alt={relatedDest.name}
                          className="h-full w-full object-cover" 
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{relatedDest.name}</h4>
                        <p className="text-sm text-gray-600">{relatedDest.country}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailPage;