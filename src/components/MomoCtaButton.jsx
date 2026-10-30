import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function MomoCtaButton({
  onClick,
  text = 'Künstler anfragen',
  className = ''
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative inline-flex items-center select-none cursor-pointer focus:outline-none filter drop-shadow-[0_12px_24px_rgba(18,19,22,0.20)] active:drop-shadow-[0_4px_8px_rgba(18,19,22,0.26)] max-w-full ${className}`}
    >
      <div className="relative h-[62px] sm:h-[74px] max-w-full transition-transform duration-200 ease-out group-hover:-translate-y-0.5 active:translate-y-[4px]">
        
        {/* 1. 3D Physischer Sockel (Extrusion Tiefe an der Unterkante) */}
        <div className="absolute inset-0 w-full h-full rounded-full translate-y-[5px] bg-[#5E1210] group-hover:bg-[#430B0A] transition-colors duration-300" />

        {/* 2. Button Frontfläche (Tiefschwarz mit Theater-Goldrand) */}
        <div className="relative h-full px-2.5 sm:px-6 rounded-full bg-[#121316] group-hover:bg-[#191A20] border-2 border-[#D4AF37]/65 group-hover:border-[#F3E5AB] text-white flex items-center gap-2 sm:gap-4 transition-all duration-300 shadow-inner">
          
          {/* A) Dezentes Varieté-Rautenmuster (Harlequin Diamonds) im Hintergrund */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.07] group-hover:opacity-[0.11] transition-opacity duration-500 overflow-hidden rounded-full">
            <svg className="w-full h-full" width="100%" height="100%">
              <defs>
                <pattern id="momo-cta-diamonds" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <rect width="22" height="22" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
                  <circle cx="11" cy="11" r="0.8" fill="#F3E5AB" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#momo-cta-diamonds)" />
            </svg>
          </div>

          {/* B) Dezente Glanz-Lichtkante am oberen Rand */}
          <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

          {/* C) Magische funkelnde Sterne im Hintergrund bei Hover */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out rounded-full overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 360 70" fill="none">
              <circle cx="45" cy="16" r="1.2" fill="#E6C875" opacity="0.8" />
              <circle cx="115" cy="14" r="1.4" fill="#FFFFFF" opacity="0.9" />
              <circle cx="175" cy="22" r="0.9" fill="#E6C875" opacity="0.7" />
              <circle cx="235" cy="12" r="1.3" fill="#FFFFFF" opacity="0.8" />
              <circle cx="295" cy="18" r="1.1" fill="#E6C875" opacity="0.8" />
            </svg>
          </div>

          {/* D) DER KLEINE MOMO AUF FLASCHEN (SEITENANSICHT & STRAUCHEL-ANIMATION BEI HOVER) */}
          <div className="relative z-10 flex-shrink-0 flex items-center justify-center">
            {/* Kleines Bühnen-Podest / Spotlight-Kapsel */}
            <div className="relative w-11 h-10 sm:w-20 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#242732] to-[#14161D] border border-[#D4AF37]/50 shadow-md flex items-end justify-center px-1 pb-0.5 pt-0 overflow-visible transition-colors duration-300 group-hover:border-[#F3E5AB]/80">
              
              {/* Sanfter Spotlight-Lichtkegel von oben */}
              <div className="absolute inset-x-1 top-0 h-4 bg-gradient-to-b from-[#F3E5AB]/15 to-transparent rounded-t-xl pointer-events-none" />

              {/* Momo balanciert auf Flaschen (wackelt / strauchelt bei group-hover) */}
              <div className="relative z-10 -top-1 sm:-top-1.5 flex items-end justify-center">
                <img
                  src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/illustration-momo-side-bottles.webp"
                  alt="Monsieur Momo balanciert auf Glasflaschen"
                  className="w-auto h-[44px] sm:h-[62px] max-w-none object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)] group-hover:animate-momo-stumble transition-transform duration-300"
                  loading="eager"
                />
              </div>

              {/* Komischer Schweissperlen-/Sternchen-Effekt bei Hover über dem Hut */}
              <div className="absolute -top-2 right-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-110">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F3E5AB] drop-shadow-sm animate-pulse" />
              </div>
            </div>
          </div>

          {/* E) TYPOGRAFIE */}
          <div className="relative z-10 flex flex-col text-left">
            <span className="text-[10px] sm:text-[14px] font-bold uppercase tracking-[0.06em] sm:tracking-[0.14em] text-white group-hover:text-amber-100 transition-colors whitespace-nowrap drop-shadow-sm font-sans">
              {text}
            </span>
            <span className="text-[8.5px] sm:text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.18em] text-[#D4AF37] group-hover:text-[#F3E5AB] font-medium transition-colors">
              Gala • Theater • Festival
            </span>
          </div>

          {/* F) GOLDENER ACTION-PFEIL-KREIS */}
          <div className="relative z-10 flex items-center justify-center w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-gradient-to-r from-[#F3E5AB] to-[#D4AF37] text-[#121316] group-hover:translate-x-1 sm:group-hover:translate-x-1.5 group-hover:scale-105 transition-all duration-300 flex-shrink-0 shadow-[0_2px_8px_rgba(212,175,55,0.4)] ml-0.5 sm:ml-1">
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 stroke-[2.5]" />
          </div>

        </div>

      </div>
    </button>
  );
}
