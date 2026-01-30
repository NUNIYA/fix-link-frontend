import { useState, useEffect } from "react";
import CustomerNavbar from "./components/CustomerNavbar";
import ProfessionalCard, { type Professional } from "./components/ProfessionalCard";
import CustomerFooter from "./components/CustomerFooter";
import FiltersSidebar from "./components/FiltersSidebar";
import { getProfessionals } from "../../../api/jobs.api";

const CustomerHome = () => {
  // Professionals state
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch professionals from backend
  useEffect(() => {
    getProfessionals()
      .then((data) => {
        let fetchedProfessionals = [];
        if (Array.isArray(data)) fetchedProfessionals = data;
        else if (data && Array.isArray(data.results)) fetchedProfessionals = data.results;

        // Filter only verified professionals and map to Professional type
        const verifiedProfessionals = fetchedProfessionals
          .filter((prof: any) => prof.is_verified_professional === true)
          .map((prof: any) => ({
            id: prof.id || prof.user_id,
            name: `${prof.first_name || ''} ${prof.last_name || ''}`.trim(),
            role: prof.profession || 'Professional',
            rating: prof.rating || 0,
            reviews: prof.reviews_count || 0,
            price: prof.hourly_rate || 0,
            verified: prof.is_verified_professional,
            image: prof.profile_picture || 'https://via.placeholder.com/150',
          }));

        setProfessionals(verifiedProfessionals);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch professionals", err);
        setLoading(false);
      });
  }, []);

  // Filter Visibility State
  const [showFilters, setShowFilters] = useState(false);

  // Filter States
  const [priceMin, setPriceMin] = useState<number>(0);
  const [priceMax, setPriceMax] = useState<number>(10000);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [verifiedOnly, setVerifiedOnly] = useState<boolean>(false);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const handleClearAll = () => {
    setPriceMin(0);
    setPriceMax(10000);
    setSelectedRating(0);
    setSelectedExperience([]);
    setVerifiedOnly(false);
    setSelectedAvailability([]);
    setSelectedLanguages([]);
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display">
      <CustomerNavbar />

      <main className="max-w-[1600px] w-full mx-auto px-4 md:px-8 py-6">
        {/* Header Section */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-text-primary dark:text-white">Professional Services in Addis Ababa</h1>
            <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">Found 1,248 verified professionals ready to help.</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium transition ${showFilters ? 'bg-primary text-white border-primary' : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
            >
              <span className="material-symbols-outlined text-lg">tune</span> Filters
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition">
              Sort by: Recommended <span className="material-symbols-outlined text-lg">expand_more</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 transition-all duration-300">
          {/* Conditional Sidebar */}
          {showFilters && (
            <aside className="w-full lg:w-1/4 xl:w-1/5 flex-shrink-0 animate-in slide-in-from-left-5 fade-in duration-300">
              <FiltersSidebar
                priceMin={priceMin}
                setPriceMin={setPriceMin}
                priceMax={priceMax}
                setPriceMax={setPriceMax}
                selectedRating={selectedRating}
                setSelectedRating={setSelectedRating}
                selectedExperience={selectedExperience}
                setSelectedExperience={setSelectedExperience}
                verifiedOnly={verifiedOnly}
                setVerifiedOnly={setVerifiedOnly}
                selectedAvailability={selectedAvailability}
                setSelectedAvailability={setSelectedAvailability}
                selectedLanguages={selectedLanguages}
                setSelectedLanguages={setSelectedLanguages}
                onClearAll={handleClearAll}
              />
            </aside>
          )}

          {/* Professionals Grid */}
          <div className="flex-1">
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-text-secondary dark:text-gray-400">Loading professionals...</p>
                </div>
              </div>
            ) : professionals.length === 0 ? (
              <div className="flex justify-center items-center py-20">
                <div className="text-center">
                  <p className="text-lg font-semibold text-text-primary dark:text-white mb-2">No verified professionals found</p>
                  <p className="text-sm text-text-secondary dark:text-gray-400">Check back later or adjust your filters</p>
                </div>
              </div>
            ) : (
              <div className={`grid grid-cols-1 sm:grid-cols-2 ${showFilters ? 'lg:grid-cols-3 xl:grid-cols-4' : 'lg:grid-cols-4 xl:grid-cols-4'} 2xl:grid-cols-4 gap-6`}>
                {professionals.map((pro) => (
                  <ProfessionalCard key={pro.id} pro={pro} />
                ))}
              </div>
            )}

            {/* Loading Spinner */}
            <div className="mt-12 flex flex-col items-center gap-4 py-8">
              <div className="w-10 h-10 border-4 border-slate-200 border-t-primary rounded-full animate-spin"></div>
              <p className="text-sm font-medium text-slate-500">Loading more professionals...</p>
            </div>
          </div>
        </div>
      </main>

      <CustomerFooter />
    </div>
  );
};

export default CustomerHome;
