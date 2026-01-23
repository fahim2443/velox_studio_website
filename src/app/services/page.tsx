"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import CustomCursor from "@/components/CustomCursor";

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_dk4dm0o";
const EMAILJS_TEMPLATE_ID = "template_075xrrl";
const EMAILJS_PUBLIC_KEY = "9Dp5pnekQXzVGJhcb";

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    // Basic Info
    name: "",
    email: "",
    company: "",
    
    // Project Vision
    problemAndUsers: "",
    coreFeatures: "",
    inspiration: "",
    
    // Scope and Features
    mustHaveFeatures: "",
    integrations: "",
    platform: "",
    
    // Technical and Design
    brandingGuidelines: "",
    techRequirements: "",
    dataHandling: "",
    
    // Timeline and Budget
    launchDate: "",
    budget: "",
    scalability: "",
    
    // Business and Support
    successMetrics: "",
    feedbackProvider: "",
    ongoingSupport: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData,
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Failed to send message. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-velox-black flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-electric/20 flex items-center justify-center">
            <svg className="w-8 h-8 text-cyan-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>
          <p className="text-velox-gray-400 mb-8">
            Your service request has been submitted successfully. Our team will review your requirements and get back to you within 24-48 hours.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-electric text-velox-black font-semibold rounded-lg hover:bg-cyan-400 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-velox-black">
        {/* Header */}
      <header className="border-b border-velox-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-cyan-electric/10 text-cyan-electric text-sm font-medium rounded-full mb-4">
            Service Request
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Tell Us About Your <span className="text-cyan-electric">Project</span>
          </h1>
          <p className="text-velox-gray-400 max-w-2xl mx-auto">
            Fill out the form below to help us understand your needs. We&apos;ll review your request and get back to you with a tailored proposal.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Basic Information */}
          <div className="p-6 rounded-2xl bg-velox-gray-900 border border-velox-gray-800">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-cyan-electric/20 text-cyan-electric text-sm flex items-center justify-center">1</span>
              Basic Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-velox-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-velox-black border border-velox-gray-700 text-white placeholder-velox-gray-500 focus:outline-none focus:border-cyan-electric transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-velox-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-velox-black border border-velox-gray-700 text-white placeholder-velox-gray-500 focus:outline-none focus:border-cyan-electric transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="company" className="block text-sm font-medium text-velox-gray-300 mb-2">
                  Company / Organization (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-velox-black border border-velox-gray-700 text-white placeholder-velox-gray-500 focus:outline-none focus:border-cyan-electric transition-colors"
                  placeholder="Your company name"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Project Vision */}
          <div className="p-6 rounded-2xl bg-velox-gray-900 border border-velox-gray-800">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-cyan-electric/20 text-cyan-electric text-sm flex items-center justify-center">2</span>
              Project Vision
            </h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="problemAndUsers" className="block text-sm font-medium text-velox-gray-300 mb-2">
                  What problem does this software solve for your users, and who are the primary target users? *
                </label>
                <p className="text-xs text-velox-gray-500 mb-2">e.g., age, location, tech-savviness</p>
                <textarea
                  id="problemAndUsers"
                  value={formData.problemAndUsers}
                  onChange={(e) => setFormData({ ...formData, problemAndUsers: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-velox-black border border-velox-gray-700 text-white placeholder-velox-gray-500 focus:outline-none focus:border-cyan-electric transition-colors resize-none"
                  placeholder="Describe the problem you're solving and your target audience..."
                  required
                />
              </div>
              <div>
                <label htmlFor="coreFeatures" className="block text-sm font-medium text-velox-gray-300 mb-2">
                  Describe the core features or user flow in simple terms *
                </label>
                <p className="text-xs text-velox-gray-500 mb-2">What should a user be able to do? (1-2 sentences)</p>
                <textarea
                  id="coreFeatures"
                  value={formData.coreFeatures}
                  onChange={(e) => setFormData({ ...formData, coreFeatures: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-velox-black border border-velox-gray-700 text-white placeholder-velox-gray-500 focus:outline-none focus:border-cyan-electric transition-colors resize-none"
                  placeholder="e.g., Users can sign up, browse products, and make purchases..."
                  required
                />
              </div>
              <div>
                <label htmlFor="inspiration" className="block text-sm font-medium text-velox-gray-300 mb-2">
                  What inspired this idea?
                </label>
                <p className="text-xs text-velox-gray-500 mb-2">Are there any existing apps/websites it should emulate or improve upon?</p>
                <textarea
                  id="inspiration"
                  value={formData.inspiration}
                  onChange={(e) => setFormData({ ...formData, inspiration: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-velox-black border border-velox-gray-700 text-white placeholder-velox-gray-500 focus:outline-none focus:border-cyan-electric transition-colors resize-none"
                  placeholder="Share links or names of similar products for reference..."
                />
              </div>
            </div>
          </div>

          {/* Section 3: Scope and Features */}
          <div className="p-6 rounded-2xl bg-velox-gray-900 border border-velox-gray-800">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-cyan-electric/20 text-cyan-electric text-sm flex items-center justify-center">3</span>
              Scope and Features
            </h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="mustHaveFeatures" className="block text-sm font-medium text-velox-gray-300 mb-2">
                  What are the must-have features versus nice-to-haves? *
                </label>
                <p className="text-xs text-velox-gray-500 mb-2">Prioritize top 3-5 features to avoid scope creep</p>
                <textarea
                  id="mustHaveFeatures"
                  value={formData.mustHaveFeatures}
                  onChange={(e) => setFormData({ ...formData, mustHaveFeatures: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-velox-black border border-velox-gray-700 text-white placeholder-velox-gray-500 focus:outline-none focus:border-cyan-electric transition-colors resize-none"
                  placeholder="Must-have: 1. User authentication 2. Dashboard...&#10;Nice-to-have: 1. Dark mode 2. Analytics..."
                  required
                />
              </div>
              <div>
                <label htmlFor="integrations" className="block text-sm font-medium text-velox-gray-300 mb-2">
                  Will it need user accounts, payments, integrations, or admin dashboards?
                </label>
                <p className="text-xs text-velox-gray-500 mb-2">e.g., APIs for email, maps, databases, payment gateways</p>
                <textarea
                  id="integrations"
                  value={formData.integrations}
                  onChange={(e) => setFormData({ ...formData, integrations: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-velox-black border border-velox-gray-700 text-white placeholder-velox-gray-500 focus:outline-none focus:border-cyan-electric transition-colors resize-none"
                  placeholder="e.g., Stripe payments, Google Maps, SendGrid for emails..."
                />
              </div>
              <div>
                <label htmlFor="platform" className="block text-sm font-medium text-velox-gray-300 mb-2">
                  Platform *
                </label>
                <select
                  id="platform"
                  value={formData.platform}
                  onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-velox-black border border-velox-gray-700 text-white focus:outline-none focus:border-cyan-electric transition-colors"
                  required
                >
                  <option value="">Select platform</option>
                  <option value="web-only">Web Only</option>
                  <option value="mobile-ios">Mobile (iOS)</option>
                  <option value="mobile-android">Mobile (Android)</option>
                  <option value="mobile-both">Mobile (iOS & Android)</option>
                  <option value="desktop">Desktop Application</option>
                  <option value="cross-platform">Cross-Platform (Web + Mobile)</option>
                  <option value="not-sure">Not Sure Yet</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 4: Technical and Design Needs */}
          <div className="p-6 rounded-2xl bg-velox-gray-900 border border-velox-gray-800">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-cyan-electric/20 text-cyan-electric text-sm flex items-center justify-center">4</span>
              Technical and Design Needs
            </h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="brandingGuidelines" className="block text-sm font-medium text-velox-gray-300 mb-2">
                  Do you have branding guidelines, logos, or preferred design styles?
                </label>
                <p className="text-xs text-velox-gray-500 mb-2">e.g., modern, minimalist, colorful, corporate</p>
                <textarea
                  id="brandingGuidelines"
                  value={formData.brandingGuidelines}
                  onChange={(e) => setFormData({ ...formData, brandingGuidelines: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-velox-black border border-velox-gray-700 text-white placeholder-velox-gray-500 focus:outline-none focus:border-cyan-electric transition-colors resize-none"
                  placeholder="Describe your brand style or share links to brand guidelines..."
                />
              </div>
              <div>
                <label htmlFor="techRequirements" className="block text-sm font-medium text-velox-gray-300 mb-2">
                  Any specific technologies or platforms required?
                </label>
                <p className="text-xs text-velox-gray-500 mb-2">e.g., must run on iOS 15+, integrate with Shopify, use specific cloud provider</p>
                <textarea
                  id="techRequirements"
                  value={formData.techRequirements}
                  onChange={(e) => setFormData({ ...formData, techRequirements: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-velox-black border border-velox-gray-700 text-white placeholder-velox-gray-500 focus:outline-none focus:border-cyan-electric transition-colors resize-none"
                  placeholder="List any technical requirements or constraints..."
                />
              </div>
              <div>
                <label htmlFor="dataHandling" className="block text-sm font-medium text-velox-gray-300 mb-2">
                  How should it handle data?
                </label>
                <p className="text-xs text-velox-gray-500 mb-2">User-generated content, file uploads, real-time updates like chat</p>
                <textarea
                  id="dataHandling"
                  value={formData.dataHandling}
                  onChange={(e) => setFormData({ ...formData, dataHandling: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-velox-black border border-velox-gray-700 text-white placeholder-velox-gray-500 focus:outline-none focus:border-cyan-electric transition-colors resize-none"
                  placeholder="Describe data requirements - uploads, real-time features, storage needs..."
                />
              </div>
            </div>
          </div>

          {/* Section 5: Timeline and Budget */}
          <div className="p-6 rounded-2xl bg-velox-gray-900 border border-velox-gray-800">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-cyan-electric/20 text-cyan-electric text-sm flex items-center justify-center">5</span>
              Timeline and Budget
            </h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="launchDate" className="block text-sm font-medium text-velox-gray-300 mb-2">
                  What is your target launch date? *
                </label>
                <p className="text-xs text-velox-gray-500 mb-2">Are there any hard deadlines or phases? (e.g., MVP first)</p>
                <textarea
                  id="launchDate"
                  value={formData.launchDate}
                  onChange={(e) => setFormData({ ...formData, launchDate: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-3 rounded-lg bg-velox-black border border-velox-gray-700 text-white placeholder-velox-gray-500 focus:outline-none focus:border-cyan-electric transition-colors resize-none"
                  placeholder="e.g., MVP by March 2026, full launch by June 2026..."
                  required
                />
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-velox-gray-300 mb-2">
                  What budget range do you have in mind? *
                </label>
                <p className="text-xs text-velox-gray-500 mb-2">How flexible is it for changes?</p>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-velox-black border border-velox-gray-700 text-white focus:outline-none focus:border-cyan-electric transition-colors"
                  required
                >
                  <option value="">Select budget range</option>
                  <option value="under-1k">Under $1,000</option>
                  <option value="1k-5k">$1,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-plus">$50,000+</option>
                  <option value="flexible">Flexible / Open to Discussion</option>
                </select>
              </div>
              <div>
                <label htmlFor="scalability" className="block text-sm font-medium text-velox-gray-300 mb-2">
                  How many users do you expect initially, and what are your scalability needs?
                </label>
                <p className="text-xs text-velox-gray-500 mb-2">e.g., 100 vs. 10,000 concurrent users</p>
                <textarea
                  id="scalability"
                  value={formData.scalability}
                  onChange={(e) => setFormData({ ...formData, scalability: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-3 rounded-lg bg-velox-black border border-velox-gray-700 text-white placeholder-velox-gray-500 focus:outline-none focus:border-cyan-electric transition-colors resize-none"
                  placeholder="e.g., Starting with 500 users, expecting 10,000 within first year..."
                />
              </div>
            </div>
          </div>

          {/* Section 6: Business and Support */}
          <div className="p-6 rounded-2xl bg-velox-gray-900 border border-velox-gray-800">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-cyan-electric/20 text-cyan-electric text-sm flex items-center justify-center">6</span>
              Business and Support
            </h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="successMetrics" className="block text-sm font-medium text-velox-gray-300 mb-2">
                  What are your success metrics?
                </label>
                <p className="text-xs text-velox-gray-500 mb-2">e.g., user sign-ups, revenue goals, engagement rates</p>
                <textarea
                  id="successMetrics"
                  value={formData.successMetrics}
                  onChange={(e) => setFormData({ ...formData, successMetrics: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-3 rounded-lg bg-velox-black border border-velox-gray-700 text-white placeholder-velox-gray-500 focus:outline-none focus:border-cyan-electric transition-colors resize-none"
                  placeholder="e.g., 1,000 sign-ups in first month, $10k MRR within 6 months..."
                />
              </div>
              <div>
                <label htmlFor="feedbackProvider" className="block text-sm font-medium text-velox-gray-300 mb-2">
                  Who will provide content, testing feedback, or approvals during development?
                </label>
                <textarea
                  id="feedbackProvider"
                  value={formData.feedbackProvider}
                  onChange={(e) => setFormData({ ...formData, feedbackProvider: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-3 rounded-lg bg-velox-black border border-velox-gray-700 text-white placeholder-velox-gray-500 focus:outline-none focus:border-cyan-electric transition-colors resize-none"
                  placeholder="e.g., I will be the primary contact, or our marketing team..."
                />
              </div>
              <div>
                <label htmlFor="ongoingSupport" className="block text-sm font-medium text-velox-gray-300 mb-2">
                  Do you need ongoing maintenance, hosting, or post-launch support after delivery?
                </label>
                <select
                  id="ongoingSupport"
                  value={formData.ongoingSupport}
                  onChange={(e) => setFormData({ ...formData, ongoingSupport: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-velox-black border border-velox-gray-700 text-white focus:outline-none focus:border-cyan-electric transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="yes-full">Yes, full maintenance and hosting</option>
                  <option value="yes-maintenance">Yes, maintenance only</option>
                  <option value="yes-hosting">Yes, hosting only</option>
                  <option value="maybe">Maybe, let&apos;s discuss</option>
                  <option value="no">No, just delivery</option>
                </select>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-400 text-center">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 bg-cyan-electric text-velox-black font-semibold rounded-lg hover:bg-cyan-400 transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Submit Request
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Note */}
        <p className="text-center text-velox-gray-500 text-sm mt-8">
          By submitting this form, you agree to our privacy policy. We&apos;ll only use your information to respond to your inquiry.
        </p>
      </main>
    </div>
    </>
  );
}
