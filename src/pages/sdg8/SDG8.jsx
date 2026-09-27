import { useState } from "react";
import { Link } from "react-router-dom";

const schemes = [
  {
    name: "PM Mudra Yojana",
    type: "Business Loan",
    desc: "Loans up to ₹10 lakh for non-farm micro and small enterprises without collateral",
    eligibility:
      "Any Indian citizen with a business plan for non-farm activities",
    link: "https://mudra.org.in",
  },
  {
    name: "Skill India Mission",
    type: "Skill Development",
    desc: "Free vocational training and certification in 40+ sectors to enhance employability",
    eligibility: "Youth aged 15-45 seeking skill development and certification",
    link: "https://skillindia.gov.in",
  },
  {
    name: "PM Employment Generation Programme",
    type: "Self Employment",
    desc: "Credit-linked subsidy for setting up micro enterprises in non-farm sector",
    eligibility:
      "Any individual above 18 years with project cost up to ₹50 lakh",
    link: "https://kviconline.gov.in",
  },
  {
    name: "National Apprenticeship Promotion Scheme",
    type: "Apprenticeship",
    desc: "Government shares 25% of stipend cost with employers to promote apprenticeships",
    eligibility:
      "Youth seeking apprenticeship training with registered employers",
    link: "https://apprenticeship.gov.in",
  },
  {
    name: "Stand-Up India",
    type: "Entrepreneurship",
    desc: "Bank loans ₹10 lakh to ₹1 crore for SC/ST and women entrepreneurs",
    eligibility: "SC/ST and women entrepreneurs for greenfield enterprises",
    link: "https://standupmitra.in",
  },
  {
    name: "PM SVANidhi",
    type: "Street Vendors",
    desc: "Working capital loans for street vendors to resume livelihoods",
    eligibility:
      "Street vendors with Certificate of Vending or Letter of Recommendation",
    link: "https://pmsvanidhi.mohua.gov.in",
  },
];

const ngos = [
  {
    name: "Gram Tarang",
    focus: "Skill Training",
    desc: "Provides skill development training to rural youth for employment in industries",
    contact: "info@gramtarang.org",
  },
  {
    name: "iMerit",
    focus: "Digital Jobs",
    desc: "Creates tech-enabled jobs for underserved youth through digital skill training",
    contact: "contact@imerit.net",
  },
  {
    name: "Villgro Innovations",
    focus: "Social Enterprise",
    desc: "Incubates and supports social enterprises that create livelihoods at the grassroots",
    contact: "info@villgro.org",
  },
  {
    name: "Mann Deshi Foundation",
    focus: "Women Livelihood",
    desc: "Business and banking solutions for rural women entrepreneurs",
    contact: "info@manndeshi.org",
  },
];

const jobCategories = [
  {
    emoji: "💻",
    title: "IT & Software",
    openings: "2.3 lakh+",
    platforms: ["Naukri", "LinkedIn", "Indeed"],
  },
  {
    emoji: "🏭",
    title: "Manufacturing",
    openings: "1.8 lakh+",
    platforms: ["NCS Portal", "Rojgar Mela", "ITI Jobs"],
  },
  {
    emoji: "🏥",
    title: "Healthcare",
    openings: "95,000+",
    platforms: ["NHM Jobs", "Hospital Careers", "Medico Jobs"],
  },
  {
    emoji: "🎓",
    title: "Education",
    openings: "1.2 lakh+",
    platforms: ["CTET Jobs", "State PSC", "School Jobs"],
  },
  {
    emoji: "🏗️",
    title: "Construction",
    openings: "3.1 lakh+",
    platforms: ["MGNREGS", "Smart Cities", "PWD Jobs"],
  },
  {
    emoji: "🌾",
    title: "Agriculture",
    openings: "85,000+",
    platforms: ["Agri Jobs", "FPO Careers", "NABARD"],
  },
];

const stats = [
  { number: "47 Cr", label: "Total workforce in India" },
  { number: "30 Lakh", label: "Jobs created under Skill India" },
  { number: "₹10 Lakh", label: "Max MUDRA loan amount" },
  { number: "1000+", label: "Skill training centres" },
];

