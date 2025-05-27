import React from "react";
import { Sparkles } from "lucide-react";

const links = [
  { label: "Home", href: "/home" },
//   { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Project", href: "/Project" },
];

const StickyNavbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-white bg-opacity-60 backdrop-blur-[12px] shadow-md transition-all">
      <nav className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
        <div className="flex items-center gap-2 select-none">
          <Sparkles className="text-purple-600" />
          <span className="font-bold text-lg text-gray-700 tracking-tight">
            AKJ
          </span>
        </div>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-gray-600 hover:text-purple-600 transition-colors font-medium after:content-[''] after:absolute after:h-0.5 after:bg-purple-400 after:w-0 hover:after:w-full after:transition-all after:left-0 after:-bottom-0.5"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default StickyNavbar;
