import { useState } from "react";

const sdgMap = {
  poverty: {
    sdg: "SDG 1",
    title: "No Poverty",
    emoji: "🔴",
    color: "bg-red-50 border-red-200",
  },
  hunger: {
    sdg: "SDG 2",
    title: "Zero Hunger",
    emoji: "🟡",
    color: "bg-yellow-50 border-yellow-200",
  },
  health: {
    sdg: "SDG 3",
    title: "Good Health",
    emoji: "🔵",
    color: "bg-blue-50 border-blue-200",
  },
  education: {
    sdg: "SDG 4",
    title: "Quality Education",
    emoji: "🟣",
    color: "bg-purple-50 border-purple-200",
  },
  gender: {
    sdg: "SDG 5",
    title: "Gender Equality",
    emoji: "🩷",
    color: "bg-pink-50 border-pink-200",
  },
  work: {
    sdg: "SDG 8",
    title: "Decent Work",
    emoji: "🟢",
    color: "bg-green-50 border-green-200",
  },
  community: {
    sdg: "SDG 11",
    title: "Sustainable Cities",
    emoji: "🟠",
    color: "bg-orange-50 border-orange-200",
  },
};

const exampleProblems = [
  "My family has very low income and we need financial assistance",
  "My daughter wants to study but we can't afford coaching",
  "I need affordable healthcare for my elderly mother",
  "I am a farmer looking for government subsidies",
  "I want to report a broken road in my locality",
  "I need help finding a job after completing my degree",
];

function AIAssistant() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const analyzeWithGemini = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    console.log("API Key:", apiKey ? "Loaded" : "Missing");

    const prompt = `You are SarthakAI, an AI assistant that helps people in India find the right government schemes, NGOs, and resources based on their problems.

A user has described their problem: "${input}"

Analyze this and respond in this EXACT JSON format (no extra text, no markdown):
{
  "summary": "One sentence summary of the user's main problem",
  "sdgs": ["poverty"],
  "resources": [
    {"type": "Government Scheme", "name": "Scheme name", "description": "How it helps"},
    {"type": "NGO Support", "name": "Type of NGO", "description": "How it helps"},
    {"type": "Next Step", "name": "Action to take", "description": "What to do immediately"}
  ],
  "message": "A warm, helpful 2-3 sentence message to the user in simple English"
}

For sdgs array, pick 1-3 from: poverty, hunger, health, education, gender, work, community`;

    try {
      const url =
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=" +
        apiKey;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (!response.ok) {
        throw new Error(data.error?.message || "API Error");
      }

      const text = data.candidates[0].content.parts[0].text;
      const cleaned = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(cleaned);
      setResult(parsed);
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white py-16 px-4 text-center">
        <div className="text-5xl mb-4">🤖</div>
        <h1 className="text-4xl font-bold mb-4">AI Assistant</h1>
        <p className="text-blue-100 text-lg max-w-xl mx-auto">
          Describe your problem in your own words. Our AI will identify your
          needs and connect you to the right resources.
        </p>
      </section>

      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-2">
            What problem are you facing?
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Write in English or Hinglish — our AI understands both.
          </p>

          <textarea
            rows={4}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. My family is very poor and my children are not able to go to school..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm resize-none mb-4"
          />

          <button
            onClick={analyzeWithGemini}
            disabled={loading || !input.trim()}
            className="w-full bg-gradient-to-r from-blue-900 to-green-700 text-white py-4 rounded-xl font-semibold text-base hover:opacity-90 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading
              ? "🔄 Analyzing your problem..."
              : "🤖 Analyze & Find Resources"}
          </button>
        </div>

        {!result && !loading && (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-8">
            <h3 className="font-bold text-blue-900 mb-4">
              💡 Try these examples:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {exampleProblems.map((problem, i) => (
                <button
                  key={i}
                  onClick={() => setInput(problem)}
                  className="text-left text-sm text-gray-600 bg-gray-50 hover:bg-blue-50 hover:text-blue-800 px-4 py-3 rounded-xl border border-gray-200 hover:border-blue-300 transition-all"
                >
                  "{problem}"
                </button>
              ))}
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8 text-center">
            <div className="text-3xl mb-2">❌</div>
            <p className="text-red-700 font-medium">{error}</p>
          </div>
        )}

        {result && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-900 to-green-700 text-white rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🤖</div>
                <div>
                  <h3 className="font-bold text-lg">SarthakAI Analysis</h3>
                  <p className="text-blue-200 text-sm">
                    Based on your problem description
                  </p>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed">{result.message}</p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h3 className="font-bold text-blue-900 mb-4">
                📊 Your needs map to these SDGs:
              </h3>
              <div className="flex flex-wrap gap-3">
                {result.sdgs?.map((sdg, i) => {
                  const s = sdgMap[sdg];
                  if (!s) return null;
                  return (
                    <div
                      key={i}
                      className={
                        "flex items-center gap-2 px-4 py-2 rounded-full border-2 " +
                        s.color
                      }
                    >
                      <span>{s.emoji}</span>
                      <span className="font-semibold text-blue-900 text-sm">
                        {s.sdg}
                      </span>
                      <span className="text-gray-600 text-sm">— {s.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h3 className="font-bold text-blue-900 mb-6">
                🎯 Recommended Resources:
              </h3>
              <div className="space-y-4">
                {result.resources?.map((resource, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100"
                  >
                    <div className="bg-blue-900 text-white text-xs font-bold px-3 py-1 rounded-full mt-0.5 whitespace-nowrap">
                      {resource.type}
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">
                        {resource.name}
                      </h4>
                      <p className="text-gray-600 text-sm mt-0.5">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setResult(null);
                setInput("");
              }}
              className="w-full border-2 border-blue-900 text-blue-900 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              🔄 Analyze Another Problem
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default AIAssistant;
