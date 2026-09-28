import { useState } from "react";
import { Link } from "react-router-dom";

const schemes = [
  {
    name: "PM Kisan Samman Nidhi",
    type: "Farmer Support",
    desc: "₹6,000 per year direct income support to small and marginal farmers",
    eligibility: "Farmers with cultivable land up to 2 hectares",
    link: "https://pmkisan.gov.in",
  },
  {
    name: "PM Fasal Bima Yojana",
    type: "Crop Insurance",
    desc: "Affordable crop insurance against natural calamities, pests and diseases",
    eligibility: "All farmers including sharecroppers and tenant farmers",
    link: "https://pmfby.gov.in",
  },
  {
    name: "National Food Security Act",
    type: "Food Security",
    desc: "Subsidised food grains at ₹1-3/kg to eligible households through PDS",
    eligibility: "Priority households and Antyodaya Anna Yojana families",
    link: "https://dfpd.gov.in",
  },
  {
    name: "Kisan Credit Card",
    type: "Credit Support",
    desc: "Flexible credit for farmers to meet agricultural and allied needs",
    eligibility: "Farmers, sharecroppers, oral lessees and self-help groups",
    link: "https://www.nabard.org",
  },
  {
    name: "PM Kisan Maandhan Yojana",
    type: "Pension",
    desc: "Monthly pension of ₹3,000 for small and marginal farmers after age 60",
    eligibility: "Small farmers aged 18-40 with land up to 2 hectares",
    link: "https://maandhan.in",
  },
  {
    name: "e-NAM",
    type: "Market Access",
    desc: "Online trading platform for agricultural commodities for better price discovery",
    eligibility: "All farmers and traders registered on the platform",
    link: "https://enam.gov.in",
  },
];

const ngos = [
  {
    name: "Akshaya Patra Foundation",
    focus: "Mid-Day Meals",
    desc: "World's largest NGO-run school meal program feeding 2 million children daily",
    contact: "info@akshayapatra.org",
  },
  {
    name: "Robin Hood Army",
    focus: "Food Redistribution",
    desc: "Collects surplus food from restaurants and distributes to the underprivileged",
    contact: "contact@robinhoodarmy.com",
  },
  {
    name: "BAIF Development Research Foundation",
    focus: "Agriculture",
    desc: "Works on sustainable agriculture and rural livelihood development",
    contact: "baif@baif.org.in",
  },
  {
    name: "Digital Green",
    focus: "Farmer Training",
    desc: "Uses technology to train farmers on better agricultural practices",
    contact: "info@digitalgreen.org",
  },
];

const stats = [
  { number: "19 Cr", label: "Undernourished people in India" },
  { number: "14 Cr", label: "Small & marginal farmers" },
  { number: "81 Cr", label: "PDS beneficiaries" },
  { number: "₹6000", label: "PM Kisan annual support" },
];

function SDG2() {
  const [activeTab, setActiveTab] = useState("schemes");

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-yellow-600 via-yellow-500 to-orange-400 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full">
              SDG 2
            </span>
            <span className="text-yellow-100 text-sm">
              United Nations Sustainable Development Goal
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Zero Hunger 🟡
          </h1>
          <p className="text-yellow-100 text-lg max-w-2xl leading-relaxed mb-8">
            End hunger, achieve food security and improved nutrition, and
            promote sustainable agriculture across India.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-yellow-100 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surplus Food Network */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">
            Surplus Food Network
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Have surplus food? Connect with NGOs and shelters near you to reduce
            waste and feed the hungry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
              <div className="text-3xl mb-3">🍱</div>
              <h3 className="font-bold text-blue-900 mb-2">
                I Have Surplus Food
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Restaurant, event, or household with leftover food? List it and
                we'll connect you to nearby shelters.
              </p>
              <button className="w-full bg-yellow-500 text-white py-3 rounded-xl font-semibold hover:bg-yellow-600 transition-colors">
                Post Surplus Food →
              </button>
            </div>
            <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
              <div className="text-3xl mb-3">🏠</div>
              <h3 className="font-bold text-blue-900 mb-2">
                I Need Food Support
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Shelter, orphanage, or community kitchen looking for food
                donations? Register your need here.
              </p>
              <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors">
                Request Food Support →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-2 mb-8 bg-white rounded-2xl p-1.5 shadow-sm border border-gray-100 w-fit">
            {["schemes", "ngos", "farmers"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${activeTab === tab ? "bg-yellow-500 text-white shadow-md" : "text-gray-600 hover:text-yellow-600"}`}
              >
                {tab === "schemes"
                  ? "🏛️ Govt Schemes"
                  : tab === "ngos"
                    ? "🤝 NGOs"
                    : "👨‍🌾 Farmer Resources"}
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
                  <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
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
                    className="block text-center bg-yellow-500 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-yellow-600 transition-colors"
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

          {activeTab === "farmers" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  emoji: "🌾",
                  title: "Subsidy Finder",
                  desc: "Find agricultural subsidies available in your state based on your crop and land size",
                  action: "Find Subsidies",
                },
                {
                  emoji: "📱",
                  title: "Mandi Prices",
                  desc: "Check real-time market prices for your crops at nearby mandis",
                  action: "Check Prices",
                },
                {
                  emoji: "🎓",
                  title: "Farming Training",
                  desc: "Access free training on modern farming techniques and best practices",
                  action: "Start Learning",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
                >
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-5">{item.desc}</p>
                  <button className="w-full bg-yellow-500 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-yellow-600 transition-colors">
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
            Let our AI find the most relevant schemes and support for your
            specific situation.
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

export default SDG2;
