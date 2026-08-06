'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FEATURED_CHARACTERS, CharacterCard } from '@/lib/data';
import { ExternalLink, Feather, MessageSquare, Globe, Heart, Sparkles, Send, X, Bot, User } from 'lucide-react';

export const ProductSection: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterCard | null>(null);
  const [chatMessages, setChatMessages] = useState<{ sender: 'ai' | 'user'; text: string }[]>([]);
  const [userInput, setUserInput] = useState('');

  const features = [
    { icon: Feather, text: 'Create your own scenarios' },
    { icon: MessageSquare, text: 'Chat with unique AI characters' },
    { icon: Globe, text: 'Immersive & memory-aware conversations' },
    { icon: Heart, text: 'Built for roleplayers, by roleplayers' },
  ];

  const handleOpenDemo = (char: CharacterCard) => {
    setSelectedCharacter(char);
    setChatMessages([
      { sender: 'ai', text: char.greeting }
    ]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || !selectedCharacter) return;

    const newMsgs = [...chatMessages, { sender: 'user' as const, text: userInput }];
    setChatMessages(newMsgs);
    const query = userInput;
    setUserInput('');

    setTimeout(() => {
      let aiReply = `Ah, interesting thought. ${selectedCharacter.name} smiles knowingly. "Let us see where this tale leads..."`;
      if (query.toLowerCase().includes('drink') || query.toLowerCase().includes('hello')) {
        aiReply = `*Pours a goblet of spiced mead and slides it across the tavern table.* "Welcome to the den. What brings a traveler like you here?"`;
      }
      setChatMessages((prev) => [...prev, { sender: 'ai', text: aiReply }]);
    }, 600);
  };

  return (
    <section id="product" className="relative py-24 bg-transparent overflow-hidden border-t border-amber-500/10 z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Outer Section Frame */}
        <div className="rounded-2xl studio-card border-gold-subtle p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.25em] text-amber-400 uppercase">
                <span>—</span>
                <span>🐾 OUR LAUNCHED PRODUCT</span>
              </div>

              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white font-serif-title tracking-tight text-gold-gradient">
                  Howly.ai
                </h2>
                <h3 className="text-sm font-semibold text-slate-300 tracking-wide mt-1">
                  Roleplay Chatbot Platform
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Step into a world of immersive roleplay with unique characters, rich stories, and limitless possibilities.
              </p>

              {/* Bullet Features */}
              <ul className="space-y-2.5 pt-1">
                {features.map((feat, idx) => {
                  const IconComp = feat.icon;
                  return (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                      <IconComp className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span>{feat.text}</span>
                    </li>
                  );
                })}
              </ul>

              {/* CTA Button */}
              <div className="pt-3">
                <button
                  onClick={() => handleOpenDemo(FEATURED_CHARACTERS[0])}
                  className="inline-flex items-center gap-2 rounded px-7 py-3 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] hover:scale-[1.02]"
                >
                  <span>VISIT HOWLY.AI</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Product Graphic Preview */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-xl overflow-hidden border border-amber-500/30 shadow-2xl bg-slate-950">
                <div className="relative h-72 sm:h-[380px] w-full">
                  <Image
                    src="/images/howly_ui_preview.jpg"
                    alt="Howly.ai Platform Screenshot"
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Character Quick Selection Bar */}
                <div className="p-3 bg-slate-900/95 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    Featured Characters:
                  </span>
                  <div className="flex items-center gap-2">
                    {FEATURED_CHARACTERS.map((char) => (
                      <button
                        key={char.id}
                        onClick={() => handleOpenDemo(char)}
                        className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 hover:border-amber-400 text-[11px] text-slate-200 hover:text-amber-300 transition-all flex items-center gap-1"
                      >
                        <span>{char.avatar}</span>
                        <span className="font-semibold">{char.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Live Interactive Character Chat Modal */}
      {selectedCharacter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-xl studio-card p-5 border border-amber-500/40 shadow-2xl flex flex-col h-[480px]">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-sm">
                  {selectedCharacter.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-serif-title">
                    {selectedCharacter.name}
                  </h4>
                  <span className="text-[10px] text-amber-300">
                    {selectedCharacter.role} • Howly.ai AI Character
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedCharacter(null)}
                className="p-1.5 rounded bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-3 space-y-2.5 px-1">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2 ${
                    msg.sender === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 ${
                      msg.sender === 'user'
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'bg-slate-800 text-amber-300 border border-amber-500/40'
                    }`}
                  >
                    {msg.sender === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                  </div>

                  <div
                    className={`max-w-[80%] p-2.5 rounded-lg text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-amber-500 text-slate-950 font-medium rounded-tr-none'
                        : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="pt-2 border-t border-slate-800 flex gap-2">
              <input
                type="text"
                placeholder={`Chat with ${selectedCharacter.name}...`}
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="flex-1 px-3 py-2 rounded bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                className="px-3.5 py-2 rounded bg-amber-500 text-slate-950 font-bold text-xs uppercase flex items-center gap-1"
              >
                <Send className="w-3 h-3" />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
