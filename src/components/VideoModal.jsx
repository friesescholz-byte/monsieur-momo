import React from 'react';
import { X } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-stage-dark rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-stage-accent transition-colors flex items-center justify-center"
          aria-label="Video schließen"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player */}
        <div className="aspect-video w-full bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/c8gQx0OPzVo?autoplay=1&rel=0"
            title="Monsieur Momo Showreel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Bottom Title Bar */}
        <div className="p-4 bg-stage-dark text-white flex items-center justify-between text-xs">
          <div>
            <span className="font-editorial text-lg block text-white/95">Monsieur Momo — Showreel & Bühnenausschnitte</span>
            <span className="text-white/60">GOP Varieté, Schmidt Theater, Circus Roncalli & Internationale Festspiele</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/90 transition-colors"
          >
            Schließen
          </button>
        </div>

      </div>
    </div>
  );
}
