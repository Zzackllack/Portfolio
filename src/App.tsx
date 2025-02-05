import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import TimelineSection from "./components/TimelineSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-70" />
      <div className="relative z-10">
        <NavBar />
        <main className="container mx-auto px-4">
          <HeroSection />
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