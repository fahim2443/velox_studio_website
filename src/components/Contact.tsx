"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "general",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", type: "general", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-velox-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-cyan-electric/10 text-cyan-electric text-sm font-medium rounded-full mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Let&apos;s Start a <span className="text-cyan-electric">Conversation</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-velox-gray-400">
              Have a project in mind? Want to partner with us? We&apos;d love to hear from you.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <RevealOnScroll direction="left">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-velox-gray-400 mb-8">
              Fill out the form or reach out directly. We typically respond within 24 hours.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-velox-black border border-velox-gray-800">
                <div className="w-12 h-12 rounded-lg bg-cyan-electric/10 flex items-center justify-center text-cyan-electric">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <a href="mailto:theveloxstudio@gmail.com" className="text-velox-gray-400 hover:text-cyan-electric transition-colors">
                    theveloxstudio@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-velox-black border border-velox-gray-800">
                <div className="w-12 h-12 rounded-lg bg-cyan-electric/10 flex items-center justify-center text-cyan-electric">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-velox-gray-400">
                    Qixia District, Nanjing, Jiangsu, China
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/velox_studio_26?igsh=bGFncjViYTdnd3Vz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-velox-gray-800 flex items-center justify-center text-velox-gray-400 hover:text-cyan-electric hover:bg-velox-gray-700 transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* Email */}
                <a
                  href="mailto:theveloxstudio@gmail.com"
                  className="w-10 h-10 rounded-lg bg-velox-gray-800 flex items-center justify-center text-velox-gray-400 hover:text-cyan-electric hover:bg-velox-gray-700 transition-all"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
            </div>
          </RevealOnScroll>

          {/* Right: Contact Form */}
          <RevealOnScroll direction="right">
            <div className="p-8 rounded-2xl bg-velox-black border border-velox-gray-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-velox-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-velox-gray-900 border border-velox-gray-700 text-white placeholder-velox-gray-500 focus:outline-none focus:border-cyan-electric transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-velox-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-velox-gray-900 border border-velox-gray-700 text-white placeholder-velox-gray-500 focus:outline-none focus:border-cyan-electric transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-velox-gray-300 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="type"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-velox-gray-900 border border-velox-gray-700 text-white focus:outline-none focus:border-cyan-electric transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="project">Project Discussion</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="careers">Careers</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-velox-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-velox-gray-900 border border-velox-gray-700 text-white placeholder-velox-gray-500 focus:outline-none focus:border-cyan-electric transition-colors resize-none"
                    placeholder="Tell us about your project or idea..."
                    required
                  />
                </div>

                <MagneticButton strength={0.2} className="w-full">
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-cyan-electric text-velox-black font-semibold rounded-lg hover:bg-cyan-400 transition-all duration-200 glow-cyan-hover"
                  >
                    Send Message
                  </button>
                </MagneticButton>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
