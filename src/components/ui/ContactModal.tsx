'use client';

import React, { useState } from 'react';
import { X, Mail, Send, CheckCircle2 } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const primaryEmail = 'gdulahan@gmail.com';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Prepare mailto link for direct client dispatch
    const subject = encodeURIComponent(`Inquiry from ${name || 'Website Visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:${primaryEmail}?subject=${subject}&body=${body}`;

    // Trigger user mail client if supported
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 500);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg my-8 rounded-xl studio-card p-6 sm:p-8 border border-amber-500/40 shadow-2xl animate-in fade-in zoom-in duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <Logo size="sm" showText={false} />
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-amber-300 font-semibold block">
                  REACH OUT TO US
                </span>
                <h3 className="text-xl font-bold text-white font-serif-title">
                  Send Us a Message
                </h3>
              </div>
            </div>

            {/* Direct Email Callout */}
            <div className="p-3 rounded bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1">
              <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" /> Direct Studio Email:
              </span>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-amber-200">
                <a href={`mailto:${primaryEmail}`} className="underline hover:text-white">{primaryEmail}</a>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Morgan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2 rounded bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Your Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="alex@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2 rounded bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Message / Inquiry *
              </label>
              <textarea
                rows={4}
                required
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2 rounded bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400 resize-none"
              />
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-3 rounded bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] transition-all"
            >
              <span>SEND EMAIL</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        ) : (
          /* Submission Success State */
          <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-300">
                MESSAGE SENT 🐾
              </span>
              <h3 className="text-2xl font-bold text-white font-serif-title">
                Thank You, {name || 'Friend'}!
              </h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                Your message has been prepared for <span className="text-amber-300 font-semibold">{primaryEmail}</span>. We will respond promptly!
              </p>
            </div>

            <button
              onClick={resetForm}
              className="px-6 py-2 rounded bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
