import React, { useState, useEffect } from "react";

const ProjectsSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const projects = [
    {
      id: 1,
      title: "Dopefolio",
      description:
        "Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally",
      images: [
        "/images/dopefolio-preview.jpg",
        "/images/dopefolio-mobile.jpg",
        "/images/dopefolio-features.jpg",
      ], // Multiple images for carousel
      tags: ["React", "CSS", "JavaScript"],
      demoUrl: "https://dopefolio.netlify.app/",
    },
    {
      id: 2,
      title: "Wilsonport",
      description:
        "Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.",
      images: [
        "/images/wilsonport-preview.jpg",
        "/images/wilsonport-services.jpg",
        "/images/wilsonport-contact.jpg",
      ],
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://wilsonport-demo.com/",
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with modern design, secure payment integration, and comprehensive admin dashboard for managing products and orders.",
      images: [
        "/images/ecommerce-preview.jpg",
        "/images/ecommerce-products.jpg",
        "/images/ecommerce-checkout.jpg",
        "/images/ecommerce-admin.jpg",
      ],
      tags: ["Next.js", "Node.js", "MongoDB"],
      demoUrl: "#",
    },
    {
      id: 4,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and intuitive project organization.",
      images: [
        "/images/task-app-preview.jpg",
        "/images/task-app-dashboard.jpg",
        "/images/task-app-kanban.jpg",
      ],
      tags: ["React", "Firebase", "Tailwind"],
      demoUrl: "#",
    },
  ];

  // Auto carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const newIndex = {};
        projects.forEach((project) => {
          const currentIndex = prev[project.id] || 0;
          newIndex[project.id] = (currentIndex + 1) % project.images.length;
        });
        return newIndex;
      });
    }, 3000); // Auto-rotate every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (projectId, imageIndex) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: imageIndex,
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            PROJECTS
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here you will find some of my personal projects and company projects
            I worked on, showcasing my development skills and experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Project Image Carousel */}
              <div className="flex-1 group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-4 transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
                  <div className="aspect-video rounded-xl overflow-hidden relative bg-gray-200">
                    {/* Image Container */}
                    <div className="relative w-full h-full">
                      {project.images.map((image, imageIndex) => (
                        <img
                          key={imageIndex}
                          src={image}
                          alt={`${project.title} preview ${imageIndex + 1}`}
                          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                            (currentImageIndex[project.id] || 0) === imageIndex
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-105"
                          }`}
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      ))}

                      {/* Fallback content if all images fail to load */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center flex">
                        <div className="text-white text-center">
                          <div className="text-2xl font-bold mb-2">
                            {project.title}
                          </div>
                          <div className="text-sm opacity-80">
                            Project Preview
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>

                    {/* Animated shimmer overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                    {/* Navigation Arrows */}
                    <button
                      onClick={() => {
                        const currentIndex = currentImageIndex[project.id] || 0;
                        const prevIndex =
                          currentIndex === 0
                            ? project.images.length - 1
                            : currentIndex - 1;
                        handleDotClick(project.id, prevIndex);
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 flex items-center justify-center"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>

                    <button
                      onClick={() => {
                        const currentIndex = currentImageIndex[project.id] || 0;
                        const nextIndex =
                          (currentIndex + 1) % project.images.length;
                        handleDotClick(project.id, nextIndex);
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 flex items-center justify-center"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>

                    {/* Dots Indicator with Progress Animation */}
                    {project.images.length > 1 && (
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                        {project.images.map((_, imageIndex) => (
                          <button
                            key={imageIndex}
                            onClick={() =>
                              handleDotClick(project.id, imageIndex)
                            }
                            className={`relative w-2 h-2 rounded-full transition-all duration-300 ${
                              (currentImageIndex[project.id] || 0) ===
                              imageIndex
                                ? "bg-white scale-125"
                                : "bg-white/50 hover:bg-white/80"
                            }`}
                          >
                            {/* Progress ring for active dot */}
                            {(currentImageIndex[project.id] || 0) ===
                              imageIndex && (
                              <div className="absolute inset-0 rounded-full border-2 border-white/30">
                                <div
                                  className="absolute inset-0 rounded-full border-2 border-white border-r-transparent animate-spin"
                                  style={{ animationDuration: "3s" }}
                                ></div>
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Image Counter */}
                    <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {(currentImageIndex[project.id] || 0) + 1} /{" "}
                      {project.images.length}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="group px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-purple-500 hover:text-purple-600 transform hover:-translate-y-1 transition-all duration-300 bg-white shadow-md hover:shadow-lg">
                    <span className="flex items-center gap-2">
                      LIVE DEMO
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
