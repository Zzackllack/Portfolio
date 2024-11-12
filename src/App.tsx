import React from "react";
import {
  Code2,
  Music,
  Dumbbell,
  Gamepad,
  School,
  Terminal,
  Mail,
  Github,
} from "lucide-react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BackButton from "./components/BackButton"; // don't forget to finish the BackButton component

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <BackButton />
      {}
      <NavBar />
      <main className="container mx-auto px-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
