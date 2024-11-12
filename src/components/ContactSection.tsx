import React from "react";
import { Mail, Github, Globe, Server } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 glow">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Get in Touch
        </span>
      </h2>
      <div className="max-w-4xl mx-auto glass p-8 rounded-xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-300">
              Let's Connect
            </h3>
            <p className="text-gray-300">
              Whether you want to discuss something, collaborate, or just have a
              chat, I'm always open to connecting with fellow enthusiasts.
            </p>
            <div className="flex flex-col space-y-4">
              <a
                href="mailto:contact@zacklack.de"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contact@zacklack.de</span>
              </a>
              <a
                href="https://github.com/Zzackllack"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-300">
              Current Status
            </h3>
            <div className="space-y-4">
              <p className="text-gray-300">🎓 Studying in Q1 (11th Grade)</p>
              <p className="text-gray-300">
                💻 Working on various programming projects
              </p>
              <p className="text-gray-300">
                🔧 Managing personal server infrastructure
              </p>
              <p className="text-gray-300">
                📚 Learning advanced Java and system administration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
