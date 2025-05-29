import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StickyNavbar from "./components/StickyNavbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import SkillsSection from "./components/SkillsSection";

const Background = () => (
  <div
    className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-100 via-purple-100 to-white animate-fade-in"
    aria-hidden="true"
  >
    {[...Array(12)].map((_, i) => (
      <span
        key={i}
        className="absolute rounded-full opacity-40 blur-2xl pointer-events-none"
        style={{
          width: `${40 + Math.random() * 50}px`,
          height: `${40 + Math.random() * 50}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          background: `radial-gradient(circle, ${
            ["#dbdafe88", "#c8e6ff88", "#f8eafa75", "#b2f7ef55"][i % 4]
          } 60%, transparent 100%)`,
          animation: `float${i % 4} 12s ease-in-out infinite ${i * 0.7}s`,
        }}
      ></span>
    ))}

    <style>
      {`
        @keyframes float0 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
      `}
    </style>
  </div>
);

const HomePage = () => (
  <main className="w-full max-w-5xl px-4 flex flex-col gap-12 mt-16 mb-16">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ContactSection />
  </main>
);

const AboutPage = () => (
  <main className="w-full max-w-5xl px-4 flex flex-col gap-12 mt-16 mb-16">
    <AboutSection />
  </main>
);

const ContactPage = () => (
  <main className="w-full max-w-5xl px-4 flex flex-col gap-12 mt-16 mb-16">
    <ContactSection />
  </main>
);

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col items-center justify-start bg-transparent font-sans">
        <Background />
        <StickyNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
