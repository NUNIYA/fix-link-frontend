import React, { useState } from "react";
import LocationInput from "../../../components/LocationInput";

const SearchBar: React.FC = () => {
  const [location, setLocation] = useState("");

  return (
    <div className="max-w-3xl mx-auto bg-white/10 dark:bg-black/20 backdrop-blur-sm p-4 rounded-xl shadow-lg mt-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
        {/* Service Select */}
        <div className="relative md:col-span-5">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            category
          </span>
          <select className="w-full h-14 pl-10 pr-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-[#111518] dark:text-white focus:ring-primary focus:border-primary">
            <option>Plumbing</option>
            <option>Electrical</option>
            <option>Cleaning</option>
            <option>Painting</option>
            <option>Handyman</option>
          </select>
        </div>

        {/* Location Input (Auto-Suggest) */}
        <div className="relative md:col-span-5">
          <LocationInput
            className="form-input w-full h-14 pl-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-[#111518] dark:text-white focus:ring-primary focus:border-primary"
            value={location}
            onSelect={(loc: string) => setLocation(loc)}
            icon={
              <span className="material-symbols-outlined text-gray-500">
                location_on
              </span>
            }
          />
        </div>

        {/* Search Button */}
        <button className="md:col-span-2 h-14 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-colors">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
