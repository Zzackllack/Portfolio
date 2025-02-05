import React from "react";
import { Code2, Terminal, Music, Dumbbell, ArrowDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-16 fade-in">
      <div className="text-center space-y-8 max-w-4xl">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold glow">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-gradient">
              Hello, I'm Cédric
            </span>
          </h1>
          <h2 className="text-2xl text-blue-200 glow slide-up">
            Student Developer & Tech Enthusiast
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto slide-up">
            Based in Berlin, Germany, I'm passionate about modern web
            technologies, coding, and anything that resolves around tech.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 slide-up">
          <IconBox
            Icon={Code2}
            text="Developer"
            subtext="Web • Java • Python"
          />
          <IconBox
            Icon={Terminal}
            text="Tech Enthusiast"
            subtext="Linux • Server Admin"
          />
          <IconBox Icon={Music} text="Pianist" subtext="Classical & Modern" />
          <IconBox Icon={Dumbbell} text="Athlete" subtext="6 Years of Judo" />
        </div>
      </div>
      <button
        onClick={() => scrollToSection("about")}
        className="mt-16 animate-bounce"
      >
        <ArrowDown className="w-10 h-10 text-white" />
      </button>
    </section>
  );
}

function IconBox({
  Icon,
  text,
  subtext,
}: {
  Icon: React.ElementType;
  text: string;
  subtext: string;
}) {
  return (
    <div className="glass p-6 rounded-xl hover-glow slide-up">
      <Icon className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
      <h3 className="font-semibold text-white mb-1">{text}</h3>
      <p className="text-sm text-gray-300">{subtext}</p>
    </div>
  );
}
