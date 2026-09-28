import { Link } from "react-router-dom";

const sdgModules = [
  {
    emoji: "🔴",
    title: "No Poverty",
    desc: "Connect to welfare schemes, NGOs & philanthropists",
    path: "/sdg1",
    color: "bg-red-50 border-red-200 hover:border-red-400",
  },
  {
    emoji: "🟡",
    title: "Zero Hunger",
    desc: "Support farmers, food surplus & agricultural resources",
    path: "/sdg2",
    color: "bg-yellow-50 border-yellow-200 hover:border-yellow-400",
  },
  {
    emoji: "🔵",
    title: "Good Health",
    desc: "Find affordable healthcare, doctors & health NGOs",
    path: "/sdg3",
    color: "bg-blue-50 border-blue-200 hover:border-blue-400",
  },
  {
    emoji: "🟣",
    title: "Quality Education",
    desc: "Discover scholarships, free coaching & skill roadmaps",
    path: "/sdg4",
    color: "bg-purple-50 border-purple-200 hover:border-purple-400",
  },
  {
    emoji: "🩷",
    title: "Gender Equality",
    desc: "Awareness, support pathways & complaint escalation",
    path: "/sdg5",
    color: "bg-pink-50 border-pink-200 hover:border-pink-400",
  },
  {
    emoji: "🟢",
    title: "Decent Work",
    desc: "Find jobs, internships, skills & entrepreneurship support",
    path: "/sdg8",
    color: "bg-green-50 border-green-200 hover:border-green-400",
  },
  {
    emoji: "🟠",
    title: "Sustainable Cities",
    desc: "Report civic issues & track community resolutions",
    path: "/sdg11",
    color: "bg-orange-50 border-orange-200 hover:border-orange-400",
  },
  {
    emoji: "🤖",
    title: "AI Assistant",
    desc: "Describe your problem and let AI find the right support for you",
    path: "/ai-assist",
    color: "bg-indigo-50 border-indigo-200 hover:border-indigo-400",
  },
  {
    emoji: "📬",
    title: "Contact Us",
    desc: "Reach out to us for support, partnerships or any queries",
    path: "/contact",
    color: "bg-teal-50 border-teal-200 hover:border-teal-400",
  },
];

const stats = [
  { number: "7", label: "SDGs Covered" },
  { number: "50+", label: "Verified NGOs" },
  { number: "200+", label: "Govt Schemes" },
  { number: "10K+", label: "Lives Impacted" },
];

function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🌍</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            What problem are <br />
            <span className="text-green-400">you facing?</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            SarthakAI connects you to the right resource — welfare schemes,
            NGOs, healthcare, education, jobs, and community support — all in
            one place.
          </p>

          {/* AI Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
                🔍
              </span>
              <input
                type="text"
                placeholder="e.g. I need help with my daughter's education..."
                className="w-full pl-11 pr-5 py-4 rounded-xl text-gray-800 text-base outline-none shadow-lg border-2 border-white bg-white focus:border-green-400 transition-all placeholder-gray-400"
              />
            </div>
            <button className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              🤖 Get Help
            </button>
          </div>

          <p className="text-blue-300 text-sm mt-4">
            Powered by AI — understands your need and finds the right support
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-green-400">
                {stat.number}
              </div>
              <div className="text-blue-200 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SDG Modules */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Choose Your Support Area
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Each module connects you to verified resources, government
              schemes, and NGOs mapped to UN Sustainable Development Goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdgModules.map((mod, i) => (
              <Link
                key={i}
                to={mod.path}
                className={`block p-6 rounded-2xl border-2 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${mod.color}`}
              >
                <div className="text-4xl mb-3">{mod.emoji}</div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  {mod.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {mod.desc}
                </p>
                <div className="mt-4 text-blue-700 text-sm font-medium">
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Two Sided Platform */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Two Ways to Use SarthakAI
          </h2>
          <p className="text-gray-600 mb-10">
            Whether you need help or want to give it — SarthakAI connects both
            sides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 text-left hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                I Need Help
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Find welfare schemes, NGOs, healthcare, education, jobs, and
                community support tailored to your situation.
              </p>
              <button className="bg-blue-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-800 transition-colors">
                Get Support →
              </button>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-left hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-green-800 mb-3">
                I Want to Help
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Donate, volunteer, offer skills, list resources, or join
                missions — your contribution creates real impact.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition-colors">
                Start Contributing →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-green-700 text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to make an impact?</h2>
          <p className="text-blue-100 mb-8">
            Join thousands of citizens, NGOs, and volunteers building a better
            India — one SDG at a time.
          </p>
          <Link
            to="/login?mode=signup"
            className="inline-block bg-green-500 hover:bg-green-400 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
