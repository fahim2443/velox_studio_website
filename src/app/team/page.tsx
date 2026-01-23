"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import CustomCursor from "@/components/CustomCursor";

const basePath = process.env.NODE_ENV === "production" ? "/velox_studio_website" : "";

const teamMembers = [
  {
    name: "Salma Lahmiri",
    role: "Chief Executive Officer (CEO)",
    country: "Morocco",
    flag: "🇲🇦",
    image: "/Salma.png",
    quote: "Every great journey starts with a vision, is strengthened by the right people, and scales when purpose drives execution.",
  },
  {
    name: "Rahber Haseen",
    role: "Founder & Chief Operating Manager",
    country: "Bangladesh",
    flag: "🇧🇩",
    image: "/Rahber.jpg",
    quote: "Building systems that empower teams — because vision needs execution, and innovation works only when operations do.",
  },
  {
    name: "Sabbir Hossain",
    role: "Founder & Chief Technology Officer (CTO)",
    country: "Bangladesh",
    flag: "🇧🇩",
    image: "/Sabbir.jpg",
    quote: "Keep Solving.",
  },
  {
    name: "Shoriful Islam",
    role: "Head of Developer (HoD)",
    country: "Bangladesh",
    flag: "🇧🇩",
    image: "/Fahim.png",
    quote: "Sometimes, the hardest part of growing isn't learning new things, but unlearning what we were sure we already knew.",
  },
  {
    name: "Hajar Zahir",
    role: "Growth Manager (GM)",
    country: "Morocco",
    flag: "🇲🇦",
    image: "/Hajar.jpg",
    quote: "Meaning comes before momentum.",
  },
];

export default function TeamPage() {
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
            Our Team
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Meet the <span className="text-cyan-electric">Core Members</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-velox-gray-400">
            The passionate individuals behind Velox Studio who drive innovation, 
            creativity, and excellence in everything we do.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-velox-gray-800 bg-velox-gray-900/50 backdrop-blur-sm overflow-hidden hover:border-cyan-electric/50 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={`${basePath}${member.image}`}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-velox-black via-velox-black/20 to-transparent" />
                
                {/* Country Flag */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-velox-gray-900/80 backdrop-blur rounded-full text-sm flex items-center gap-2">
                  <span>{member.flag}</span>
                  <span className="text-velox-gray-300">{member.country}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-cyan-electric text-sm font-medium mb-4">{member.role}</p>
                
                {/* Quote */}
                <div className="relative">
                  <svg className="absolute -top-2 -left-2 w-6 h-6 text-cyan-electric/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-velox-gray-400 text-sm italic pl-4">
                    &ldquo;{member.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-electric/5 via-transparent to-cyan-electric/5" />
              </div>
            </div>
          ))}
        </div>

        {/* Join Us CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 rounded-2xl border border-velox-gray-800 bg-velox-gray-900/30">
            <h3 className="text-2xl font-bold text-white mb-4">Want to Join Our Team?</h3>
            <p className="text-velox-gray-400 mb-6 max-w-md">
              We&apos;re always looking for talented individuals who share our passion for innovation.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-electric text-velox-black font-semibold rounded-lg hover:bg-cyan-400 transition-all"
            >
              Get in Touch
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
