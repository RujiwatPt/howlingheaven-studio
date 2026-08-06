'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '@/lib/data';
import { Sparkles, ChevronRight, X, ExternalLink, Tag } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'games' | 'branding' | 'cinematic' | 'web'>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filterTabs = [
    { key: 'all', label: 'ALL WORKS' },
    { key: 'games', label: 'GAME ART' },
    { key: 'branding', label: 'BRANDING' },
    { key: 'cinematic', label: 'CINEMATIC' },
    { key: 'web', label: 'WEB & UI' },
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) =>
    activeFilter === 'all' ? true : proj.categoryKey === activeFilter
  );

  return (
    <section id="work" className="relative py-28 bg-[#07090E] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold tracking-[0.3em] text-amber-400 uppercase">
            FEATURED WORKS
          </span>
          <h2
            className="text-3xl sm:text-5xl font-bold text-white font-serif tracking-tight"
            style={{ fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif" }}
          >
            A Glimpse Into <span className="text-gold-gradient">Our Worlds.</span>
          </h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-14">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key as any)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                activeFilter === tab.key
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  : 'bg-slate-900/80 text-slate-300 hover:text-amber-300 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-xl glass-panel overflow-hidden border-gold-glow flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)]"
            >
              {/* Image Preview Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-transparent opacity-80" />
                
                {/* Year Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-[10px] font-bold text-amber-300 tracking-wider">
                  {project.year}
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-base font-bold text-white tracking-wider uppercase font-serif group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-[11px] font-medium tracking-widest text-amber-400/90 uppercase block mt-0.5">
                    {project.category}
                  </span>
                </div>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-200">
                  <span>VIEW CASE STUDY</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 text-center">
          <button
            onClick={() => setActiveFilter('all')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-slate-900/80 hover:bg-slate-800 backdrop-blur-md border border-amber-500/40 hover:border-amber-400 text-amber-300 font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]"
          >
            <span>VIEW ALL PROJECTS</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl overflow-y-auto">
          <div className="relative w-full max-w-4xl my-8 rounded-2xl glass-panel-gold p-6 sm:p-8 border-gold-glow shadow-[0_25px_60px_rgba(0,0,0,0.9)] animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 p-2.5 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700/60"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              {/* Header Image */}
              <div className="relative h-64 sm:h-96 w-full rounded-xl overflow-hidden border border-amber-500/20">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300 block mb-1">
                    {selectedProject.category} • {selectedProject.client} ({selectedProject.year})
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-bold text-white font-serif">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Case Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                    The Challenge
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                    Our Solution
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                    Results & Impact
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedProject.impact}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2 items-center">
                <Tag className="w-4 h-4 text-amber-400 mr-2" />
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-md bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                >
                  Close Showcase
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
