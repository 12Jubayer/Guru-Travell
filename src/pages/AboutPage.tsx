import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Users, Award, ThumbsUp } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative overflow-hidden bg-cover bg-center py-24" style={{ backgroundImage: 'url(https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div className="container-custom relative">
          <div className="max-w-2xl text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              {t('about')}
            </h1>
            <p className="text-lg text-gray-200">
              Get to know more about Guru Travel and our mission
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Story</h2>
            <p className="mb-8 text-lg text-gray-600">
              Founded in 2010, Guru Travel has been helping travelers explore the world with 
              confidence and ease. What started as a small agency in Chandpur, Bangladesh, has 
              grown into a trusted travel partner serving customers worldwide.
            </p>
            <p className="text-lg text-gray-600">
              Our mission is to make travel accessible, affordable, and enjoyable for everyone. 
              We're passionate about creating memorable experiences and helping our customers 
              discover new destinations, cultures, and adventures.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-16 grid gap-8 md:grid-cols-4">
            <StatCard number="50+" label="Countries" />
            <StatCard number="10K+" label="Happy Customers" />
            <StatCard number="15+" label="Years Experience" />
            <StatCard number="24/7" label="Customer Support" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Why Choose Us</h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard 
              icon={<Shield className="h-10 w-10 text-primary-600" />}
              title="Trusted Service"
              description="With over 15 years in the travel industry, we've earned the trust of thousands of customers."
            />
            <FeatureCard 
              icon={<Users className="h-10 w-10 text-primary-600" />}
              title="Expert Team"
              description="Our team of travel experts ensures you get the best advice and service for your travel needs."
            />
            <FeatureCard 
              icon={<Award className="h-10 w-10 text-primary-600" />}
              title="Best Prices"
              description="We guarantee competitive prices for flights, hotels, trains, and buses."
            />
            <FeatureCard 
              icon={<ThumbsUp className="h-10 w-10 text-primary-600" />}
              title="Customer Satisfaction"
              description="We prioritize customer satisfaction with our responsive support and personalized service."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Our Team</h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TeamMember 
              name="Ahmed Khan"
              position="Founder & CEO"
              image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
            <TeamMember 
              name="Priya Sharma"
              position="Head of Operations"
              image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
            <TeamMember 
              name="Rahul Patel"
              position="Customer Relations Manager"
              image="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label }) => {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-lg bg-white p-6 text-center shadow-md"
    >
      <h3 className="mb-2 text-3xl font-bold text-primary-600">{number}</h3>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-md"
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, image }) => {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-md"
    >
      <div className="mb-4 h-32 w-32 overflow-hidden rounded-full">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <h3 className="mb-1 text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{position}</p>
    </motion.div>
  );
};

export default AboutPage;