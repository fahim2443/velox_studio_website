"use client";

import Link from "next/link";
import MagneticButton from "./MagneticButton";
import RevealOnScroll from "./RevealOnScroll";
import MouseFollow from "./MouseFollow";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-animated">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Glowing Orb Effects - Mouse Follow */}
      <MouseFollow intensity={0.02} className="absolute top-1/4 left-1/4">
        <div className="w-96 h-96 bg-cyan-electric/10 rounded-full blur-3xl" />
      </MouseFollow>
      <MouseFollow intensity={0.03} className="absolute bottom-1/4 right-1/4">
        <div className="w-80 h-80 bg-cyan-electric/5 rounded-full blur-3xl" />
      </MouseFollow>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline */}
        <RevealOnScroll delay={100}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-velox-gray-700 bg-velox-gray-900/50 mb-8">
            <span className="w-2 h-2 bg-cyan-electric rounded-full animate-pulse" />
            <span className="text-sm text-velox-gray-300">
              Building the Future of Digital Products
            </span>
          </div>
        </RevealOnScroll>

        {/* Main Heading */}
        <RevealOnScroll delay={200}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block text-white">We Build</span>
            <span className="block text-gradient">Digital Excellence</span>
          </h1>
        </RevealOnScroll>

        {/* Subheading */}
        <RevealOnScroll delay={300}>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-velox-gray-400 mb-10 leading-relaxed">
            From innovative software products to collaborative partnerships,
            we transform ideas into powerful digital solutions that drive real results.
          </p>
        </RevealOnScroll>

        {/* CTA Buttons */}
        <RevealOnScroll delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton strength={0.3}>
              <Link
                href="#services"
                className="inline-block w-full sm:w-auto px-8 py-4 bg-cyan-electric text-velox-black font-semibold rounded-lg hover:bg-cyan-400 transition-all duration-300 glow-cyan-hover text-lg"
              >
                Explore Our Services
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.3}>
              <Link
                href="#partnership"
                className="inline-block w-full sm:w-auto px-8 py-4 border border-velox-gray-600 text-white font-semibold rounded-lg hover:border-cyan-electric hover:text-cyan-electric transition-all duration-300 text-lg"
              >
                Partner With Us
              </Link>
            </MagneticButton>
          </div>
        </RevealOnScroll>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "15+", label: "Team Partners" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <RevealOnScroll key={index} delay={500 + index * 100}>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-cyan-electric mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-velox-gray-400">{stat.label}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-velox-gray-600 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cyan-electric rounded-full" />
        </div>
      </div>
    </section>
  );
}
