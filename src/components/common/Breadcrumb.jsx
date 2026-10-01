import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const routeNames = {
  "/": "Home",
  "/ai-assist": "AI Assistant",
  "/contact": "Contact Us",
  "/missions": "Missions",
  "/sdg1": "No Poverty",
  "/sdg2": "Zero Hunger",
  "/sdg3": "Good Health",
  "/sdg4": "Quality Education",
  "/sdg5": "Gender Equality",
  "/sdg8": "Decent Work",
  "/sdg11": "Sustainable Cities",
  "/login": "Login",
  "/ngos": "NGO Directory",
};

const routeColors = {
  "/ai-assist": "from-blue-900 to-green-700",
  "/contact": "from-blue-900 to-green-700",
  "/sdg1": "from-red-700 to-orange-500",
  "/sdg2": "from-yellow-600 to-orange-400",
  "/sdg3": "from-blue-700 to-cyan-500",
  "/sdg4": "from-purple-700 to-indigo-500",
  "/sdg5": "from-pink-700 to-rose-500",
  "/sdg8": "from-emerald-700 to-teal-500",
  "/sdg11": "from-orange-600 to-amber-500",
};

function Breadcrumb() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (pathname === "/") return null;

  const gradient = routeColors[pathname] || "from-blue-900 to-green-700";

  return (
    <div className={`bg-gradient-to-r ${gradient} px-4 py-3`}>
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all border border-white/20 hover:border-white/40"
        >
          ← Back
        </button>

        {/* Divider */}
        <div className="w-px h-4 bg-white/30"></div>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm">
          <Link
            to="/"
            className="text-white/80 hover:text-white font-medium transition-colors flex items-center gap-1"
          >
            🏠 Home
          </Link>
          <span className="text-white/40">›</span>
          <span className="text-white font-semibold">
            {routeNames[pathname] || "Page"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
