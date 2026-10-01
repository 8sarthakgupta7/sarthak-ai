import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "AI Assistant", path: "/ai-assist" },
  { label: "Missions", path: "/missions" },
  { label: "NGO Directory", path: "/ngos" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background:
          "linear-gradient(135deg, rgba(10,18,55,0.98) 0%, rgba(12,58,35,0.98) 100%)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className="p-2 rounded-xl transition-all duration-200 group-hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
              }}
            >
              <span className="text-xl">🌍</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[17px] font-extrabold text-white tracking-tight">
                Sarthak<span className="text-green-400">AI</span>
              </span>
              <span
                className="text-[9px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: "rgba(147,197,253,0.6)" }}
              >
                SDG Platform
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150"
                style={
                  pathname === item.path
                    ? {
                        background: "rgba(255,255,255,0.12)",
                        color: "#ffffff",
                        border: "1px solid rgba(255,255,255,0.2)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                      }
                    : {
                        color: "rgba(186,230,253,0.8)",
                        border: "1px solid transparent",
                      }
                }
                onMouseEnter={(e) => {
                  if (pathname !== item.path) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.color = "#ffffff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== item.path) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "rgba(186,230,253,0.8)";
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2.5">
            {user ? (
              <>
                <span className="text-sm text-blue-100/80 px-3">
                  👤 {user.email.split("@")[0]}
                </span>
                <button
                  onClick={signOut}
                  className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-150"
                  style={{
                    color: "rgba(186,230,253,0.8)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-150"
                  style={{
                    color: "rgba(186,230,253,0.8)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  Login
                </Link>
                <Link
                  to="/login?mode=signup"
                  className="text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-150 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #22c55e, #10b981)",
                    border: "1px solid rgba(74,222,128,0.4)",
                    boxShadow: "0 4px 15px rgba(34,197,94,0.3)",
                  }}
                >
                  Get Started 🚀
                </Link>
              </>
            )}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white w-9 h-9 rounded-lg flex items-center justify-center transition-all"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-4 py-4 space-y-1"
          style={{
            background: "rgba(10,18,55,0.99)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(24px)",
          }}
        >
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm font-medium transition-all"
              style={
                pathname === item.path
                  ? {
                      background: "rgba(255,255,255,0.12)",
                      color: "#ffffff",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }
                  : { color: "rgba(186,230,253,0.8)" }
              }
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 flex gap-3">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center py-2.5 rounded-xl text-sm font-medium text-white"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              Login
            </Link>
            <Link
              to="/login?mode=signup"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center text-white py-2.5 rounded-xl text-sm font-bold"
              style={{
                background: "linear-gradient(135deg, #22c55e, #10b981)",
                boxShadow: "0 4px 15px rgba(34,197,94,0.3)",
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

