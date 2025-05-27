
import { Bot } from "lucide-react";

// Playful "AI bot" avatar with gentle animation and a sparkly pulse accent
export default function LovableAvatar() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <span className="animate-pulse absolute bg-purple-200 rounded-full w-28 h-28 opacity-80 blur-2xl"></span>
      </div>
      <div className="relative z-10 p-4 rounded-full bg-white shadow-xl border-2 border-purple-200 animate-fade-in hover:scale-105 transition-transform cursor-pointer">
        <Bot size={64} className="text-purple-500 drop-shadow-lg" />
      </div>
      {/* Decorative Sparkle */}
      <span className="absolute top-4 right-8 animate-ping text-yellow-400">
        <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
          <circle cx="9" cy="9" r="6" fill="#facc15" opacity="0.4" />
        </svg>
      </span>
    </div>
  );
}