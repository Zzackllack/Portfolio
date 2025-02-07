import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="py-12 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Icons.logo className="w-8 h-8 text-blue-400" />
              <h2 className="text-lg font-bold">Cédric</h2>
            </div>
            <p className="text-gray-400 max-w-md">
              Student Developer & Tech Enthusiast based in Berlin, Germany. 
              Passionate about modern web technologies, coding, and tech.
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
              >
                <a 
                  href="https://github.com/Zzackllack" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <Icons.gitHub className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
              >
                <a 
                  href="mailto:contact@zacklack.de"
                  className="hover:text-blue-400"
                >
                  <Icons.logo className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Section - Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-200">Navigation</h3>
              <ul className="space-y-2">
                {["About", "Projects", "Timeline", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-200">Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://zacklack.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Main Page
                  </a>
                </li>
                <li>
                  <a
                    href="https://privat.zacklack.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Private Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Cédric. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              This site is open source on{" "}
              <a
                href="https://github.com/Zzackllack/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}