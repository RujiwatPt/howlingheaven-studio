'use client';

import React from 'react';
import Image from 'next/image';
import { PawPrint } from 'lucide-react';

interface AboutSectionProps {
  onOpenAboutModal?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAboutModal }) => {
  return (
    <section id="about" className="relative py-24 bg-transparent overflow-hidden border-t border-amber-500/10 z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.25em] text-amber-400 uppercase">
              <span>—</span>
              <span>🐾 ABOUT THE STUDIO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif-title tracking-tight leading-tight">
              A Pack of Dreamers <br />
              <span className="text-gold-gradient">and Builders</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              We&apos;re a small but passionate studio that believes in storytelling, technology, and the magic between. Every project we build is crafted with heart, fueled by curiosity, and driven by quality.
            </p>

            {/* Action Button */}
            <div className="pt-2">
              <button
                onClick={onOpenAboutModal}
                className="group px-6 py-2.5 rounded border border-amber-500/40 hover:border-amber-400 bg-slate-950/60 hover:bg-amber-500/10 text-amber-300 font-semibold text-xs tracking-widest uppercase transition-all duration-300 inline-flex items-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_20px_rgba(212,175,55,0.35)]"
              >
                <span>MORE ABOUT US</span>
                <PawPrint className="w-3.5 h-3.5 fill-amber-300 group-hover:scale-105 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Artwork Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden studio-card border border-amber-500/30 shadow-2xl p-2">
              <div className="relative h-72 sm:h-[360px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/den_art_new.jpg"
                  alt="Howling Heaven Studio Pack Den Interior"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
