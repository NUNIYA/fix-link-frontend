import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${scrolled
          ? "bg-blue-200/80 backdrop-blur-sm"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div
          className={`flex items-center gap-3 font-bold transition-colors duration-300 ${scrolled ? "text-black" : "text-white"
            }`}
        >
          <svg className="w-6 h-6" viewBox="0 0 48 48" fill="currentColor">
            <path d="M8.57829 8.57829L24 24L39.4217 8.57829..." />
          </svg>
          <span className="text-xl">Fix-Link</span>
        </div>

        <nav
          className={`hidden md:flex gap-8 text-sm font-medium transition-colors duration-300 ${scrolled ? "text-black" : "text-white"
            }`}
        >
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-primary transition-colors">
            Services
          </a>
          <a href="#faq" className="hover:text-primary transition-colors">
            FAQ
          </a>
        </nav>

        <div className="hidden md:flex gap-2">
          <Link
            to="/signup/email"
            className="bg-primary px-4 h-10 rounded-lg flex items-center text-white font-bold hover:bg-primary/90 transition-colors"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-white/20 px-4 h-10 rounded-lg flex items-center font-bold hover:bg-white/30 transition-colors"
          >
            <span className={scrolled ? "text-black" : "text-white"}>Login</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
