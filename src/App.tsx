import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import TimelineSection from "./components/TimelineSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen text-white relative">
      {/* Background with multiple layers for depth */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950 via-gray-900 to-black opacity-50" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/20 via-gray-900 to-black opacity-70" />
      <div className="fixed inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Content */}
      <div className="relative z-10">
        <NavBar />
        <HeroSection />
        <div className="mx-auto">
          <MarqueeSection />
        </div>
        <main className="container mx-auto px-4">
          <AboutSection />
          <ProjectsSection />
          <TimelineSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;