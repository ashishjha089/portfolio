import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center gap-8 mt-16 animate-fade-in"
    >
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">ABOUT ME</h2>
        <div className="w-16 h-1 bg-purple-500 mx-auto mb-6"></div>
        <p className="max-w-3xl text-gray-600 text-lg">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Get to know me section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">Get to know me!</h3>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              I'm Ashishkumar Jha, a Frontend-focused Web Developer specializing
              in building and managing websites and web applications for product
              success. Explore my work in the Projects section. I also share
              valuable Web Development content on LinkedIn and GitHub, aiming to
              help the Dev Community. I'm actively seeking job opportunities
              where I can learn, grow, and contribute my skills. Feel free to
              connect if you have a suitable opening
            </p>
          </div>
          <a
            href="/contact"
            className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 transform"
          >
            CONTACT
          </a>
        </div>

        {/* My Skills section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">Education</h3>
          <div className="bg-white rounded-xl shadow p-4 border border-purple-100 max-w-2xl w-full">
            <div className="flex justify-between">
              <span className="font-bold text-gray-700">
                Bhagwan Mahavir University
              </span>
              <span className="text-gray-500">Aug 2020 – May 2024</span>
            </div>
            <div className="mt-1 text-gray-700 text-sm">
              B.Tech, Computer Engineering & Technology (CGPA: 7.2/10)
            </div>
            <div className="mt-1 text-gray-600 text-xs">
              Coursework: Data Structures, Algorithms (JavaScript), OOP, Python,
              Software Engineering, OS, Compiler Design
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 border border-purple-100 max-w-2xl w-full">
            <div className="flex justify-between">
              <span className="font-bold text-gray-700">
                Shree Gurukrupa Vidya Sankul
              </span>
              <span className="text-gray-500">June 2018 – May 2020</span>
            </div>
            <div className="mt-1 text-gray-700 text-sm">
              Higher Secondary Education
            </div>
            <div className="mt-1 text-gray-600 text-xs">
              Course: Physics ,Chemistry ,Maths ,English ,Computer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
