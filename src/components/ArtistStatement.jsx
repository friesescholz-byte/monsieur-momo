import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Theater, Users } from 'lucide-react';
import SectionDivider from './SectionDivider';

const ease = [0.22, 1, 0.36, 1];

export default function ArtistStatement({ t, onNavigateVita }) {
  const milestones = [
    {
      value: '15+',
      label: 'Jahre Bühnenerfahrung',
      sub: 'Varieté & Festspiele',
      icon: Theater,
    },
    {
      value: '12',
      label: 'Internationale Preise',
      sub: 'U.a. Roncalli & Monte-Carlo',
      icon: Award,
    },
    {
      value: '100k+',
      label: 'Zuschauer verzaubert',
      sub: 'Europaweit auf Tour',
      icon: Users,
    },
  ];

  return (
    <section className="relative py-24 lg:py-36 bg-stage-bg border-b border-stage-border/60 overflow-hidden">
      {/* Top Section Transition Divider */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <SectionDivider />
      </div>

      {/* Subtle Harlequin Diamond Pattern Watermark */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.022] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%238B1E2D' stroke-width='1'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* Soft warm spotlight ambient aura behind portrait */}
      <div
        className="absolute top-1/3 left-4 lg:left-16 w-96 h-96 bg-amber-100/35 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: High-End Photographic Passepartout */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              {/* Outer decorative gold hairline frame with brass corner ticks */}
              <div className="relative p-2.5 sm:p-3 rounded-[2.2rem] bg-white/80 backdrop-blur-sm border border-[#D4AF37]/35 shadow-xl transition-all duration-500 group-hover:border-[#D4AF37]/60 group-hover:shadow-2xl">
                
                {/* Brass Corner Accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 rounded-tl-lg pointer-events-none" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 rounded-tr-lg pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 rounded-bl-lg pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 rounded-br-lg pointer-events-none" />

                {/* Inner Image Container */}
                <div className="rounded-[1.7rem] overflow-hidden aspect-[3/4] bg-stage-muted relative">
                  <img
                    src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/hero-3s5a7599-1-kopie.webp"
                    alt="Timo Lesniewski als Monsieur Momo"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle inner vignette */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[1.7rem] pointer-events-none" />
                </div>

                {/* Authentic Caption Plaque */}
                <div className="mt-3 px-2 flex items-center justify-between text-[11px] tracking-wider text-stage-subtext">
                  <div className="flex items-center gap-1.5 font-medium text-stage-text">
                    <span className="w-1.5 h-1.5 rounded-full bg-stage-accent" />
                    <span>Timo Lesniewski</span>
                  </div>
                  <div className="flex items-center gap-1 text-stage-accent font-serif italic text-xs">
                    <span>◆</span>
                    <span>Roncalli Prix du Cirque</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial StoryBrand Typography & Milestones */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] text-stage-accent font-serif">◆</span>
                <span className="text-[11px] uppercase tracking-[0.25em] font-medium text-stage-accent">
                  {t.statement.tag}
                </span>
              </div>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-stage-text leading-[1.08] tracking-tight">
                {t.statement.headline}
              </h2>
            </div>

            {/* Quiet, refined quote */}
            <blockquote className="pl-6 border-l-2 border-stage-accent py-1 relative">
              <p className="font-editorial text-2xl sm:text-3xl text-stage-text italic leading-relaxed">
                {t.statement.quote}
              </p>
              <footer className="mt-3 text-xs uppercase tracking-widest text-stage-subtext font-medium flex items-center gap-2">
                <span className="w-4 h-[1px] bg-stage-accent/40" />
                <span>{t.statement.author} — {t.statement.role}</span>
              </footer>
            </blockquote>

            {/* Editorial Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-stage-subtext leading-relaxed font-normal">
              <p>{t.statement.p1}</p>
              <p>{t.statement.p2}</p>
            </div>

            {/* Refined Milestone Bar with Fine Hairlines */}
            <div className="pt-2 grid grid-cols-3 gap-4 border-t border-b border-[#E8E2D6] py-5">
              {milestones.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-1.5 text-stage-accent mb-0.5">
                      <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                      <span className="font-editorial text-2xl sm:text-3xl text-stage-text font-normal leading-none">
                        {item.value}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-stage-text leading-tight">
                      {item.label}
                    </p>
                    <p className="text-[11px] text-stage-subtext/80 hidden sm:block">
                      {item.sub}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Subtle Text Link */}
            <div className="pt-2">
              <button
                onClick={onNavigateVita}
                className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.18em] font-medium text-stage-text hover:text-stage-accent group transition-colors py-1"
              >
                <span>{t.statement.linkAbout}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
