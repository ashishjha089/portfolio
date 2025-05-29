import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaDatabase, 
  FaFireAlt, 
  FaGitAlt, 
  FaGithub, 
  FaGoogle 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiRedux, 
  SiSupabase 
} from 'react-icons/si';

export default function SkillsSection() {
  const bounceStyle = `
    @keyframes customBounce {
      0%, 15%, 30%, 40%, 100% {
        transform: translateY(0);
      }
      7.5% {
        transform: translateY(-15px);
      }
      22.5% {
        transform: translateY(-12px);
      }
    }
    .custom-bounce {
      animation: customBounce 5s infinite ease-in-out;
    }
  `;

  const skills = [
    { name: 'HTML', color: 'bg-purple-400', icon: <FaHtml5 /> },
    { name: 'CSS', color: 'bg-blue-400', icon: <FaCss3Alt /> },
    { name: 'Tailwind CSS', color: 'bg-purple-400', icon: <SiTailwindcss /> },
    { name: 'JavaScript', color: 'bg-yellow-400', icon: <FaJs /> },
    { name: 'React.js', color: 'bg-purple-400', icon: <FaReact /> },
    { name: 'Redux.js', color: 'bg-indigo-400', icon: <SiRedux /> },
    { name: 'SQL', color: 'bg-purple-400', icon: <FaDatabase /> },
    { name: 'Firebase', color: 'bg-orange-400', icon: <FaFireAlt /> },
    { name: 'Supabase', color: 'bg-purple-400', icon: <SiSupabase /> },
    { name: 'Git', color: 'bg-red-400', icon: <FaGitAlt /> },
    { name: 'GitHub', color: 'bg-purple-400', icon: <FaGithub /> },
    { name: 'Google Cloud Storage', color: 'bg-green-400', icon: <FaGoogle /> },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <style>{bounceStyle}</style>
      
      <div className="text-center mb-8 lg:mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">SKILLS</h2>
        <div className="w-12 sm:w-16 h-1 bg-purple-500 mx-auto mb-4 lg:mb-6"></div>
        <p className="max-w-3xl text-gray-600 text-base sm:text-lg mx-auto text-center px-4">
          Here are the main technologies and tools I work with to create amazing web applications
        </p>
      </div>
      
      {/* Responsive grid: 2 cols on mobile, 3 on tablet, 4 on desktop, 5 on large screens */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${skill.color} rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]`}
          >
            <div className="text-xl sm:text-2xl lg:text-3xl mb-2 lg:mb-3 text-white custom-bounce">
              {skill.icon}
            </div>
            <h3 className="text-white font-bold text-xs sm:text-sm lg:text-base leading-tight">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}