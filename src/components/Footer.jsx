import React from 'react';
import { Lock } from 'lucide-react';

export default function Footer({ t, onOpenAdmin, setCurrentView }) {
  return (
    <footer className="bg-stage-bg border-t border-stage-border py-12 text-stage-subtext text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stage-border/60">
          
          {/* Logo & Artist name */}
          <div className="flex items-center gap-3">
            <img 
              src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/brand-momo-favicon.webp" 
              alt="Monsieur Momo" 
              className="w-8 h-8 rounded-full border border-stage-border bg-white p-0.5" 
            />
            <div>
              <p className="font-editorial text-lg text-stage-text font-semibold uppercase tracking-wider">
                Monsieur Momo
              </p>
              <p className="text-[11px] text-stage-subtext">
                Timo Lesniewski • Visual Comedy, Varieté & Zauberkunst
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.youtube.com/user/TimoLes1990"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stage-text transition-colors p-2 rounded-lg hover:bg-stage-muted"
              title="YouTube"
            >
              YouTube
            </a>
            <a
              href="https://www.instagram.com/monsieurmomo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stage-text transition-colors p-2 rounded-lg hover:bg-stage-muted"
              title="Instagram"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/MonsieurMomoComedy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stage-text transition-colors p-2 rounded-lg hover:bg-stage-muted"
              title="Facebook"
            >
              Facebook
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Monsieur Momo (Timo Lesniewski). {t.footer.rights}</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentView('impressum')}
              className="hover:text-stage-text transition-colors"
            >
              {t.footer.imprint}
            </button>
            <span>•</span>
            <button
              onClick={() => setCurrentView('datenschutz')}
              className="hover:text-stage-text transition-colors"
            >
              {t.footer.privacy}
            </button>
            <span>•</span>
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1 hover:text-stage-text transition-colors text-stage-subtext/70 hover:text-stage-accent"
              title="Admin Login"
            >
              <Lock className="w-3 h-3" />
              <span>Intern</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
