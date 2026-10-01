import { useState } from "react";
import { Link } from "react-router-dom";

const SDG_FILTERS = [
  { id: "all", label: "All", emoji: "🌍" },
  { id: 1, label: "No Poverty", emoji: "🔴" },
  { id: 2, label: "Zero Hunger", emoji: "🟡" },
  { id: 3, label: "Good Health", emoji: "🔵" },
  { id: 4, label: "Education", emoji: "🟣" },
  { id: 5, label: "Gender Equality", emoji: "🩷" },
  { id: 8, label: "Decent Work", emoji: "🟢" },
  { id: 11, label: "Sustainable Cities", emoji: "🟠" },
];

const NGOS = [
  {
    name: "Goonj",
    sdg: 1,
    focus: "Relief & Livelihood",
    desc: "Provides material relief and works on rural livelihood development.",
    contact: "info@goonj.org",
    location: "Delhi NCR",
    verified: true,
  },
  {
    name: "CRY — Child Rights and You",
    sdg: 1,
    focus: "Child Poverty",
    desc: "Works to ensure underprivileged children get their basic rights.",
    contact: "info@cry.org",
    location: "Pan India",
    verified: true,
  },
  {
    name: "Akshaya Patra Foundation",
    sdg: 2,
    focus: "Mid-Day Meals",
    desc: "Runs the world's largest NGO school meal programme, feeding 2 million children daily.",
    contact: "info@akshayapatra.org",
    location: "Pan India",
    verified: true,
  },
  {
    name: "Robin Hood Army",
    sdg: 2,
    focus: "Food Redistribution",
    desc: "Collects surplus food from restaurants and distributes it to the underprivileged.",
    contact: "contact@robinhoodarmy.com",
    location: "Pan India",
    verified: true,
  },
  {
    name: "Smile Foundation",
    sdg: 3,
    focus: "Community Health",
    desc: "Runs mobile health units providing healthcare to underprivileged communities.",
    contact: "info@smilefoundationindia.org",
    location: "Pan India",
    verified: true,
  },
  {
    name: "HelpAge India",
    sdg: 3,
    focus: "Elder Care",
    desc: "Healthcare and support services for disadvantaged elderly people.",
    contact: "hai@helpageindia.org",
    location: "Pan India",
    verified: true,
  },
  {
    name: "Pratham",
    sdg: 4,
    focus: "Elementary Education",
    desc: "India's largest education NGO, working to improve learning outcomes for children.",
    contact: "info@pratham.org",
    location: "Pan India",
    verified: true,
  },
  {
    name: "Teach For India",
    sdg: 4,
    focus: "Teaching Fellowship",
    desc: "Places college graduates and professionals as teachers in low-income schools.",
    contact: "contact@teachforindia.org",
    location: "Major Cities",
    verified: true,
  },
  {
    name: "Breakthrough India",
    sdg: 5,
    focus: "Gender Violence",
    desc: "Uses media and arts to build a world free of gender-based violence.",
    contact: "info@breakthroughindia.org",
    location: "Pan India",
    verified: true,
  },
  {
    name: "Apne Aap Women Worldwide",
    sdg: 5,
    focus: "Women Trafficking",
    desc: "Works to end sex trafficking and caste-based discrimination against women.",
    contact: "info@apneaap.org",
    location: "Delhi, Kolkata, Bihar",
    verified: true,
  },
  {
    name: "Villgro Innovations",
    sdg: 8,
    focus: "Social Enterprise",
    desc: "Incubates and supports social enterprises that create livelihoods at the grassroots.",
    contact: "info@villgro.org",
    location: "Bangalore",
    verified: true,
  },
  {
    name: "Mann Deshi Foundation",
    sdg: 8,
    focus: "Women Livelihood",
    desc: "Provides business and banking solutions for rural women entrepreneurs.",
    contact: "info@manndeshi.org",
    location: "Maharashtra",
    verified: true,
  },
  {
    name: "Janaagraha",
    sdg: 11,
    focus: "Urban Governance",
    desc: "Works to improve quality of life in cities through better urban governance and planning.",
    contact: "contact@janaagraha.org",
    location: "Bangalore",
    verified: true,
  },
  {
    name: "Chintan Environmental Research",
    sdg: 11,
    focus: "Waste Management",
    desc: "Works on sustainable waste management and supports waste picker communities.",
    contact: "info@chintan-india.org",
    location: "Delhi NCR",
    verified: true,
  },
];

const SDG_COLORS = {
  1: "bg-red-100 text-red-700",
  2: "bg-yellow-100 text-yellow-700",
  3: "bg-blue-100 text-blue-700",
  4: "bg-purple-100 text-purple-700",
  5: "bg-pink-100 text-pink-700",
  8: "bg-green-100 text-green-700",
  11: "bg-orange-100 text-orange-700",
};

function NGODirectory() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = NGOS.filter((n) => {
    const matchesSdg = filter === "all" || n.sdg === filter;
    const matchesSearch =
      n.name.toLowerCase().includes(search.toLowerCase()) ||
      n.focus.toLowerCase().includes(search.toLowerCase());
    return matchesSdg && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-4xl mb-3">🤝</div>
          <h1 className="text-4xl font-bold mb-3">NGO Directory</h1>
          <p className="text-blue-100 max-w-2xl leading-relaxed">
            A curated list of NGOs working across the 7 SDGs. Every organisation
            listed here is one you can reach out to directly for support or
            partnership.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search NGOs by name or focus area..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm shadow-sm"
          />
        </div>

        {/* SDG Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {SDG_FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={
                "px-4 py-2 rounded-full text-sm font-medium border transition-all " +
                (filter === f.id
                  ? "bg-blue-900 text-white border-blue-900"
                  : "bg-white text-gray-600 border-gray-200 hover:border-blue-300")
              }
            >
              {f.emoji} {f.label}
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-500 mb-5">
          {filtered.length} NGOs found
        </p>

        {/* NGO Cards */}
        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center border border-gray-100 shadow-sm">
            <div className="text-4xl mb-3">🔍</div>
            <p className="text-gray-500">
              No NGOs match your search. Try a different keyword or filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((n, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={
                      "text-xs font-semibold px-3 py-1 rounded-full " +
                      SDG_COLORS[n.sdg]
                    }
                  >
                    SDG {n.sdg} · {n.focus}
                  </span>
                  {n.verified && (
                    <span className="text-xs font-semibold text-green-700 flex items-center gap-1">
                      ✅ Verified
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-blue-900 mb-2">{n.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {n.desc}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                  <span>📍</span>
                  <span>{n.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>📧</span>
                    <span>{n.contact}</span>
                  </div>
                  <a
                    href={"mailto:" + n.contact}
                    className="bg-blue-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    Contact →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <section className="py-12 px-4 bg-gradient-to-r from-blue-900 to-green-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-4xl mb-4">🏛️</div>
          <h2 className="text-2xl font-bold mb-3">Are you an NGO?</h2>
          <p className="text-blue-100 mb-6">
            Register your organisation on SarthakAI to reach more people who
            need your help.
          </p>
          <Link
            to="/login?mode=signup"
            className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg inline-block"
          >
            Register Your NGO 🏛️
          </Link>
        </div>
      </section>
    </div>
  );
}

export default NGODirectory;
