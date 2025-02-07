import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

const technologies = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
];

export default function MarqueeSection() {
  return (
    <section className="py-12 bg-black/50 backdrop-blur-sm">
      <div className="flex flex-col gap-8">
        {/* First Marquee - Left to Right */}
        <Marquee
          fade={true}
          pauseOnHover={true}
          direction="left"
          className="py-4"
          innerClassName="gap-8"
        >
          {technologies.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </Marquee>

        {/* Second Marquee - Right to Left */}
        <Marquee
          fade={true}
          pauseOnHover={true}
          reverse={true}
          className="py-4"
          innerClassName="gap-8"
        >
          {technologies.reverse().map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function TechCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="glass px-6 py-3 rounded-xl hover-glow flex items-center gap-3 min-w-[160px]">
      <img 
        src={icon} 
        alt={name} 
        className="w-8 h-8"
      />
      <span className="text-white font-medium">{name}</span>
    </div>
  );
}