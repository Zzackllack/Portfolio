"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, Terminal, Music, Dumbbell, ArrowDown } from "lucide-react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full overflow-x-hidden">
      <HeroHighlight containerClassName="min-h-screen w-full">
        <div className="text-center space-y-8 max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [20, -5, 0] }}
              transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
              className="text-4xl md:text-6xl font-bold text-neutral-700 dark:text-white leading-relaxed"
            >
              Hello, I'm{" "}
              <Highlight className="text-black dark:text-white">
                Cédric
              </Highlight>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-200"
            >
              Student Developer & Tech Enthusiast
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto"
            >
              Based in Berlin, Germany, I'm passionate about modern web
              technologies, coding, and anything that resolves around tech.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
          >
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
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <motion.button
            onClick={() => scrollToSection("about")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="animate-bounce"
          >
            <ArrowDown className="w-10 h-10 text-neutral-700 dark:text-white" />
          </motion.button>
        </div>
      </HeroHighlight>
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
    <div className="glass p-6 rounded-xl hover-glow">
      <Icon className="w-8 h-8 text-indigo-500 dark:text-indigo-400 mb-3 mx-auto" />
      <h3 className="font-semibold text-neutral-800 dark:text-white mb-1">{text}</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-300">{subtext}</p>
    </div>
  );
}