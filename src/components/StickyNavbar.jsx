import React, { useState } from "react";
import { Sparkles, Download, UserPlus, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Project", href: "/Project" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

const StickyNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-white bg-opacity-60 backdrop-blur-[12px] shadow-md transition-all">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-9">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 select-none">
            <Sparkles className="text-purple-600 w-6 h-6" />
            <span className="font-bold text-xl text-gray-700 tracking-tight">
              AJ
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex gap-5 lg:gap-8">
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
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg transition-colors font-medium select-none cursor-pointer">
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium select-none cursor-pointer">
              <UserPlus className="w-4 h-4" />
              <span>Hire Me</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 pb-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="pt-4 space-y-4">
            {/* Mobile Navigation Links */}
            <ul className="space-y-3 border-b border-gray-200 pb-4">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block text-gray-600 hover:text-purple-600 transition-colors font-medium py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Action Buttons */}
            <div className="space-y-3">
              <button className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg transition-colors font-medium">
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </button>
              <button className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium">
                <UserPlus className="w-4 h-4" />
                <span>Hire Me</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default StickyNavbar;
