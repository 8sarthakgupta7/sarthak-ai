import { useState } from "react";
import { Link } from "react-router-dom";

const schemes = [
  {
    name: "PM Awas Yojana (Urban)",
    type: "Housing",
    desc: "Affordable housing for urban poor",
    eligibility: "Urban poor with annual income up to 18 lakh",
    link: "https://pmaymis.gov.in",
  },
  {
    name: "Smart Cities Mission",
    type: "Urban Development",
    desc: "Develops 100 smart cities with better infrastructure and technology",
    eligibility: "Citizens of selected 100 smart cities",
    link: "https://smartcities.gov.in",
  },
  {
    name: "AMRUT 2.0",
    type: "Infrastructure",
    desc: "Provides basic urban infrastructure — water supply, sewerage, green spaces",
    eligibility: "Residents of 500 AMRUT cities",
    link: "https://amrut.gov.in",
  },
  {
    name: "Swachh Bharat Mission Urban",
    type: "Sanitation",
    desc: "Makes cities open defecation free and improves solid waste management",
    eligibility: "All urban residents",
    link: "https://swachhbharatmission.gov.in",
  },
  {
    name: "National Urban Livelihood Mission",
    type: "Urban Livelihood",
    desc: "Self-employment and skill development for urban poor and street vendors",
    eligibility: "Urban poor, homeless, street vendors",
    link: "https://nulm.gov.in",
  },
];

const ngos = [
  {
    name: "Janaagraha",
    focus: "Urban Governance",
    desc: "Works to improve quality of life in cities through better urban governance",
    contact: "contact@janaagraha.org",
  },
  {
    name: "SPARC India",
    focus: "Slum Communities",
    desc: "Works with pavement dwellers and slum communities for housing and basic services",
    contact: "sparc@sparcint.org",
  },
  {
    name: "Chintan Environmental Research",
    focus: "Waste Management",
    desc: "Works on sustainable waste management and supports waste picker communities",
    contact: "info@chintan-india.org",
  },
  {
    name: "Clean Air Fund India",
    focus: "Air Quality",
    desc: "Works to improve air quality in Indian cities through policy and community action",
    contact: "india@cleanairfund.org",
  },
];

const issueCategories = [
  {
    emoji: "🗑️",
    label: "Garbage / Waste",
    color: "bg-yellow-50 border-yellow-200",
  },
  { emoji: "💧", label: "Water Leakage", color: "bg-blue-50 border-blue-200" },
  {
    emoji: "💡",
    label: "Street Light",
    color: "bg-orange-50 border-orange-200",
  },
  { emoji: "🛣️", label: "Road Damage", color: "bg-red-50 border-red-200" },
  {
    emoji: "♿",
    label: "Accessibility",
    color: "bg-purple-50 border-purple-200",
  },
  { emoji: "🌳", label: "Tree / Parks", color: "bg-green-50 border-green-200" },
  { emoji: "🚧", label: "Construction", color: "bg-gray-50 border-gray-200" },
  {
    emoji: "📋",
    label: "Other Issue",
    color: "bg-indigo-50 border-indigo-200",
  },
];

const stats = [
  { number: "4,000+", label: "Urban local bodies" },
  { number: "100", label: "Smart cities selected" },
  { number: "2 Lakh Cr", label: "Urban investment planned" },
  { number: "500+", label: "AMRUT cities" },
];

