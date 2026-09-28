import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const roles = [
  {
    id: "citizen",
    emoji: "🙋",
    label: "Citizen",
    desc: "I need help or want to report issues",
  },
  {
    id: "volunteer",
    emoji: "🤝",
    label: "Volunteer",
    desc: "I want to give time and skills",
  },
  {
    id: "ngo",
    emoji: "🏛️",
    label: "NGO",
    desc: "We represent an organisation",
  },
  {
    id: "doctor",
    emoji: "👨‍⚕️",
    label: "Doctor",
    desc: "I offer low-cost consultations",
  },
  {
    id: "donor",
    emoji: "💝",
    label: "Philanthropist",
    desc: "I want to donate resources",
  },
  {
    id: "farmer",
    emoji: "🌾",
    label: "Farmer",
    desc: "I need agri schemes and support",
  },
];

function Login() {
  const [params] = useSearchParams();
  const [mode, setMode] = useState(
    params.get("mode") === "signup" ? "signup" : "login",
  );
  const [role, setRole] = useState("citizen");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [done, setDone] = useState(false);

  const isSignup = mode === "signup";
  const canSubmit = email && password && (!isSignup || name);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (canSubmit) setDone(true);
  };

  const reset = () => {
    setDone(false);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white">
        {/* Left Panel */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white p-10 flex flex-col justify-between">
          <div>
            <div className="text-5xl mb-6">🌍</div>
            <h1 className="text-3xl font-bold mb-3">
              Welcome to Sarthak<span className="text-green-400">AI</span>
            </h1>
            <p className="text-blue-100 leading-relaxed mb-8">
              One platform connecting people to schemes, NGOs, healthcare,
              education and opportunities across 7 UN Sustainable Development
              Goals.
            </p>
            <div className="space-y-4">
              {[
                "Get AI-powered scheme recommendations",
                "Report civic issues and track them",
                "Earn XP by contributing to SDGs",
                "Connect with verified NGOs",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm text-blue-50"
                >
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <p className="text-blue-200 text-xs mt-10">
            Your data stays private. We never share personal information without
            your consent.
          </p>
        </div>

        {/* Right Panel */}
        <div className="p-8 md:p-10">
          {done ? (
            <div className="text-center py-10">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-blue-900 mb-2">
                {isSignup ? "Account Created!" : "Welcome Back!"}
              </h2>
              <p className="text-gray-600 text-sm mb-2">
                You are signed in as a{" "}
                <strong>{roles.find((r) => r.id === role)?.label}</strong>.
              </p>
              <p className="text-xs text-gray-400 mb-8">
                Demo mode: real authentication will be added with Supabase.
              </p>
              <div className="flex flex-col gap-3 max-w-xs mx-auto">
                <Link
                  to="/"
                  className="bg-gradient-to-r from-blue-900 to-green-700 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  Go to Home
                </Link>
                <button
                  onClick={reset}
                  className="border-2 border-blue-900 text-blue-900 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                >
                  Back to Login
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Toggle */}
              <div className="flex bg-gray-100 rounded-xl p-1 mb-8">
                <button
                  onClick={() => setMode("login")}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${!isSignup ? "bg-white text-blue-900 shadow" : "text-gray-500"}`}
                >
                  Login
                </button>
                <button
                  onClick={() => setMode("signup")}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${isSignup ? "bg-white text-blue-900 shadow" : "text-gray-500"}`}
                >
                  Sign Up
                </button>
              </div>

              <h2 className="text-2xl font-bold text-blue-900 mb-1">
                {isSignup ? "Create your account" : "Login to your account"}
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                {isSignup
                  ? "Choose how you want to use SarthakAI."
                  : "Enter your details to continue."}
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {isSignup && (
                  <>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        I am a
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {roles.map((r) => (
                          <button
                            type="button"
                            key={r.id}
                            onClick={() => setRole(r.id)}
                            title={r.desc}
                            className={`p-3 rounded-xl border-2 text-center transition-all ${role === r.id ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-blue-300"}`}
                          >
                            <div className="text-2xl">{r.emoji}</div>
                            <div className="text-xs font-semibold text-blue-900 mt-1">
                              {r.label}
                            </div>
                          </button>
                        ))}
                      </div>
                      <p className="text-xs text-gray-400 mt-2">
                        {roles.find((r) => r.id === role)?.desc}
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 pr-16 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-blue-700 hover:text-blue-900"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="w-full bg-gradient-to-r from-blue-900 to-green-700 text-white py-3.5 rounded-xl font-semibold hover:opacity-90 transition-all shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {isSignup ? "Create Account" : "Login"}
                </button>
              </form>

              <p className="text-center text-sm text-gray-500 mt-6">
                {isSignup
                  ? "Already have an account?"
                  : "Don't have an account?"}{" "}
                <button
                  onClick={() => setMode(isSignup ? "login" : "signup")}
                  className="text-blue-700 font-semibold hover:underline"
                >
                  {isSignup ? "Login" : "Sign Up"}
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
