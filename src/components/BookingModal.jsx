import React, { useState, useEffect } from 'react';
import { X, Sparkles, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

const TURNSTILE_SITEKEY = "0x4AAAAAADVEqwJz-pyeZXi0";

export default function BookingModal({ isOpen, onClose, t }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Gastspiel im Theater / Kulturhaus',
    date: '',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && window.turnstile) {
      setTimeout(() => {
        try {
          const container = document.getElementById('turnstile-booking-container');
          if (container && !container.hasChildNodes()) {
            window.turnstile.render('#turnstile-booking-container', {
              sitekey: TURNSTILE_SITEKEY,
              theme: 'light'
            });
          }
        } catch (e) {
          console.warn('Turnstile render warning:', e);
        }
      }, 200);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate successful submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stage-dark/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-stage-bg rounded-3xl shadow-2xl border border-stage-border overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-stage-border bg-stage-surface flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-stage-accent uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Unverbindliche Anfrage</span>
            </div>
            <h3 className="font-editorial text-3xl text-stage-text font-semibold">
              {t.modal.title}
            </h3>
            <p className="text-xs sm:text-sm text-stage-subtext mt-1">
              {t.modal.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-stage-subtext hover:text-stage-text hover:bg-stage-muted transition-colors"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-editorial text-3xl text-stage-text">
                {t.modal.successTitle}
              </h4>
              <p className="text-sm text-stage-subtext max-w-md mx-auto">
                {t.modal.successDesc}
              </p>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="mt-6 px-6 py-2.5 rounded-full bg-stage-text text-white text-xs font-semibold uppercase tracking-wider hover:bg-stage-accent transition-colors"
              >
                Fenster schließen
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stage-text mb-1.5">
                    {t.modal.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="z. B. Dr. Thomas Meyer, Theaterleiter"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stage-border bg-stage-surface text-sm text-stage-text focus:outline-none focus:ring-2 focus:ring-stage-accent/30 focus:border-stage-accent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stage-text mb-1.5">
                    {t.modal.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@theater.de"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stage-border bg-stage-surface text-sm text-stage-text focus:outline-none focus:ring-2 focus:ring-stage-accent/30 focus:border-stage-accent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stage-text mb-1.5">
                    {t.modal.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+49 170 1234567"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stage-border bg-stage-surface text-sm text-stage-text focus:outline-none focus:ring-2 focus:ring-stage-accent/30 focus:border-stage-accent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stage-text mb-1.5">
                    {t.modal.typeLabel}
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stage-border bg-stage-surface text-sm text-stage-text focus:outline-none focus:ring-2 focus:ring-stage-accent/30 focus:border-stage-accent transition-all"
                  >
                    {t.modal.typeOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stage-text mb-1.5">
                    {t.modal.dateLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    placeholder="z. B. Herbst 2026 oder 14.11.2026"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stage-border bg-stage-surface text-sm text-stage-text focus:outline-none focus:ring-2 focus:ring-stage-accent/30 focus:border-stage-accent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stage-text mb-1.5">
                    {t.modal.locationLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Stadt / Theatername"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stage-border bg-stage-surface text-sm text-stage-text focus:outline-none focus:ring-2 focus:ring-stage-accent/30 focus:border-stage-accent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stage-text mb-1.5">
                  {t.modal.messageLabel}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Geben Sie hier Informationen zu Anlass, Zuschauerkapazität oder gewünschtem Programm an..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stage-border bg-stage-surface text-sm text-stage-text focus:outline-none focus:ring-2 focus:ring-stage-accent/30 focus:border-stage-accent transition-all resize-none"
                />
              </div>

              {/* Turnstile Official Container */}
              <div className="pt-2">
                <div id="turnstile-booking-container" className="my-2" />
                <div className="flex items-center gap-1.5 text-[11px] text-stage-subtext/80">
                  <ShieldCheck className="w-3.5 h-3.5 text-stage-accent" />
                  <span>{t.modal.turnstileNotice}</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-stage-text hover:bg-stage-accent text-white py-3.5 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-200 disabled:opacity-50"
                >
                  {loading ? (
                    <span>{t.modal.sending}</span>
                  ) : (
                    <>
                      <span>{t.modal.submitBtn}</span>
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
