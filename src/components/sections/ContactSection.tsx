'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, PawPrint } from 'lucide-react';

interface ContactSectionProps {
  onOpenContactModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenContactModal }) => {
  return (
    <section id="contact" className="relative py-24 bg-transparent overflow-hidden border-t border-amber-500/15 z-10">
      {/* Campfire Nocturnal Forest Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer_campfire_bg.jpg"
          alt="Howling Heaven Den Nocturnal Forest Campfire"
          fill
          className="object-cover object-bottom opacity-50 filter brightness-90"
        />
        {/* Soft Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#07090D]/70 to-[#07090D]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="rounded-2xl studio-card border border-amber-500/40 p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left Title & Subtext */}
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-serif-title tracking-tight">
              Ready to build something <span className="text-gold-gradient">unforgettable?</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Reach out directly to <a href="mailto:gdulahan@gmail.com" className="text-amber-300 underline font-semibold">gdulahan@gmail.com</a> & <a href="mailto:rujiwatpt@gmail.com" className="text-amber-300 underline font-semibold">rujiwatpt@gmail.com</a>
            </p>
          </div>

          {/* Right Button */}
          <div className="flex-shrink-0">
            <button
              onClick={onOpenContactModal}
              className="group px-7 py-3 rounded border border-amber-500/50 hover:border-amber-400 bg-slate-950/80 hover:bg-amber-500/10 text-amber-300 font-semibold text-xs tracking-widest uppercase transition-all duration-300 inline-flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>CONTACT US</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
