import React from 'react';
import SectionDivider from './SectionDivider';

const partners = [
  { name: 'GOP Varieté-Theater', category: 'Varieté', logo: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/logo-gop.webp' },
  { name: 'Circus Theater Roncalli', category: 'Circus', logo: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/logo-roncalli.webp' },
  { name: 'Wintergarten Varieté Berlin', category: 'Varieté', logo: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/logo-wintergarten.webp' },
  { name: 'Mercedes-Benz', category: 'Gala & Corporate', logo: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/logo-mercedes-svg.webp' },
  { name: 'Sparkasse', category: 'Event', logo: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/logo-sparkasse-logo.webp' },
  { name: 'Vodafone', category: 'Corporate', logo: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/logo-vodafone-logo.webp' },
  { name: 'Jung von Matt', category: 'Agentur', logo: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/logo-jung-von-matt-logo.webp' },
  { name: 'Rossmann', category: 'Partner', logo: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/logo-rossmann-logo.webp' },
  { name: 'dm-drogerie markt', category: 'Partner', logo: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/logo-dm-logo.webp' },
  { name: 'VHV Versicherungen', category: 'Corporate', logo: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/logo-vhv-svg.webp' },
  { name: 'Volksbank', category: 'Partner', logo: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/logo-volksbank.webp' },
  { name: 'Erlebnis-Zoo Hannover', category: 'Open Air & Festival', logo: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/logo-logo-zoo-hannover.webp' },
  { name: 'Zoo Osnabrück', category: 'Festival', logo: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/logo-zoo-osnabrueck.webp' },
];

export default function SocialProofMarquee({ t }) {
  // Verdoppelung der Partnerliste für einen nahtlosen 100% -> 50% Endlos-Loop ohne Ruckeln
  const marqueeItems = [...partners, ...partners];

  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-b from-[#FBF9F5] via-[#F8F5EE] to-[#FBF9F5] overflow-hidden select-none">
      
      {/* Subtiles Harlequin-Muster im Hintergrund */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg className="w-full h-full" width="100%" height="100%">
          <defs>
            <pattern id="marquee-grid" width="48" height="48" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="48" height="48" fill="none" stroke="#8B1E2D" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#marquee-grid)" />
        </svg>
      </div>

      {/* Eleganter Abschnittsübergang oben */}
      <SectionDivider className="-mt-8 sm:-mt-10 mb-6 sm:mb-8" />

      {/* Überschrift / Caption */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-7 sm:mb-9 relative z-10">
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.26em] font-medium text-stage-subtext/80">
          {t.partners.caption}
        </p>
      </div>

      {/* Infinite Smooth Slider Track mit Pause on Hover */}
      <div className="group/marquee relative w-full overflow-hidden marquee-track py-2 z-10">
        
        {/* Weicher linker Verlaufs-Schatten für nahtloses Hereingleiten */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 md:w-52 bg-gradient-to-r from-[#F8F5EE] via-[#F8F5EE]/90 to-transparent z-10" />

        {/* Weicher rechter Verlaufs-Schatten für nahtloses Hinausgleiten */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 md:w-52 bg-gradient-to-l from-[#F8F5EE] via-[#F8F5EE]/90 to-transparent z-10" />

        {/* Die gleitende Logo-Reihe */}
        <div className="animate-marquee-glide group-hover/marquee:[animation-play-state:paused] hover:[animation-play-state:paused] flex items-center gap-5 sm:gap-7">
          {marqueeItems.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="group/card flex-shrink-0 h-16 sm:h-20 px-6 sm:px-8 rounded-2xl bg-white/85 hover:bg-white border border-[#E8E2D6] hover:border-[#D4AF37]/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center cursor-pointer"
              title={`${partner.name} • ${partner.category}`}
            >
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="h-7 sm:h-9 w-auto max-w-[120px] sm:max-w-[150px] object-contain filter grayscale opacity-65 group-hover/card:grayscale-0 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

