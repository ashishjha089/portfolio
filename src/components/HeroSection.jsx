import LovableAvatar from "./LovableAvatar";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-16 justify-center text-center md:text-left mt-16"
    >
      <div className="flex-1 flex justify-center items-center min-h-[350px] mt-4">
        {/* ensure space */}
        <LovableAvatar />
      </div>

      <div className="flex-1 space-y-6 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold  mb-2 text-gray-800 tracking-wide">
          Hey, I’m <span className="text-purple-600 ">Ashishkumar Jha</span>!
        </h1> 
        <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
          Front-End Web Developer from India. I craft seamless,
          beautiful, and creative websites with expertise in React.js, Firebase,
          and Supabase. Passionate about user experience, I'm currently
          available for hire to bring your web vision to life.
        </p>
        <a
          href="#portfolio"
          className="inline-block rounded-full bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 font-semibold text-lg shadow-lg transition-all hover:scale-105 transform animate-enter"
        >
          Explore My Work
        </a>
      </div>
    </section>
  );
}
