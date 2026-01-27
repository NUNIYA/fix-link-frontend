import React from 'react';
import { useNavigate } from "react-router-dom";
import CustomerNavbar from './components/CustomerNavbar';
import CustomerFooter from './components/CustomerFooter';

const ProfessionalProfile = () => {
    const navigate = useNavigate();

    const handleChat = () => {
        navigate('/customer/messages/1');
    };

    // Mock Data (In a real app, this would come from an API based on the ID)
    const professional = {
        name: "Jane Doe",
        role: "Certified Master Electrician",
        verified: true,
        rating: 4.9,
        reviewsCount: 128,
        experience: "12+ years experience",
        location: "Addis Ababa, Ethiopia",
        coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVqLxahM8mBBENqzv_93ZaZeNL1f0E4OzaxyeOFzKw3OmNbp_zAyVx3JtjzUkCcPITJYiDapRmZtn_EutJF9SyzhnQ47oEkrtpf_jkjYABsBbV2tyj8e9WaqpeNQBOKuU9gk8fPtFDxKzEmVI1H1HYd1VtpX_XZnxZV8jzd8tGafsAt9maXvNzTDR8sbsW1KfEJQ-3aQeOKZar1jTjMwaVQsT8m4MKp1md-ihGBr36VqI7SnxPjsrNrGTqY0ua9N7_QRGDkEMx3Q",
        profileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYwFXuI6lt-gjBHoaWhwxkjUA_xtTpRKyIdtnF8EzLIQGK6h5K52FCM_vPalI6IAEHd1eqig6reNGAWT7SZss4x0CKmvpcWzX0zP4y5bpeFKkWnhmD5pOCZLfomXowBI6P9owqtHpG9RY0IRNMi6DHLlwrNE_gxiXizxm24o0xBuAxHw6OgZQJqgXyiFVFXBxEgWMpijasK8ZYkW1g_Zej3BW5jkaQ6aH4rWfd1GRDC3gD25cYAqC6wwpTQuVyDDAd-LsNhyY9TQ",
        about: "With over 12 years of experience serving the Addis Ababa metropolitan area, I specialize in high-end residential wiring, commercial energy systems, and modern smart home integrations. My work is defined by precision, safety adherence, and a commitment to providing the most efficient electrical solutions for my clients. Whether it's a small repair or a large-scale industrial installation, I bring the same level of professionalism and care to every project.",
        skills: ["Residential Wiring", "Commercial Systems", "Smart Home Setup", "Panel Upgrades", "Solar Integration"],
        languages: ["Amharic (Native)", "English (Fluent)"],
        portfolio: [
            { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-ICmJzEkJysixT_89xmNvQKp9HwpNkhXJ0VPDeTC2X6qXmxt1ILxzhCareoCQDyQZ1yso7CjO3nhqVq4NY0W-1-qdUYIirqB0KF3SDklgYOopHg9Jh8ZVAZH6BZjwtPI0LFtvULHBMA59WpybL4yUkQqDFYmP20doqEPupcEJ_scNN8ouPLC-QjBfB0qjEc7EsQOVJiqFJiip8rYjfQjFPjKZ6-CxV0RkUoaS4LdbOLP_GMtY04XXJK33P7rGrKAI_oNzEPv9oQ", title: "Kitchen Illumination" },
            { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTa7vavLGz3JU_q8MPADOVQpf2Ho4y_j7y09JmxJKAAIwS9oaEnIXrhKpi6G4QjCrprcNZnJnDDzqnwXm7zboSz3hehqq7l1ra56_OR4jF8NkJiMLtFryRZYaf_nSMLK-4lNrA5Ssj6nu0gzsGBaxnrRi7wXcwlM5hUugpBPvlZiKvinrQzebM7B4i1tM8-BfntU35YpSWtQ-Wt_qrU6vucVr0Gr-DQYBSy0uxl8lWqKK7IsSpzEqFMuoMHFZAqruyt3LahAckGA", title: "Main Panel Upgrade" },
            { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAN6DR-9il7FzYttFR3QwEwoTGXJE_-7taTA5yqw6XveIzHw_9f02wrZQWTFKwucTWFF4fRS0ulepPuFXkxz3gJkefjR3qiqqlbvtwhqGnCgJohi89EHrdzRDSoxqz87vBr5ipw44raEh9PrtJrzWpsFR4n_kHjz5IXnnrd9VrWpj7GYfLTPZJ_xuvqfFbRU9RDpBwE5MEUuogd9fDTVUjbsWF_bM2ZWXMrEyrXMossjD99g0ojpeQovc8GV4icOv90yIsar8go6A", title: "Landscape Lighting" },
            { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHZA8vwQ8l5_wzdMVs0Yx_UZG4YsTPr9eEXmpI-Dz1lVEoPHLHw3f9ogp7qJxVU1F6GSkB91iYyjppHvBJkmEmVV7wOleXI8EAkIzZs1NFAHak-ZagbyQVhvNpYufwPbq7Oa6OfrqEPBtiqZSkG0fxEWIzTSWXf7LxELodeqRaRzXzUo6MPaXyyNSr57AC6Xa0OzopGjAHXE6Cj1HDc3qGn2yCCUNWaIGhZ7utof2fz2l1mBs1wHgcbcNMfODPBpv_AJbFqk9--A", title: "Corporate Office Suite" },
            { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCT6fSz8iR-SotIV_oeMmcaT15hRm7wuQ--3E2Bf2lkLw0cDqqahugmcXBI-euZuDINvNloDC7xbSpEKC6x4NfvJ9vcqXBaRx20gyJ9EVMP6-vq-5aEW5E8JN9aLozwiy5OSZuQOwMr_VpbCT2pQEJOKKH7uwEnqA194upXYjMtANgBqkNEeWROacHtZhztsBZLkY8oaT2RWfwsA71FHh9nqQrUvLTLLyxM7fUawIAjd0kjWpC6qqp52AiKhUSTbsd2gk3ZwRz6tA", title: "Smart EV Charging" },
            { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUE8R2bh2fB9iX9uV0dlG7_GirouqztSeEHZkQTpWHp7rWGz7E7SlTie-W8oOtjrzNJwsVhcF9Hzu3-fDvNaK8Xcobf1t4Lv_vzXw5sZc7aLXKMGDgN647Lo55MjJkehc9xLnngcyzE_3kPYBcJfgYWUl08PaOgr-u86Dxp8aqAsV-PfoM9beVAAkNHOE25bpMhBpupu9Lz4VWVJYumiQs7cIyRqHsw8-E9wZ5DowDWZYSMQQs4OQP3XGMqWDoPswTejxTmqtJ-g", title: "Retail Lighting Design" }
        ],
        reviews: [
            { name: "Elias Tesfaye", date: "Oct 12, 2024", rating: 5, content: "Jane was exceptionally professional. She rewired our entire office building in Bole and did it ahead of schedule. Highly recommend her for any commercial work.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDKa3eBgX2EeYh5Q75Q2Hbj0WjYe9IsF6t8KEV_eon4ge-xUBSkfEBHSsNHawHOdb8_fds3jx3ExL153TixBekkr3Gz2QpCq4RQ9-FSEUOcNrjf8HbC1zxP0hZNWNoyhndiVgLFPSTUw7O7Lvnru6ec_4UfiadbcECznu62_dPvFQqcAtec45a__4aGi6kJseaX_iFqEC9P2RU8uQ68dB10a1V-aUMlf9-9imF_FaN_zP4LbJDc7icuIUD_qu_ZaTI-EqxsJh-FQ" },
            { name: "Aster Bekele", date: "Sep 28, 2024", rating: 5, content: "Excellent service. She explained everything clearly before starting and fixed our smart lighting system that three other people couldn't solve. Best electrician in Addis.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACoZiPLzz95MnWiTcKwFSDZIsMZdrgjDIRDAIOqrKhbRCGL6qFqAjxRvHPLMkhHDRLtHgIqSwAlAcabY3HJ6Tp2uLQjyed__myy7gGZM4soPbPodDahgHZhXsAx1txGP4Tjv0jV1sdrDTgHkD5r71EUwRTOEkT6lmny6hAzI9b9hHyZ-rm0aXh8W24KqJFLflvC-MXinoXnPwcOPz2JG3stMIbPBiAaSKMMcd0dN8qbqLqsmG7JxoYHmckq-0oVZEa7fj9ew0Jcg" }
        ]
    };

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-text-primary dark:text-white">
            <CustomerNavbar />

            <main className="w-full max-w-7xl mx-auto px-4 sm:px-10 py-8">
                <div className="w-full rounded-2xl overflow-hidden shadow-soft bg-white dark:bg-card-dark mb-8 border border-border-color dark:border-slate-800">
                    <div
                        className="h-56 bg-cover bg-center"
                        style={{ backgroundImage: `url('${professional.coverImage}')` }}
                    ></div>
                    <div className="p-8">
                        <div className="flex flex-col md:flex-row -mt-28 items-end">
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-2xl size-40 border-4 border-white dark:border-card-dark shadow-lg"
                                style={{ backgroundImage: `url('${professional.profileImage}')` }}
                            ></div>
                            <div className="flex-1 flex flex-col md:flex-row justify-between items-start md:items-end w-full mt-6 md:mt-0 md:ml-8">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                        <h1 className="text-3xl font-extrabold tracking-tight text-text-primary dark:text-white">{professional.name}</h1>
                                        {professional.verified && (
                                            <span className="material-symbols-outlined text-primary text-2xl" title="Verified Professional">verified</span>
                                        )}
                                    </div>
                                    <p className="text-xl font-medium text-text-secondary dark:text-gray-400 mt-1">{professional.role}</p>
                                    <div className="flex items-center gap-4 text-sm text-text-secondary dark:text-gray-400 mt-3 flex-wrap">
                                        <div className="flex items-center gap-1.5 px-3 py-1 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-500 rounded-full">
                                            <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                            <span className="font-bold">{professional.rating}</span>
                                            <span className="text-xs opacity-75">({professional.reviewsCount} reviews)</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-base">work_history</span>
                                            <span>{professional.experience}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-base">location_on</span>
                                            <span>{professional.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full md:w-auto items-center gap-3 mt-6 md:mt-0">
                                    <button className="flex-1 md:flex-auto flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-white shadow-lg hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-95">
                                        <span>Request Estimate</span>
                                    </button>
                                    <button onClick={handleChat} className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-card-dark text-text-secondary dark:text-gray-400 hover:text-primary hover:border-primary transition-all">
                                        <span className="material-symbols-outlined">chat_bubble</span>
                                    </button>
                                    <button className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-card-dark text-text-secondary dark:text-gray-400 hover:text-pink-500 hover:border-pink-200 transition-all">
                                        <span className="material-symbols-outlined">favorite_border</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <aside className="w-full lg:w-72 flex-shrink-0">
                        <div className="sticky top-28 space-y-4">
                            <nav className="p-3 rounded-2xl shadow-soft bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800">
                                <div className="flex flex-col gap-1">
                                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-bold text-sm transition-all" href="#about">
                                        <span className="material-symbols-outlined">person</span>
                                        <span>About</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-text-secondary dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-all font-semibold text-sm" href="#portfolio">
                                        <span className="material-symbols-outlined">grid_view</span>
                                        <span>Portfolio</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-text-secondary dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-all font-semibold text-sm" href="#reviews">
                                        <span className="material-symbols-outlined">star_rate</span>
                                        <span>Reviews</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-text-secondary dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-all font-semibold text-sm" href="#availability">
                                        <span className="material-symbols-outlined">calendar_today</span>
                                        <span>Availability</span>
                                    </a>
                                </div>
                            </nav>
                            <div className="p-6 rounded-2xl shadow-soft bg-primary text-white">
                                <h4 className="font-bold mb-2">Need a custom quote?</h4>
                                <p className="text-xs opacity-90 mb-4 leading-relaxed">Jane typically responds within 2 hours for electrical service inquiries.</p>
                                <button className="w-full py-2.5 bg-white text-primary rounded-lg text-sm font-bold hover:bg-opacity-90 transition-colors">Contact Professional</button>
                            </div>
                        </div>
                    </aside>

                    <div className="flex-1 flex flex-col gap-8">
                        <section className="p-8 rounded-2xl shadow-soft bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800 scroll-mt-28" id="about">
                            <h2 className="text-2xl font-bold tracking-tight mb-6 text-text-primary dark:text-white">About Jane</h2>
                            <p className="text-text-secondary dark:text-gray-400 leading-relaxed text-lg">
                                {professional.about}
                            </p>
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-text-primary dark:text-white">
                                        <span className="material-symbols-outlined text-primary">bolt</span> Skills
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {professional.skills.map(skill => (
                                            <span key={skill} className="px-4 py-1.5 text-sm rounded-full bg-primary/5 text-primary font-semibold border border-primary/10">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-text-primary dark:text-white">
                                        <span className="material-symbols-outlined text-primary">translate</span> Languages
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {professional.languages.map(lang => (
                                            <span key={lang} className="px-4 py-1.5 text-sm rounded-full bg-slate-100 dark:bg-slate-800 text-text-primary dark:text-white font-semibold border border-slate-200 dark:border-slate-700">{lang}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="p-8 rounded-2xl shadow-soft bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800 scroll-mt-28" id="portfolio">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold tracking-tight text-text-primary dark:text-white">Portfolio</h2>
                                <button className="text-primary font-bold text-sm hover:underline">View All Projects</button>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                {professional.portfolio.map((item, index) => (
                                    <div key={index} className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative border border-slate-200 dark:border-slate-700 shadow-sm">
                                        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={item.img} alt={item.title} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                            <span className="text-white text-xs font-bold">{item.title}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="p-8 rounded-2xl shadow-soft bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800 scroll-mt-28" id="reviews">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-2xl font-bold tracking-tight text-text-primary dark:text-white">Client Feedback</h2>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-bold text-text-secondary dark:text-gray-400">Sort by:</span>
                                    <select className="bg-transparent border-none text-primary font-bold text-sm focus:ring-0 cursor-pointer">
                                        <option>Most Recent</option>
                                        <option>Highest Rated</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-8">
                                {professional.reviews.map((review, index) => (
                                    <React.Fragment key={index}>
                                        <div className="flex gap-5">
                                            <div
                                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-14 border-2 border-primary/10"
                                                style={{ backgroundImage: `url('${review.image || "https://randomuser.me/api/portraits/men/1.jpg"}')` }}
                                            ></div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-bold text-lg text-text-primary dark:text-white">{review.name}</h4>
                                                        <div className="flex items-center gap-0.5 text-yellow-500 my-1">
                                                            {[...Array(5)].map((_, i) => (
                                                                <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <span className="text-xs font-medium text-text-secondary dark:text-gray-400 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">{review.date}</span>
                                                </div>
                                                <p className="mt-3 text-text-secondary dark:text-gray-400 leading-relaxed">{review.content}</p>
                                            </div>
                                        </div>
                                        {index < professional.reviews.length - 1 && <hr className="border-slate-200 dark:border-slate-700" />}
                                    </React.Fragment>
                                ))}
                            </div>
                        </section>

                        <section className="p-8 rounded-2xl shadow-soft bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800 scroll-mt-28" id="availability">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold tracking-tight text-text-primary dark:text-white">Availability Calendar</h2>
                                <div className="flex items-center gap-4 text-xs">
                                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-primary"></div><span className="text-text-secondary dark:text-gray-400">Available</span></div>
                                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-red-100 border border-red-200"></div><span className="text-text-secondary dark:text-gray-400">Booked</span></div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex justify-between items-center mb-6 px-4">
                                    <button className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-700 shadow-sm">
                                        <span className="material-symbols-outlined text-xl text-text-primary dark:text-white">chevron_left</span>
                                    </button>
                                    <h3 className="font-extrabold text-xl text-text-primary dark:text-white">November 2024</h3>
                                    <button className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-700 shadow-sm">
                                        <span className="material-symbols-outlined text-xl text-text-primary dark:text-white">chevron_right</span>
                                    </button>
                                </div>
                                {/* Calendar Grid - Simplified Version of HTML */}
                                <div className="grid grid-cols-7 gap-px bg-slate-200 dark:bg-slate-700 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                                    {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                                        <div key={day} className="bg-slate-50 dark:bg-slate-900 py-4 text-center text-xs font-black text-text-secondary dark:text-gray-400">{day}</div>
                                    ))}

                                    {/* Empty Previous Month Days */}
                                    {[27, 28, 29, 30, 31].map(d => (
                                        <div key={d} className="bg-white dark:bg-slate-800 h-28 p-2 opacity-30 text-xs text-text-secondary dark:text-gray-500">{d}</div>
                                    ))}

                                    {/* Month Days */}
                                    {[...Array(30)].map((_, i) => {
                                        const day = i + 1;
                                        const isAvailable = day === 1;
                                        const isBooked = day === 4;
                                        const isToday = day === 6;

                                        let bgClass = "bg-white dark:bg-slate-800 hover:bg-primary/5 cursor-pointer";
                                        let textClass = "text-text-primary dark:text-white";

                                        if (isBooked) {
                                            bgClass = "bg-red-50/50 dark:bg-red-900/10";
                                            textClass = "text-red-500";
                                        } else if (isToday) {
                                            bgClass = "bg-primary/10 dark:bg-primary/20 border-2 border-primary";
                                            textClass = "text-primary";
                                        }

                                        return (
                                            <div key={day} className={`${bgClass} h-28 p-2 transition-colors group relative`}>
                                                <span className={`text-sm font-bold ${textClass}`}>{day}</span>
                                                {isAvailable && <div className="mt-2 text-[10px] text-primary font-bold hidden group-hover:block">• Available</div>}
                                                {isBooked && <div className="mt-2 text-[10px] text-red-400 font-bold">• Fully Booked</div>}
                                                {isToday && <div className="mt-2 text-[10px] text-primary font-bold">Today</div>}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

            </main>

            <CustomerFooter />
        </div>
    );
};

export default ProfessionalProfile;