function SDG8() {
  const [activeTab, setActiveTab] = useState("schemes");

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-emerald-700 via-green-600 to-teal-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full">
              SDG 8
            </span>
            <span className="text-green-100 text-sm">
              United Nations Sustainable Development Goal
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Decent Work & Economic Growth 🟢
          </h1>
          <p className="text-green-100 text-lg max-w-2xl leading-relaxed mb-8">
            Promote sustained, inclusive economic growth. Find jobs,
            internships, skill development programs and entrepreneurship
            support.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-green-100 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">
            Browse Jobs by Category
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Explore employment opportunities across major sectors in India.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {jobCategories.map((cat, i) => (
              <div
                key={i}
                className="bg-green-50 border border-green-200 rounded-2xl p-4 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-2">{cat.emoji}</div>
                <h3 className="font-bold text-blue-900 text-sm">{cat.title}</h3>
                <p className="text-green-700 text-xs font-semibold mt-1">
                  {cat.openings} openings
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {cat.platforms.map((p, j) => (
                    <span
                      key={j}
                      className="bg-white text-gray-500 text-xs px-2 py-0.5 rounded-full border border-gray-200"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NCS Portal CTA */}
      <section className="py-8 px-4 bg-emerald-50">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-white rounded-2xl p-6 shadow-sm border border-green-200">
          <div>
            <h3 className="font-bold text-blue-900 text-lg mb-1">
              National Career Service Portal
            </h3>
            <p className="text-gray-600 text-sm">
              Government's official job portal with 1 crore+ job listings,
              career counselling and skill courses.
            </p>
          </div>
          <a
            href="https://www.ncs.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors whitespace-nowrap"
          >
            Visit NCS Portal →
          </a>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-2 mb-8 bg-white rounded-2xl p-1.5 shadow-sm border border-gray-100 w-fit">
            {["schemes", "ngos", "startup"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${activeTab === tab ? "bg-emerald-600 text-white shadow-md" : "text-gray-600 hover:text-emerald-600"}`}
              >
                {tab === "schemes"
                  ? "🏛️ Govt Schemes"
                  : tab === "ngos"
                    ? "🤝 NGOs"
                    : "🚀 Start a Business"}
              </button>
            ))}
          </div>

          {activeTab === "schemes" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {schemes.map((scheme, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
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
                    className="block text-center bg-emerald-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    Apply / Learn More →
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
                  <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {ngo.focus}
                  </span>
                  <h3 className="font-bold text-blue-900 mt-3 mb-2">
                    {ngo.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {ngo.desc}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>📧</span>
                    <span>{ngo.contact}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "startup" && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  {
                    emoji: "💡",
                    title: "Startup India",
                    desc: "Register your startup, get tax benefits and access to funding ecosystem",
                    link: "https://startupindia.gov.in",
                    action: "Register Startup",
                  },
                  {
                    emoji: "🏦",
                    title: "SIDBI Funding",
                    desc: "Financing support for micro, small and medium enterprises",
                    link: "https://sidbi.in",
                    action: "Explore Funding",
                  },
                  {
                    emoji: "🎓",
                    title: "MSME Training",
                    desc: "Free business development and entrepreneurship training programs",
                    link: "https://msme.gov.in",
                    action: "Start Training",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
                  >
                    <div className="text-4xl mb-4">{item.emoji}</div>
                    <h3 className="font-bold text-blue-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-5">{item.desc}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-emerald-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors"
                    >
                      {item.action}
                    </a>
                  </div>
                ))}
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                <h3 className="font-bold text-blue-900 mb-3">
                  🗺️ Business Idea to Reality — Roadmap
                </h3>
                <div className="flex flex-col md:flex-row gap-3">
                  {[
                    "Validate Idea",
                    "Register Business",
                    "Get Funding",
                    "Hire & Grow",
                    "Scale Up",
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {step}
                      </span>
                      {i < 4 && (
                        <span className="text-gray-300 hidden md:block">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-r from-blue-900 to-green-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-4xl mb-4">🤖</div>
          <h2 className="text-2xl font-bold mb-3">Need personalized help?</h2>
          <p className="text-blue-100 mb-6">
            Let our AI find the best job opportunities and skill programs for
            your profile.
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

export default SDG8;
