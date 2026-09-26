import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-blue-900 to-green-600 p-2 rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-xl">🌍</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-extrabold text-blue-900 tracking-tight">
                Sarthak<span className="text-green-600">AI</span>
              </span>
              <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">
                SDG Platform
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "Home", path: "/" },
              { label: "AI Assistant", path: "/ai-assist" },
              { label: "Missions", path: "/missions" },
              { label: "NGO Directory", path: "/ngos" },
              { label: 'Contact', path: '/contact' },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-900 hover:bg-blue-50 font-medium text-sm transition-all duration-150"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <button className="text-blue-900 font-semibold text-sm hover:text-blue-700 transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">
              Login
            </button>
            <button className="bg-gradient-to-r from-green-600 to-green-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:from-green-700 hover:to-green-600 transition-all shadow-md hover:shadow-lg">
              Get Started 🚀
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
