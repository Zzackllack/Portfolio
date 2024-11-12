import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 text-center text-gray-300">
      <p>
        This site is open-source, view it{" "}
        <a
          href="https://github.com/Zzackllack/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          here
        </a>
        !
      </p>
    </footer>
  );
}
