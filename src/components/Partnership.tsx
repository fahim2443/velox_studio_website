"use client";

import RevealOnScroll from "./RevealOnScroll";
import MagneticButton from "./MagneticButton";

const benefits = [
  {
    icon: "💰",
    title: "Profit Sharing",
    description: "Fair profit-sharing model where your success is our success. No upfront costs, shared rewards.",
  },
  {
    icon: "🧪",
    title: "Quality Assurance",
    description: "Comprehensive testing and QA services to ensure your product meets the highest standards.",
  },
  {
    icon: "📢",
    title: "Marketing & Publicity",
    description: "Full marketing support to launch and grow your product in the market.",
  },
  {
    icon: "🛠️",
    title: "Technical Infrastructure",
    description: "Hosting, DevOps, and technical infrastructure handled by our expert team.",
  },
  {
    icon: "🎨",
    title: "Design Support",
    description: "UI/UX design, branding, and visual assets created by professional designers.",
  },
  {
    icon: "📊",
    title: "Business Strategy",
    description: "Strategic guidance on product positioning, pricing, and market fit.",
  },
];

const process = [
  {
    step: "01",
    title: "Apply",
    description: "Share your idea or skills with us through our partnership application.",
  },
  {
    step: "02",
    title: "Evaluate",
    description: "We review your proposal and discuss potential collaboration.",
  },
  {
    step: "03",
    title: "Partner",
    description: "Agree on terms and start building together.",
  },
  {
    step: "04",
    title: "Launch & Grow",
    description: "Launch your product and share in the success.",
  },
];

export default function Partnership() {
  return (
    <section id="partnership" className="py-24 bg-velox-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-cyan-electric/10 text-cyan-electric text-sm font-medium rounded-full mb-4">
              Partnership Program
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Build With <span className="text-cyan-electric">Us</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-velox-gray-400">
              Join our Product Team Collaboration program. Bring your ideas or work on ours. 
              We provide everything you need to succeed – you focus on building.
            </p>
          </div>
        </RevealOnScroll>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: What We Provide */}
          <RevealOnScroll direction="left">
            <div>
              <h3 className="text-2xl font-bold mb-8">What We Provide</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-velox-gray-900 border border-velox-gray-800 hover:border-cyan-electric/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-3xl mb-3">{benefit.icon}</div>
                    <h4 className="font-semibold text-white mb-2">{benefit.title}</h4>
                    <p className="text-sm text-velox-gray-400">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: The Process */}
          <RevealOnScroll direction="right">
            <div>
              <h3 className="text-2xl font-bold mb-8">How It Works</h3>
              <div className="space-y-6">
                {process.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-cyan-electric/10 flex items-center justify-center">
                      <span className="text-cyan-electric font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg">{item.title}</h4>
                      <p className="text-velox-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Box */}
              <div className="mt-8 p-6 rounded-2xl border-gradient bg-velox-gray-900">
                <h4 className="text-xl font-bold mb-3">Ready to Partner?</h4>
                <p className="text-velox-gray-400 mb-4">
                  Whether you have an idea or the skills, we&apos;d love to hear from you.
                </p>
                <MagneticButton strength={0.3}>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-electric text-velox-black font-semibold rounded-lg hover:bg-cyan-400 transition-all duration-200"
                  >
                    Apply for Partnership
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </MagneticButton>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Bottom Banner */}
        <RevealOnScroll>
          <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-velox-gray-900 to-velox-gray-800 p-8 md:p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-electric/10 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Have a Product Idea?
                </h3>
                <p className="text-velox-gray-400">
                  We&apos;re always looking for the next big thing. Let&apos;s build it together.
                </p>
              </div>
              <MagneticButton strength={0.3}>
                <a
                  href="#contact"
                  className="shrink-0 px-8 py-4 bg-white text-velox-black font-semibold rounded-lg hover:bg-velox-gray-200 transition-all duration-200"
                >
                  Share Your Idea
                </a>
              </MagneticButton>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
