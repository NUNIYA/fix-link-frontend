import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white/10 dark:bg-black/20 backdrop-blur-sm p-4 rounded-xl shadow-lg mt-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
        {/* Service Select */}
        <div className="relative md:col-span-5">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            construction
          </span>
          <select className="w-full h-14 pl-10 pr-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-[#111518] dark:text-white focus:ring-primary focus:border-primary">
            <option>Plumbing</option>
            <option>Electrical</option>
            <option>Cleaning</option>
            <option>Painting</option>
            <option>Handyman</option>
          </select>
        </div>

        {/* Zip Code Input */}
        <div className="relative md:col-span-5">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            location_on
          </span>
          <input
            type="text"
            placeholder="Enter your Location"
            className="w-full h-14 pl-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-[#111518] dark:text-white focus:ring-primary focus:border-primary"
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
