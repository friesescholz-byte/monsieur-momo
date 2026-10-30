import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionDivider from './SectionDivider';

const ease = [0.22, 1, 0.36, 1];

// Bespoke, delicate Festival Laurel Wreath SVG for international prestige
function LaurelIcon({ className = "w-9 h-9 text-[#D4AF37]" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
    >
      {/* Left Laurel Branch */}
      <path
        d="M13 36C8 30 7 21 10 14c3-7 8-10 14-11"
        strokeLinecap="round"
      />
      <path d="M10 28c3-1 6 0 7 2M9 21c3-2 6-1 7 1M11 15c3-2 5-1 6 1M14 9c2-2 4-1 5 1" strokeLinecap="round" />
      
      {/* Right Laurel Branch */}
      <path
        d="M35 36c5-6 6-15 3-22-3-7-8-10-14-11"
        strokeLinecap="round"
      />
      <path d="M38 28c-3-1-6 0-7 2M39 21c-3-2-6-1-7 1M37 15c-3-2-5-1-6 1M34 9c-2-2-4-1-5 1" strokeLinecap="round" />
      
      {/* Central Star */}
      <polygon
        points="24,19 25.5,23 29.5,23.5 26.5,26.5 27.5,31 24,28.5 20.5,31 21.5,26.5 18.5,23.5 22.5,23"
        fill="currentColor"
        stroke="none"
        opacity="0.85"
      />
    </svg>
  );
}

export default function PressQuotes({ t }) {
  const quotes = [
    {
      text: t.press.q1,
      author: t.press.q1Author,
      city: 'Hannover',
    },
    {
      text: t.press.q2,
      author: t.press.q2Author,
      city: 'Hamburg',
    },
    {
      text: t.press.q3,
      author: t.press.q3Author,
      city: 'Varieté Kultur',
    }
  ];

  const awards = [
    {
      title: 'Roncalli Prix du Cirque',
      festival: 'Circus Theater Roncalli',
      detail: 'Ausgezeichnet durch Bernhard Paul',
    },
    {
      title: 'Cirque de Monte-Carlo',
      festival: 'Festival International du Cirque',
      detail: 'Offizielle Festival-Ehrenauszeichnung',
    },
    {
      title: 'Kleines Fest Hannover',
      festival: 'Kleines Fest im Großen Garten',
      detail: 'Publikums- & Juryfavorit',
    },
    {
      title: 'Paulaner Solo+ Finale',
      festival: 'Renommierter Kabarettpreis',
      detail: 'Bundesweites Festival-Finale',
    },
  ];

  return (
    <section className="relative py-24 lg:py-36 bg-stage-surface border-b border-stage-border/60 overflow-hidden">
      {/* Top Section Transition Divider */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <SectionDivider />
      </div>

      {/* Atmospheric Stage Photography in Background: Packed Arena Audience (Feststehend / Parallax) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-22 mix-blend-multiply bg-center bg-cover bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url("https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/hero-z1a8276-verbessert-nr-2.webp")`,
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
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-block p-6 sm:p-8 rounded-[2.2rem] bg-white/90 backdrop-blur-md border border-[#E8E2D6] shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-[10px] text-stage-accent font-serif">◆</span>
              <span className="text-[11px] uppercase tracking-[0.25em] font-medium text-stage-accent">
                {t.press.tag}
              </span>
              <span className="text-[10px] text-stage-accent font-serif">◆</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-stage-text leading-[1.08] tracking-tight">
              {t.press.headline}
            </h2>
            <p className="font-editorial text-xl sm:text-2xl text-stage-text/80 italic mt-2">
              Gefeiert von Publikum und Feuilleton gleichermaßen
            </p>
          </div>
        </div>

        {/* 3 Editorial Quote Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((q, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease }}
              className="group p-8 sm:p-9 rounded-[2.2rem] bg-white/95 backdrop-blur-md border border-[#E8E2D6] hover:border-[#D4AF37]/60 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative shadow-lg"
            >
              <div>
                {/* Large Editorial Quotation Mark */}
                <div className="font-editorial text-6xl text-[#8B1E2D]/25 select-none leading-none -mb-3">
                  “
                </div>
                
                {/* Quote Text */}
                <p className="font-editorial text-xl sm:text-2xl text-stage-text italic leading-relaxed">
                  {q.text}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#E8E2D6] flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-stage-accent block">
                    {q.author}
                  </span>
                  <span className="text-[11px] text-stage-subtext mt-0.5 block font-mono">
                    {q.city}
                  </span>
                </div>

                {/* 5 Subtle Gold Stars */}
                <div className="flex items-center gap-0.5 text-amber-500/80">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bespoke, Dignified Editorial Laurels Showcase in Frosted Glass Container */}
        <div className="mt-16 p-8 sm:p-10 rounded-[2.2rem] bg-white/95 backdrop-blur-md border border-[#D4AF37]/40 shadow-xl relative z-10">
          
          {/* Subtle Laurel Header */}
          <div className="text-center mb-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-stage-accent font-semibold inline-flex items-center gap-2">
              <span>◆</span>
              <span>Internationale Auszeichnungen & Festspiel-Erfolge</span>
              <span>◆</span>
            </span>
            <p className="font-editorial text-2xl sm:text-3xl text-stage-text mt-1 font-normal">
              Preisträger bedeutender europäischer Festivals & Theater
            </p>
          </div>

          {/* 4 Distinguished Laurel Columns with Fine Vertical Hairlines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#E8E2D6]">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="text-center px-4 sm:px-6 flex flex-col items-center justify-start group"
              >
                {/* Delicate Laurel Crest Icon */}
                <div className="mb-3 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300">
                  <LaurelIcon className="w-10 h-10 text-[#D4AF37]/90" />
                </div>

                {/* Award Title */}
                <h4 className="font-editorial text-xl sm:text-2xl text-stage-text font-normal leading-tight">
                  {award.title}
                </h4>

                {/* Festival Name */}
                <span className="text-[11px] font-mono uppercase tracking-wider text-stage-accent font-medium mt-1.5 block">
                  {award.festival}
                </span>

                {/* Award Detail */}
                <p className="text-xs text-stage-subtext mt-1 leading-snug">
                  {award.detail}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
