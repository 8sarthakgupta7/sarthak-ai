import { useState } from "react";
import { Link } from "react-router-dom";

const schemes = [
  {
    name: "Beti Bachao Beti Padhao",
    type: "Girl Child",
    desc: "Promotes welfare of girl child — prevents gender biased sex selective elimination and ensures education",
    eligibility:
      "All families with girl children, especially in low sex ratio districts",
    link: "https://wcd.nic.in/bbbp-schemes",
  },
  {
    name: "Sukanya Samriddhi Yojana",
    type: "Financial Security",
    desc: "Small savings scheme for girl child with high interest rate and tax benefits",
    eligibility: "Girl child below 10 years of age",
    link: "https://www.indiapost.gov.in",
  },
  {
    name: "PM Matru Vandana Yojana",
    type: "Maternity Benefit",
    desc: "₹5,000 cash incentive for pregnant and lactating mothers for first live birth",
    eligibility: "Pregnant and lactating women aged 19 years and above",
    link: "https://wcd.nic.in",
  },
  {
    name: "Mahila Shakti Kendra",
    type: "Women Empowerment",
    desc: "Community engagement and empowerment of rural women through skill development",
    eligibility: "Rural women across India",
    link: "https://wcd.nic.in",
  },
  {
    name: "Support & Outreach — One Stop Centre",
    type: "Safety & Support",
    desc: "Integrated support for women affected by violence — medical, legal, shelter and counselling",
    eligibility: "All women affected by violence including domestic violence",
    link: "https://wcd.nic.in",
  },
  {
    name: "MUDRA Loan for Women",
    type: "Entrepreneurship",
    desc: "Micro finance loans up to ₹10 lakh for women entrepreneurs to start or grow businesses",
    eligibility: "Women entrepreneurs in non-farm income generating activities",
    link: "https://mudra.org.in",
  },
];

const ngos = [
  {
    name: "Oxfam India",
    focus: "Gender Justice",
    desc: "Works on gender equality, women's rights and ending violence against women",
    contact: "contactus@oxfamindia.org",
  },
  {
    name: "Breakthrough India",
    focus: "Gender Violence",
    desc: "Uses media and arts to build a world free of gender-based violence",
    contact: "info@breakthroughindia.org",
  },
  {
    name: "Apne Aap Women Worldwide",
    focus: "Women Trafficking",
    desc: "Works to end sex trafficking and caste-based discrimination against women",
    contact: "info@apneaap.org",
  },
  {
    name: "iCall",
    focus: "Mental Health",
    desc: "Free psychological counselling and mental health support especially for women",
    contact: "icall@tiss.edu",
  },
];

const helplines = [
  {
    number: "181",
    name: "Women Helpline",
    desc: "24/7 support for women in distress",
    color: "bg-pink-600",
  },
  {
    number: "1091",
    name: "Women in Distress",
    desc: "Police helpline for women",
    color: "bg-purple-600",
  },
  {
    number: "7827170170",
    name: "iCall Counselling",
    desc: "Free mental health support",
    color: "bg-indigo-600",
  },
  {
    number: "108",
    name: "Emergency Medical",
    desc: "Ambulance and emergency services",
    color: "bg-red-600",
  },
];

const stats = [
  { number: "181", label: "Women helpline number" },
  { number: "728+", label: "One Stop Centres" },
  { number: "₹5000", label: "Maternity benefit amount" },
  { number: "6.25 Cr", label: "Sukanya accounts opened" },
];

