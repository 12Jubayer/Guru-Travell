import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRightLeft, Search } from 'lucide-react';

const FlightSearchForm: React.FC = () => {
  const { t } = useTranslation();
  const [tripType, setTripType] = useState<'roundtrip' | 'oneway'>('roundtrip');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSwapLocations = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Searching for flights...');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Trip Type Selection */}
      <div className="mb-4 flex space-x-4">
        <label className="flex items-center">
          <input
            type="radio"
            checked={tripType === 'roundtrip'}
            onChange={() => setTripType('roundtrip')}
            className="mr-2 h-4 w-4 text-primary-600 focus:ring-primary-500"
          />
          <span>Round Trip</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            checked={tripType === 'oneway'}
            onChange={() => setTripType('oneway')}
            className="mr-2 h-4 w-4 text-primary-600 focus:ring-primary-500"
          />
          <span>One Way</span>
        </label>
      </div>

      {/* Main Search Fields */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* From-To Fields */}
        <div className="relative md:col-span-2">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="from" className="label">
                {t('from')}
              </label>
              <input
                id="from"
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="input"
                placeholder="City or Airport"
              />
            </div>

            {/* Swap Button (Desktop) */}
            <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 md:block">
              <button
                type="button"
                onClick={handleSwapLocations}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-500 shadow-md transition-all hover:bg-primary-50 hover:text-primary-600"
              >
                <ArrowRightLeft size={16} />
              </button>
            </div>

            <div>
              <label htmlFor="to" className="label">
                {t('to')}
              </label>
              <input
                id="to"
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="input"
                placeholder="City or Airport"
              />
            </div>
          </div>

          {/* Swap Button (Mobile) */}
          <div className="mt-2 flex justify-center md:hidden">
            <button
              type="button"
              onClick={handleSwapLocations}
              className="flex items-center text-sm text-gray-500 hover:text-primary-600"
            >
              <ArrowRightLeft size={16} className="mr-1" />
              <span>Swap</span>
            </button>
          </div>
        </div>

        {/* Dates */}
        <div>
          <label htmlFor="depart-date" className="label">
            {t('departDate')}
          </label>
          <input id="depart-date" type="date" className="input" />
        </div>

        <div>
          <label htmlFor="return-date" className="label">
            {t('returnDate')}
          </label>
          <input
            id="return-date"
            type="date"
            className="input"
            disabled={tripType === 'oneway'}
          />
        </div>

        {/* Passengers and Class */}
        <div>
          <label htmlFor="passengers" className="label">
            {t('passengers')}
          </label>
          <select id="passengers" className="select">
            <option value="1">1 {t('adult')}</option>
            <option value="2">2 {t('adult')}s</option>
            <option value="3">3 {t('adult')}s</option>
            <option value="4">4 {t('adult')}s</option>
          </select>
        </div>

        <div>
          <label htmlFor="class" className="label">
            {t('cabin')}
          </label>
          <select id="class" className="select">
            <option value="economy">{t('economy')}</option>
            <option value="premium">{t('premium')}</option>
            <option value="business">{t('business')}</option>
            <option value="first">{t('first')}</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="btn-primary inline-flex min-w-[150px] items-center justify-center py-2.5"
        >
          <Search size={18} className="mr-2" />
          {t('search')}
        </button>
      </div>
    </form>
  );
};

export default FlightSearchForm;