import React from 'react';
import { ArrowLeft, FileText, Download } from 'lucide-react';

export default function SubpageReferenzen({ _t, onBack, _onOpenBooking }) {
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

      {/* Header */}
      <div className="max-w-4xl space-y-4 mb-12">
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-stage-accent">
          Presse, Festivals & Referenzen
        </span>
        <h1 className="font-editorial text-5xl sm:text-6xl text-stage-text leading-[1.05]">
          Renommierte Bühnen & Festspiele
        </h1>
        <p className="text-base sm:text-lg text-stage-subtext max-w-2xl">
          Von traditionsreichen Varietés über renommierte Theaterhäuser bis hin zu großen Firmen-Galas.
        </p>
      </div>

      {/* Venue Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="p-6 rounded-3xl bg-stage-surface border border-stage-border space-y-4">
          <h3 className="font-editorial text-2xl text-stage-text font-semibold">
            Varieté & Zirkus
          </h3>
          <ul className="space-y-2 text-sm text-stage-subtext">
            <li>• GOP Varieté-Theater (Hannover, Essen, Bonn, München, Bremen)</li>
            <li>• Circus Theater Roncalli</li>
            <li>• Wintergarten Varieté Berlin</li>
            <li>• Schmidt Theater Hamburg</li>
            <li>• Weihnachtscircus Aachen & Hannover</li>
          </ul>
        </div>

        <div className="p-6 rounded-3xl bg-stage-surface border border-stage-border space-y-4">
          <h3 className="font-editorial text-2xl text-stage-text font-semibold">
            Festivals & Preise
          </h3>
          <ul className="space-y-2 text-sm text-stage-subtext">
            <li>• Festival International du Cirque de Monte-Carlo</li>
            <li>• Kleines Fest im Großen Garten Hannover</li>
            <li>• World Circus Cup</li>
            <li>• Got Talent España (Halbfinale)</li>
            <li>• Schlumpeweck Kleinkunstpreis</li>
          </ul>
        </div>

        <div className="p-6 rounded-3xl bg-stage-surface border border-stage-border space-y-4">
          <h3 className="font-editorial text-2xl text-stage-text font-semibold">
            Unternehmen & Galas
          </h3>
          <ul className="space-y-2 text-sm text-stage-subtext">
            <li>• Mercedes-Benz Group</li>
            <li>• Sparkassen Finanzgruppe</li>
            <li>• Vodafone Deutschland</li>
            <li>• Jung von Matt</li>
            <li>• Rossmann & dm-drogerie markt</li>
          </ul>
        </div>

      </div>

      {/* Press Downloads */}
      <div className="mt-14 p-8 rounded-3xl bg-stage-muted border border-stage-border flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="font-editorial text-2xl text-stage-text font-semibold">
            Offizieller Presse-Downloadbereich
          </h4>
          <p className="text-xs text-stage-subtext mt-1">
            Laden Sie Pressematerialien, Pressetexte und druckfähige Fotos für Medienberichte herunter.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/doc-pressetext.pdf"
            download
            className="inline-flex items-center gap-2 bg-stage-surface hover:bg-stage-bg border border-stage-border text-stage-text px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-stage-accent" />
            <span>Pressetext (PDF)</span>
          </a>

          <a
            href="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/archive-pressebilder-2026.zip"
            download
            className="inline-flex items-center gap-2 bg-stage-text hover:bg-stage-accent text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Pressekit (ZIP)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
