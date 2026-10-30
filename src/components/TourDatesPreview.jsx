import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Ticket, ArrowRight, ExternalLink, Calendar, Sparkles } from 'lucide-react';
import { tourDates } from '../data/tourDates';
import SectionDivider from './SectionDivider';

const ease = [0.22, 1, 0.36, 1];

export default function TourDatesPreview({ t, onNavigateTermine }) {
  // Helper to split date into day and month/year for badge presentation
  const parseDate = (dateStr) => {
    const parts = dateStr.split(' ');
    if (parts.length >= 3) {
      return {
        day: parts[0].replace('.', ''),
        month: parts[1],
        year: parts[2],
      };
    }
    return { day: dateStr, month: '', year: '' };
  };

  return (
    <section id="tour-section" className="relative py-24 lg:py-36 bg-stage-bg border-b border-stage-border/60 overflow-hidden">
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

      {/* Soft warm spotlight ambient aura in bottom right corner */}
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 lg:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] text-stage-accent font-serif">◆</span>
              <span className="text-[11px] uppercase tracking-[0.25em] font-medium text-stage-accent">
                {t.tour.tag}
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-stage-text leading-[1.08] tracking-tight">
              {t.tour.headline}
            </h2>
            <p className="font-editorial text-2xl sm:text-3xl text-stage-text/80 italic mt-3 max-w-2xl">
              {t.tour.subtitle}
            </p>
          </div>

          <button
            onClick={onNavigateTermine}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-stage-text hover:text-stage-accent group transition-colors flex-shrink-0 py-2"
          >
            <span>{t.tour.viewAll}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Spielplan Theater Bill Rows */}
        <div className="space-y-3.5">
          {tourDates.map((item, idx) => {
            const dateObj = parseDate(item.date);
            const isFewTickets = item.status === 'few_tickets';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07, ease }}
                className="group relative p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#E8E2D6] hover:border-[#D4AF37]/50 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                {/* Left: Refined Date & Time Badge */}
                <div className="flex items-center gap-4 min-w-[200px]">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-stage-surface border border-[#E8E2D6] flex flex-col items-center justify-center flex-shrink-0 group-hover:border-[#D4AF37]/40 transition-colors shadow-sm">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-stage-accent leading-none">
                      {dateObj.month}
                    </span>
                    <span className="font-editorial text-2xl sm:text-3xl font-normal text-stage-text leading-tight mt-0.5">
                      {dateObj.day}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-stage-text">
                        {item.date}
                      </span>
                      <span className="text-[11px] text-stage-subtext font-mono">
                        • {item.time}
                      </span>
                    </div>
                    {/* Status Pill */}
                    <div className="mt-1">
                      {isFewTickets ? (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/10 text-amber-700 border border-amber-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                          Wenige Restkarten
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#8B1E2D]/8 text-[#8B1E2D] border border-[#8B1E2D]/15">
                          <span className="w-1.5 h-1.5 rounded-full bg-stage-accent" />
                          Vorverkauf geöffnet
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Center: City, Venue & Program */}
                <div className="flex-1 md:px-6">
                  <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-stage-text">
                    <MapPin className="w-4 h-4 text-stage-accent flex-shrink-0" />
                    <span>{item.city}</span>
                    <span className="text-stage-subtext/60 font-light">•</span>
                    <span className="text-stage-text/90 font-medium">{item.venue}</span>
                  </div>
                  <p className="text-xs text-stage-subtext mt-1 pl-6">
                    {item.program}
                  </p>
                </div>

                {/* Right: Ticket Action Button */}
                <div className="flex items-center gap-3 self-end md:self-center">
                  <a
                    href={item.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-stage-text hover:bg-stage-accent text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm"
                  >
                    <Ticket className="w-3.5 h-3.5" />
                    <span>{t.tour.ticketBtn}</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Booking Note for Private / Gala Dates */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-stage-surface/70 border border-[#E8E2D6] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-stage-accent" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-stage-text">
                Ihr Wunschtermin oder Ihre Stadt ist nicht im Spielplan aufgeführt?
              </p>
              <p className="text-xs text-stage-subtext mt-0.5">
                Monsieur Momo kann auch für geschlossene Veranstaltungen, Festivals und Firmenfeiern gebucht werden.
              </p>
            </div>
          </div>
          <button
            onClick={onNavigateTermine}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-stage-accent hover:text-stage-accentHover whitespace-nowrap transition-colors"
          >
            <span>Spielplan & Termine anfragen</span>
            <Sparkles className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
