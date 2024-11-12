import React from "react";
import { Bot, Globe, Server, Wrench, Database, Cloud } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Website Scanner",
      description:
        "Python tool for scanning and downloading media files from webpages",
      icon: Bot,
      tech: ["Python", "Web Scraping", "File Management"],
      link: "#",
    },
    {
      title: "NAS Management",
      description:
        "Managing and maintaining a Synology NAS system with various services",
      icon: Server,
      tech: ["Linux", "Network Storage", "Server Admin"],
      link: "#",
    },
    {
      title: "Discord Bot",
      description:
        "Feature-rich Discord bot with advanced automation capabilities",
      icon: Bot,
      tech: ["Python", "Discord.py", "APIs"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "Modern web application showcasing my projects and skills",
      icon: Globe,
      tech: ["React", "TypeScript", "Tailwind"],
      link: "#",
    },
    {
      title: "Flipper Zero Scripts",
      description: "Custom scripts and tools for the Flipper Zero device",
      icon: Wrench,
      tech: ["C", "Hardware", "Security"],
      link: "#",
    },
    {
      title: "Email Server",
      description: "Self-hosted email server setup with multiple domains",
      icon: Cloud,
      tech: ["SMTP/IMAP", "DNS", "Security"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 glow">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Projects
        </span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="glass p-6 rounded-xl hover-glow">
            <project.icon className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
