import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProofMarquee from './components/SocialProofMarquee';
import ArtistStatement from './components/ArtistStatement';
import ShowHighlight from './components/ShowHighlight';
import TourDatesPreview from './components/TourDatesPreview';
import PressQuotes from './components/PressQuotes';
import OrganizersService from './components/OrganizersService';
import BookingCtaSection from './components/BookingCtaSection';
import Footer from './components/Footer';

import BookingModal from './components/BookingModal';
import VideoModal from './components/VideoModal';
import AdminModal from './components/AdminModal';
import SubpageLegal from './components/SubpageLegal';

import { translations } from './data/translations';

// Ultra-clean, pure white canvas for subpages as requested
function CleanWhiteSubpage({ title, onBack, lang }) {
  return (
    <div className="bg-white min-h-[75vh] py-28 px-6 sm:px-12 flex flex-col items-center justify-center text-center">
      <span className="text-[11px] uppercase tracking-[0.25em] text-stage-subtext/60 mb-3 font-medium">
        Monsieur Momo
      </span>
      <h1 className="font-editorial text-4xl sm:text-6xl text-stage-text font-normal tracking-tight mb-8">
        {title}
      </h1>
      <button
        onClick={onBack}
        className="px-6 py-2.5 rounded-full border border-stage-border text-xs uppercase tracking-[0.18em] font-medium text-stage-subtext hover:text-stage-text hover:border-stage-text transition-colors"
      >
        {lang === 'de' ? '← Zurück zur Startseite' : '← Back to Homepage'}
      </button>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState('de');
  const [currentView, setCurrentView] = useState('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  const t = translations[lang] || translations.de;

  const navigateTo = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSubpageTitle = () => {
    switch (currentView) {
      case 'maagic':
        return 'MÄÄGIC! — Die Show';
      case 'termine':
        return lang === 'de' ? 'Tourdaten & Termine' : 'Tour & Dates';
      case 'vita':
        return lang === 'de' ? 'Über Monsieur Momo' : 'About Monsieur Momo';
      case 'referenzen':
        return lang === 'de' ? 'Referenzen & Presse' : 'References & Press';
      case 'kontakt':
        return lang === 'de' ? 'Kontakt & Booking' : 'Contact & Booking';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stage-bg text-stage-text">
      
      {/* Sleek, Clean Header */}
      <Header
        lang={lang}
        setLang={setLang}
        t={t}
        currentView={currentView}
        setCurrentView={navigateTo}
        onOpenBooking={() => setBookingModalOpen(true)}
      />

      {/* Main Area */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <Hero
              t={t}
              lang={lang}
              onOpenBooking={() => setBookingModalOpen(true)}
              onNavigateTour={() => navigateTo('termine')}
            />
            <SocialProofMarquee t={t} />
            <ArtistStatement
              t={t}
              onNavigateVita={() => navigateTo('vita')}
            />
            <ShowHighlight
              t={t}
              onOpenBooking={() => setBookingModalOpen(true)}
              onNavigateMaagic={() => navigateTo('maagic')}
            />
            <TourDatesPreview
              t={t}
              onNavigateTermine={() => navigateTo('termine')}
            />
            <PressQuotes t={t} />
            <OrganizersService t={t} />
            <BookingCtaSection
              t={t}
              onOpenBooking={() => setBookingModalOpen(true)}
            />
          </>
        )}

        {/* Clean White Subpage View */}
        {['maagic', 'termine', 'vita', 'referenzen', 'kontakt'].includes(currentView) && (
          <CleanWhiteSubpage
            title={getSubpageTitle()}
            onBack={() => navigateTo('home')}
            lang={lang}
          />
        )}

        {/* Legal Pages */}
        {(currentView === 'impressum' || currentView === 'datenschutz') && (
          <SubpageLegal
            type={currentView}
            onBack={() => navigateTo('home')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        t={t}
        setCurrentView={navigateTo}
        onOpenAdmin={() => setAdminModalOpen(true)}
      />

      {/* Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        t={t}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      <AdminModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
      />

    </div>
  );
}
