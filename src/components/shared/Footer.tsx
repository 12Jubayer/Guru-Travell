import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <Logo variant="light" />
            </Link>
            <p className="mt-4 max-w-md text-gray-400">
              {t('slogan')}. {t('feature2Desc')}
            </p>
            <div className="mt-6 flex space-x-4">
              <SocialLink href="#" icon={<Facebook size={18} />} label="Facebook" />
              <SocialLink href="#" icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink href="#" icon={<Instagram size={18} />} label="Instagram" />
              <SocialLink href="#" icon={<Youtube size={18} />} label="Youtube" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t('company')}</h3>
            <ul className="space-y-2">
              <FooterLink to="/about">{t('about')}</FooterLink>
              <FooterLink to="/destinations">{t('destinations')}</FooterLink>
              <FooterLink to="/contact">{t('contact')}</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t('services')}</h3>
            <ul className="space-y-2">
              <FooterLink to="/flights">{t('flights')}</FooterLink>
              <FooterLink to="/trains">{t('trains')}</FooterLink>
              <FooterLink to="/buses">{t('buses')}</FooterLink>
              <FooterLink to="/hotels">{t('hotels')}</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t('contact')}</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-primary-400" />
                <span className="text-gray-400">Chandpur, Chittagong, Bangladesh</span>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-primary-400" />
                <a href="mailto:aljubayer92@gmail.com" className="text-gray-400 hover:text-white">
                  aljubayer92@gmail.com
                </a>
              </li>
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-primary-400" />
                <a href="tel:+8801305223310" className="text-gray-400 hover:text-white">
                  +8801305223310
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="mb-2 text-xl font-semibold">{t('subscribeTitle')}</h3>
            <p className="mb-4 text-gray-400">{t('subscribeSubtitle')}</p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-gray-200 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:w-auto sm:min-w-[300px]"
              />
              <button
                type="submit"
                className="btn-primary mt-3 rounded-md px-6 py-2 sm:ml-2 sm:mt-0"
              >
                {t('subscribeButton')}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} {t('appName')}. {t('rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Footer Link Component
const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <li>
    <Link to={to} className="text-gray-400 transition-colors hover:text-white">
      {children}
    </Link>
  </li>
);

// Social Link Component
const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({
  href,
  icon,
  label,
}) => (
  <a
    href={href}
    aria-label={label}
    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-primary-600 hover:text-white"
  >
    {icon}
  </a>
);

export default Footer;