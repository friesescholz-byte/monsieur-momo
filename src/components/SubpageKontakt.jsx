import React from 'react';
import { ArrowLeft, Mail, MapPin, Sparkles, Send } from 'lucide-react';

export default function SubpageKontakt({ _t, onBack, onOpenBooking }) {
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
          Direkter Draht
        </span>
        <h1 className="font-editorial text-5xl sm:text-6xl text-stage-text leading-[1.05]">
          Kontakt & Buchung
        </h1>
        <p className="text-base sm:text-lg text-stage-subtext max-w-2xl">
          Für Gastspiele, Festivals, Theaterproduktionen, Varieté-Engagements oder Gala-Buchungen erreichen Sie das Management direkt hier.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Contact Info Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-3xl bg-stage-surface border border-stage-border space-y-6">
            <h3 className="font-editorial text-2xl text-stage-text font-semibold">
              Künstler-Management
            </h3>

            <div className="space-y-4 text-sm text-stage-subtext">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-stage-accent mt-0.5" />
                <div>
                  <span className="font-medium text-stage-text block">E-Mail für Anfragen</span>
                  <a href="mailto:kontakt@monsieur-momo.de" className="hover:text-stage-accent transition-colors">
                    kontakt@monsieur-momo.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-stage-accent mt-0.5" />
                <div>
                  <span className="font-medium text-stage-text block">Standort / Heimatbühne</span>
                  <span>Deutschland • Weltweite Gastspiele</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stage-border">
              <button
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center gap-2 bg-stage-accent hover:bg-stage-accentHover text-white py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>Anfrageformular öffnen</span>
              </button>
            </div>
          </div>
        </div>

        {/* Form Teaser (7 cols) */}
        <div className="lg:col-span-7 p-8 rounded-3xl bg-stage-surface border border-stage-border space-y-6">
          <h3 className="font-editorial text-3xl text-stage-text">
            Schnellanfrage für Veranstalter
          </h3>
          <p className="text-sm text-stage-subtext">
            Nutzen Sie unser geschütztes Anfragefenster für ein unverbindliches Angebot mit Terminen und Honorarrahmen.
          </p>

          <div className="p-6 rounded-2xl bg-stage-bg border border-stage-border/70 space-y-3 text-xs text-stage-subtext">
            <p className="font-semibold text-stage-text text-sm">Was wir für ein Angebot benötigen:</p>
            <p>1. Geplantes Datum oder Zeitfenster der Veranstaltung</p>
            <p>2. Art des Events (Theater, Festival, Firmenevent, Gala)</p>
            <p>3. Spielort und voraussichtliche Zuschauerzahl</p>
          </div>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 bg-stage-text hover:bg-stage-accent text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <span>Jetzt unverbindlich anfragen</span>
            <Send className="w-4 h-4 ml-1" />
          </button>
        </div>

      </div>
    </div>
  );
}
