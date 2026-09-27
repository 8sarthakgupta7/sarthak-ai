import { useState } from "react";
import { Link } from "react-router-dom";

const schemes = [
  {
    name: "Ayushman Bharat - PMJAY",
    type: "Health Insurance",
    desc: "Health cover of ₹5 lakh per family per year for secondary and tertiary hospitalisation",
    eligibility: "Bottom 40% of Indian population based on SECC data",
    link: "https://pmjay.gov.in",
  },
  {
    name: "PM Jan Arogya Yojana",
    type: "Free Treatment",
    desc: "Cashless treatment at empanelled government and private hospitals",
    eligibility: "Families listed in SECC 2011 database",
    link: "https://pmjay.gov.in",
  },
  {
    name: "Janani Suraksha Yojana",
    type: "Maternal Health",
    desc: "Cash assistance to pregnant women for institutional delivery to reduce maternal mortality",
    eligibility: "Pregnant women from BPL families",
    link: "https://nhm.gov.in",
  },
  {
    name: "National Health Mission",
    type: "Primary Healthcare",
    desc: "Free primary healthcare services including medicines and diagnostics at public facilities",
    eligibility: "All Indian citizens, especially rural and urban poor",
    link: "https://nhm.gov.in",
  },
  {
    name: "PM National Dialysis Programme",
    type: "Dialysis",
    desc: "Free dialysis services to poor patients with chronic kidney disease",
    eligibility: "BPL patients requiring dialysis",
    link: "https://nhm.gov.in",
  },
  {
    name: "Rashtriya Arogya Nidhi",
    type: "Critical Illness",
    desc: "Financial assistance for treatment of life threatening diseases in government hospitals",
    eligibility: "BPL patients suffering from major life threatening diseases",
    link: "https://mohfw.gov.in",
  },
];

const ngos = [
  {
    name: "Doctors Without Borders (MSF)",
    focus: "Emergency Healthcare",
    desc: "Provides emergency medical care in crisis situations and underserved areas",
    contact: "office-del@delhi.msf.org",
  },
  {
    name: "Smile Foundation",
    focus: "Community Health",
    desc: "Mobile health units providing healthcare to underprivileged communities",
    contact: "info@smilefoundationindia.org",
  },
  {
    name: "HelpAge India",
    focus: "Elder Care",
    desc: "Healthcare and support services for disadvantaged elderly people",
    contact: "hai@helpageindia.org",
  },
  {
    name: "iKure",
    focus: "Rural Healthcare",
    desc: "Technology-driven primary healthcare for rural and peri-urban areas",
    contact: "info@ikure.in",
  },
];

const stats = [
  { number: "55 Cr", label: "Ayushman Bharat beneficiaries" },
  { number: "₹5 Lakh", label: "Annual health cover per family" },
  { number: "1.5 Lakh", label: "Health & Wellness Centres" },
  { number: "25,000+", label: "Empanelled hospitals" },
];

function SDG3() {
  const [activeTab, setActiveTab] = useState("schemes");

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-green-700 via-green-600 to-teal-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full">
              SDG 3
            </span>
            <span className="text-green-100 text-sm">
              United Nations Sustainable Development Goal
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Good Health & Well-being 🔵
          </h1>
          <p className="text-green-100 text-lg max-w-2xl leading-relaxed mb-8">
            Ensure healthy lives and promote well-being for all ages. Connect
            people to affordable healthcare, NGOs and medical resources.
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

      {/* Quick Access */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Quick Health Access
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                emoji: "🏥",
                title: "Find Hospital",
                desc: "Nearest govt hospital",
              },
              {
                emoji: "👨‍⚕️",
                title: "Low-cost Doctor",
                desc: "Affordable consultation",
              },
              { emoji: "🩸", title: "Blood Bank", desc: "Find blood donors" },
              { emoji: "🚑", title: "Emergency", desc: "Call 108 ambulance" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-green-50 border border-green-200 rounded-2xl p-4 text-center hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="text-3xl mb-2">{item.emoji}</div>
                <h3 className="font-bold text-blue-900 text-sm">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-2 mb-8 bg-white rounded-2xl p-1.5 shadow-sm border border-gray-100 w-fit">
            {["schemes", "ngos", "teleconsult"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${activeTab === tab ? "bg-green-600 text-white shadow-md" : "text-gray-600 hover:text-green-600"}`}
              >
                {tab === "schemes"
                  ? "🏛️ Govt Schemes"
                  : tab === "ngos"
                    ? "🤝 Health NGOs"
                    : "📱 Teleconsult"}
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
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
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
                    className="block text-center bg-green-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-green-700 transition-colors"
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

          {activeTab === "teleconsult" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  emoji: "💻",
                  title: "eSanjeevani",
                  desc: "Free government teleconsultation platform — consult doctors from home",
                  link: "https://esanjeevani.mohfw.gov.in",
                  action: "Book Free Consultation",
                },
                {
                  emoji: "📞",
                  title: "Arogya Setu",
                  desc: "Health status tracking and telemedicine services through govt app",
                  link: "https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu",
                  action: "Download App",
                },
                {
                  emoji: "🏥",
                  title: "AIIMS Teleconsult",
                  desc: "Online consultation with AIIMS doctors for complex medical cases",
                  link: "https://aiims.edu",
                  action: "Book Appointment",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
                >
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-5">{item.desc}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-green-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-green-700 transition-colors"
                  >
                    {item.action}
                  </a>
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
            Let our AI find the most relevant healthcare schemes and support for
            your situation.
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

export default SDG3;
