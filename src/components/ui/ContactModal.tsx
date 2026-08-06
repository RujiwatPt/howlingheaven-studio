'use client';

import React, { useState } from 'react';
import { X, PawPrint, CheckCircle2 } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['Web Development']);
  const [selectedBudget, setSelectedBudget] = useState<string>('$10,000 - $25,000');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const servicesList = [
    'Visual Novel',
    'Chatbot Application',
    'Web Development',
    'AI Solution',
  ];

  const budgetTiers = [
    '< $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl my-8 rounded-xl studio-card p-6 sm:p-8 border border-amber-500/40 shadow-2xl animate-in fade-in zoom-in duration-200">
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
                  Start Your Project
                </h3>
              </div>
            </div>

            {/* Select Services */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                1. Select Services
              </label>
              <div className="grid grid-cols-2 gap-2">
                {servicesList.map((srv) => {
                  const active = selectedServices.includes(srv);
                  return (
                    <button
                      type="button"
                      key={srv}
                      onClick={() => toggleService(srv)}
                      className={`px-3 py-2 rounded text-xs font-medium text-left transition-all ${
                        active
                          ? 'bg-amber-500 text-slate-950 font-bold shadow'
                          : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-amber-500/40'
                      }`}
                    >
                      {active && '✓ '} {srv}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Budget Range */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                2. Estimated Budget
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {budgetTiers.map((tier) => (
                  <button
                    type="button"
                    key={tier}
                    onClick={() => setSelectedBudget(tier)}
                    className={`py-1.5 px-2 rounded text-xs font-medium text-center transition-all ${
                      selectedBudget === tier
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            {/* User Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@studio.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Project Brief */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Project Overview
              </label>
              <textarea
                rows={3}
                placeholder="Share your goals, timeline, or story idea..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2 rounded bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400 resize-none"
              />
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-3 rounded bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
            >
              <span>SEND PROJECT BRIEF</span>
              <PawPrint className="w-4 h-4 fill-slate-950" />
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
                BRIEF RECEIVED 🐾
              </span>
              <h3 className="text-2xl font-bold text-white font-serif-title">
                Thank You, {name || 'Partner'}!
              </h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                Our creative team is reviewing your brief. We will reach out to <span className="text-amber-300 font-semibold">{email}</span> shortly.
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
