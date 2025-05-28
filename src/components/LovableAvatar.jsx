import ashishImage from "../assets/ashish.png";

// Fallback version with inline CSS animation
export default function LovableAvatar() {
  const bounceStyle = {
    animation: 'bounceFloat 4s ease-in-out infinite'
  };

  return (
    <>
      {/* Inline CSS styles */}
      <style>{`
        @keyframes bounceFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
      
      <div className="relative flex items-center justify-center">
        {/* Glowing background pulse */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <span className="animate-pulse absolute bg-purple-200 rounded-full w-28 h-28 opacity-80 blur-2xl"></span>
        </div>
        
        {/* Avatar image with inline style animation */}
        <div 
          className="relative z-10 p-4 rounded-full bg-white shadow-xl border-2 border-purple-200 hover:scale-105 transition-transform cursor-pointer"
          style={bounceStyle}
        >
          <img
            src={ashishImage}
            alt="Avatar"
            className="w-[250px] h-[300px] object-cover rounded-full drop-shadow-lg"
          />
        </div>
        
        {/* Sparkle */}
        {/* <span className="absolute top-4 right-8 animate-ping text-yellow-400">
          <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
            <circle cx="9" cy="9" r="6" fill="#facc15" opacity="0.4" />
          </svg>
        </span> */}
      </div>
    </>
  );
}