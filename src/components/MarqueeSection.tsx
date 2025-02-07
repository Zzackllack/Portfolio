import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { i } from "framer-motion/client";

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
    { name: "Tailwind", icon: "https://www.svgrepo.com/show/374118/tailwind.svg" },
    { name: "Cloudflare", icon: "https://www.svgrepo.com/show/353564/cloudflare.svg" },
    { name: "Windows", icon: "https://www.svgrepo.com/show/382713/windows-applications.svg" },
    { name: "GitHub", icon: "https://www.svgrepo.com/show/449764/github.svg" },
    { name: "Discord", icon: "https://www.svgrepo.com/show/353655/discord-icon.svg" },
    { name: "HTML5", icon: "https://www.svgrepo.com/show/452228/html-5.svg" },
    { name: "CSS3", icon: "https://www.svgrepo.com/show/452185/css-3.svg" },
    { name: "Visual Studio Code", icon: "https://www.svgrepo.com/show/354522/visual-studio-code.svg" },
    { name: "Node Package Manager", icon: "https://www.svgrepo.com/show/452077/npm.svg" },
    { name: "Vite", icon: "https://www.svgrepo.com/show/374167/vite.svg" },
    { name: "Three.js", icon: "https://canada1.discourse-cdn.com/flex035/uploads/threejs/optimized/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751_2_1016x1024.png" },
    { name: "Notion", icon: "https://kappa.lol/e63Tf" },
]; 

export default function MarqueeSection() {
  return (
    <section className="py-12 bg-black/50 backdrop-blur-sm">
      <h2 className="text-4xl font-bold text-center mb-12 glow">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Technologies I have worked with
        </span>
      </h2>
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