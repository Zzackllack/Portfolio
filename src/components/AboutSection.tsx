import React from "react";
import { Code2, Server, Cpu, Database } from "lucide-react";

export default function AboutSection() {
  const skills = [
    { category: "Languages", items: ["TypeScript", "Java", "Python", "SQL"] },
    { category: "Frontend", items: ["React", "Tailwind CSS", "HTML/CSS"] },
    { category: "Backend", items: ["Node.js", "Discord.py, MongoDB"] },
    { category: "Tools", items: ["Git", "Linux", "Docker", "VS Code"] },
  ];

  return (
    <section id="about" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 glow">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          About Me
        </span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="glass p-6 rounded-xl hover-glow">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">
            Background
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Currently in Q1 (11th Grade) in Berlin, I'm deeply passionate about
            technology and software development. My journey in programming
            started with simple scripts and has now evolved into building Java
            applications and managing servers.
          </p>
        </div>
        <div className="glass p-6 rounded-xl hover-glow">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">
            Current Focus
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I'm expanding my knowledge in modern web technologies while managing
            my own NAS and server infrastructure. I enjoy experimenting with new
            tools and technologies, particularly in areas of system
            administration and development.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-6 mt-12">
        {skills.map((skillSet) => (
          <div
            key={skillSet.category}
            className="glass p-6 rounded-xl hover-glow"
          >
            <h4 className="font-semibold text-blue-300 mb-3">
              {skillSet.category}
            </h4>
            <ul className="list-disc list-inside space-y-2">
              {skillSet.items.map((item) => (
                <li key={item} className="text-gray-300 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
