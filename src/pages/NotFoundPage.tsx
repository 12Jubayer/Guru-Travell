import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen items-center justify-center pt-20">
      <div className="container-custom text-center">
        <div className="mb-6 text-primary-600">
          <svg
            className="mx-auto h-24 w-24"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t('notFoundTitle')}</h1>
        <p className="mb-8 text-lg text-gray-600">{t('notFoundSubtitle')}</p>
        <Link
          to="/"
          className="btn-primary inline-flex items-center px-6 py-3"
        >
          <Home size={18} className="mr-2" />
          {t('backToHome')}
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;