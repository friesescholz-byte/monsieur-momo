import React, { useState, useEffect } from 'react';
import { X, Lock, KeyRound, CheckCircle, AlertCircle, ShieldCheck } from 'lucide-react';

const TURNSTILE_SITEKEY = "0x4AAAAAADVEqwJz-pyeZXi0";
// SHA-256 Hash of the project-specific admin password
const HASH_FALLBACK = "2a02f2b1b4825109eead2429a8ca10b831d2ed67f72316013f17ddef98862c33";

async function sha256(str) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

export default function AdminModal({ isOpen, onClose }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isOpen && window.turnstile) {
      setTimeout(() => {
        try {
          const container = document.getElementById('turnstile-admin-container');
          if (container && !container.hasChildNodes()) {
            window.turnstile.render('#turnstile-admin-container', {
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

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // 1. Hole Turnstile Token falls vorhanden
      let turnstileToken = '';
      if (window.turnstile) {
        turnstileToken = window.turnstile.getResponse();
      }

      // 2. Server-Side Verifikation gegen /api/login Worker-Endpunkt
      try {
        const res = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            password,
            'cf-turnstile-response': turnstileToken
          })
        });

        if (res.ok) {
          const data = await res.json();
          if (data.success) {
            setIsAuthenticated(true);
            setLoading(false);
            return;
          }
        }
      } catch {
        console.info('Worker API offline, nutze SHA-256 Fallback-Verifikation.');
      }

      // 3. Fallback: Kryptografischer SHA-256 Hash-Check
      const inputHash = await sha256(password);
      if (inputHash === HASH_FALLBACK) {
        setIsAuthenticated(true);
      } else {
        setError('Ungültiges Admin-Passwort.');
      }
    } catch {
      setError('Fehler bei der Anmeldung.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stage-dark/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-stage-bg rounded-3xl shadow-2xl border border-stage-border overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-stage-border bg-stage-surface flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-stage-muted text-stage-accent flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-editorial text-2xl font-semibold text-stage-text">
                Künstler-Bereich
              </h3>
              <p className="text-xs text-stage-subtext">Internes Verwaltungs-Portal</p>
            </div>
          </div>

          <button
            onClick={() => { setError(''); setPassword(''); setIsAuthenticated(false); onClose(); }}
            className="p-2 rounded-full text-stage-subtext hover:text-stage-text hover:bg-stage-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isAuthenticated ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-editorial text-3xl text-stage-text">
                Erfolgreich angemeldet
              </h4>
              <p className="text-sm text-stage-subtext">
                Willkommen im internen Verwaltungsbereich von Monsieur Momo. Termine, Pressematerialien und Tourdaten können hier eingepflegt werden.
              </p>
              <div className="p-4 rounded-xl bg-stage-surface border border-stage-border text-xs text-stage-subtext text-left space-y-2">
                <p className="font-semibold text-stage-text">Verfügbare Aktionen:</p>
                <p>• Tour-Termine aktualisieren / hinzufügen</p>
                <p>• Pressematerialien & Downloads verwalten</p>
                <p>• Buchungsanfragen einsehen</p>
              </div>
              <button
                onClick={() => { setIsAuthenticated(false); onClose(); }}
                className="mt-4 px-6 py-2.5 rounded-full bg-stage-text text-white text-xs font-semibold uppercase tracking-wider hover:bg-stage-accent transition-colors"
              >
                Abmelden & Schließen
              </button>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-stage-text mb-1.5">
                  Admin-Passwort
                </label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stage-border bg-stage-surface text-sm text-stage-text focus:outline-none focus:ring-2 focus:ring-stage-accent/30 focus:border-stage-accent"
                  />
                  <KeyRound className="w-4 h-4 text-stage-subtext absolute left-3.5 top-3" />
                </div>
              </div>

              {/* Turnstile Container */}
              <div className="pt-2">
                <div id="turnstile-admin-container" className="my-2" />
                <div className="flex items-center gap-1.5 text-[11px] text-stage-subtext/80">
                  <ShieldCheck className="w-3.5 h-3.5 text-stage-accent" />
                  <span>Cloudflare Turnstile geschützt</span>
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 text-red-700 text-xs border border-red-100">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-stage-text hover:bg-stage-accent text-white py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors disabled:opacity-50"
                >
                  {loading ? 'Wird überprüft...' : 'Anmelden'}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
