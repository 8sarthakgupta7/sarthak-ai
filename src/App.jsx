import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AIAssistant from "./pages/AIAssistant";
import SDG1 from "./pages/sdg1/SDG1";
import SDG2 from "./pages/sdg2/SDG2";
import SDG3 from "./pages/sdg3/SDG3";
import SDG4 from "./pages/sdg4/SDG4";
import SDG5 from "./pages/sdg5/SDG5";
import SDG8 from "./pages/sdg8/SDG8";
import Breadcrumb from "./components/common/Breadcrumb";
import SDG11 from "./pages/sdg11/SDG11";
import Login from "./pages/Login";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Breadcrumb />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ai-assist" element={<AIAssistant />} />
            <Route path="/sdg1" element={<SDG1 />} />
            <Route path="/sdg2" element={<SDG2 />} />
            <Route path="/sdg3" element={<SDG3 />} />
            <Route path="/sdg4" element={<SDG4 />} />
            <Route path="/sdg5" element={<SDG5 />} />
            <Route path="/sdg8" element={<SDG8 />} />
            <Route path="/sdg11" element={<SDG11 />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
