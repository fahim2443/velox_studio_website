"use client";

import RevealOnScroll from "./RevealOnScroll";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Custom Website Development",
    description: "Tailored websites for restaurants, institutions, companies, and businesses of all sizes. Built with modern technologies for speed, security, and scalability.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android. From concept to deployment, we build apps that users love.",
    features: ["iOS & Android", "Cross-Platform", "App Store Ready", "Push Notifications"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: "Marketing & Publicity",
    description: "Comprehensive digital marketing campaigns to promote your apps, websites, and digital products. Reach your target audience effectively.",
    features: ["Social Media", "SEO/SEM", "Content Strategy", "Analytics"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Design Services",
    description: "Professional logo design, posters, banners, and branding materials that capture your brand's essence and make a lasting impression.",
    features: ["Logo Design", "Brand Identity", "Print Materials", "Digital Assets"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "UI/UX Design",
    description: "User interface and experience design that puts users first. We create intuitive, beautiful interfaces that drive engagement and conversions.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Software Product Development",
    description: "We identify market gaps and build innovative software products that solve real-world problems. Websites, apps, and digital platforms.",
    features: ["Market Research", "MVP Development", "Scalable Solutions", "Ongoing Support"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-velox-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-cyan-electric/10 text-cyan-electric text-sm font-medium rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              What We <span className="text-cyan-electric">Offer</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-velox-gray-400">
              Comprehensive digital solutions tailored to your needs. From development 
              to design to marketing, we&apos;ve got you covered.
            </p>
          </div>
        </RevealOnScroll>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="group p-6 rounded-2xl bg-velox-black border border-velox-gray-800 hover:border-cyan-electric/50 transition-all duration-300 hover:-translate-y-2 h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-velox-gray-800 flex items-center justify-center text-cyan-electric mb-5 group-hover:bg-cyan-electric/10 transition-colors">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-electric transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-velox-gray-400 mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 text-xs font-medium bg-velox-gray-800 text-velox-gray-300 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* CTA */}
        <RevealOnScroll delay={600}>
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-cyan-electric hover:text-cyan-400 font-medium transition-colors"
            >
              Discuss Your Project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