function SDG5() {
  const [activeTab, setActiveTab] = useState("schemes");
  const [reportType, setReportType] = useState("");

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-pink-700 via-pink-600 to-rose-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full">
              SDG 5
            </span>
            <span className="text-pink-100 text-sm">
              United Nations Sustainable Development Goal
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Gender Equality 🩷
          </h1>
          <p className="text-pink-100 text-lg max-w-2xl leading-relaxed mb-8">
            Achieve gender equality and empower all women and girls. Access
            support, awareness, government schemes and safe reporting pathways.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-pink-100 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Helplines */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">
            Emergency Helplines
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            If you or someone you know is in danger, please reach out
            immediately.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {helplines.map((h, i) => (
              <a
                key={i}
                href={"tel:" + h.number}
                className={`${h.color} text-white rounded-2xl p-4 text-center hover:opacity-90 transition-opacity`}
              >
                <div className="text-2xl font-bold mb-1">{h.number}</div>
                <div className="font-semibold text-sm">{h.name}</div>
                <div className="text-white/80 text-xs mt-1">{h.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Report / Seek Help */}
      <section className="py-10 px-4 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">
            Seek Help or Report an Issue
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Select the type of issue to find the right support pathway. All
            reports are handled with complete confidentiality.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {[
              { type: "Domestic Violence", emoji: "🏠" },
              { type: "Workplace Harassment", emoji: "💼" },
              { type: "Child Marriage", emoji: "👧" },
              { type: "Dowry Harassment", emoji: "⚠️" },
              { type: "Trafficking", emoji: "🚨" },
              { type: "Other Issue", emoji: "📋" },
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => setReportType(item.type)}
                className={`p-4 rounded-2xl border-2 text-left transition-all ${reportType === item.type ? "border-pink-500 bg-pink-100" : "border-gray-200 bg-white hover:border-pink-300"}`}
              >
                <div className="text-2xl mb-2">{item.emoji}</div>
                <div className="font-semibold text-blue-900 text-sm">
                  {item.type}
                </div>
              </button>
            ))}
          </div>
          {reportType && (
            <div className="bg-white rounded-2xl p-6 border-2 border-pink-200">
              <h3 className="font-bold text-pink-800 mb-3">
                Support pathway for: {reportType}
              </h3>
              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-6 h-6 bg-pink-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    1
                  </span>
                  Call Women Helpline <strong>181</strong> immediately for
                  guidance
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-6 h-6 bg-pink-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    2
                  </span>
                  Visit nearest <strong>One Stop Centre</strong> for integrated
                  support
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-6 h-6 bg-pink-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    3
                  </span>
                  File an <strong>FIR at the nearest police station</strong> or
                  call 1091
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-6 h-6 bg-pink-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    4
                  </span>
                  Contact <strong>iCall (7827170170)</strong> for free
                  counselling support
                </div>
              </div>
              <p className="text-xs text-gray-400">
                ⚠️ SarthakAI connects you to official support pathways. We do
                not investigate or adjudicate complaints. Please contact the
                appropriate authorities directly.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-2 mb-8 bg-white rounded-2xl p-1.5 shadow-sm border border-gray-100 w-fit">
            {["schemes", "ngos", "entrepreneur"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${activeTab === tab ? "bg-pink-600 text-white shadow-md" : "text-gray-600 hover:text-pink-600"}`}
              >
                {tab === "schemes"
                  ? "🏛️ Govt Schemes"
                  : tab === "ngos"
                    ? "🤝 NGOs"
                    : "💼 Women Entrepreneurs"}
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
                  <span className="bg-pink-100 text-pink-700 text-xs font-semibold px-3 py-1 rounded-full">
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
                    className="block text-center bg-pink-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-pink-700 transition-colors"
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
                  <span className="bg-rose-100 text-rose-700 text-xs font-semibold px-3 py-1 rounded-full">
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

          {activeTab === "entrepreneur" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  emoji: "💰",
                  title: "MUDRA Loan",
                  desc: "Get up to ₹10 lakh loan without collateral to start your business",
                  link: "https://mudra.org.in",
                  action: "Apply for Loan",
                },
                {
                  emoji: "👩‍💼",
                  title: "Stand-Up India",
                  desc: "Bank loans between ₹10 lakh to ₹1 crore for women SC/ST entrepreneurs",
                  link: "https://standupmitra.in",
                  action: "Learn More",
                },
                {
                  emoji: "🌸",
                  title: "Women SHGs",
                  desc: "Join Self Help Groups for micro-finance, training and collective support",
                  link: "https://aajeevika.gov.in",
                  action: "Find SHG Near You",
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
                    className="block bg-pink-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-pink-700 transition-colors"
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
            Talk to our AI for guidance on the right schemes and support for
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

export default SDG5;
