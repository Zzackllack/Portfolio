import React, { useState } from "react";
import { Mail, Github } from "lucide-react";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here -- NEEDS IMPLEMENTATION
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <section id="contact" className="relative py-20 fade-in">
      <div className="relative max-w-4xl mx-auto glass p-8 rounded-xl slide-up z-0">
        <h2 className="text-4xl font-bold text-center mb-12 glow">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Get in Touch
          </span>
        </h2>
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
        <div className="relative max-w-4xl mx-auto glass p-8 rounded-xl mt-12 slide-up">
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="bg-red-600 bg-opacity-75 rounded-xl p-8 w-full h-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-stripes"></div>
              <p className="text-slate-700 text-1xl font-bold text-center z-10 transform rotate-45">
                Work in progress, sorry, use my E-Mail instead!
              </p>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-blue-300 mb-6">
            Send a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4 relative z-0">
            <div>
              <label htmlFor="email" className="block text-gray-300">
                Your E-Mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 rounded bg-gray-800 text-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 rounded bg-gray-800 text-gray-300"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
