import { useEffect, useState } from "react";

const CustomerNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-blue-100 shadow-md text-gray-900"
          : "text-white"
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-white">
          F
        </div>
        <span className="text-xl font-bold">Fix-Link</span>
      </div>

      <div className="flex items-center gap-6 text-sm font-medium">
        <a className="hidden md:flex hover:text-blue-500">Dashboard</a>
        <a className="hidden md:flex hover:text-blue-500">Bookings</a>

        <button>
          <span className="material-icons-round text-xl">
            chat_bubble_outline
          </span>
        </button>

        <button className="relative">
          <span className="material-icons-round text-xl">
            notifications_none
          </span>
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <img
          className="w-9 h-9 rounded-full object-cover border-2 border-white/30"
          src="https://randomuser.me/api/portraits/men/1.jpg"
        />
      </div>
    </nav>
  );
};

export default CustomerNavbar;
