'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { ArrowRight, Check, Globe, Share2, Sparkles, Mail, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Howling Heaven Studio',
      text: 'Howling Heaven Studio — Immersive Storytelling, Visual Novels & AI Applications',
      url: typeof window !== 'undefined' ? window.location.origin : 'https://howlingheaven.com',
    };

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback to clipboard if share was dismissed or unsupported
      }
    }

    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(shareData.url);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  return (
    <footer className="relative bg-[#05070B] border-t border-amber-500/20 pt-16 pb-12 overflow-hidden text-slate-300 z-10">
      {/* Background Campfire Forest Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
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
            <Link href="/#hero" className="inline-block cursor-pointer">
              <Logo size="md" />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Howling Heaven Studio is a digital creative studio specializing in immersive storytelling, intelligent conversations, and custom web solutions. We build experiences that connect.
            </p>
            
            {/* Social & Action Icons */}
            <div className="flex items-center gap-2.5 pt-1 relative">
              {/* Globe */}
              <a
                href="https://howlingheaven.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Howling Heaven Studio Website"
                title="Studio Website"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-300 hover:border-amber-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Globe className="w-4 h-4" />
              </a>

              {/* Share */}
              <button
                type="button"
                onClick={handleShare}
                aria-label="Share studio link"
                title="Share Studio"
                className="relative w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-300 hover:border-amber-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                {copiedShare ? (
                  <CheckCircle2 className="w-4 h-4 text-amber-400 animate-in zoom-in" />
                ) : (
                  <Share2 className="w-4 h-4" />
                )}

                {copiedShare && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-bold text-[10px] whitespace-nowrap shadow-lg animate-in fade-in slide-in-from-bottom-1">
                    Link Copied!
                  </span>
                )}
              </button>

              {/* Featured Creations */}
              <Link
                href="/#product"
                aria-label="Featured Creations"
                title="Explore Featured Creations"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-300 hover:border-amber-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
              </Link>

              {/* Direct Mail */}
              <a
                href="mailto:gdulahan@gmail.com"
                aria-label="Email Howling Heaven Studio"
                title="Contact via Email"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-300 hover:border-amber-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Column 1: EXPLORE */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest font-serif-title">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/#hero" className="hover:text-amber-300 transition-colors cursor-pointer">Home</Link></li>
              <li><Link href="/#about" className="hover:text-amber-300 transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/#services" className="hover:text-amber-300 transition-colors cursor-pointer">Services</Link></li>
              <li><Link href="/#product" className="hover:text-amber-300 transition-colors cursor-pointer">Our Product</Link></li>
              <li><Link href="/#contact" className="hover:text-amber-300 transition-colors cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          {/* Nav Column 2: SERVICES */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest font-serif-title">
              SERVICES
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/#services" className="hover:text-amber-300 transition-colors cursor-pointer">Visual Novel</Link></li>
              <li><Link href="/#services" className="hover:text-amber-300 transition-colors cursor-pointer">Chatbot Application</Link></li>
              <li><Link href="/#services" className="hover:text-amber-300 transition-colors cursor-pointer">Web Development</Link></li>
              <li><Link href="/#services" className="hover:text-amber-300 transition-colors cursor-pointer">AI Solution</Link></li>
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
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 pr-11"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1 top-1 bottom-1 px-3 rounded-md bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold flex items-center justify-center hover:opacity-90 active:scale-95 transition-all cursor-pointer"
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
            <Link href="/privacy" className="hover:text-amber-400 transition-colors cursor-pointer">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-amber-400 transition-colors cursor-pointer">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

