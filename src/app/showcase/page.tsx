"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import CustomCursor from "@/components/CustomCursor";

const basePath = process.env.NODE_ENV === "production" ? "/velox_studio_website" : "";

const projects = [
  {
    name: "CryptoChart AI",
    category: "AI / Finance",
    description: "Advanced cryptocurrency charting platform powered by AI for smart trading insights and predictions.",
    image: "/Showcase/CryptoChart_AI.png",
    tags: ["AI", "Finance", "Web App"],
  },
  {
    name: "FutureLog AI",
    category: "AI / Productivity",
    description: "AI-powered journaling and life logging application that helps you track and predict future outcomes.",
    image: "/Showcase/FutureLog_AI.jpg",
    tags: ["AI", "Productivity", "Mobile"],
  },
  {
    name: "HabitSyncer",
    category: "Mobile App",
    description: "Cross-platform habit tracking app that syncs seamlessly between iOS and Android devices.",
    images: ["/Showcase/HabitSyncer_ios.png", "/Showcase/HabitSyncer_android.png"],
    tags: ["iOS", "Android", "Productivity"],
  },
  {
    name: "Harmony",
    category: "Mobile App",
    description: "A beautiful music and meditation app designed to bring peace and harmony to your daily routine.",
    images: ["/Showcase/Harmony_ios.png", "/Showcase/Harmony_android.png"],
    tags: ["iOS", "Android", "Wellness"],
  },
  {
    name: "MetroX",
    category: "Transportation",
    description: "Modern metro navigation and real-time transit tracking application for urban commuters.",
    image: "/Showcase/MetroX.jpg",
    tags: ["Web App", "Transportation", "Maps"],
  },
];

export default function ShowcasePage() {
  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-velox-black">
        {/* Header */}
        <header className="border-b border-velox-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
            <Link href="/">
              <Logo size="md" variant="full" theme="dark" />
            </Link>
            <Link
              href="/"
              className="text-velox-gray-400 hover:text-cyan-electric transition-colors text-sm flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-cyan-electric/10 text-cyan-electric text-sm font-medium rounded-full mb-4">
              Our Work
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Product <span className="text-cyan-electric">Showcase</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-velox-gray-400">
              Explore our portfolio of innovative digital products. From AI-powered applications 
              to beautiful mobile experiences, see what we&apos;ve been building.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-velox-gray-800 bg-velox-gray-900/30 overflow-hidden hover:border-cyan-electric/50 transition-all duration-300"
              >
                {/* Image Container - Fixed Height */}
                <div className="relative h-64 overflow-hidden bg-velox-gray-900">
                  {'images' in project ? (
                    <div className="flex gap-2 justify-center items-center h-full p-4">
                      {project.images.map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative h-full w-auto"
                        >
                          <Image
                            src={`${basePath}${img}`}
                            alt={`${project.name} ${imgIndex + 1}`}
                            width={120}
                            height={240}
                            className="object-contain h-full w-auto group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Image
                      src={`${basePath}${project.image}`}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <span className="text-cyan-electric text-xs font-medium uppercase tracking-wider">{project.category}</span>
                  <h2 className="text-xl font-bold text-white">{project.name}</h2>
                  <p className="text-velox-gray-400 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-velox-gray-800 text-velox-gray-300 rounded-full border border-velox-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <div className="inline-block p-8 rounded-2xl border border-velox-gray-800 bg-velox-gray-900/30 backdrop-blur">
              <h3 className="text-2xl font-bold text-white mb-4">Have a Project in Mind?</h3>
              <p className="text-velox-gray-400 mb-6 max-w-md">
                Let&apos;s build something amazing together. Reach out to discuss your ideas.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-electric text-velox-black font-semibold rounded-lg hover:bg-cyan-400 transition-all"
              >
                Start a Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-velox-gray-800 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 text-center text-velox-gray-500 text-sm">
            © {new Date().getFullYear()} Velox Studio. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
