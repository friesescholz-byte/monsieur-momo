import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Volume2, VolumeX } from 'lucide-react';
import MomoCtaButton from './MomoCtaButton';

const ease = [0.22, 1, 0.36, 1];

export default function Hero({ t, lang = 'de', onOpenBooking, onNavigateTour }) {
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-36 bg-stage-bg overflow-hidden">
      
      {/* ========================================================= */}
      {/* NEUES THEATER-BÜHNEN HINTERGRUNDBILD                      */}
      {/* Edle, dezente Varieté-Bühne mit sanftem Scheinwerferlicht */}
      {/* ========================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <img
          src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/hero-theatre-stage-bg.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top opacity-35 mix-blend-multiply filter contrast-[1.04]"
        />
        {/* Subtiles Varieté-Rautenmuster (Harlequin Grid) für Haptik & Tiefe */}
        <div className="absolute inset-0 opacity-[0.035] mix-blend-multiply">
          <svg className="w-full h-full" width="100%" height="100%">
            <defs>
              <pattern id="hero-harlequin-grid" width="48" height="48" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="48" height="48" fill="none" stroke="#8B1E2D" strokeWidth="0.75" />
                <circle cx="24" cy="24" r="1.25" fill="#B8860B" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-harlequin-grid)" />
          </svg>
        </div>
        {/* Weicher Farbverlauf für optimalen Text-Kontrast und Übergang */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FBF9F5]/45 to-[#FBF9F5]" />
      </div>

      {/* ========================================================= */}
      {/* THEATRALISCHER SCHEINWERFER-KEGEL (HIGH-END STAGE SPOTLIGHT) */}
      {/* Wird beim Laden sanft und realistisch hell (wie Theater-Dimmer) */}
      {/* ========================================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2.0,
          delay: 0.35,
          ease: [0.25, 0.1, 0.25, 1.0]
        }}
        className="absolute inset-0 pointer-events-none select-none z-[2] overflow-hidden flex justify-center"
      >
        {/* Weicher, theaterhafter Bühnen-Vignette-Hintergrund für echten Licht-Kontrast */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_15%,transparent_35%,rgba(38,28,20,0.06)_100%)]" />

        {/* 1. Scheinwerfer-Lichtquelle am oberen Rand */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-80 sm:w-[460px] h-24 rounded-b-full bg-gradient-to-b from-white via-white/90 to-transparent blur-xl" />

        {/* 2. Der eigentliche Lichtkegel: Reicht bis zur Video-Bühne */}
        <div className="relative w-full max-w-6xl h-[980px] sm:h-[1050px] flex justify-center">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 1000"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Hauptverlauf des Lichtkegels: Edles Weiß zu samtigem Champagner, weich nach unten auslaufend */}
              <linearGradient id="spotlightBeamMain" x1="500" y1="0" x2="500" y2="980" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.88" />
                <stop offset="14%" stopColor="#FFFFFF" stopOpacity="0.80" />
                <stop offset="32%" stopColor="#FFFDF5" stopOpacity="0.65" />
                <stop offset="55%" stopColor="#FFF8E5" stopOpacity="0.45" />
                <stop offset="78%" stopColor="#F7ECCB" stopOpacity="0.24" />
                <stop offset="92%" stopColor="#F2E2B8" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#FBF9F5" stopOpacity="0" />
              </linearGradient>

              {/* Heller Kernstrahl für die Typografie und Buttons */}
              <linearGradient id="spotlightBeamCore" x1="500" y1="0" x2="500" y2="980" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="22%" stopColor="#FFFFFF" stopOpacity="0.82" />
                <stop offset="50%" stopColor="#FFFDF7" stopOpacity="0.55" />
                <stop offset="78%" stopColor="#FFF8EC" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#FBF9F5" stopOpacity="0" />
              </linearGradient>

              {/* Sichtbare, weiche Lichtkanten (Champagner-Gold) */}
              <linearGradient id="spotlightRayEdge" x1="500" y1="0" x2="500" y2="980" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#EAD8A8" stopOpacity="0.75" />
                <stop offset="28%" stopColor="#E2CA90" stopOpacity="0.52" />
                <stop offset="60%" stopColor="#D8BA75" stopOpacity="0.28" />
                <stop offset="85%" stopColor="#D4AF37" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#FBF9F5" stopOpacity="0" />
              </linearGradient>

              {/* Präzise abgestimmte Weichzeichner */}
              <filter id="spotlightHazeBlur" x="-20%" y="-10%" width="140%" height="120%">
                <feGaussianBlur stdDeviation="26" />
              </filter>
              <filter id="spotlightCoreBlur" x="-10%" y="-5%" width="120%" height="110%">
                <feGaussianBlur stdDeviation="15" />
              </filter>
              <filter id="spotlightBeamEdgeBlur" x="-10%" y="-5%" width="120%" height="110%">
                <feGaussianBlur stdDeviation="6.5" />
              </filter>
            </defs>

            {/* 1. Weicher äußerer Lichtdunst (Haze) */}
            <polygon
              points="440,0 560,0 1060,990 -60,990"
              fill="url(#spotlightRayEdge)"
              filter="url(#spotlightHazeBlur)"
              opacity="0.65"
            />

            {/* 2. Sichtbarer Hauptkegel (beleuchtet Text, Buttons & reicht bis zum Video) */}
            <polygon
              points="460,0 540,0 1005,980 -5,980"
              fill="url(#spotlightBeamMain)"
              filter="url(#spotlightCoreBlur)"
            />

            {/* 3. Zentraler heller Kernstrahl */}
            <polygon
              points="475,0 525,0 810,970 190,970"
              fill="url(#spotlightBeamCore)"
              filter="url(#spotlightCoreBlur)"
            />

            {/* 4. Klare, sichtbare Kantenstrahlen links & rechts (definieren die Scheinwerfer-Form) */}
            <line
              x1="462" y1="0" x2="-2" y2="980"
              stroke="url(#spotlightRayEdge)"
              strokeWidth="2.5"
              filter="url(#spotlightBeamEdgeBlur)"
            />
            <line
              x1="538" y1="0" x2="1002" y2="980"
              stroke="url(#spotlightRayEdge)"
              strokeWidth="2.5"
              filter="url(#spotlightBeamEdgeBlur)"
            />

            {/* 5. Subtile innere Lichtstreifen (Dunst-Lichtschleier) */}
            <line
              x1="480" y1="0" x2="280" y2="970"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              opacity="0.4"
              filter="url(#spotlightBeamEdgeBlur)"
            />
            <line
              x1="520" y1="0" x2="720" y2="970"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              opacity="0.4"
              filter="url(#spotlightBeamEdgeBlur)"
            />
          </svg>
        </div>

        {/* 3. Weicher Lichtpool am Boden unter den Buttons */}
        <div className="absolute top-[520px] sm:top-[580px] left-1/2 -translate-x-1/2 w-[760px] sm:w-[1140px] h-[260px] rounded-[100%] bg-gradient-to-t from-transparent via-[#FFF7E0]/50 to-transparent blur-3xl pointer-events-none" />

        {/* 4. Dezente tanzende Lichtstaub-Partikel im Strahl */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[650px] pointer-events-none overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 900 650" fill="none">
            <circle cx="450" cy="50" r="1.5" fill="#FFFFFF" opacity="0.8" className="animate-pulse" />
            <circle cx="410" cy="120" r="1.2" fill="#FFFFFF" opacity="0.65" />
            <circle cx="490" cy="170" r="1.6" fill="#FFFFFF" opacity="0.8" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <circle cx="360" cy="240" r="1.2" fill="#EAD8A8" opacity="0.6" />
            <circle cx="540" cy="280" r="1.4" fill="#FFFFFF" opacity="0.75" className="animate-pulse" style={{ animationDelay: '2s' }} />
            <circle cx="300" cy="380" r="1.3" fill="#EAD8A8" opacity="0.55" />
            <circle cx="590" cy="410" r="1.5" fill="#FFFFFF" opacity="0.7" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            <circle cx="420" cy="480" r="1.2" fill="#FFFFFF" opacity="0.65" />
            <circle cx="500" cy="530" r="1.4" fill="#EAD8A8" opacity="0.6" />
            <circle cx="340" cy="580" r="1.3" fill="#FFFFFF" opacity="0.6" />
            <circle cx="560" cy="610" r="1.5" fill="#EAD8A8" opacity="0.65" className="animate-pulse" style={{ animationDelay: '2.5s' }} />
          </svg>
        </div>
      </motion.div>

      {/* Vordergrund-Inhalt */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Subtle Category Lead-In */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-5 inline-block"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-stage-accent drop-shadow-sm">
            Varieté • Bühnenkunst • Visual Comedy
          </span>
        </motion.div>

        {/* Monumentale, raumgreifende Typografie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="max-w-5xl mx-auto mb-8"
        >
          <h1 className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-[6.25rem] leading-[1.03] tracking-tight text-stage-text">
            <span>{t.hero.titleLine1}</span>{' '}
            {/* Feine Poesie in edlem Theater-Dunkelrot */}
            <span className="italic font-normal text-[#8B1E2D] inline-block tracking-tight">
              {t.hero.titleLine2}
            </span>
            <br className="hidden sm:inline" />
            <span className="block mt-2 sm:mt-1 font-normal">
              {t.hero.titleLine3}
            </span>
          </h1>
        </motion.div>

        {/* Ruhiger, wohlproportionierter Fließtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="text-base sm:text-lg lg:text-xl text-stage-subtext font-normal max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Actions: Neuer haptischer 3D Momo-CTA-Button + Kalender/Spielplan-Verlinkung */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 mb-16 sm:mb-20"
        >
          <MomoCtaButton
            onClick={onOpenBooking}
            text={t.hero.ctaPrimary}
          />

          <button
            type="button"
            onClick={onNavigateTour}
            className="group inline-flex items-center gap-2.5 px-6 py-4 rounded-full border border-stage-border/90 bg-white/70 hover:bg-white text-stage-text hover:text-stage-accent text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 shadow-sm hover:shadow backdrop-blur-sm"
          >
            <Calendar className="w-4 h-4 text-stage-accent group-hover:scale-110 transition-transform" />
            <span>{lang === 'de' ? 'Spielplan & Termine' : 'Tour Dates & Calendar'}</span>
          </button>
        </motion.div>

        {/* ========================================================= */}
        {/* VIDEO SHOWCASE (NORMALE FORM) MIT MOMO DAHINTER          */}
        {/* Momo guckt hinter dem Video hervor & pustet Herz-Konfetti */}
        {/* ========================================================= */}
        <div className="relative max-w-4xl lg:max-w-5xl mx-auto mt-24 sm:mt-36 lg:mt-44">
          
          {/* Momo guckt HINTER dem Video hervor (z-0, unterer Körper durch Video verdeckt) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="absolute -top-24 sm:-top-28 lg:-top-32 right-1 sm:right-4 lg:right-8 z-0 pointer-events-none select-none w-28 sm:w-36 lg:w-44"
            title="Monsieur Momo pustet Herz-Konfetti hinter der Videoleinwand hervor"
          >
            <img
              src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/illustration-momo-hearts-v2.webp"
              alt="Monsieur Momo pustet Herz-Konfetti"
              className="w-full h-auto drop-shadow-xl"
              loading="eager"
            />
          </motion.div>

          {/* Der Widescreen-Videoplayer (z-10, liegt sauber VOR Momo) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden border border-black/10 bg-stage-dark shadow-2xl ring-1 ring-black/5 group aspect-video"
          >
            
            {/* YouTube Widescreen Video Player */}
            <iframe
              key={isMuted ? 'muted-loop' : 'with-audio'}
              className="w-full h-full object-cover"
              src={
                isMuted
                  ? 'https://www.youtube.com/embed/c8gQx0OPzVo?autoplay=1&mute=1&loop=1&playlist=c8gQx0OPzVo&controls=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1'
                  : 'https://www.youtube.com/embed/c8gQx0OPzVo?autoplay=1&mute=0&controls=1&rel=0&playsinline=1'
              }
              title="Monsieur Momo Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* Subtiler Sound-Umschalter in der rechten unteren Ecke */}
            <div className="absolute bottom-4 right-4 z-20">
              <button
                onClick={toggleSound}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 hover:bg-black/90 text-white text-[11px] uppercase tracking-[0.14em] font-medium backdrop-blur-md transition-all duration-300 border border-white/15 shadow-lg group-hover:scale-105"
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-amber-300" />
                    <span>{lang === 'de' ? 'Ton einschalten' : 'Unmute'}</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-green-400" />
                    <span>{lang === 'de' ? 'Ton aktiv' : 'Sound on'}</span>
                  </>
                )}
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
