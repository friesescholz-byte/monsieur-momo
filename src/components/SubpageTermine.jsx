import React from 'react';
import { ArrowLeft, Calendar, MapPin, Ticket, ExternalLink } from 'lucide-react';
import { tourDates } from '../data/tourDates';

export default function SubpageTermine({ _t, onBack, onOpenBooking }) {
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
          Tournee & Spielplan
        </span>
        <h1 className="font-editorial text-5xl sm:text-6xl text-stage-text leading-[1.05]">
          Tourdaten & öffentliche Auftritte
        </h1>
        <p className="text-base sm:text-lg text-stage-subtext max-w-2xl">
          Alle Gastspiele, Theaterabende und Festivaltermine von Monsieur Momo auf einen Blick mit direkter Ticket-Buchung.
        </p>
      </div>

      {/* Tour List */}
      <div className="space-y-4">
        {tourDates.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-3xl bg-stage-surface border border-stage-border hover:border-stage-accent/50 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-stage-muted text-stage-accent flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="font-editorial text-2xl font-semibold text-stage-text block">
                  {item.date}
                </span>
                <span className="text-xs text-stage-subtext">
                  Beginn: {item.time}
                </span>
              </div>
            </div>

            <div className="flex-1 md:px-6">
              <div className="flex items-center gap-2 text-base font-semibold text-stage-text">
                <MapPin className="w-4 h-4 text-stage-accent" />
                <span>{item.city}</span>
                <span className="text-stage-subtext font-normal">•</span>
                <span className="text-stage-subtext font-medium">{item.venue}</span>
              </div>
              <p className="text-xs text-stage-subtext mt-1">{item.program}</p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={item.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-stage-text hover:bg-stage-accent text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <Ticket className="w-4 h-4" />
                <span>Tickets reservieren</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Notice for Curators */}
      <div className="mt-16 p-8 rounded-3xl bg-stage-muted border border-stage-border text-center max-w-3xl mx-auto space-y-4">
        <h3 className="font-editorial text-3xl text-stage-text">
          Sie möchten Monsieur Momo für Ihre Spielstätte buchen?
        </h3>
        <p className="text-sm text-stage-subtext">
          Für Gastspiele im Herbst/Winter 2026 sowie die Spielzeit 2027 stehen noch ausgewählte Termine zur Verfügung.
        </p>
        <button
          onClick={onOpenBooking}
          className="inline-flex items-center gap-2 bg-stage-text hover:bg-stage-accent text-white px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
        >
          <span>Freie Termine anfragen</span>
        </button>
      </div>
    </div>
  );
}
