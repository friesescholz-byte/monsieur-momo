import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, CheckCircle2 } from 'lucide-react';
import SectionDivider from './SectionDivider';

const ease = [0.22, 1, 0.36, 1];

export default function BookingCtaSection({ t, onOpenBooking }) {
  return (
    <section className="relative py-24 lg:py-36 bg-gradient-to-b from-stage-surface via-[#F7F3EB] to-[#EFE8DD] border-b border-stage-border/60 overflow-hidden">
      {/* Top Section Transition Divider */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <SectionDivider />
      </div>

      {/* Subtle Harlequin Diamond Pattern Watermark */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%238B1E2D' stroke-width='1'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* Soft warm spotlight ambient aura from top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-100/35 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Theatrical Grand Finale Invitation Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="relative p-8 sm:p-14 lg:p-16 rounded-[2.5rem] bg-white/90 backdrop-blur-md border border-[#D4AF37]/40 shadow-2xl text-center"
        >
          {/* Brass Corner Accents */}
          <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#D4AF37]/60 rounded-tl-lg pointer-events-none" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#D4AF37]/60 rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#D4AF37]/60 rounded-bl-lg pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#D4AF37]/60 rounded-br-lg pointer-events-none" />

          {/* Season Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8B1E2D]/8 border border-[#8B1E2D]/20 text-stage-accent text-[11px] tracking-[0.2em] uppercase font-medium mb-6">
            <span className="text-[10px] font-serif">◆</span>
            <span>Saison 2026 / 2027 • Buchungsanfragen</span>
            <span className="text-[10px] font-serif">◆</span>
          </div>

          {/* Grand Headline */}
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-stage-text leading-[1.08] tracking-tight mb-6 max-w-2xl mx-auto">
            {t.bookingCta.headline}
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-stage-subtext max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            {t.bookingCta.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-stage-accent hover:bg-[#6E1623] text-white px-8 py-4 rounded-full text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              <span>{t.bookingCta.button}</span>
              <Sparkles className="w-3.5 h-3.5 text-stage-accentSoft" />
            </button>

            <a
              href="mailto:kontakt@monsieur-momo.de"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stage-surface hover:bg-neutral-100 text-stage-text px-7 py-4 rounded-full text-xs uppercase tracking-[0.16em] font-medium border border-[#E8E2D6] transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4 text-stage-accent" />
              <span>kontakt@monsieur-momo.de</span>
            </a>
          </div>

          {/* Trust Reassurance Row */}
          <div className="mt-10 pt-6 border-t border-[#E8E2D6] flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-stage-subtext font-normal">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-stage-accent" />
              <span>Schnelle Rückmeldung innerhalb von 24h</span>
            </div>
            <span className="hidden sm:inline text-stage-subtext/40">•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-stage-accent" />
              <span>Persönliche Betreuung durch Timo Lesniewski</span>
            </div>
            <span className="hidden sm:inline text-stage-subtext/40">•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-stage-accent" />
              <span>100% unverbindliche Angebotskalkulation</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
