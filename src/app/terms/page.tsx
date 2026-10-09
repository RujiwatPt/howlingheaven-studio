import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Logo } from '@/components/brand/Logo';
import { Footer } from '@/components/layout/Footer';
import { ArrowLeft, FileText, CheckCircle2, ShieldAlert, Cpu, AlertCircle, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Howling Heaven Studio',
  description: 'Terms of Service and conditions for Howling Heaven Studio and its digital applications.',
};

export default function TermsOfServicePage() {
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
            <FileText className="w-3.5 h-3.5" />
            <span>Terms & Conditions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white font-serif-title tracking-tight text-gold-gradient">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Last updated: October 9, 2026 • Howling Heaven Studio
          </p>
        </div>

        <div className="space-y-10 text-xs sm:text-sm leading-relaxed text-slate-300">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white font-serif-title flex items-center gap-2 text-amber-300">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the website at <strong className="text-white">howlingheaven.com</strong> or any applications and platforms created by <strong className="text-white">Howling Heaven Studio</strong> (including <strong className="text-amber-300">Howly.ai</strong>, <strong className="text-amber-300">Three Souls, One Heart</strong>, and <strong className="text-amber-300">BeastForge</strong>), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white font-serif-title flex items-center gap-2 text-amber-300">
              <FileText className="w-4 h-4 text-amber-400" />
              2. Studio Services & Intellectual Property
            </h2>
            <p>
              All original visual novel artwork, characters, storylines, logos, soundscapes, source code, UI designs, and studio branding created by Howling Heaven Studio are the exclusive intellectual property of Howling Heaven Studio and are protected under international copyright, trademark, and intellectual property laws.
            </p>
            <p>
              For <strong className="text-amber-300">BeastForge</strong>: Generated character portraits and RPG cards exported by users may be incorporated into your personal or indie game projects (such as RPG Maker MV/MZ creations) subject to standard non-exclusive studio asset licenses.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white font-serif-title flex items-center gap-2 text-amber-300">
              <Cpu className="w-4 h-4 text-amber-400" />
              3. AI Roleplay & Conversational Platform (Howly.ai)
            </h2>
            <p>
              When utilizing our AI-powered roleplay platforms:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>AI-generated character responses are generated dynamically and for entertainment/roleplay storytelling purposes.</li>
              <li>You agree not to use the platform to generate unlawful, harassing, defamatory, or harmful content.</li>
              <li>Howling Heaven Studio reserves the right to moderate or restrict access to prevent automated abuse or malicious attacks.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white font-serif-title flex items-center gap-2 text-amber-300">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              4. User Conduct & Prohibited Uses
            </h2>
            <p>When using our site or apps, you agree not to:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>Attempt to reverse-engineer, decompile, or compromise the security of our services and backend edge APIs.</li>
              <li>Deploy unauthorized scrapers, automated spiders, or DDoS loads against our servers.</li>
              <li>Misrepresent your identity or claim unauthorized affiliation with Howling Heaven Studio.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white font-serif-title flex items-center gap-2 text-amber-300">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              5. Disclaimer of Warranties & Limitation of Liability
            </h2>
            <p>
              Our websites, games, and tools are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind. Howling Heaven Studio shall not be liable for any indirect, incidental, or consequential damages resulting from your use of or inability to use our services.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white font-serif-title flex items-center gap-2 text-amber-300">
              <Mail className="w-4 h-4 text-amber-400" />
              6. Contact Information
            </h2>
            <p>
              If you have any questions regarding these Terms of Service or commercial licensing inquiries, please reach out to:
            </p>
            <div className="p-4 rounded-xl studio-card border border-amber-500/30 inline-block mt-2">
              <p className="text-xs text-slate-300">
                <strong className="text-white">Howling Heaven Studio</strong><br />
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
