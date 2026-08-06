'use client';

import React from 'react';
import { PROCESS_STEPS } from '@/lib/data';
import { Sparkles, CheckCircle } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="relative py-28 bg-[#090C14] overflow-hidden border-t border-amber-500/10">
      {/* Background Subtle Lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-[0.3em] text-amber-400 uppercase">
            HOW WE WORK
          </span>
          <h2
            className="text-3xl sm:text-5xl font-bold text-white font-serif tracking-tight"
            style={{ fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif" }}
          >
            The Pack <span className="text-gold-gradient">Process.</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            A battle-tested creative workflow designed to turn ambitious concepts into world-class digital realities.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              className="relative glass-panel rounded-xl p-6 border-gold-glow flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_15px_30px_rgba(212,175,55,0.1)]"
            >
              {/* Top Step Number Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
                  {stepItem.step}
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-3 mb-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider font-serif group-hover:text-amber-300 transition-colors">
                  {stepItem.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              {/* Step Details List */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                {stepItem.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-[11px] text-slate-300">
                    <CheckCircle className="w-3 h-3 text-amber-400 flex-shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
