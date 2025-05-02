import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRightLeft, Search } from 'lucide-react';

const TrainSearchForm: React.FC = () => {
  const { t } = useTranslation();
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');

  const handleSwapLocations = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Searching for trains...');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Main Search Fields */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* From-To Fields */}
        <div className="relative md:col-span-2">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="train-from" className="label">
                {t('from')}
              </label>
              <input
                id="train-from"
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="input"
                placeholder="City or Station"
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
              <label htmlFor="train-to" className="label">
                {t('to')}
              </label>
              <input
                id="train-to"
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="input"
                placeholder="City or Station"
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

        {/* Date */}
        <div>
          <label htmlFor="train-date" className="label">
            {t('departDate')}
          </label>
          <input id="train-date" type="date" className="input" />
        </div>

        {/* Passengers */}
        <div>
          <label htmlFor="train-passengers" className="label">
            {t('passengers')}
          </label>
          <select id="train-passengers" className="select">
            <option value="1">1 {t('adult')}</option>
            <option value="2">2 {t('adult')}s</option>
            <option value="3">3 {t('adult')}s</option>
            <option value="4">4 {t('adult')}s</option>
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

export default TrainSearchForm;