function SDG11() {
  const [activeTab, setActiveTab] = useState("report");
  const [selectedIssue, setSelectedIssue] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selectedIssue && location && description) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setSelectedIssue("");
    setLocation("");
    setDescription("");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-orange-600 via-orange-500 to-amber-400 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full">
              SDG 11
            </span>
            <span className="text-orange-100 text-sm">
              United Nations Sustainable Development Goal
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sustainable Cities
          </h1>
          <p className="text-orange-100 text-lg max-w-2xl leading-relaxed mb-8">
            Make cities inclusive, safe, resilient and sustainable. Report civic
            issues, discover urban schemes and help build better communities.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-orange-100 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8 bg-white rounded-2xl p-1.5 shadow-sm border border-gray-100 w-fit">
            {["report", "schemes", "ngos", "community"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${activeTab === tab ? "bg-orange-500 text-white shadow-md" : "text-gray-600 hover:text-orange-600"}`}
              >
                {tab === "report"
                  ? "📍 Report Issue"
                  : tab === "schemes"
                    ? "🏛️ Govt Schemes"
                    : tab === "ngos"
                      ? "🤝 NGOs"
                      : "🏘️ Community"}
              </button>
            ))}
          </div>

          {activeTab === "report" && (
            <div>
              {submitted ? (
                <div className="bg-white rounded-3xl p-10 text-center shadow-sm border border-gray-100">
                  <div className="text-6xl mb-4">✅</div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">
                    Issue Reported!
                  </h2>
                  <div className="bg-orange-50 rounded-2xl p-4 mb-6 inline-block">
                    <p className="text-orange-800 font-bold text-lg">
                      Report ID: #SDG11-83591
                    </p>
                  </div>
                  <div className="space-y-3 text-left max-w-sm mx-auto mb-8">
                    {[
                      "Submitted",
                      "Under Review...",
                      "Assigned to Authority",
                      "In Progress",
                      "Resolved",
                    ].map((step, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium ${i < 2 ? "bg-orange-50 text-orange-800" : "bg-gray-50 text-gray-400"}`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${i < 2 ? "bg-orange-500" : "bg-gray-300"}`}
                        ></div>
                        {step}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={handleReset}
                    className="bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Report Another Issue
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold text-blue-900 mb-2">
                    Report a Civic Issue
                  </h2>
                  <p className="text-gray-500 text-sm mb-8">
                    Select the issue type, add location and description.
                  </p>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      1. Select Issue Type
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {issueCategories.map((cat, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedIssue(cat.label)}
                          className={`p-3 rounded-xl border-2 text-left transition-all ${selectedIssue === cat.label ? "border-orange-500 bg-orange-50" : cat.color + " border"}`}
                        >
                          <div className="text-2xl mb-1">{cat.emoji}</div>
                          <div className="text-xs font-semibold text-blue-900">
                            {cat.label}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      2. Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Near Ram Nagar Bus Stop, Shimla"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-400 text-sm"
                    />
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      3. Description
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe the issue in detail..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-400 text-sm resize-none"
                    />
                  </div>

                  {selectedIssue && (
                    <div className="bg-orange-50 rounded-2xl p-4 mb-6 flex items-center gap-3">
                      <div className="text-2xl">🤖</div>
                      <div>
                        <p className="text-sm font-semibold text-orange-800">
                          AI Classification
                        </p>
                        <p className="text-xs text-orange-600 mt-0.5">
                          Tagged as: SDG 11 — Sustainable Cities
                        </p>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={!selectedIssue || !location || !description}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-all shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Submit Report
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === "schemes" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {schemes.map((scheme, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {scheme.type}
                  </span>
                  <h3 className="font-bold text-blue-900 mt-3 mb-2">
                    {scheme.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {scheme.desc}
                  </p>
                  <div className="bg-gray-50 rounded-xl p-3 mb-4">
                    <p className="text-xs text-gray-500 font-medium">
                      Eligibility
                    </p>
                    <p className="text-sm text-gray-700 mt-0.5">
                      {scheme.eligibility}
                    </p>
                  </div>
                  <a
                    href={scheme.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-orange-500 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Apply / Learn More
                  </a>
                </div>
              ))}
            </div>
          )}

          {activeTab === "ngos" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {ngos.map((ngo, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {ngo.focus}
                  </span>
                  <h3 className="font-bold text-blue-900 mt-3 mb-2">
                    {ngo.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {ngo.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>📧</span>
                      <span>{ngo.contact}</span>
                    </div>
                    <a
                      href={"mailto:" + ngo.contact}
                      className="bg-blue-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-blue-800 transition-colors"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "community" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  emoji: "🗺️",
                  title: "Issue Map",
                  desc: "View all reported civic issues in your locality",
                  action: "Coming Soon",
                  disabled: true,
                },
                {
                  emoji: "📊",
                  title: "Resolution Stats",
                  desc: "See how quickly issues are being resolved in your city",
                  action: "Coming Soon",
                  disabled: true,
                },
                {
                  emoji: "🏆",
                  title: "Active Citizens",
                  desc: "See the most active citizens contributing this month",
                  action: "Coming Soon",
                  disabled: true,
                },
                {
                  emoji: "🌱",
                  title: "Green Initiatives",
                  desc: "Join tree plantation drives in your area",
                  action: "Join Now",
                  disabled: false,
                },
                {
                  emoji: "🤝",
                  title: "Volunteer",
                  desc: "Join community clean-up drives and civic activities",
                  action: "Volunteer",
                  disabled: false,
                },
                {
                  emoji: "📢",
                  title: "Spread Awareness",
                  desc: "Share SarthakAI with your community",
                  action: "Share",
                  disabled: false,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-5">{item.desc}</p>
                  <button
                    disabled={item.disabled}
                    className={`w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-colors ${item.disabled ? "bg-gray-300 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600"}`}
                  >
                    {item.action}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-r from-blue-900 to-green-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-4xl mb-4">🤖</div>
          <h2 className="text-2xl font-bold mb-3">Need personalized help?</h2>
          <p className="text-blue-100 mb-6">
            Let our AI find the best urban schemes for your situation.
          </p>
          <Link
            to="/ai-assist"
            className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg inline-block"
          >
            Talk to AI Assistant 🤖
          </Link>
        </div>
      </section>
    </div>
  );
}

export default SDG11;
