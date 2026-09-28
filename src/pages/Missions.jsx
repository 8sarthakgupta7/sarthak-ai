import { useState } from "react";
import { Link } from "react-router-dom";

const LEVELS = [
  { level: 1, title: "SDG Explorer", emoji: "🌱", min: 0 },
  { level: 2, title: "Impact Starter", emoji: "🌿", min: 500 },
  { level: 3, title: "Impact Contributor", emoji: "🌍", min: 1500 },
  { level: 4, title: "Community Builder", emoji: "🤝", min: 3000 },
  { level: 5, title: "Impact Champion", emoji: "🚀", min: 5000 },
  { level: 6, title: "SDG Leader", emoji: "🌎", min: 8000 },
  { level: 7, title: "Global Changemaker", emoji: "🏆", min: 12000 },
];

const SDGS = [
  { id: 1, name: "No Poverty", emoji: "🔴", bar: "bg-red-500" },
  { id: 2, name: "Zero Hunger", emoji: "🟡", bar: "bg-yellow-500" },
  { id: 3, name: "Good Health", emoji: "🔵", bar: "bg-blue-500" },
  { id: 4, name: "Quality Education", emoji: "🟣", bar: "bg-purple-500" },
  { id: 5, name: "Gender Equality", emoji: "🩷", bar: "bg-pink-500" },
  { id: 8, name: "Decent Work", emoji: "🟢", bar: "bg-green-500" },
  { id: 11, name: "Sustainable Cities", emoji: "🟠", bar: "bg-orange-500" },
];

// Verification levels from the project design: XP is scaled by how well an action is verified
const VERIFY = {
  1: { label: "Self Report", mult: 0.5 },
  2: { label: "Evidence", mult: 1 },
  3: { label: "Organisation Verified", mult: 1.5 },
};

const MISSIONS = [
  {
    id: 1,
    title: "Complete 3 hours of free skill learning",
    desc: "Finish a free course module on SWAYAM, NPTEL or DIKSHA.",
    sdgs: [4, 8],
    xp: 50,
    verify: 2,
    time: "3 hrs",
  },
  {
    id: 2,
    title: "Teach a digital skill for 1 hour",
    desc: "Help someone learn basic computer or phone skills.",
    sdgs: [4, 8],
    xp: 80,
    verify: 3,
    time: "1 hr",
  },
  {
    id: 3,
    title: "Help a family find a welfare scheme",
    desc: "Guide a family to a scheme they may be eligible for using SarthakAI.",
    sdgs: [1],
    xp: 90,
    verify: 2,
    time: "1 hr",
  },
  {
    id: 4,
    title: "Donate surplus food via a verified organisation",
    desc: "Hand over surplus food to a registered NGO or shelter.",
    sdgs: [2],
    xp: 100,
    verify: 3,
    time: "2 hrs",
  },
  {
    id: 5,
    title: "Attend a free health camp",
    desc: "Join or volunteer at a health camp run by a verified NGO.",
    sdgs: [3],
    xp: 70,
    verify: 3,
    time: "3 hrs",
  },
  {
    id: 6,
    title: "Attend a gender-equality awareness session",
    desc: "Take part in a workshop or awareness event.",
    sdgs: [5],
    xp: 60,
    verify: 2,
    time: "2 hrs",
  },
  {
    id: 7,
    title: "Report a genuine civic issue",
    desc: "Report a real local problem such as waste, water or road damage.",
    sdgs: [11],
    xp: 40,
    verify: 2,
    time: "15 min",
  },
  {
    id: 8,
    title: "Join a tree plantation drive",
    desc: "Take part in a community plantation drive in your area.",
    sdgs: [11, 3],
    xp: 100,
    verify: 3,
    time: "3 hrs",
  },
];

const START_XP = 0;
const START_COUNTS = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 8: 0, 11: 0 };
const BADGE_TARGET = 3;

const BADGES = [
  { sdg: 1, name: "Community Supporter", emoji: "🏠" },
  { sdg: 2, name: "Hunger Fighter", emoji: "🍱" },
  { sdg: 3, name: "Health Ally", emoji: "❤️" },
  { sdg: 4, name: "Knowledge Builder", emoji: "📚" },
  { sdg: 5, name: "Equality Advocate", emoji: "⚖️" },
  { sdg: 8, name: "Opportunity Builder", emoji: "💼" },
  { sdg: 11, name: "Civic Champion", emoji: "🏙️" },
];

