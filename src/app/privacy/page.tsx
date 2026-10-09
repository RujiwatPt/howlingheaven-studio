import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Logo } from '@/components/brand/Logo';
import { Footer } from '@/components/layout/Footer';
import { ArrowLeft, Shield, Lock, Eye, FileText, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Howling Heaven Studio',
  description: 'Privacy Policy and data practices for Howling Heaven Studio and its digital products.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen bg-[#07090E] text-slate-200 overflow-x-hidden flex flex-col justify-between">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#07090D]/90 backdrop-blur-md border-b border-amber-500/15 py-4">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo size="md" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-300 hover:text-amber-200 transition-colors uppercase py-1.5 px-3 rounded border border-amber-500/30 hover:border-amber-400 bg-slate-900/60"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
        <div className="space-y-4 text-center sm:text-left border-b border-amber-500/20 pb-10 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[11px] font-bold text-amber-400 tracking-widest uppercase">
            <Shield className="w-3.5 h-3.5" />
            <span>Legal & Privacy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white font-serif-title tracking-tight text-gold-gradient">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Last updated: October 9, 2026 • Howling Heaven Studio
          </p>
        </div>

        <div className="space-y-10 text-xs sm:text-sm leading-relaxed text-slate-300">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white font-serif-title flex items-center gap-2 text-amber-300">
              <Eye className="w-4 h-4 text-amber-400" />
              1. Overview & Commitment
            </h2>
            <p>
              Howling Heaven Studio (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website at <strong className="text-white">howlingheaven.com</strong> or use any of our interactive applications and creative platforms (including <strong className="text-amber-300">Howly.ai</strong>, <strong className="text-amber-300">Three Souls, One Heart</strong>, and <strong className="text-amber-300">BeastForge</strong>).
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white font-serif-title flex items-center gap-2 text-amber-300">
              <FileText className="w-4 h-4 text-amber-400" />
              2. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-white">Direct Inquiries & Communications:</strong> When you reach out to us via our contact modal or email, we collect your name, email address, and the content of your message.
              </li>
              <li>
                <strong className="text-white">Local Application Storage & Preferences:</strong> Our interactive web applications (such as character generator presets in BeastForge, visual novel save states in Three Souls, One Heart, or local UI preferences) store session data locally on your device via browser <code className="text-amber-300 font-mono text-xs">localStorage</code> or IndexedDB.
              </li>
              <li>
                <strong className="text-white">Technical & Usage Data:</strong> Standard server logs and anonymized network telemetry provided by our edge hosting providers (Cloudflare) to ensure fast delivery, uptime, and DDoS protection.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white font-serif-title flex items-center gap-2 text-amber-300">
              <Lock className="w-4 h-4 text-amber-400" />
              3. AI & Conversational Data (Howly.ai)
            </h2>
            <p>
              When interacting with character bots on <strong className="text-amber-300">Howly.ai</strong>:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Messages and roleplay prompts you enter are processed to generate real-time character responses and maintain conversational context.</li>
              <li>We do not sell, rent, or trade your personal conversations or roleplay transcripts to third-party data brokers.</li>
              <li>We implement strict isolation and memory indexing protocols to safeguard user scenarios.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white font-serif-title flex items-center gap-2 text-amber-300">
              <Shield className="w-4 h-4 text-amber-400" />
              4. How We Use Your Information
            </h2>
            <p>We use the collected information strictly for legitimate operational purposes:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>To respond promptly to your project inquiries, questions, and collaboration requests.</li>
              <li>To maintain, optimize, and debug our interactive web applications and game builds.</li>
              <li>To protect against malicious abuse, security breaches, and fraudulent activity.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white font-serif-title flex items-center gap-2 text-amber-300">
              <Lock className="w-4 h-4 text-amber-400" />
              5. Data Security & Retention
            </h2>
            <p>
              We implement industry-standard HTTPS/TLS encryption and secure edge protocols. We retain your contact information only for as long as necessary to fulfill the purposes outlined in this policy or to resolve disputes.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white font-serif-title flex items-center gap-2 text-amber-300">
              <Mail className="w-4 h-4 text-amber-400" />
              6. Your Rights & Contact Us
            </h2>
            <p>
              You may request access to, correction of, or deletion of any personal communications sent to us. If you have any questions or privacy concerns, please contact our team directly at:
            </p>
            <div className="p-4 rounded-xl studio-card border border-amber-500/30 inline-block mt-2">
              <p className="text-xs text-slate-300">
                <strong className="text-white">Howling Heaven Studio Support</strong><br />
                Direct Email:{' '}
                <a href="mailto:gdulahan@gmail.com" className="text-amber-300 underline font-semibold hover:text-white">
                  gdulahan@gmail.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
