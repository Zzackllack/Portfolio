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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
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
  );
}

export default App;