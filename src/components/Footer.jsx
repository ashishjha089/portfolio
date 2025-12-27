import React from "react";

export default function Footer() {
  return (
    <footer className="mt-10 mb-4 w-full flex flex-col items-center text-gray-400 text-sm animate-fade-in">
      {/* <span>
          Made with <span className="text-purple-400">♥</span> and a sprinkle of AI
        </span> */}
      <span className="mt-1">© {new Date().getFullYear()} Ashishkumar Jha</span>
    </footer>
  );
}
