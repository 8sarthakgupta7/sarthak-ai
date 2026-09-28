import { useState } from "react";
import { Link } from "react-router-dom";

const schemes = [
  {
    name: "PM Awas Yojana",
    type: "Housing",
    desc: "Affordable housing for families below poverty line",
    eligibility: "Annual income below ₹3 lakh",
    link: "https://pmaymis.gov.in",
  },
  {
    name: "MGNREGS",
    type: "Employment",
    desc: "100 days guaranteed wage employment per year for rural households",
    eligibility: "Any rural adult willing to do unskilled manual work",
    link: "https://nrega.nic.in",
  },
  {
    name: "PM Jan Dhan Yojana",
    type: "Financial",
    desc: "Zero balance bank account with RuPay debit card and insurance cover",
    eligibility: "Any Indian citizen without a bank account",
    link: "https://pmjdy.gov.in",
  },
  {
    name: "National Social Assistance Programme",
    type: "Social Security",
    desc: "Monthly pension for elderly, widows and disabled persons below poverty line",
    eligibility: "BPL families with elderly/widow/disabled members",
    link: "https://nsap.nic.in",
  },
  {
    name: "PM Garib Kalyan Anna Yojana",
    type: "Food Security",
    desc: "Free food grains (5kg per person per month) for poor families",
    eligibility: "Ration card holders / BPL families",
    link: "https://dfpd.gov.in",
  },
  {
    name: "Deen Dayal Antyodaya Yojana",
    type: "Livelihood",
    desc: "Skill training and livelihood support for urban and rural poor",
    eligibility: "Poor urban and rural households",
    link: "https://aajeevika.gov.in",
  },
];

const ngos = [
  {
    name: "Goonj",
    focus: "Relief & Livelihood",
    desc: "Provides material relief and works on rural livelihood development",
    contact: "info@goonj.org",
  },
  {
    name: "CRY — Child Rights and You",
    focus: "Child Poverty",
    desc: "Works to ensure underprivileged children get their basic rights",
    contact: "info@cry.org",
  },
  {
    name: "Pratham",
    focus: "Education & Skills",
    desc: "Provides education and skill development to underprivileged communities",
    contact: "info@pratham.org",
  },
  {
    name: "SEWA — Self Employed Women's Association",
    focus: "Women Livelihood",
    desc: "Organizes poor self-employed women workers for better wages and welfare",
    contact: "mail@sewa.org",
  },
];

const stats = [
  { number: "21.9%", label: "Indians below poverty line" },
  { number: "₹2.15L Cr", label: "Annual welfare expenditure" },
  { number: "80 Cr+", label: "Beneficiaries under food schemes" },
  { number: "500+", label: "Active welfare schemes" },
];

function SDG1() {
  const [activeTab, setActiveTab] = useState("schemes");
  const [formData, setFormData] = useState({
    location: "",
    income: "",
    family: "",
    needs: "",
  });
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-700 via-red-600 to-orange-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full">
              SDG 1
            </span>
            <span className="text-red-200 text-sm">
              United Nations Sustainable Development Goal
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">No Poverty 🔴</h1>
          <p className="text-red-100 text-lg max-w-2xl leading-relaxed mb-8">
            End poverty in all its forms everywhere. Connect vulnerable
            individuals and families to government schemes, NGOs, and
            philanthropists.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-red-200 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Help Form */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">
            Check Your Eligibility
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Answer a few questions to find schemes and support you may be
            eligible for.
          </p>

          {!showResults ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  State / Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Himachal Pradesh"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Annual Family Income
                </label>
                <select
                  value={formData.income}
                  onChange={(e) =>
                    setFormData({ ...formData, income: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-red-400 text-sm text-gray-700"
                >
                  <option value="">Select income range</option>
                  <option>Below ₹1 lakh</option>
                  <option>₹1 – 2 lakh</option>
                  <option>₹2 – 3 lakh</option>
                  <option>₹3 – 5 lakh</option>
                  <option>Above ₹5 lakh</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Family Size
                </label>
                <select
                  value={formData.family}
                  onChange={(e) =>
                    setFormData({ ...formData, family: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-red-400 text-sm text-gray-700"
                >
                  <option value="">Select family size</option>
                  <option>1 – 2 members</option>
                  <option>3 – 4 members</option>
                  <option>5 – 6 members</option>
                  <option>7+ members</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Primary Need
                </label>
                <select
                  value={formData.needs}
                  onChange={(e) =>
                    setFormData({ ...formData, needs: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-red-400 text-sm text-gray-700"
                >
                  <option value="">Select your need</option>
                  <option>Financial assistance</option>
                  <option>Food & ration support</option>
                  <option>Housing support</option>
                  <option>Employment</option>
                  <option>Social security / pension</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <button
                  onClick={() => setShowResults(true)}
                  className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-all shadow-md"
                >
                  🔍 Find Matching Schemes & Support
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h3 className="font-bold text-red-800 mb-2">
                ✅ Based on your profile, explore these resources:
              </h3>
              <p className="text-red-700 text-sm mb-4">
                You may be eligible for multiple schemes below. Verify official
                eligibility criteria before applying.
              </p>
              <button
                onClick={() => setShowResults(false)}
                className="text-red-600 text-sm underline"
              >
                ← Change my answers
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-2 mb-8 bg-white rounded-2xl p-1.5 shadow-sm border border-gray-100 w-fit">
            {["schemes", "ngos", "howtohelp"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${activeTab === tab ? "bg-red-600 text-white shadow-md" : "text-gray-600 hover:text-red-600"}`}
              >
                {tab === "schemes"
                  ? "🏛️ Govt Schemes"
                  : tab === "ngos"
                    ? "🤝 NGOs"
                    : "💝 How to Help"}
              </button>
            ))}
          </div>

          {/* Schemes */}
          {activeTab === "schemes" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {schemes.map((scheme, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {scheme.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-blue-900 mb-2">
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
                    className="block text-center bg-red-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-red-700 transition-colors"
                  >
                    Apply / Learn More →
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* NGOs */}
          {activeTab === "ngos" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {ngos.map((ngo, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
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
                      Contact →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* How to Help */}
          {activeTab === "howtohelp" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  emoji: "💰",
                  title: "Donate",
                  desc: "Contribute money to verified NGOs working on poverty alleviation",
                  action: "Find NGOs to Donate",
                },
                {
                  emoji: "🤝",
                  title: "Volunteer",
                  desc: "Give your time and skills to help communities in need",
                  action: "Browse Opportunities",
                },
                {
                  emoji: "📢",
                  title: "Spread Awareness",
                  desc: "Share information about welfare schemes with those who need them",
                  action: "Share SarthakAI",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
                >
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                    {item.desc}
                  </p>
                  <button className="w-full bg-red-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-red-700 transition-colors">
                    {item.action}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* AI Assistant CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-900 to-green-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-4xl mb-4">🤖</div>
          <h2 className="text-2xl font-bold mb-3">Need personalized help?</h2>
          <p className="text-blue-100 mb-6">
            Describe your situation to our AI and get a personalized plan with
            the most relevant schemes and support.
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

export default SDG1;