function getLevel(xp) {
  let current = LEVELS[0];
  for (const l of LEVELS) {
    if (xp >= l.min) current = l;
  }
  return current;
}

function Missions() {
  const [xp, setXp] = useState(START_XP);
  const [counts, setCounts] = useState(START_COUNTS);
  const [status, setStatus] = useState({});
  const [toast, setToast] = useState("");

  const current = getLevel(xp);
  const next = LEVELS.find((l) => l.level === current.level + 1);
  const progress = next
    ? Math.round(((xp - current.min) / (next.min - current.min)) * 100)
    : 100;
  const maxCount = Math.max(...Object.values(counts), 5);
  const allSeven = SDGS.every((s) => counts[s.id] > 0);
  const doneCount = Object.values(status).filter((s) => s === "done").length;

  const accept = (id) => {
    setStatus({ ...status, [id]: "accepted" });
  };

  const complete = (m) => {
    const gained = Math.round(m.xp * VERIFY[m.verify].mult);
    const oldLevel = getLevel(xp).level;
    const newXp = xp + gained;
    const newCounts = { ...counts };
    m.sdgs.forEach((id) => {
      newCounts[id] = (newCounts[id] || 0) + 1;
    });
    setXp(newXp);
    setCounts(newCounts);
    setStatus({ ...status, [m.id]: "done" });
    const newLevel = getLevel(newXp);
    setToast(
      newLevel.level > oldLevel
        ? "Level up! You are now " + newLevel.title + " (+" + gained + " XP)"
        : "Mission complete! +" + gained + " XP",
    );
    setTimeout(() => setToast(""), 3500);
  };

  const resetDemo = () => {
    setXp(START_XP);
    setCounts(START_COUNTS);
    setStatus({});
    setToast("");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {toast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg font-semibold text-sm">
          {toast}
        </div>
      )}

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-white/20 text-sm font-bold px-3 py-1 rounded-full">
              SDG Contribution Quest
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">My SDG Impact</h1>
          <p className="text-blue-100 max-w-2xl leading-relaxed">
            Take real actions, get them verified, earn Impact XP and build your
            contribution profile across the 7 goals.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-900 to-green-600 flex items-center justify-center text-3xl">
                {current.emoji}
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Level {current.level}
                </p>
                <h2 className="text-2xl font-bold text-blue-900">
                  {current.title}
                </h2>
              </div>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-semibold text-blue-900">
                {xp.toLocaleString()} XP
              </span>
              <span className="text-gray-500">
                {next
                  ? (next.min - xp).toLocaleString() + " XP to " + next.title
                  : "Max level reached"}
              </span>
            </div>
            <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-green-500 rounded-full transition-all duration-500"
                style={{ width: progress + "%" }}
              ></div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
            <div className="bg-orange-50 rounded-2xl p-4 text-center">
              <div className="text-2xl">🔥</div>
              <div className="font-bold text-orange-700">0 week streak</div>
              <div className="text-xs text-orange-600">
                Complete a mission to start
              </div>
            </div>
            <div className="bg-green-50 rounded-2xl p-4 text-center">
              <div className="text-2xl">✅</div>
              <div className="font-bold text-green-700">
                {doneCount} done this session
              </div>
              <div className="text-xs text-green-600">Missions completed</div>
            </div>
          </div>
        </div>

        {/* Contribution Profile */}
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-1">
            SDG Contribution Profile
          </h2>
          <p className="text-gray-500 text-sm mb-5">
            A record of your verified activities per goal. It shows
            participation, not official SDG outcomes.
          </p>
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 space-y-4">
            {SDGS.map((s) => (
              <div key={s.id} className="flex items-center gap-3">
                <div className="w-44 text-sm font-medium text-blue-900 flex items-center gap-2 shrink-0">
                  <span>{s.emoji}</span>
                  <span>SDG {s.id}</span>
                  <span className="text-gray-400 text-xs hidden sm:inline">
                    {s.name}
                  </span>
                </div>
                <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={
                      s.bar + " h-full rounded-full transition-all duration-500"
                    }
                    style={{
                      width: Math.round((counts[s.id] / maxCount) * 100) + "%",
                    }}
                  ></div>
                </div>
                <div className="w-24 text-right text-sm text-gray-600">
                  {counts[s.id]} activities
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Missions */}
        <section>
          <div className="flex items-end justify-between mb-5">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-1">
                Your Missions
              </h2>
              <p className="text-gray-500 text-sm">
                Accept a mission, do it in real life, then submit it. XP depends
                on how well it is verified.
              </p>
            </div>
            <button
              onClick={resetDemo}
              className="text-xs font-semibold text-gray-500 hover:text-blue-900 underline shrink-0"
            >
              Reset demo
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {MISSIONS.map((m) => {
              const st = status[m.id] || "available";
              const v = VERIFY[m.verify];
              const reward = Math.round(m.xp * v.mult);
              return (
                <div
                  key={m.id}
                  className={
                    "bg-white rounded-2xl p-6 shadow-sm border transition-all " +
                    (st === "done"
                      ? "border-green-300 bg-green-50/40"
                      : "border-gray-100 hover:shadow-md")
                  }
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {m.sdgs.map((id) => (
                      <span
                        key={id}
                        className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full"
                      >
                        SDG {id}
                      </span>
                    ))}
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">
                      {m.time}
                    </span>
                  </div>
                  <h3 className="font-bold text-blue-900 mb-1">{m.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {m.desc}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>
                      Verification:{" "}
                      <strong className="text-gray-700">{v.label}</strong> (x
                      {v.mult})
                    </span>
                    <span className="font-bold text-green-700 text-sm">
                      +{reward} XP
                    </span>
                  </div>
                  {st === "available" && (
                    <button
                      onClick={() => accept(m.id)}
                      className="w-full bg-blue-900 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-800 transition-colors"
                    >
                      Accept Mission
                    </button>
                  )}
                  {st === "accepted" && (
                    <button
                      onClick={() => complete(m)}
                      className="w-full bg-green-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-green-700 transition-colors"
                    >
                      Submit for Verification
                    </button>
                  )}
                  {st === "done" && (
                    <div className="w-full text-center bg-green-100 text-green-800 py-2.5 rounded-xl text-sm font-semibold">
                      Completed ✓
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Demo mode: submitting instantly awards XP. In the full version an
            NGO or partner confirms participation, and evidence such as photos
            is reviewed before XP is added.
          </p>
        </section>

        {/* Badges */}
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-1">Badges</h2>
          <p className="text-gray-500 text-sm mb-5">
            Unlock a badge with {BADGE_TARGET} activities in that goal. Complete
            all seven goals for the SDG Seven badge.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BADGES.map((b) => {
              const unlocked = counts[b.sdg] >= BADGE_TARGET;
              return (
                <div
                  key={b.sdg}
                  className={
                    "rounded-2xl p-5 text-center border " +
                    (unlocked
                      ? "bg-white border-green-300 shadow-sm"
                      : "bg-gray-100 border-gray-200 opacity-60")
                  }
                >
                  <div className="text-4xl mb-2">
                    {unlocked ? b.emoji : "🔒"}
                  </div>
                  <div className="font-bold text-blue-900 text-sm">
                    {b.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    SDG {b.sdg} · {Math.min(counts[b.sdg], BADGE_TARGET)}/
                    {BADGE_TARGET}
                  </div>
                </div>
              );
            })}
            <div
              className={
                "rounded-2xl p-5 text-center border " +
                (allSeven
                  ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300 shadow-sm"
                  : "bg-gray-100 border-gray-200 opacity-60")
              }
            >
              <div className="text-4xl mb-2">{allSeven ? "🌈" : "🔒"}</div>
              <div className="font-bold text-blue-900 text-sm">SDG Seven</div>
              <div className="text-xs text-gray-500 mt-1">
                {SDGS.filter((s) => counts[s.id] > 0).length}/7 goals
              </div>
            </div>
          </div>
        </section>

        {/* Levels */}
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-5">
            Level Ladder
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {LEVELS.map((l) => (
              <div
                key={l.level}
                className={
                  "rounded-2xl p-4 text-center border " +
                  (l.level === current.level
                    ? "bg-blue-900 text-white border-blue-900"
                    : l.level < current.level
                      ? "bg-white border-green-200 text-blue-900"
                      : "bg-white border-gray-200 text-gray-400")
                }
              >
                <div className="text-2xl">{l.emoji}</div>
                <div className="font-semibold text-sm mt-1">{l.title}</div>
                <div className="text-xs opacity-70">
                  {l.min.toLocaleString()}+ XP
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="py-12 px-4 bg-gradient-to-r from-blue-900 to-green-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-4xl mb-4">🤖</div>
          <h2 className="text-2xl font-bold mb-3">Not sure where to start?</h2>
          <p className="text-blue-100 mb-6">
            Tell our AI about your skills and time, and it will point you to the
            right resources.
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

export default Missions;
