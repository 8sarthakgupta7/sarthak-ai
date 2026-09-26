function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌍</span>
              <span className="text-xl font-bold">
                Sarthak<span className="text-green-400">AI</span>
              </span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed max-w-sm">
              An AI-powered platform connecting people to welfare schemes, NGOs,
              healthcare, education, and livelihood opportunities — mapped to 7
              UN SDGs.
            </p>
          </div>

          {/* SDG Modules */}
          <div>
            <h4 className="font-semibold mb-4 text-green-400">SDG Modules</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>🔴 No Poverty</li>
              <li>🟡 Zero Hunger</li>
              <li>🔵 Good Health</li>
              <li>🟣 Quality Education</li>
              <li>🩷 Gender Equality</li>
              <li>🟢 Decent Work</li>
              <li>🟠 Sustainable Cities</li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold mb-4 text-green-400">Platform</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>AI Assistant</li>
              <li>SDG Missions</li>
              <li>NGO Directory</li>
              <li>Scheme Finder</li>
              <li>Report Issue</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-blue-300">
          <p>© 2025 SarthakAI — Built for UN Sustainable Development Goals</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
