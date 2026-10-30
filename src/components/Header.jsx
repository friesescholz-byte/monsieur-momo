import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ lang, setLang, onOpenBooking, currentView, setCurrentView }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { key: 'maagic', label: 'MÄÄGIC!', view: 'maagic' },
    { key: 'termine', label: lang === 'de' ? 'Termine' : 'Tour', view: 'termine' },
    { key: 'vita', label: 'Vita', view: 'vita' },
    { key: 'referenzen', label: lang === 'de' ? 'Referenzen' : 'References', view: 'referenzen' },
    { key: 'kontakt', label: lang === 'de' ? 'Kontakt' : 'Contact', view: 'kontakt' },
  ];

  const handleNavClick = (view) => {
    setMobileMenuOpen(false);
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-stage-bg/95 backdrop-blur-md border-b border-stage-border/60 transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Minimalist Logo Mark + Brand */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left"
          >
            <img 
              src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Monsieur-Momo/brand-momo-favicon.webp" 
              alt="Monsieur Momo" 
              className="w-7 h-7 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <span className="font-editorial text-2xl tracking-[0.16em] text-stage-text font-normal uppercase group-hover:text-stage-accent transition-colors">
              Monsieur Momo
            </span>
          </button>

          {/* Clean Desktop Navigation (No pills, no brackets, pure typography) */}
          <nav className="hidden md:flex items-center gap-9 text-xs uppercase tracking-[0.18em] font-medium text-stage-text/70">
            {navLinks.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.view)}
                  className={`transition-colors relative py-1 ${
                    isActive ? 'text-stage-text font-semibold' : 'hover:text-stage-text'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-stage-accent rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: Language Toggle & Sleek CTA Button */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
              className="text-xs uppercase tracking-[0.2em] font-medium text-stage-text/60 hover:text-stage-text transition-colors"
              title="Sprache wechseln / Switch Language"
            >
              {lang === 'de' ? 'EN' : 'DE'}
            </button>

            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-full bg-stage-text text-white text-xs uppercase tracking-[0.15em] font-medium hover:bg-stage-accent transition-all duration-300"
            >
              {lang === 'de' ? 'Anfragen' : 'Inquire'}
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
              className="text-xs uppercase tracking-widest text-stage-text/70 font-semibold px-2 py-1"
            >
              {lang === 'de' ? 'EN' : 'DE'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stage-text"
              aria-label="Menü"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stage-bg border-b border-stage-border px-6 pt-4 pb-8 space-y-4 animate-fadeIn">
          {navLinks.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.view)}
              className={`block w-full text-left py-2 text-sm uppercase tracking-[0.18em] ${
                currentView === item.view ? 'text-stage-accent font-semibold' : 'text-stage-text'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-stage-border/60">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full py-3 rounded-full bg-stage-text text-white text-xs uppercase tracking-[0.15em] font-medium"
            >
              {lang === 'de' ? 'Künstler anfragen' : 'Inquire Booking'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
