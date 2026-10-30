import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Archive, ArrowDownToLine, ShieldCheck } from 'lucide-react';
import SectionDivider from './SectionDivider';

const ease = [0.22, 1, 0.36, 1];

export default function OrganizersService({ t }) {
  const downloads = [
    {
      title: t.organizers.riderTitle,
      desc: t.organizers.riderDesc,
      icon: FileText,
      badge: 'Bühne & Ton',
      url: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/doc-monsieur-momo.pdf",
      fileName: "Monsieur-Momo-Portfolio.pdf",
      size: "PDF Dokument (1.4 MB)"
    },
    {
      title: t.organizers.pressKitTitle,
      desc: t.organizers.pressKitDesc,
      icon: Archive,
      badge: '300 DPI Druckdaten',
      url: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/archive-pressebilder-2026.zip",
      fileName: "Pressebilder-2026.zip",
      size: "ZIP Archiv (4.7 MB)"
    },
    {
      title: t.organizers.bioTitle,
      desc: t.organizers.bioDesc,
      icon: FileText,
      badge: 'Kurz- & Langfassung',
      url: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/doc-pressetext.pdf",
      fileName: "Pressetext-Monsieur-Momo.pdf",
      size: "PDF Dokument (850 KB)"
    }
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

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] text-stage-accent font-serif">◆</span>
            <span className="text-[11px] uppercase tracking-[0.25em] font-medium text-stage-accent">
              {t.organizers.tag}
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-stage-text leading-[1.08] tracking-tight">
            {t.organizers.headline}
          </h2>
          <p className="font-editorial text-2xl sm:text-3xl text-stage-text/80 italic mt-3">
            {t.organizers.subtitle}
          </p>
        </div>

        {/* 3 Tactile Backstage Dossier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {downloads.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease }}
                className="group relative p-7 rounded-[2rem] bg-white/80 backdrop-blur-sm border border-[#E8E2D6] hover:border-[#D4AF37]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#8B1E2D]/8 border border-[#8B1E2D]/15 text-stage-accent flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stage-accent font-semibold px-2.5 py-1 rounded-full bg-stage-surface border border-[#E8E2D6]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl font-normal text-stage-text leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stage-subtext mt-2.5 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-[#E8E2D6] flex items-center justify-between">
                  <span className="text-xs text-stage-subtext font-mono">
                    {item.size}
                  </span>
                  <a
                    href={item.url}
                    download={item.fileName}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stage-text hover:text-stage-accent transition-colors group/btn py-1"
                  >
                    <span>Download</span>
                    <ArrowDownToLine className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Booker Reassurance Note */}
        <div className="mt-12 flex items-center justify-center gap-2 text-xs text-stage-subtext text-center">
          <ShieldCheck className="w-4 h-4 text-stage-accent flex-shrink-0" />
          <span>
            Alle Pressematerialien sind für Berichterstattung & Spielplanankündigungen urheberrechtlich freigegeben.
          </span>
        </div>

      </div>
    </section>
  );
}
