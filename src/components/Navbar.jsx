import { useEffect, useState } from "react";
import { Search, User, Settings, Bell, Home } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-4 right-6 left-72 z-50 flex items-center justify-between px-8 py-4 rounded-2xl transition-all duration-500
        ${
          isScrolled
            ? "backdrop-blur-xl  border border-white/30 shadow-lg"
            : "bg-transparent border border-transparent"
        }`}
    >
      {/* Left: Breadcrumb */}
      <div className="flex flex-col">
        <div className="flex items-center space-x-2 text-sm text-gray-300">
          <Home size={14} className="text-gray-400" />
          <span className="text-gray-400">/</span>
          <span>HR Dashboard</span>
        </div>
        <h1 className="text-lg font-semibold text-white">Employee Overview</h1>
      </div>

      {/* Right: Search + Icons */}
      <div className="flex items-center space-x-5">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search employees, requests..."
            className=" text-white placeholder-gray-400 text-sm rounded-xl pl-9 pr-4 py-2 focus:outline-none border border-white/10 focus:border-white/30 w-64 backdrop-blur-md transition"
          />
          <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
        </div>

        {/* Icons */}
        <button className="flex items-center space-x-1 text-sm text-white hover:text-yellow-400 transition">
          <User size={16} />
          <span>HR Sign in</span>
        </button>

        <button className="text-white hover:text-yellow-400 transition">
          <Settings size={18} />
        </button>

        <button className="text-white hover:text-yellow-400 transition relative">
          <Bell size={18} />
          <span className="absolute -top-1 -right-1 bg-yellow-400 w-2 h-2 rounded-full"></span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
