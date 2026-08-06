'use client';

import React, { useState } from 'react';
import { NEW_SERVICES_DATA, ServiceItem } from '@/lib/data';
import { BookOpen, MessageSquare, Code, Brain, X, CheckCircle2, Wrench } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Book':
        return BookOpen;
      case 'Chat':
        return MessageSquare;
      case 'Code':
        return Code;
      case 'Brain':
        return Brain;
      default:
        return Code;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-transparent overflow-hidden border-t border-amber-500/10 z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.3em] text-amber-400 uppercase">
            <span>—</span>
            <span>🐾 WHAT WE DO 🐾</span>
            <span>—</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif-title tracking-tight">
            We Craft <span className="text-gold-gradient">Digital Experiences</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            From interactive stories to intelligent platforms, we bring ideas to life.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEW_SERVICES_DATA.map((service) => {
            const IconComp = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer rounded-xl studio-card p-6 border-gold-subtle flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 shadow-lg"
              >
                {/* Gold Icon */}
                <div className="w-14 h-14 rounded-xl bg-slate-900 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-105 group-hover:border-amber-400 transition-all shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                  <IconComp className="w-7 h-7" />
                </div>

                {/* Card Title */}
                <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-3 font-serif-title group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-xl studio-card p-8 border border-amber-500/40 shadow-2xl animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                  {React.createElement(getIcon(selectedService.iconName), { className: 'w-6 h-6' })}
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-amber-300 font-semibold block">
                    SERVICE CAPABILITY
                  </span>
                  <h3 className="text-xl font-bold text-white font-serif-title">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed border-b border-slate-800 pb-4">
                {selectedService.fullDesc}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Key Deliverables
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {selectedService.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 bg-slate-900/80 p-2 rounded border border-slate-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2 rounded bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
