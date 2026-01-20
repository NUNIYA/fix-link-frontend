import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";

const ProfessionalHome: React.FC = () => {
  const { user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Dynamic User Data (Fallback to "Jane Doe" style if missing)
  const displayName = user?.name || "Professional";
  const displayRole = user?.role === "professional" ? "Professional" : "User";
  const profilePhoto = user?.profilePhoto || "https://lh3.googleusercontent.com/aida-public/AB6AXuBStVJOhFQwvsLnuHhQbLv6Mc6dR4ZGGsAjQiseBw3MBSoQdWeZBVplk4PNFbAWMa2zBKE_AWGwGAAyNbZBMJHx6Rg5MsFsRu1YfMTTvS9IH4g-pVIlTomQ8eKD-a4rL3uFTCR89O_2IAaU0eSIgDln26NyzbSXfPffsav267pbeG6FYKSgwEJnYCoutmwaKSRbNawUncNblUo96S1ZMiHLOd6P_ZKT8EuBIA3m8S5LXeR_y5rN_SQ-2oJmH7B4xVKLxsBr0yY4Ow";

  return (
    <div className="relative flex min-h-screen w-full bg-background-light dark:bg-background-dark font-display">
      {/* SIDEBAR */}
      <aside
        className={`fixed z-20 h-full w-64 flex-col border-r border-primary/20 bg-primary p-4 text-white/80 transition-transform duration-300 lg:flex ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex items-center gap-3 p-2 mb-6 text-white">
          <div className="size-8">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_319)">
                <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
              </g>
              <defs><clipPath id="clip0_6_319"><rect fill="white" height="48" width="48"></rect></clipPath></defs>
            </svg>
          </div>
          <h1 className="text-lg font-bold leading-tight tracking-[-0.015em]">Fix-Link</h1>
        </div>

        <nav className="flex flex-col gap-2">
          <a className="flex items-center gap-4 p-3 rounded-lg bg-white/20 text-white" href="#">
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
            <p className="text-sm font-semibold leading-normal">Dashboard</p>
          </a>
          <a className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 hover:text-white" href="#">
            <span className="material-symbols-outlined text-2xl">work</span>
            <p className="text-sm font-medium leading-normal">Find Jobs</p>
          </a>
          <a className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 hover:text-white" href="#">
            <span className="material-symbols-outlined text-2xl">receipt_long</span>
            <p className="text-sm font-medium leading-normal">My Reports</p>
          </a>
          <a className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 hover:text-white" href="#">
            <span className="material-symbols-outlined text-2xl">chat</span>
            <p className="text-sm font-medium leading-normal">Messages</p>
          </a>
          <a className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 hover:text-white" href="#">
            <span className="material-symbols-outlined text-2xl">account_balance</span>
            <p className="text-sm font-medium leading-normal">Earnings</p>
          </a>
        </nav>

        <div className="mt-auto flex flex-col gap-2">
          <a className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 hover:text-white" href="#">
            <span className="material-symbols-outlined text-2xl">settings</span>
            <p className="text-sm font-medium leading-normal">Settings</p>
          </a>
          <a className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 hover:text-white" href="#">
            <span className="material-symbols-outlined text-2xl">help_outline</span>
            <p className="text-sm font-medium leading-normal">Help Center</p>
          </a>
        </div>
      </aside>

      {/* OVERLAY for Mobile Sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* MAIN CONTENT AREA */}
      <div className="flex flex-1 flex-col lg:ml-64">
        {/* HEADER */}
        <header className="sticky top-0 z-10 flex items-center justify-between gap-4 whitespace-nowrap bg-background-light/80 px-4 py-3 backdrop-blur-sm dark:bg-background-dark/80 sm:px-6 md:px-10 md:py-4 border-b border-border-light dark:border-border-dark">
          <div className="flex items-center gap-2">
            <button
              className="lg:hidden text-text-light dark:text-text-dark"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="hidden sm:flex flex-col">
              <h2 className="text-xl font-bold leading-tight text-text-light dark:text-text-dark">Home</h2>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-end gap-2 sm:gap-4">
            <div className="hidden w-full max-w-sm md:block">
              <div className="relative">
                <span className="material-symbols-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-subtext-light dark:text-subtext-dark">search</span>
                <input className="form-input h-10 w-full rounded-full border border-border-light bg-surface-light text-text-light placeholder:text-subtext-light focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-border-dark dark:bg-surface-dark dark:text-text-dark py-2 pl-12 pr-4 text-sm" placeholder="Search for jobs..." />
              </div>
            </div>
            <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border-light bg-surface-light text-subtext-light hover:bg-gray-50 dark:border-border-dark dark:bg-surface-dark">
              <span className="material-symbols-outlined">notifications</span>
              <div className="absolute right-2.5 top-2.5 size-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-surface-dark"></div>
            </button>
            <div className="h-8 w-px bg-border-light dark:bg-border-dark hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-sm font-bold text-text-light dark:text-text-dark">{displayName}</span>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[10px] text-accent-gold" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent-gold">Top Rated</span>
                </div>
              </div>
              <img alt={displayName} className="rounded-full size-10 object-cover border-2 border-primary/20" src={profilePhoto} />
            </div>
          </div>
        </header>

        {/* DASHBOARD CONTENT */}
        <main className="flex-1 p-4 sm:p-6 lg:p-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-3xl font-extrabold tracking-tight text-text-light dark:text-text-dark">Welcome back, {displayName.split(' ')[0]}</p>
              <p className="mt-1 text-base text-subtext-light dark:text-subtext-dark">Your profile is trending! You have 3 new job matches today.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="flex items-center gap-2 rounded-lg bg-surface-light px-4 py-2 text-sm font-bold text-primary border border-primary/20 hover:bg-primary/5 transition-colors shadow-sm dark:bg-surface-dark">
                <span className="material-symbols-outlined text-lg">event_available</span>
                Availability
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-bold text-white hover:bg-primary/90 transition-colors shadow-md shadow-primary/20">
                <span className="material-symbols-outlined text-lg">search</span>
                Find Work
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* STATS */}
              <section className="rounded-2xl border border-border-light bg-surface-light p-6 shadow-card dark:border-border-dark dark:bg-surface-dark">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Work Summary</h3>
                  <button className="text-xs font-bold text-primary hover:underline">View All Stats</button>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-xl bg-background-light p-5 dark:bg-background-dark/50">
                    <p className="text-xs font-bold uppercase tracking-wider text-subtext-light dark:text-subtext-dark">Earnings this month</p>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="text-2xl font-extrabold text-text-light dark:text-text-dark">$4,250</span>
                      <span className="text-xs font-bold text-green-500">+12%</span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-background-light p-5 dark:bg-background-dark/50">
                    <p className="text-xs font-bold uppercase tracking-wider text-subtext-light dark:text-subtext-dark">Total Jobs</p>
                    <div className="mt-2">
                      <span className="text-2xl font-extrabold text-text-light dark:text-text-dark">156</span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-background-light p-5 dark:bg-background-dark/50">
                    <p className="text-xs font-bold uppercase tracking-wider text-subtext-light dark:text-subtext-dark">Job Success Score</p>
                    <div className="mt-2 flex items-center gap-3">
                      <span className="text-2xl font-extrabold text-primary">98%</span>
                      <div className="h-2 flex-1 rounded-full bg-gray-200 dark:bg-gray-700">
                        <div className="h-full w-[98%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* MATCHES */}
              <section className="rounded-2xl border border-border-light bg-surface-light shadow-card dark:border-border-dark dark:bg-surface-dark overflow-hidden">
                <div className="border-b border-border-light p-6 dark:border-border-dark">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Best Matches for You</h3>
                    <div className="flex gap-4">
                      <button className="text-sm font-bold text-primary underline underline-offset-4">Most Recent</button>
                      <button className="text-sm font-medium text-subtext-light hover:text-primary transition-colors">Saved Jobs</button>
                    </div>
                  </div>
                </div>
                <div className="divide-y divide-border-light dark:divide-border-dark">
                  <div className="group p-6 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-base font-bold text-text-light group-hover:text-primary transition-colors dark:text-text-dark">Commercial Panel Upgrade - High Priority</h4>
                      <button className="text-subtext-light hover:text-primary"><span className="material-symbols-outlined">favorite</span></button>
                    </div>
                    <p className="text-sm text-subtext-light dark:text-subtext-dark mb-4 line-clamp-2">Seeking a licensed electrician for a full panel upgrade in a warehouse facility. Must be available for weekend work. Materials provided on-site...</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-subtext-light dark:text-subtext-dark">
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">payments</span> Fixed-price: $1,200</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">history</span> Posted 2h ago</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">verified_user</span> Payment Verified</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> Brooklyn, NY</span>
                    </div>
                  </div>
                  <div className="group p-6 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-base font-bold text-text-light group-hover:text-primary transition-colors dark:text-text-dark">Smart Home Lighting Installation (Lutron)</h4>
                      <button className="text-subtext-light hover:text-primary"><span className="material-symbols-outlined">favorite</span></button>
                    </div>
                    <p className="text-sm text-subtext-light dark:text-subtext-dark mb-4 line-clamp-2">Looking for a Pro experienced with smart home integrations. Entire house setup with 15+ zones. Ongoing maintenance contract potential.</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-subtext-light dark:text-subtext-dark">
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">payments</span> Hourly: $65 - $90</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">history</span> Posted 5h ago</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">verified_user</span> Payment Verified</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> Manhattan, NY</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-white/5 text-center">
                  <button className="text-sm font-bold text-primary hover:underline">View More Matches</button>
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* PROFILE CARD */}
              <section className="rounded-2xl border border-border-light bg-surface-light p-6 shadow-card dark:border-border-dark dark:bg-surface-dark">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative mb-4">
                    <img alt="Profile" className="size-20 rounded-full object-cover ring-4 ring-primary/10" src={profilePhoto} />
                    <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-accent-gold text-white shadow-sm ring-2 ring-white">
                      <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-text-light dark:text-text-dark">{displayName}</h4>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark">{displayRole}</p>
                  <div className="mt-2 inline-flex items-center rounded-full bg-accent-gold/10 px-3 py-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent-gold">Top Rated Pro</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="mb-2 flex items-center justify-between text-xs font-bold">
                      <span className="text-text-light dark:text-text-dark">Profile Completion</span>
                      <span className="text-primary">85%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                      <div className="h-full w-[85%] rounded-full bg-primary"></div>
                    </div>
                    <button className="mt-2 text-[11px] font-bold text-primary hover:underline">+ Add 5 years of experience to reach 95%</button>
                  </div>
                  <div className="pt-4 border-t border-border-light dark:border-border-dark">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-subtext-light">Visibility</span>
                      <span className="font-bold text-green-500 flex items-center gap-1">
                        Public <span className="size-2 rounded-full bg-green-500"></span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-subtext-light">Available Now</span>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input defaultChecked className="peer sr-only" type="checkbox" />
                        <div className="peer h-5 w-9 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white dark:bg-gray-700"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </section>

              {/* ACTIVE CONTRACTS */}
              <section className="rounded-2xl border border-border-light bg-surface-light p-6 shadow-card dark:border-border-dark dark:bg-surface-dark">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-base font-bold text-text-light dark:text-text-dark">Active Contracts</h3>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">3 Ongoing</span>
                </div>
                <div className="space-y-4">
                  <div className="group cursor-pointer border-b border-border-light pb-4 last:border-0 last:pb-0 dark:border-border-dark">
                    <p className="text-sm font-bold text-text-light dark:text-text-dark group-hover:text-primary">Outlet Installation</p>
                    <p className="text-xs text-subtext-light dark:text-subtext-dark">Client: John Smith</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-subtext-light uppercase tracking-tighter">Due: Today, 10:00 AM</span>
                      <button className="text-[10px] font-bold text-primary hover:underline">Track Time</button>
                    </div>
                  </div>
                  <div className="group cursor-pointer border-b border-border-light pb-4 last:border-0 last:pb-0 dark:border-border-dark">
                    <p className="text-sm font-bold text-text-light dark:text-text-dark group-hover:text-primary">Lighting Fixture Rehab</p>
                    <p className="text-xs text-subtext-light dark:text-subtext-dark">Client: Emily White</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-subtext-light uppercase tracking-tighter">Due: Today, 2:30 PM</span>
                      <button className="text-[10px] font-bold text-primary hover:underline">Track Time</button>
                    </div>
                  </div>
                  <div className="group cursor-pointer border-b border-border-light pb-4 last:border-0 last:pb-0 dark:border-border-dark">
                    <p className="text-sm font-bold text-text-light dark:text-text-dark group-hover:text-primary">New Office Wiring</p>
                    <p className="text-xs text-subtext-light dark:text-subtext-dark">Client: Tech Corp</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-subtext-light uppercase tracking-tighter">Due: Dec 24</span>
                      <button className="text-[10px] font-bold text-primary hover:underline">View Milestones</button>
                    </div>
                  </div>
                </div>
                <button className="mt-4 w-full rounded-lg border border-border-light py-2 text-xs font-bold text-subtext-light hover:bg-gray-50 dark:border-border-dark dark:hover:bg-white/5">View All Contracts</button>
              </section>

              {/* PROMOTION */}
              <section className="rounded-2xl bg-gradient-to-br from-primary to-blue-700 p-6 text-white shadow-lg shadow-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-accent-gold" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                  <h4 className="font-bold">Boost Visibility</h4>
                </div>
                <p className="text-xs leading-relaxed text-white/80 mb-4">Promoted profiles get up to 3x more direct invitations from high-value clients.</p>
                <button className="w-full rounded-lg bg-accent-gold py-2 text-sm font-bold text-blue-900 shadow-sm hover:scale-[1.02] transition-transform">Promote Now</button>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfessionalHome;
