'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Feather, MessageSquare, Globe, Heart, BookOpen, Sparkles } from 'lucide-react';

interface ProductItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  appUrl: string;
  ctaText: string;
  image: string;
  imageAlt: string;
  bannerText: string;
  features: { icon: React.ComponentType<{ className?: string }>; text: string }[];
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'three-souls',
    badge: '🐾 OUR FEATURED VISUAL NOVEL',
    title: 'Three Souls, One Heart',
    subtitle: 'Furry Fantasy Visual Novel',
    description: 'A furry fantasy visual novel. Four chapters and an epilogue, five endings, three hearts to win—crafted with immersive narrative choices and rich character lore.',
    appUrl: 'https://threesouls.howlingheaven.com/',
    ctaText: 'PLAY THREE SOULS, ONE HEART',
    image: '/images/three_souls_preview.png',
    imageAlt: 'Three Souls, One Heart Visual Novel Main Screen',
    bannerText: 'Three Souls, One Heart Live Game',
    features: [
      { icon: BookOpen, text: 'Four deep chapters and an evocative epilogue' },
      { icon: Heart, text: 'Three unique hearts to win' },
      { icon: Feather, text: 'Five distinct branching endings' },
      { icon: Globe, text: 'Playable instantly in your web browser' },
    ],
  },
  {
    id: 'howly-ai',
    badge: '🐾 OUR LAUNCHED PRODUCT',
    title: 'Howly.ai',
    subtitle: 'Persistent-Memory Roleplay Chatbot Platform',
    description: 'Build a companion with a voice, a history, and a point of view—then step into conversations that deepen over time instead of starting over.',
    appUrl: 'https://howly.howlingheaven.com/',
    ctaText: 'LAUNCH HOWLY.AI',
    image: '/images/howly_ui_preview.jpg',
    imageAlt: 'Howly.ai Real Application Landing Page',
    bannerText: 'Howly.ai Live Web Application',
    features: [
      { icon: Feather, text: 'Create your own scenarios' },
      { icon: MessageSquare, text: 'Chat with unique AI characters' },
      { icon: Globe, text: 'Immersive & memory-aware conversations' },
      { icon: Heart, text: 'Built for roleplayers, by roleplayers' },
    ],
  },
];

export const ProductSection: React.FC = () => {
  const [activeProductId, setActiveProductId] = useState<string>('three-souls');
  const activeProduct = PRODUCTS.find((p) => p.id === activeProductId) || PRODUCTS[0];

  return (
    <section id="product" className="relative py-24 bg-transparent overflow-hidden border-t border-amber-500/10 z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Product Switcher Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {PRODUCTS.map((prod) => {
            const isSelected = prod.id === activeProductId;
            return (
              <button
                key={prod.id}
                onClick={() => setActiveProductId(prod.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:text-amber-300 border border-slate-800 hover:border-amber-500/40'
                }`}
              >
                <Sparkles className={`w-3.5 h-3.5 ${isSelected ? 'text-slate-950' : 'text-amber-400/70'}`} />
                <span>{prod.title}</span>
              </button>
            );
          })}
        </div>

        {/* Outer Section Frame */}
        <div className="rounded-2xl studio-card border-gold-subtle p-8 sm:p-12 shadow-2xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.25em] text-amber-400 uppercase">
                <span>—</span>
                <span>{activeProduct.badge}</span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-title tracking-tight text-gold-gradient">
                  {activeProduct.title}
                </h2>
                <h3 className="text-sm font-semibold text-slate-300 tracking-wide mt-1">
                  {activeProduct.subtitle}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeProduct.description}
              </p>

              {/* Bullet Features */}
              <ul className="space-y-2.5 pt-1">
                {activeProduct.features.map((feat, idx) => {
                  const IconComp = feat.icon;
                  return (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                      <IconComp className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span>{feat.text}</span>
                    </li>
                  );
                })}
              </ul>

              {/* Direct Link Button to Real App */}
              <div className="pt-3">
                <a
                  href={activeProduct.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded px-7 py-3 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] hover:scale-[1.02]"
                >
                  <span>{activeProduct.ctaText}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Product Graphic Preview (Clickable to Real App) */}
            <div className="lg:col-span-7 relative group">
              <a
                href={activeProduct.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-xl overflow-hidden border border-amber-500/30 shadow-2xl bg-slate-950 group-hover:border-amber-400 transition-all duration-300"
              >
                <div className="relative h-72 sm:h-[380px] w-full">
                  <Image
                    src={activeProduct.image}
                    alt={activeProduct.imageAlt}
                    fill
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                </div>

                {/* External Link Overlay Banner */}
                <div className="p-3 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between gap-2 text-xs">
                  <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <span>{activeProduct.bannerText}</span>
                  </span>
                  <span className="text-[11px] font-bold text-amber-300 flex items-center gap-1 group-hover:underline">
                    Open Live App <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
