import { User,LogIn,UserPlus,Home,Users,CalendarCheck,ClipboardCheck,SquaresExclude,} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", icon: <Home size={18} />, path: "/" },
    { name: "Employees", icon: <Users size={18} />, path: "/employees" },
    { name: "Leave Requests", icon: <CalendarCheck size={18} />, path: "/leaves" },
    { name: "Recruitment", icon: <UserPlus size={18} />, path: "/recruitment" },
    { name: "Payroll", icon: <SquaresExclude size={18} />, path: "/payroll" },
    { name: "Reports", icon: <ClipboardCheck size={18} />, path: "/reports" },
  ];

  const accountItems = [
    { name: "Profile", icon: <User size={18} />, path: "/profile" },
    { name: "Sign In", icon: <LogIn size={18} />, path: "/signin" },
    { name: "Sign Up", icon: <UserPlus size={18} />, path: "/signup" },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-transparent text-white flex flex-col justify-between shadow-xl overflow-hidden z-40">
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-700 scrollbar-track-transparent">
        <div className="p-5">
          <h1 className="text-lg font-bold tracking-wide mb-6">NEXGLOBAL HR</h1>

          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center w-full px-4 py-3 rounded-xl transition-all ${
                  location.pathname === item.path
                    ? "bg-yellow-400 text-white shadow-md"
                    : "text-gray-300 hover:bg-yellow-900/40"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
              Account Pages
            </p>
            <div className="space-y-2">
              {accountItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center w-full px-4 py-3 rounded-xl transition-all ${
                    location.pathname === item.path
                      ? "bg-yellow-400 text-white shadow-md"
                      : "text-gray-300 hover:bg-yellow-900/40"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-20">
        <button className="bg-white text-yellow-700 px-3 py-2 rounded-lg text-xs font-bold uppercase hover:bg-gray-100 transition-all">
          UPGRADE
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
