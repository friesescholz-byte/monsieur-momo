import React from 'react';
import { ArrowLeft, Award, Sparkles } from 'lucide-react';

export default function SubpageVita({ _t, onBack, onOpenBooking }) {
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
          Der Künstler hinter der Figur
        </span>
        <h1 className="font-editorial text-5xl sm:text-6xl text-stage-text leading-[1.05]">
          Timo Lesniewski alias Monsieur Momo
        </h1>
        <p className="font-editorial text-2xl text-stage-text/80 italic">
          Zwischen Varieté, Zauberei und feinsinniger Pantomime.
        </p>
      </div>

      {/* Split Bio Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: Image */}
        <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-stage-border shadow-xl bg-stage-muted aspect-[3/4]">
          <img
            src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/hero-z1a8276-verbessert-nr.webp"
            alt="Timo Lesniewski"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Text Story */}
        <div className="lg:col-span-7 space-y-6 text-base text-stage-subtext leading-relaxed">
          <div className="p-6 rounded-3xl bg-stage-surface border border-stage-border space-y-4">
            <h3 className="font-editorial text-2xl text-stage-text font-semibold">
              Künstlerischer Werdegang
            </h3>
            <p>
              Timo Lesniewski entdeckte bereits in früher Jugend seine Leidenschaft für die Bühnenkunst, Magie und Pantomime. Aus einer feinen Beobachtungsgabe und dem Gespür für Situationskomik entwickelte er die Figur „Monsieur Momo“: ein moderner, poetischer Clown im Nadelstreifenanzug, der ohne aufgesetzte Requisiten das Publikum in seinen Bann zieht.
            </p>
            <p>
              Nach ersten Engagements folgten internationale Tourneen, Gastspiele im GOP Varieté-Theater, dem Schmidt Theater Hamburg und renommierte Auszeichnungen wie beim Internationalen Zirkusfestival von Monte-Carlo.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-stage-surface border border-stage-border space-y-3">
            <h3 className="font-editorial text-xl text-stage-text font-semibold flex items-center gap-2">
              <Award className="w-5 h-5 text-stage-accent" />
              <span>Wichtige Stationen & Meilensteine</span>
            </h3>
            <ul className="space-y-2 text-xs text-stage-subtext">
              <li>• <strong>Festival International du Cirque de Monte-Carlo:</strong> Preisträger</li>
              <li>• <strong>Kleines Fest im Großen Garten Hannover:</strong> Publikumspreisträger</li>
              <li>• <strong>Circus Theater Roncalli:</strong> Prix du Cirque & Gastspiele</li>
              <li>• <strong>GOP Varieté-Theater:</strong> Regelmäßiges Engagement in Ensembles</li>
              <li>• <strong>Schmidt Theater Hamburg:</strong> Soloprogramme und Gala-Abende</li>
            </ul>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-stage-text hover:bg-stage-accent text-white px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <Sparkles className="w-4 h-4 text-stage-accentSoft" />
              <span>Künstler anfragen</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
