import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';

const HotelSearchForm: React.FC = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Searching for hotels...');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Main Search Fields */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Destination */}
        <div className="md:col-span-2">
          <label htmlFor="destination" className="label">
            Destination
          </label>
          <input
            id="destination"
            type="text"
            className="input"
            placeholder="City, Region, or Specific Hotel"
          />
        </div>

        {/* Check-in/Check-out Dates */}
        <div>
          <label htmlFor="check-in" className="label">
            {t('checkIn')}
          </label>
          <input id="check-in" type="date" className="input" />
        </div>

        <div>
          <label htmlFor="check-out" className="label">
            {t('checkOut')}
          </label>
          <input id="check-out" type="date" className="input" />
        </div>

        {/* Rooms and Guests */}
        <div>
          <label htmlFor="rooms" className="label">
            {t('rooms')}
          </label>
          <select id="rooms" className="select">
            <option value="1">1 Room</option>
            <option value="2">2 Rooms</option>
            <option value="3">3 Rooms</option>
            <option value="4">4 Rooms</option>
          </select>
        </div>

        <div>
          <label htmlFor="guests" className="label">
            {t('guests')}
          </label>
          <select id="guests" className="select">
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5+ Guests</option>
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

export default HotelSearchForm;