import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, Clock, Globe2, Theater, ArrowRight } from 'lucide-react';
import SectionDivider from './SectionDivider';

const ease = [0.22, 1, 0.36, 1];

export default function ShowHighlight({ t, onOpenBooking, onNavigateMaagic }) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const keyFacts = [
    {
      icon: Clock,
      label: t.show.fact1Label,
      value: '90 – 120 Min.',
      desc: 'Inkl. Pause oder als flexible Gala-Kurzsets (15–45 Min.)',
    },
    {
      icon: Globe2,
      label: t.show.fact2Label,
      value: 'Nonverbal & Universell',
      desc: 'Ohne Sprachbarrieren – begeistert jedes internationale Publikum',
    },
    {
      icon: Theater,
      label: t.show.fact3Label,
      value: 'Vielseitig Einsetzbar',
      desc: 'Theater, Festspielhäuser, Varietés & exklusive Galas',
    },
  ];

  return (
    <section className="relative py-24 lg:py-36 bg-stage-surface border-b border-stage-border/60 overflow-hidden">
      {/* Top Section Transition Divider */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <SectionDivider />
      </div>

      {/* Atmospheric Stage Photography in Background: Roncalli Theatre Stage & Curtains (Feststehend / Parallax) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 mix-blend-multiply bg-center bg-cover bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url("https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/stage-roncalli-3.webp")`,
        }}
        aria-hidden="true"
      />

      {/* Soft gradient edge fade only at top and bottom */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-stage-surface via-transparent to-stage-surface pointer-events-none opacity-75"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header with frosted glass backing */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-block p-5 sm:p-7 rounded-[2rem] bg-white/90 backdrop-blur-md border border-[#E8E2D6] shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] text-stage-accent font-serif">◆</span>
              <span className="text-[11px] uppercase tracking-[0.25em] font-medium text-stage-accent">
                {t.show.tag}
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-stage-text leading-[1.05] tracking-tight">
              {t.show.title}
            </h2>
            <p className="font-editorial text-xl sm:text-2xl text-stage-text/80 italic mt-2">
              {t.show.subtitle}
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Theatrical Video Frame */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-7"
          >
            <div className="relative group">
              {/* Double Passepartout Frame with Corner Ticks */}
              <div className="relative p-2.5 sm:p-3 rounded-[2rem] bg-white/90 backdrop-blur-md border border-[#D4AF37]/45 shadow-2xl transition-all duration-500 group-hover:border-[#D4AF37]/70">
                
                {/* Brass Corner Accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 rounded-tl-lg pointer-events-none" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 rounded-tr-lg pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 rounded-bl-lg pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 rounded-br-lg pointer-events-none" />

                {/* Video Player Container */}
                <div 
                  className="relative rounded-[1.5rem] overflow-hidden bg-stage-dark aspect-video cursor-pointer"
                  onClick={() => setIsPlayingVideo(true)}
                >
                  {isPlayingVideo ? (
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/pnfGq9nS3dY?autoplay=1&rel=0"
                      title="MÄÄGIC! Show Trailer"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/show-frontcover-final.webp"
                        alt="MÄÄGIC! Soloshow"
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 opacity-95"
                        loading="lazy"
                      />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-stage-text flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 border border-[#D4AF37]/50">
                          <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1 text-stage-accent" />
                        </div>
                      </div>

                      {/* Top Discrete Badge */}
                      <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] uppercase tracking-widest font-mono">
                        Bühnentrailer • 4K UHD
                      </div>
                    </>
                  )}
                </div>

                {/* Subtitle Plaque below player */}
                <div className="mt-3 px-2 flex items-center justify-between text-[11px] tracking-wider text-stage-subtext">
                  <div className="flex items-center gap-1.5 font-medium text-stage-text">
                    <span className="w-1.5 h-1.5 rounded-full bg-stage-accent" />
                    <span>MÄÄGIC! — Die Soloshow</span>
                  </div>
                  <span className="text-stage-subtext font-mono text-[10px]">
                    Offizieller Trailer
                  </span>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right: Frosted Ivory Glass Card with Description & Curated Fact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="lg:col-span-5 p-7 sm:p-9 rounded-[2.2rem] bg-white/90 backdrop-blur-md border border-[#E8E2D6] shadow-xl space-y-7 relative z-10"
          >
            <p className="text-base sm:text-lg text-stage-subtext leading-relaxed font-normal">
              {t.show.description}
            </p>

            {/* 3 Curated Tactile Fact Cards */}
            <div className="space-y-3">
              {keyFacts.map((fact, idx) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-xl bg-stage-surface/80 border border-[#E8E2D6] hover:border-[#D4AF37]/50 transition-colors shadow-sm"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-[#8B1E2D]/8 text-stage-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" strokeWidth={1.75} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-[11px] uppercase tracking-wider text-stage-subtext font-medium">
                            {fact.label}
                          </span>
                          <span className="text-xs font-semibold text-stage-text">
                            {fact.value}
                          </span>
                        </div>
                        <p className="text-xs text-stage-subtext/90 mt-1 leading-snug">
                          {fact.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 bg-stage-text text-white px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.16em] font-medium hover:bg-stage-accent transition-colors shadow-sm"
              >
                <span>Show buchen & anfragen</span>
                <Sparkles className="w-3.5 h-3.5 text-stage-accentSoft" />
              </button>

              <button
                onClick={onNavigateMaagic}
                className="inline-flex items-center justify-center gap-1.5 text-xs uppercase tracking-[0.16em] font-medium text-stage-subtext hover:text-stage-text py-2 transition-colors group"
              >
                <span>{t.show.ctaShow}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
