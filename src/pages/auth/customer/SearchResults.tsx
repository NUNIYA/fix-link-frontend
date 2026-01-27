import { useState } from "react";
import { useLocation } from "react-router-dom";
import CustomerNavbar from "./components/CustomerNavbar";
import ProfessionalCard from "./components/ProfessionalCard";
import CustomerFooter from "./components/CustomerFooter";
import FiltersSidebar from "./components/FiltersSidebar";

const SearchResults = () => {
    const location = useLocation();

    // Parse query params to show in header title
    const queryParams = new URLSearchParams(location.search);
    const serviceQuery = queryParams.get("service") || "Plumbing";
    const locationQuery = queryParams.get("location") || "Addis Ababa";

    // Filter State
    const [priceMin, setPriceMin] = useState<number>(0);
    const [priceMax, setPriceMax] = useState<number>(10000);
    const [selectedRating, setSelectedRating] = useState<number>(0);
    const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
    const [verifiedOnly, setVerifiedOnly] = useState<boolean>(false);

    // New Filters
    const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

    // Mock Data for Professionals with extended fields
    const professionals = [
        {
            id: 1,
            name: "Alem Tadesse",
            role: "Plumber",
            rating: 4.9,
            quote: "Fast, reliable, and affordable plumbing solutions for your home.",
            price: 350,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlBd9E1G_iPXhVaUxUuidOCftDDUxHN5qWBaync__SWk7v86IBDaTdr6auZG42AJmEnUHUqOewxtFaZsSnwz6Vsx94afWJ8d6mERKfTvzxPNHKeWyvE5Dv31p1cD2-tDCKR7c-5lzK1oIxmaPde31dSd7dex7LtjoQarwSklKPoi3OntQ430EQMcMwue_6c7VKrW-HXF0eKXJ0IOapZvd9uKtjNUCFaXDs2OSi1DlHOLXifpqrO7Lk_-_kemAnsDiCDaejYPKNjg",
            verified: true,
            experience: "Senior",
            availability: "Today",
            languages: ["English", "Amharic"]
        },
        {
            id: 2,
            name: "Hanna Bekele",
            role: "Plumber",
            rating: 4.8,
            quote: "Your satisfaction is my priority. Quality work guaranteed.",
            price: 2600,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBa9iHjZpzWLPC8u-A7S2RSavE0HQBdYeA3wH7UYLVajk3rItsphm-DXE2re9U5SrCu8oUXnPJWS6rEwxexM1QqSL3ofVpA7QaSpImmcO5_fEgwqVVDt66CdiCTNP__Xg4rANfp-iX7BDRydHAGxl91O2geZSyTMNqa4HPaEZuw9heeEmEdb2Lmv4vjpHuA4vhz9XCm_iKExNc7F89ebCUl218n6lNKia9IboPKFVzpY2imVemz7HUzyKrZEGs7Vb6aPHsX-yXPUw",
            verified: true,
            experience: "Mid-level",
            availability: "This Week",
            languages: ["Amharic"]
        },
        {
            id: 3,
            name: "Yonas Gebru",
            role: "Plumber",
            rating: 4.7,
            quote: "Expert in residential and commercial plumbing repairs.",
            price: 3000,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMIMxpBKQ0-FNnKsA0P73VqmoE8zC-MJX6dTlQcLS2wesZ_BEjXM0sSDTum3K1A8rkm8bW3jXXgomo6XB0j62LG0YwbAHV2ylF3YV2tMLmarowJfzIyCJKTfxy-L1DpbX96OaCA7z4nLeT2lFNBWkdzmaOytnaMCDVDvIoEfDBfRqKcHtJhb9iNEWnHHpDzyJIvwP6RGyDga1T2xuwWPprB2tIIjcubNSLTdWEEskJpi0Y1-jyF8vqeCknGKip8yEtMhKLfvxKwQ",
            verified: false,
            experience: "Junior",
            availability: "Today",
            languages: ["English", "Amharic", "Oromiffa"]
        },
        {
            id: 4,
            name: "Sofia Assefa",
            role: "Plumber",
            rating: 5.0,
            quote: "Emergency services available 24/7. Your trusted expert.",
            price: 500,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2gz4gk-NChYKVBFkr0CYBK3mkRD5TB769MjJqCNj8jdTnDATiYS3uXdrHReW9O1EGqwNhy4kSfID1yCIojfOCvtynG1krVP_QQHEsOMWMWX1T1uAvBZ-md9hrTx617QSPNIXgj1mOnkru17svM4A_pt8ppnV0p2wMUs_gm_KZYfEsicteqhkvp_j2eLh8Kih3dJmmGBcF7IrLWNUe51KrgBARF6xh0jQybqBVL8G2gLWyOimRzmyqGsEs2UDWSUPAFUzORitNNg",
            verified: true,
            experience: "Senior",
            availability: "Today",
            languages: ["English"]
        },
        {
            id: 5,
            name: "Daniel Lemma",
            role: "Plumber",
            rating: 4.9,
            quote: "10+ years of experience in fixing complex pipe issues.",
            price: 450,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCYjFhA0fA2HdjJiTmJe9A5bEnx8p_WEXh9xGU0Sp-gPiexSdvnfui4Pjuzt-D802BQVrX-8koZNCMgXMi3xmz24lDW33EMEHVnO3R72hofd90shho7lX5J6VPzVDOMYCyj7Cd9sbgL1N1CzarcRjex8aDp1g86CUJX-3IpTi5I9o29gL2DXo9B84_KORzWkcGEBSUH4arhsoEaH_maZ9-wysOOytFbIBVJf21iv6gtf--SFX2yluxpVviDSo_qlsoZM237RTgQg",
            verified: false,
            experience: "Senior",
            availability: "This Week",
            languages: ["Amharic", "Tigrinya"]
        },
        {
            id: 6,
            name: "Sara Mekonnen",
            role: "Plumber",
            rating: 4.8,
            quote: "Clean, efficient work for modern homes and businesses.",
            price: 3800,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKhN0TyumIKZj7RYPgHFZ890eiZQDdkctTrs4kVPprPwq7v65YvqmboKGT5yrB6d_HqKwi8OJayJvy3faoHHgipM36bRop7GCr296KtmZpkMKAXElF6gdq8JWAmdPdbsh9cat2iQ0CfxCsa11f5Q73MgDBF_Bp3oxkExbOic5lqs-mgitrq48z8y40wN_pZRSlvxUMnx8Quj_cAKJd6HqORGW6zFFrnM796GleQpbEpmT0UJE85G1OOVgPhW4QaVvZmWcqh4-qSw",
            verified: true,
            experience: "Mid-level",
            availability: "Today",
            languages: ["English", "Amharic"]
        }
    ];

    // Filter Logic
    const filteredProfessionals = professionals.filter(pro => {
        const matchesPrice = pro.price >= priceMin && pro.price <= priceMax;
        const matchesRating = pro.rating >= selectedRating;
        const matchesVerified = verifiedOnly ? pro.verified : true;

        const matchesExperience = selectedExperience.length === 0 || selectedExperience.some(exp =>
            (exp === "Junior (1-2 yrs)" && pro.experience === "Junior") ||
            (exp === "Mid-level (3-5 yrs)" && pro.experience === "Mid-level") ||
            (exp === "Senior (5+ yrs)" && pro.experience === "Senior")
        );

        const matchesAvailability = selectedAvailability.length === 0 || selectedAvailability.includes(pro.availability);

        const matchesLanguage = selectedLanguages.length === 0 || pro.languages.some(lang => selectedLanguages.includes(lang));

        return matchesPrice && matchesRating && matchesVerified && matchesExperience && matchesAvailability && matchesLanguage;
    });

    const handleClearAll = () => {
        setPriceMin(0);  // Reset to lower wide range
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

            <main className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-wrap justify-between gap-4 mb-8">
                    <p className="text-text-primary dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                        Professionals for '{serviceQuery}' in '{locationQuery}'
                    </p>
                    <p className="text-text-secondary dark:text-gray-400 self-end mb-1">
                        Showing {filteredProfessionals.length} Result{filteredProfessionals.length !== 1 && 's'}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* FILTERS SIDEBAR */}
                    <aside className="w-full lg:w-1/4 xl:w-1/5">
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

                    {/* RESULTS LIST */}
                    <div className="w-full lg:w-3/4 xl:w-4/5">
                        {filteredProfessionals.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {filteredProfessionals.map((pro) => (
                                    <ProfessionalCard key={pro.id} pro={pro} />
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center p-12 text-center bg-white dark:bg-background-dark rounded-xl shadow-sm">
                                <span className="material-symbols-outlined text-gray-300 text-6xl mb-4">search_off</span>
                                <h3 className="text-lg font-bold text-text-primary dark:text-white">No professionals found</h3>
                                <p className="text-text-secondary dark:text-gray-400 mt-2">Try adjusting your filters to see more results.</p>
                                <button onClick={handleClearAll} className="mt-6 text-primary font-bold hover:underline">Clear Filters</button>
                            </div>
                        )}

                        {/* Pagination (Mock) */}
                        <nav aria-label="Pagination" className="mt-10 flex items-center justify-center gap-2">
                            <button className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary dark:text-gray-400 bg-white dark:bg-background-dark shadow-card hover:bg-background-light dark:hover:bg-white/10">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button className="flex h-10 w-10 items-center justify-center rounded-lg text-white bg-primary shadow-card">1</button>
                            <button className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary dark:text-gray-400 bg-white dark:bg-background-dark shadow-card hover:bg-background-light dark:hover:bg-white/10">2</button>
                            {/* ... more pages ... */}
                            <button className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary dark:text-gray-400 bg-white dark:bg-background-dark shadow-card hover:bg-background-light dark:hover:bg-white/10">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </nav>
                    </div>
                </div>
            </main>

            <CustomerFooter />
        </div>
    );
};

export default SearchResults;
