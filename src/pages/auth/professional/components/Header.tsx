const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-background-light/80 px-6 py-4 backdrop-blur-sm">

      {/* LEFT */}
      <div className="flex items-center gap-3">
        <button className="lg:hidden">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* Notifications */}
        <button className="relative flex h-11 w-11 items-center justify-center rounded-full border bg-white">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </button>

        {/* PROFILE */}
        <div className="flex items-center gap-3">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-semibold">Jane Doe</span>
            <span className="text-xs text-gray-500">Electrician</span>
          </div>
          <span className="material-symbols-outlined hidden sm:block">
            expand_more
          </span>
        </div>

      </div>
    </header>
  );
};

export default Header;
