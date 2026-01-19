"use client";

import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const basePath = process.env.NODE_ENV === "production" ? "/velox_studio_website" : "";

export default function About() {
  return (
    <section id="about" className="py-24 bg-velox-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-cyan-electric">Velox Studio</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-velox-gray-400">
              We are a dynamic digital studio focused on creating impactful software products 
              and fostering collaborative partnerships that drive innovation.
            </p>
          </div>
        </RevealOnScroll>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Visual Element */}
          <RevealOnScroll direction="left">
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden border border-velox-gray-800">
                {/* Use the actual logo */}
                <Image
                  src={`${basePath}/vs-dark.png`}
                  alt="Velox Studio Logo"
                  fill
                  className="object-cover"
                />
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-velox-black/50" />

                {/* Floating Cards */}
                <div className="absolute top-8 right-8 px-4 py-2 bg-velox-gray-800/80 backdrop-blur rounded-lg border border-velox-gray-700">
                  <span className="text-cyan-electric font-semibold">Innovation</span>
                </div>
                <div className="absolute bottom-8 left-8 px-4 py-2 bg-velox-gray-800/80 backdrop-blur rounded-lg border border-velox-gray-700">
                  <span className="text-white font-semibold">Excellence</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: Text Content */}
          <RevealOnScroll direction="right">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-velox-gray-400 leading-relaxed">
                  At Velox Studio, we believe in the power of digital innovation to solve 
                  real-world problems. Our mission is to identify gaps in the market and 
                  create software solutions that make a genuine difference.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                <p className="text-velox-gray-400 leading-relaxed">
                  We operate on three distinct priorities: developing our own innovative 
                  products, partnering with talented teams through profit-sharing models, 
                  and providing exceptional client services for businesses of all sizes.
                </p>
              </div>

              {/* Key Values */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: "Speed", desc: "Rapid development" },
                  { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Precision", desc: "Attention to detail" },
                  { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>, title: "Partnership", desc: "True collaboration" },
                  { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>, title: "Innovation", desc: "Creative solutions" },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-velox-gray-900 border border-velox-gray-800 hover:border-cyan-electric/30 transition-colors hover:-translate-y-1 duration-300"
                  >
                    <div className="text-2xl mb-2 text-cyan-electric">{value.icon}</div>
                    <h4 className="font-semibold text-white">{value.title}</h4>
                    <p className="text-sm text-velox-gray-500">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
