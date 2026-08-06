'use client';

import React from 'react';
import Image from 'next/image';
import { PawPrint } from 'lucide-react';

interface HeroSectionProps {
  onExploreWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreWork }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Artwork Visual */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_wolf_moon.jpg"
          alt="Howling Heaven Studio Hero Visual"
          fill
          priority
          className="object-cover object-center filter brightness-85 contrast-105"
        />
        {/* Soft Ambient Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-[#07090D]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090D]/90 via-[#07090D]/50 to-transparent" />
      </div>

      {/* Hero Content Container (Left side alignment) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full flex justify-start">
        <div className="max-w-2xl text-left space-y-6">
          
          {/* Welcome Badge */}
          <span className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-amber-200 block">
            WELCOME TO
          </span>

          {/* Main Title: Howling Heaven Studio */}
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-serif-title leading-[1.1] text-gold-gradient drop-shadow-[0_4px_30px_rgba(212,175,55,0.3)]"
          >
            HOWLING HEAVEN STUDIO
          </h1>

          {/* Star Diamond Accent */}
          <div className="flex items-center gap-3 text-amber-400/80">
            <div className="w-8 h-[1px] bg-amber-400/50" />
            <span className="text-xs">✦</span>
            <div className="w-8 h-[1px] bg-amber-400/50" />
          </div>

          {/* Description Paragraph */}
          <div className="space-y-3 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            <p>
              Howling Heaven Studio is a digital creative studio specializing in immersive storytelling, intelligent conversations, and custom web solutions.
            </p>
            <p className="text-slate-300 font-medium">
              We build experiences that connect.
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <a
              href="#services"
              onClick={onExploreWork}
              className="group inline-flex items-center gap-2 rounded px-7 py-3 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>EXPLORE OUR WORK</span>
              <PawPrint className="w-4 h-4 fill-slate-950" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
