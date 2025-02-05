import React from "react";
import { Code2, Terminal, Music, Dumbbell, ArrowDown, GlobeLock } from "lucide-react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const morphingTexts = [
    "I",
    "Love", 
    "Development",
    "I",
    "Love", 
    "Linux",
    "I",
    "Love", 
    "Piano",
    "I",
    "Love", 
    "Servers",
    "I",
    "Love", 
    "Tech",
    "I",
    "Love", 
    "Coding",
    "I",
    "Love", 
    "Web Dev",
  ];

  return (
    <HeroHighlight containerClassName="min-h-screen">
      <section className="flex flex-col items-center justify-center pt-16 fade-in">
        <div className="text-center max-w-4xl px-4">
          <div className="-space-y-0.5"> {/* Changed from space-y-4 to space-y-8 */}
            <h1 className="text-4xl md:text-6xl font-bold mb-8"> {/* Reduce from mb-12 */}
              Hello, I'm{" "}
              <Highlight className="text-white">
                Cédric
              </Highlight>
            </h1>
            <div className="h-32 my-8"> {/* Change mt-12 to my-8 for symmetric spacing */}
              <GooeyText
                texts={morphingTexts}
                morphTime={1}
                cooldownTime={1}
                className="text-white pt-8"
                textClassName="!text-3xl md:!text-5xl"
              />
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-8"> {/* Increase from mt-6 */}
              Based in Berlin, Germany, I'm passionate about, coding, and {" "}
              <Highlight className="text-white">everything that resolves around tech.</Highlight>
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
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
            <IconBox Icon={GlobeLock} text="Thinkering" subtext="Firewall • Network" />
            <IconBox Icon={Music} text="Pianist" subtext="Classical & Modern" />
          </div>
        </div>
        <button
          onClick={() => scrollToSection("about")}
          className="mt-16 animate-bounce"
        >
          <ArrowDown className="w-10 h-10 text-white" />
        </button>
      </section>
    </HeroHighlight>
  );
}

// IconBox component remains unchanged

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