import React from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';

export default function SubpageMaagic({ _t, onBack, onOpenBooking }) {
  return (
    <div className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stage-subtext hover:text-stage-accent transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Zurück zur Übersicht</span>
      </button>

      {/* Hero of Subpage */}
      <div className="max-w-4xl space-y-6">
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-stage-accent">
          Soloprogramm
        </span>
        <h1 className="font-editorial text-5xl sm:text-6xl lg:text-7xl text-stage-text leading-[1.05]">
          MÄÄGIC! — Die Soloshow
        </h1>
        <p className="font-editorial text-2xl sm:text-3xl text-stage-text/80 italic">
          Ein abendfüllender Rausch aus Situationskomik, Poesie und frecher Zauberei.
        </p>
      </div>

      {/* Main Feature Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
        <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-stage-border shadow-xl bg-stage-dark aspect-[16/10]">
          <img
            src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/show-frontcover-final.webp"
            alt="MÄÄGIC! Soloshow"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-3xl bg-stage-surface border border-stage-border space-y-4">
            <h3 className="font-editorial text-2xl text-stage-text font-semibold">
              Über die Produktion
            </h3>
            <p className="text-sm text-stage-subtext leading-relaxed">
              Mit „MÄÄGIC!“ bringt Monsieur Momo sein erstes abendfüllendes Bühnenprogramm auf die großen Theater- und Varieté-Bühnen. Seine einzigartige Mischung aus visueller Clownerie, verblüffender Zauberei und feinem Wortwitz ganz ohne Worte verzaubert Generationen.
            </p>
            <div className="pt-4 border-t border-stage-border space-y-2 text-xs text-stage-subtext">
              <p>• <strong>Spieldauer:</strong> 2 x 45 Minuten zzgl. Pause</p>
              <p>• <strong>Bühnenanforderung:</strong> min. 6 x 4 Meter</p>
              <p>• <strong>Zielgruppe:</strong> Abendpublikum, Varieté- & Kulturliebhaber</p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="w-full inline-flex items-center justify-center gap-2 bg-stage-text hover:bg-stage-accent text-white py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-colors"
          >
            <Sparkles className="w-4 h-4 text-stage-accentSoft" />
            <span>Show für Theater buchen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
