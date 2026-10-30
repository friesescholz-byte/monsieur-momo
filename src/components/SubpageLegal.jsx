import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function SubpageLegal({ type, onBack }) {
  const isImpressum = type === 'impressum';

  return (
    <div className="py-16 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stage-subtext hover:text-stage-accent transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Zurück zur Übersicht</span>
      </button>

      {isImpressum ? (
        <div className="space-y-6 text-sm text-stage-subtext leading-relaxed bg-stage-surface p-8 sm:p-12 rounded-3xl border border-stage-border">
          <h1 className="font-editorial text-4xl sm:text-5xl text-stage-text">Impressum</h1>
          
          <div>
            <h2 className="font-semibold text-stage-text text-base">Angaben gemäß § 5 TMG</h2>
            <p className="mt-1">
              Timo Lesniewski<br />
              Künstler „Monsieur Momo“<br />
              E-Mail: kontakt@monsieur-momo.de<br />
              Website: www.monsieur-momo.de
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-stage-text text-base">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="mt-1">
              Timo Lesniewski
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-stage-text text-base">Haftung für Inhalte</h2>
            <p className="mt-1">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-stage-text text-base">Konzeption & Design</h2>
            <p className="mt-1">
              Scholz & Friese Webdesign Agentur
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-6 text-sm text-stage-subtext leading-relaxed bg-stage-surface p-8 sm:p-12 rounded-3xl border border-stage-border">
          <h1 className="font-editorial text-4xl sm:text-5xl text-stage-text">Datenschutzerklärung</h1>
          
          <div>
            <h2 className="font-semibold text-stage-text text-base">1. Datenschutz auf einen Blick</h2>
            <p className="mt-1">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-stage-text text-base">2. Datenerfassung auf dieser Website</h2>
            <p className="mt-1">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen. Wenn Sie das Kontakt- oder Buchungsformular nutzen, werden die dort angegebenen Daten zur Bearbeitung Ihrer Anfrage verarbeitet.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-stage-text text-base">3. Cloudflare Turnstile</h2>
            <p className="mt-1">
              Wir nutzen Cloudflare Turnstile zur Absicherung unserer Formulare gegen Spam und automatisierte Angriffe. Betreiber ist die Cloudflare Inc., 101 Townsend St, San Francisco, CA 94107, USA. Die Nutzung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-stage-text text-base">4. Ihre Rechte</h2>
            <p className="mt-1">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
