'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Logo } from '@/components/brand/Logo';
import { ArrowRight, Check, Globe, Share2, Sparkles, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative bg-[#05070B] border-t border-amber-500/20 pt-16 pb-12 overflow-hidden text-slate-300 z-10">
      {/* Background Campfire Forest Lighting */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer_campfire_bg.jpg"
          alt="Nocturnal Campfire Forest"
          fill
          className="object-cover object-bottom opacity-30 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070B] via-[#05070B]/85 to-[#030407]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero">
              <Logo size="md" />
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Howling Heaven Studio is a digital creative studio specializing in immersive storytelling, intelligent conversations, and custom web solutions. We build experiences that connect.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {[Globe, Share2, Sparkles, Mail].map((IconComp, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-7 h-7 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-300 hover:border-amber-500/40 transition-colors"
                >
                  <IconComp className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Column 1: EXPLORE */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest font-serif-title">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#hero" className="hover:text-amber-300 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-300 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Services</a></li>
              <li><a href="#product" className="hover:text-amber-300 transition-colors">Our Product</a></li>
              <li><a href="#contact" className="hover:text-amber-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Nav Column 2: SERVICES */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest font-serif-title">
              SERVICES
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Visual Novel</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Chatbot Application</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">AI Solution</a></li>
            </ul>
          </div>

          {/* Nav Column 3: JOIN THE PACK */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest font-serif-title">
              JOIN THE PACK
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get studio updates, insights, and behind-the-scenes previews.
            </p>

            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2 rounded bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 pr-10"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-2.5 rounded bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 flex items-center justify-center transition-all"
              >
                {subscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </form>
            {subscribed && (
              <span className="text-[10px] text-amber-300 font-semibold block animate-in fade-in">
                ✓ Welcome to the pack!
              </span>
            )}
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Howling Heaven Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
