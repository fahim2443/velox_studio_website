"use client";

import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

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
                  src="/vs-dark.jpg"
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
                  { icon: "⚡", title: "Speed", desc: "Rapid development" },
                  { icon: "🎯", title: "Precision", desc: "Attention to detail" },
                  { icon: "🤝", title: "Partnership", desc: "True collaboration" },
                  { icon: "💡", title: "Innovation", desc: "Creative solutions" },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-velox-gray-900 border border-velox-gray-800 hover:border-cyan-electric/30 transition-colors hover:-translate-y-1 duration-300"
                  >
                    <div className="text-2xl mb-2">{value.icon}</div>
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
