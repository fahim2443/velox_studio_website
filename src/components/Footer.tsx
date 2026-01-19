"use client";

import Link from "next/link";
import Logo from "./Logo";

const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "/services" },
    { label: "Partnership", href: "#partnership" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Web Development", href: "/services" },
    { label: "Mobile Apps", href: "/services" },
    { label: "UI/UX Design", href: "/services" },
    { label: "Marketing", href: "/services" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-velox-black border-t border-velox-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Logo size="sm" variant="full" theme="dark" className="mb-6" />
            <p className="text-velox-gray-400 text-sm leading-relaxed mb-6">
              Building innovative digital products and fostering collaborative partnerships.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/velox_studio_26?igsh=bGFncjViYTdnd3Vz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-velox-gray-900 flex items-center justify-center text-velox-gray-400 hover:text-cyan-electric hover:bg-velox-gray-800 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Email */}
              <a
                href="mailto:theveloxstudio@gmail.com"
                className="w-9 h-9 rounded-lg bg-velox-gray-900 flex items-center justify-center text-velox-gray-400 hover:text-cyan-electric hover:bg-velox-gray-800 transition-all"
                aria-label="Email"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              {/* X (Twitter) */}
              <a
                href="https://x.com/velox_studio_26?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-velox-gray-900 flex items-center justify-center text-velox-gray-400 hover:text-cyan-electric hover:bg-velox-gray-800 transition-all"
                aria-label="X"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@velox_studio_26?_r=1&_t=ZN-93C10hQJ0OU"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-velox-gray-900 flex items-center justify-center text-velox-gray-400 hover:text-cyan-electric hover:bg-velox-gray-800 transition-all"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-velox-gray-400 hover:text-cyan-electric transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-velox-gray-400 hover:text-cyan-electric transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-velox-gray-400 hover:text-cyan-electric transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-velox-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-velox-gray-500 text-sm">
            © {currentYear} Velox Studio. All rights reserved.
          </p>
          <p className="text-velox-gray-600 text-sm flex items-center gap-1">
            Built by Velox Studio Developer Team
          </p>
        </div>
      </div>
    </footer>
  );
}
