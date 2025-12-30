import { useState } from "react";

const HeroSearch: React.FC = () => {
  const [category, setCategory] = useState<string>("Plumbing");
  const [location, setLocation] = useState<string>("");

  return (
    <section className="relative w-full">
      <div
        className="flex min-h-screen flex-col items-center justify-center gap-8 p-4 bg-cover bg-center text-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuApKZaniX5njk9gJCMeItqPjQO1P1fHE3j0lDzc4NquOcmn1faQRedlDklfoJj430AjGSdJ3cyYv5rMdZI_3IhPEmHzq1WKztRw-0eAMbKF0XOzbKKE2P7pxTiDuFfPnTN_hvGSK0LJSXesIBPEaeKSUWJWO9-oN8knTRTO2RFf847s5zRNmnZUyiVJU3eDoNs2frTZbtMkc50imNg9WW85vV728xh__eqKj0qrYuZUm66zMlCPC-SwuB8GIh8nX54OUozKdDomGQ")',
        }}
      >
        <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight">
          Your Link to Trusted Local Pros.
        </h1>

        <div className="w-full max-w-3xl bg-white/10 dark:bg-black/20 backdrop-blur-sm p-4 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 w-full">
            <div className="relative w-full md:col-span-5">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                construction
              </span>
              <select
                className="form-select w-full h-14 pl-10 pr-8 rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-[#111518] dark:text-white focus:ring-primary focus:border-primary"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>Cleaning</option>
                <option>Painting</option>
                <option>Handyman</option>
              </select>
            </div>

            <div className="relative w-full md:col-span-5">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                location_on
              </span>
              <input
                className="form-input w-full h-14 pl-10 rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-[#111518] dark:text-white focus:ring-primary focus:border-primary"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <button className="flex md:col-span-2 w-full h-14 items-center justify-center rounded-lg bg-primary text-white text-base font-bold hover:bg-primary/90">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSearch;
