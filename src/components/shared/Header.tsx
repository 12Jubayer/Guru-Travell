import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setIsLanguageMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-1 lg:space-x-2">
            <NavItem to="/" isScrolled={isScrolled}>{t('home')}</NavItem>
            <NavItem to="/flights" isScrolled={isScrolled}>{t('flights')}</NavItem>
            <NavItem to="/trains" isScrolled={isScrolled}>{t('trains')}</NavItem>
            <NavItem to="/buses" isScrolled={isScrolled}>{t('buses')}</NavItem>
            <NavItem to="/hotels" isScrolled={isScrolled}>{t('hotels')}</NavItem>
            <NavItem to="/destinations" isScrolled={isScrolled}>{t('destinations')}</NavItem>
            <NavItem to="/about" isScrolled={isScrolled}>{t('about')}</NavItem>
            <NavItem to="/contact" isScrolled={isScrolled}>{t('contact')}</NavItem>
          </ul>
        </nav>

        {/* Language Switcher */}
        <div className="relative ml-4 hidden md:block">
          <button
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100"
            onClick={toggleLanguageMenu}
          >
            <Globe size={16} className="mr-1" />
            <span>{i18n.language === 'en' ? 'EN' : 'BN'}</span>
            <ChevronDown size={16} className="ml-1" />
          </button>

          <AnimatePresence>
            {isLanguageMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-36 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5"
              >
                <button
                  onClick={() => changeLanguage('en')}
                  className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${
                    i18n.language === 'en' ? 'font-semibold text-primary-600' : ''
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage('bn')}
                  className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${
                    i18n.language === 'bn' ? 'font-semibold text-primary-600' : ''
                  }`}
                >
                  বাংলা
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleLanguageMenu}
            className="mr-4 flex items-center rounded-md p-2 transition-colors hover:bg-gray-100"
          >
            <Globe size={20} />
          </button>

          <button
            onClick={toggleMenu}
            className="rounded-md p-2 transition-colors hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Language Menu */}
      <AnimatePresence>
        {isLanguageMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-16 top-16 z-50 w-36 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 md:hidden"
          >
            <button
              onClick={() => changeLanguage('en')}
              className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${
                i18n.language === 'en' ? 'font-semibold text-primary-600' : ''
              }`}
            >
              English
            </button>
            <button
              onClick={() => changeLanguage('bn')}
              className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${
                i18n.language === 'bn' ? 'font-semibold text-primary-600' : ''
              }`}
            >
              বাংলা
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute left-0 right-0 z-40 overflow-hidden bg-white shadow-lg"
          >
            <nav className="container-custom py-4">
              <ul className="space-y-2">
                <MobileNavItem to="/">{t('home')}</MobileNavItem>
                <MobileNavItem to="/flights">{t('flights')}</MobileNavItem>
                <MobileNavItem to="/trains">{t('trains')}</MobileNavItem>
                <MobileNavItem to="/buses">{t('buses')}</MobileNavItem>
                <MobileNavItem to="/hotels">{t('hotels')}</MobileNavItem>
                <MobileNavItem to="/destinations">{t('destinations')}</MobileNavItem>
                <MobileNavItem to="/about">{t('about')}</MobileNavItem>
                <MobileNavItem to="/contact">{t('contact')}</MobileNavItem>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Desktop NavItem component
const NavItem: React.FC<{ to: string; children: React.ReactNode; isScrolled: boolean }> = ({ to, children, isScrolled }) => {
  const location = useLocation();
  const isActive = location.pathname === to || 
    (to !== '/' && location.pathname.startsWith(to));

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `relative block px-3 py-2 text-sm font-medium transition-colors hover:text-primary-600 ${
            isActive ? 'text-primary-600' : isScrolled ? 'text-gray-800' : 'text-gray-800'
          }`
        }
      >
        {children}
        {isActive && (
          <motion.span
            layoutId="navHighlight"
            className="absolute bottom-0 left-0 h-0.5 w-full bg-primary-600"
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />
        )}
      </NavLink>
    </li>
  );
};

// Mobile NavItem component
const MobileNavItem: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to || 
    (to !== '/' && location.pathname.startsWith(to));

  return (
    <li>
      <NavLink
        to={to}
        className={`block rounded-md px-4 py-3 text-base font-medium transition-colors ${
          isActive
            ? 'bg-primary-50 text-primary-600'
            : 'text-gray-800 hover:bg-gray-50'
        }`}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default Header;