import { useState } from "react";
import { Link } from "react-router-dom";

const schemes = [
  {
    name: "National Scholarship Portal",
    type: "Scholarship",
    desc: "Single platform for all central and state government scholarships for students",
    eligibility:
      "Students from minority, SC/ST, OBC and economically weaker sections",
    link: "https://scholarships.gov.in",
  },
  {
    name: "PM eVIDYA",
    type: "Digital Education",
    desc: "Multi-mode access to digital education through TV, radio, and online platforms",
    eligibility: "All students across India, especially in remote areas",
    link: "https://diksha.gov.in",
  },
  {
    name: "Skill India Mission",
    type: "Skill Development",
    desc: "Vocational training and skill certification to enhance employability",
    eligibility: "Youth aged 15-45 seeking skill development",
    link: "https://skillindia.gov.in",
  },
  {
    name: "PM Free Coaching Scheme",
    type: "Free Coaching",
    desc: "Free coaching for competitive exams like UPSC, SSC, banking for minority students",
    eligibility: "Minority students with family income below ₹6 lakh",
    link: "https://minorityaffairs.gov.in",
  },
  {
    name: "SWAYAM",
    type: "Online Courses",
    desc: "Free online courses from best universities and colleges across India",
    eligibility: "All Indian students and working professionals",
    link: "https://swayam.gov.in",
  },
  {
    name: "Pradhan Mantri Gramin Digital Saksharta Abhiyan",
    type: "Digital Literacy",
    desc: "Digital literacy training for rural households to access e-services",
    eligibility: "One member per rural household who is not digitally literate",
    link: "https://pmgdisha.in",
  },
];

const ngos = [
  {
    name: "Pratham",
    focus: "Elementary Education",
    desc: "India's largest education NGO working to improve learning outcomes for children",
    contact: "info@pratham.org",
  },
  {
    name: "Teach For India",
    focus: "Teaching Fellowship",
    desc: "Places college graduates and professionals as teachers in low-income schools",
    contact: "contact@teachforindia.org",
  },
  {
    name: "Vidya Daan Kosh",
    focus: "Digital Education",
    desc: "Collects and distributes digital learning content for underprivileged children",
    contact: "vidyadaan@education.gov.in",
  },
  {
    name: "Room to Read",
    focus: "Literacy & Girls Education",
    desc: "Promotes literacy and gender equality in education across Asia and Africa",
    contact: "info@roomtoread.org",
  },
];

const roadmaps = [
  {
    career: "💻 Software Developer",
    steps: [
      "Learn HTML/CSS/JS",
      "Pick React or Node.js",
      "Build 3 projects",
      "Contribute to GitHub",
      "Apply for internships",
    ],
    time: "8-12 months",
  },
  {
    career: "📊 Data Scientist",
    steps: [
      "Learn Python basics",
      "Statistics & Math",
      "Pandas, NumPy, Sklearn",
      "ML projects on Kaggle",
      "Get certified",
    ],
    time: "10-14 months",
  },
  {
    career: "🏛️ Civil Services (UPSC)",
    steps: [
      "NCERT books (6-12)",
      "Current affairs daily",
      "Standard books per subject",
      "Previous year papers",
      "Mock test series",
    ],
    time: "18-24 months",
  },
  {
    career: "🏥 Medical (NEET)",
    steps: [
      "Physics, Chemistry, Biology",
      "NCERT thoroughly",
      "Practice MCQs daily",
      "Mock tests",
      "Revision strategy",
    ],
    time: "12-18 months",
  },
];

const stats = [
  { number: "26.5 Cr", label: "Students in govt schools" },
  { number: "1 Cr+", label: "Scholarships awarded yearly" },
  { number: "1000+", label: "Free courses on SWAYAM" },
  { number: "₹75,000", label: "Max scholarship amount" },
];

function SDG4() {
  const [activeTab, setActiveTab] = useState("schemes");
  const [selectedCareer, setSelectedCareer] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full">
              SDG 4
            </span>
            <span className="text-purple-100 text-sm">
              United Nations Sustainable Development Goal
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Quality Education 🟣
          </h1>
          <p className="text-purple-100 text-lg max-w-2xl leading-relaxed mb-8">
            Ensure inclusive and equitable quality education. Discover
            scholarships, free coaching, skill programs and AI-powered learning
            roadmaps.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-purple-100 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8 bg-white rounded-2xl p-1.5 shadow-sm border border-gray-100 w-fit">
            {["schemes", "ngos", "roadmap", "resources"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${activeTab === tab ? "bg-purple-600 text-white shadow-md" : "text-gray-600 hover:text-purple-600"}`}
              >
                {tab === "schemes"
                  ? "🏛️ Schemes"
                  : tab === "ngos"
                    ? "🤝 NGOs"
                    : tab === "roadmap"
                      ? "🗺️ Career Roadmap"
                      : "📚 Free Resources"}
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
                  <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
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
                    className="block text-center bg-purple-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-purple-700 transition-colors"
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
                  <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
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

          {activeTab === "roadmap" && (
            <div>
              <p className="text-gray-600 mb-6">
                Select your target career to see a step-by-step free learning
                roadmap:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {roadmaps.map((r, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedCareer(r)}
                    className={`p-4 rounded-2xl border-2 text-left transition-all ${selectedCareer?.career === r.career ? "border-purple-500 bg-purple-50" : "border-gray-200 bg-white hover:border-purple-300"}`}
                  >
                    <div className="text-2xl mb-2">
                      {r.career.split(" ")[0]}
                    </div>
                    <div className="font-semibold text-blue-900 text-sm">
                      {r.career.substring(3)}
                    </div>
                    <div className="text-gray-400 text-xs mt-1">{r.time}</div>
                  </button>
                ))}
              </div>
              {selectedCareer && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-200">
                  <h3 className="font-bold text-blue-900 text-lg mb-2">
                    {selectedCareer.career}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Estimated time: {selectedCareer.time}
                  </p>
                  <div className="space-y-3">
                    {selectedCareer.steps.map((step, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                          {i + 1}
                        </div>
                        <div className="flex-1 bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-700">
                          {step}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/ai-assist"
                    className="mt-6 block text-center bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Get Personalized AI Roadmap 🤖
                  </Link>
                </div>
              )}
            </div>
          )}

          {activeTab === "resources" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  emoji: "🎓",
                  title: "SWAYAM",
                  desc: "1000+ free courses from IITs and central universities",
                  link: "https://swayam.gov.in",
                },
                {
                  emoji: "📺",
                  title: "NPTEL",
                  desc: "Free video lectures from IIT professors on all subjects",
                  link: "https://nptel.ac.in",
                },
                {
                  emoji: "📖",
                  title: "DIKSHA",
                  desc: "Free digital textbooks and learning content for school students",
                  link: "https://diksha.gov.in",
                },
                {
                  emoji: "💡",
                  title: "Khan Academy",
                  desc: "Free world-class education in Math, Science and more",
                  link: "https://khanacademy.org",
                },
                {
                  emoji: "🌐",
                  title: "Coursera (Audit)",
                  desc: "Audit thousands of courses from top global universities for free",
                  link: "https://coursera.org",
                },
                {
                  emoji: "🏆",
                  title: "Google Digital Garage",
                  desc: "Free digital skills training and certification from Google",
                  link: "https://learndigital.withgoogle.com",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-purple-300 transition-all block"
                >
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                  <div className="mt-4 text-purple-600 text-sm font-medium">
                    Visit →
                  </div>
                </a>
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
            Let our AI find the best scholarships and learning path for your
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

export default SDG4;
