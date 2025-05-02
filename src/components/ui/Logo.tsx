import React from 'react';
import { useTranslation } from 'react-i18next';
import { Plane } from 'lucide-react';

interface LogoProps {
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  const { t } = useTranslation();
  const textColor = variant === 'light' ? 'text-white' : 'text-gray-900';

  return (
    <div className="flex items-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white">
        <Plane className="h-5 w-5 rotate-45" />
      </div>
      <div className="ml-2">
        <h1 className={`text-xl font-bold ${textColor}`}>{t('appName')}</h1>
        <p className="text-xs text-primary-600">{t('slogan')}</p>
      </div>
    </div>
  );
};

export default Logo;