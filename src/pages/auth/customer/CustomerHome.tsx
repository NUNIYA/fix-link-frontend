import { useState } from "react";
import CustomerNavbar from "./components/CustomerNavbar";
import ProfessionalCard, { type Professional } from "./components/ProfessionalCard";
import CustomerFooter from "./components/CustomerFooter";
import FiltersSidebar from "./components/FiltersSidebar";

const professionals: Professional[] = [
  { id: 1, name: "Abebe Kebede", role: "Electrician", rating: 4.9, reviews: 210, price: 350, verified: true, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmgxSEx2xMjcFJfS4jAECT_5XL227HLiUOodmo8_WbN-KnnDDylatBYVl2m2XO1dXMcebqyAEhi5yXD000GZ05ob8ItJEQuaXPHeaLdafyUs2MEb0MX-NHb1lKXauXGB8nxSp_qgBpCGtAimomqUuMOgidgd5zSfqplsj9GMVxFeG9H3MxwSr4cmP6vcSaIkMJkxUbWaCeHSHkfJDNech2ivcGmhcoelX0J9jiW24TaOlPnfRVG_Pjlu_xV0ydmzjMZkfh-06TAQ" },
  { id: 2, name: "Hana Girma", role: "Plumber", rating: 5.0, reviews: 112, price: 480, verified: true, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo9nN5-cF_bmF7iyl-CwCmYJLD7I8ks-vh4prm2QkY5AoMUpJOksJQJeX39wkWW7E_AewqxyB8bwlsyJ70En-3HsG9DB6zJpA0BL3Ch30VV_dPWwv4JJehg_f04AOBolGBJu5WcVg9e7IY1RaH4ACC3TvhcVdUT5iwMhnBPcyGNI5_28r5DcGnkVBGDdUfxv3TCrLsKmSYCRqzCQDZErxIe8Ai7_VQSP4MB3YDCrwRt_fovc3op9M1u8MJXbKCTFZ_qisOAcyD_g" },
  { id: 3, name: "Fatuma Ali", role: "Cleaner", rating: 5.0, reviews: 210, price: 250, verified: true, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9J86q8_Hk2g0wDQ2JbMDOpMZ_N96aestWLieKOgr6FLG-m7164wDulwZPWw1qfcXNWwlbbdZIb1mkLWmIJBurLTb48IZ1ICAgAyl3X1-wT4DGPlX6HvpJ-STb8P65QwmDeuBCgfMRlYflRBc4FXdjzsMBCMX8xb5oenQX0aEAO3BvArp2LpbiOpnzO7pHNsbZxSrg6A-e39IbQotQMzs48GOWId8oO-FbWmtlciOtXFCDbd0i3dqVx8yqfCY8CkvJZSD8AJB2Rw" },
  { id: 4, name: "Yosef Tadesse", role: "Handyman", rating: 4.9, reviews: 330, price: 300, verified: true, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8ygr7bBgCYYzDjrNMb6y6FQCZKFSxJV1OVQ21yAAAAI7eyr96Hg6b_S16zyvMHaxDVPQNnN8kFs8_8ff4F4jX8Tm_kTSaJcoKmdd6dXlBB5EY0tFvN3jNUHhnvtSDsLuIPu_ZHNkIowhRfPsg-6NlZlb-rNr3rnjVfdKM68yayRDJwtQGqDo5Kap-TqLugXqoPZFxsNFxU8gIVpiBbd6ARauflph5ssVlb7O2cfZPlywehhslMNJfjGM9dwh8Vpb4DZ-uvuJlKA" },
  { id: 5, name: "Lia Mekonnen", role: "Painter", rating: 4.7, reviews: 95, price: 500, verified: true, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAg2SAX2-voYRAHh5VNxxwgmOp3s_O6tQx6s7LpBcXduL1mKRahDkC_RhYMW14D3Z8AserXN-LGMwaOhJjMy2FGXwMxaBGdGaPLHjC-4oTdomEA9rwVQ3PpgY43OSmFrB08vI98-NKo-iIkGwG6Y5gEeB39cmuqvYzIfugSRB_2pkd1Qt8T4kbJRhGAYURrq2hA0t4u3zYuLfgrHg8vDU2GL7Gwr9zrv368DVUsHmb2IGaNsaQ2Bk7t0P_8mH2w0RUP-KWHpZB4ow" },
  { id: 6, name: "Samuel Desta", role: "Tutor", rating: 5.0, reviews: 45, price: 650, verified: true, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUiJfb8TkHKX_Ge2hDn2rx1euf7Xn-3pV5ANk7yPBAFzvKf9nZC8ziGOdeK-paCoVN6rsTaJDC_WED_g8Z7RaWZeE8KQYUmh5fkW0p3H9l_eDVqP6x6rMCcAcTes-ZntCLGZ165PQuC2KjYYBlmnBfcsrd2eXk2w-J_M_BXJTL9bV1TUCmr3i7hv0d7dF2m6yjvdZzS8-p8YZAfkN4-AICpt7sYaIKt0s6TPMlKZuTUC9M8uxv5oUJFQznmpUIJiYPIbfceoYTxA" },
  { id: 7, name: "Sena Belay", role: "Plumber", rating: 4.9, reviews: 202, price: 450, verified: true, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgLvkShQpTmqEobU_cITowdg32CtqZzWoIAeIyXOw51pcFUKyJbEf4elfIQpYBc5fqLRmIsNTjHkjQLq9Zzd35n_49_q3deXhBV-aDt68pilNTrs4JA6lj1aRfTGl47Tmu2R3ERZ-2TjMdo6sq41js63fTdVKTWTYBxF_xCBJPh9_MPqX3sPL2WAtUjfuMS1RCLB8CZv521Mo2YheBjSckph4PscqJr4vFLWc_CfLZ2yykJfPHc23s9PleB7NVyOnA7HyCqcCwtA" },
  { id: 8, name: "Dawit Kassahun", role: "Electrician", rating: 4.8, reviews: 318, price: 380, verified: true, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAI09iX0uUqcj-Xx-2W8cPo-_Q8hnebhl42zLY8eKg3y3eiVycuURFjzUZx_VZcL3CoHwD0nepU9I3Pt4ysMxF5HEThYSAX-1dNHa_dO4-shygkWKaQRuTRwX41oYGnFQVkErzJde9NRU1APaDRiMC8UwkBw4GyFNX_mEANBPThX7FBtoW9sQjawRHhi1IO-FIxlPoKK_rV5BZQvACalf2lmO40FbOyW8e0oHltunL_leQqUiQp1OwituW1VXIiu8OQwXcR7-XfRQ" },
  { id: 9, name: "Marta Alemu", role: "Beautician", rating: 4.9, reviews: 185, price: 400, verified: true, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmgxSEx2xMjcFJfS4jAECT_5XL227HLiUOodmo8_WbN-KnnDDylatBYVl2m2XO1dXMcebqyAEhi5yXD000GZ05ob8ItJEQuaXPHeaLdafyUs2MEb0MX-NHb1lKXauXGB8nxSp_qgBpCGtAimomqUuMOgidgd5zSfqplsj9GMVxFeG9H3MxwSr4cmP6vcSaIkMJkxUbWaCeHSHkfJDNech2ivcGmhcoelX0J9jiW24TaOlPnfRVG_Pjlu_xV0ydmzjMZkfh-06TAQ" },
  { id: 10, name: "Brook Solomon", role: "Carpenter", rating: 4.6, reviews: 56, price: 550, verified: true, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8ygr7bBgCYYzDjrNMb6y6FQCZKFSxJV1OVQ21yAAAAI7eyr96Hg6b_S16zyvMHaxDVPQNnN8kFs8_8ff4F4jX8Tm_kTSaJcoKmdd6dXlBB5EY0tFvN3jNUHhnvtSDsLuIPu_ZHNkIowhRfPsg-6NlZlb-rNr3rnjVfdKM68yayRDJwtQGqDo5Kap-TqLugXqoPZFxsNFxU8gIVpiBbd6ARauflph5ssVlb7O2cfZPlywehhslMNJfjGM9dwh8Vpb4DZ-uvuJlKA" },
  { id: 11, name: "Elias Melaku", role: "Tiler", rating: 4.8, reviews: 89, price: 420, verified: true, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmgxSEx2xMjcFJfS4jAECT_5XL227HLiUOodmo8_WbN-KnnDDylatBYVl2m2XO1dXMcebqyAEhi5yXD000GZ05ob8ItJEQuaXPHeaLdafyUs2MEb0MX-NHb1lKXauXGB8nxSp_qgBpCGtAimomqUuMOgidgd5zSfqplsj9GMVxFeG9H3MxwSr4cmP6vcSaIkMJkxUbWaCeHSHkfJDNech2ivcGmhcoelX0J9jiW24TaOlPnfRVG_Pjlu_xV0ydmzjMZkfh-06TAQ" },
  { id: 12, name: "Tigist Hailu", role: "Caterer", rating: 5.0, reviews: 142, price: 800, verified: true, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo9nN5-cF_bmF7iyl-CwCmYJLD7I8ks-vh4prm2QkY5AoMUpJOksJQJeX39wkWW7E_AewqxyB8bwlsyJ70En-3HsG9DB6zJpA0BL3Ch30VV_dPWwv4JJehg_f04AOBolGBJu5WcVg9e7IY1RaH4ACC3TvhcVdUT5iwMhnBPcyGNI5_28r5DcGnkVBGDdUfxv3TCrLsKmSYCRqzCQDZErxIe8Ai7_VQSP4MB3YDCrwRt_fovc3op9M1u8MJXbKCTFZ_qisOAcyD_g" },
  { id: 13, name: "Zenebech Teklu", role: "Laundry Service", rating: 4.9, reviews: 320, price: 200, verified: true, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9J86q8_Hk2g0wDQ2JbMDOpMZ_N96aestWLieKOgr6FLG-m7164wDulwZPWw1qfcXNWwlbbdZIb1mkLWmIJBurLTb48IZ1ICAgAyl3X1-wT4DGPlX6HvpJ-STb8P65QwmDeuBCgfMRlYflRBc4FXdjzsMBCMX8xb5oenQX0aEAO3BvArp2LpbiOpnzO7pHNsbZxSrg6A-e39IbQotQMzs48GOWId8oO-FbWmtlciOtXFCDbd0i3dqVx8yqfCY8CkvJZSD8AJB2Rw" },
  { id: 14, name: "Tamrat Bekele", role: "Mechanic", rating: 4.7, reviews: 156, price: 600, verified: true, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8ygr7bBgCYYzDjrNMb6y6FQCZKFSxJV1OVQ21yAAAAI7eyr96Hg6b_S16zyvMHaxDVPQNnN8kFs8_8ff4F4jX8Tm_kTSaJcoKmdd6dXlBB5EY0tFvN3jNUHhnvtSDsLuIPu_ZHNkIowhRfPsg-6NlZlb-rNr3rnjVfdKM68yayRDJwtQGqDo5Kap-TqLugXqoPZFxsNFxU8gIVpiBbd6ARauflph5ssVlb7O2cfZPlywehhslMNJfjGM9dwh8Vpb4DZ-uvuJlKA" },
  { id: 15, name: "Rahel Tesfaye", role: "Makeup Artist", rating: 4.9, reviews: 92, price: 450, verified: true, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAg2SAX2-voYRAHh5VNxxwgmOp3s_O6tQx6s7LpBcXduL1mKRahDkC_RhYMW14D3Z8AserXN-LGMwaOhJjMy2FGXwMxaBGdGaPLHjC-4oTdomEA9rwVQ3PpgY43OSmFrB08vI98-NKo-iIkGwG6Y5gEeB39cmuqvYzIfugSRB_2pkd1Qt8T4kbJRhGAYURrq2hA0t4u3zYuLfgrHg8vDU2GL7Gwr9zrv368DVUsHmb2IGaNsaQ2Bk7t0P_8mH2w0RUP-KWHpZB4ow" },
  { id: 16, name: "Abraham Goshu", role: "Gardener", rating: 4.8, reviews: 64, price: 300, verified: true, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgLvkShQpTmqEobU_cITowdg32CtqZzWoIAeIyXOw51pcFUKyJbEf4elfIQpYBc5fqLRmIsNTjHkjQLq9Zzd35n_49_q3deXhBV-aDt68pilNTrs4JA6lj1aRfTGl47Tmu2R3ERZ-2TjMdo6sq41js63fTdVKTWTYBxF_xCBJPh9_MPqX3sPL2WAtUjfuMS1RCLB8CZv521Mo2YheBjSckph4PscqJr4vFLWc_CfLZ2yykJfPHc23s9PleB7NVyOnA7HyCqcCwtA" },
  { id: 17, name: "Mulugeta Abate", role: "Upholsterer", rating: 5.0, reviews: 28, price: 750, verified: true, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUiJfb8TkHKX_Ge2hDn2rx1euf7Xn-3pV5ANk7yPBAFzvKf9nZC8ziGOdeK-paCoVN6rsTaJDC_WED_g8Z7RaWZeE8KQYUmh5fkW0p3H9l_eDVqP6x6rMCcAcTes-ZntCLGZ165PQuC2KjYYBlmnBfcsrd2eXk2w-J_M_BXJTL9bV1TUCmr3i7hv0d7dF2m6yjvdZzS8-p8YZAfkN4-AICpt7sYaIKt0s6TPMlKZuTUC9M8uxv5oUJFQznmpUIJiYPIbfceoYTxA" },
  { id: 18, name: "Semira Mohammed", role: "Housekeeper", rating: 4.8, reviews: 114, price: 280, verified: true, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmgxSEx2xMjcFJfS4jAECT_5XL227HLiUOodmo8_WbN-KnnDDylatBYVl2m2XO1dXMcebqyAEhi5yXD000GZ05ob8ItJEQuaXPHeaLdafyUs2MEb0MX-NHb1lKXauXGB8nxSp_qgBpCGtAimomqUuMOgidgd5zSfqplsj9GMVxFeG9H3MxwSr4cmP6vcSaIkMJkxUbWaCeHSHkfJDNech2ivcGmhcoelX0J9jiW24TaOlPnfRVG_Pjlu_xV0ydmzjMZkfh-06TAQ" },
  { id: 19, name: "Kassa Gezahegn", role: "Locksmith", rating: 4.9, reviews: 42, price: 400, verified: true, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8ygr7bBgCYYzDjrNMb6y6FQCZKFSxJV1OVQ21yAAAAI7eyr96Hg6b_S16zyvMHaxDVPQNnN8kFs8_8ff4F4jX8Tm_kTSaJcoKmdd6dXlBB5EY0tFvN3jNUHhnvtSDsLuIPu_ZHNkIowhRfPsg-6NlZlb-rNr3rnjVfdKM68yayRDJwtQGqDo5Kap-TqLugXqoPZFxsNFxU8gIVpiBbd6ARauflph5ssVlb7O2cfZPlywehhslMNJfjGM9dwh8Vpb4DZ-uvuJlKA" },
  { id: 20, name: "Yitbarek Belachew", role: "Pest Control", rating: 4.8, reviews: 178, price: 550, verified: true, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAI09iX0uUqcj-Xx-2W8cPo-_Q8hnebhl42zLY8eKg3y3eiVycuURFjzUZx_VZcL3CoHwD0nepU9I3Pt4ysMxF5HEThYSAX-1dNHa_dO4-shygkWKaQRuTRwX41oYGnFQVkErzJde9NRU1APaDRiMC8UwkBw4GyFNX_mEANBPThX7FBtoW9sQjawRHhi1IO-FIxlPoKK_rV5BZQvACalf2lmO40FbOyW8e0oHltunL_leQqUiQp1OwituW1VXIiu8OQwXcR7-XfRQ" },
];

const CustomerHome = () => {
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
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${showFilters ? 'lg:grid-cols-3 xl:grid-cols-4' : 'lg:grid-cols-4 xl:grid-cols-4'} 2xl:grid-cols-4 gap-6`}>
              {professionals.map((pro) => (
                <ProfessionalCard key={pro.id} pro={pro} />
              ))}
            </div>

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
