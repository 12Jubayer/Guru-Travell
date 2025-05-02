import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'London, UK',
    rating: 5,
    comment: 'Guru Travel made our honeymoon absolutely magical! From the flight bookings to hotel arrangements, everything was perfect. The customer service was exceptional, and they were always available to answer our questions.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    name: 'Mohammed Ali',
    location: 'Dubai, UAE',
    rating: 5,
    comment: 'I\'ve used many travel agencies before, but Guru Travel stands out with their attention to detail and personalized service. They helped me plan a business trip with a tight schedule, and everything went smoothly.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    name: 'Anuradha Patel',
    location: 'Mumbai, India',
    rating: 4,
    comment: 'Great experience booking our family vacation through Guru Travel. The team was very helpful in finding family-friendly accommodations and activities that everyone enjoyed. Will definitely use their services again!',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t('testimonialsTitle')}</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    location: string;
    rating: number;
    comment: string;
    image: string;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="h-full rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="mb-4 flex items-center">
        <div className="mr-4 h-14 w-14 overflow-hidden rounded-full">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold">{testimonial.name}</h3>
          <p className="text-sm text-gray-600">{testimonial.location}</p>
          <div className="mt-1 flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${
                  i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <blockquote className="text-gray-600">"{testimonial.comment}"</blockquote>
    </div>
  );
};

export default TestimonialsSection;