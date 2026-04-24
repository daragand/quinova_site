import { Check } from 'lucide-react';

const TRUST_ITEMS = ['100 % gratuit', 'Sans publicité', 'Conforme RGPD', 'Hébergé en France'];

const TICKET_CELLS: { num: number | null; on?: boolean; st?: boolean }[] = [
  { num: 4 }, { num: 17, on: true }, { num: 28 }, { num: 35, on: true }, { num: 51 },
  { num: 6, on: true }, { num: 22 }, { num: null, st: true }, { num: 43 }, { num: 68, on: true },
  { num: 11 }, { num: 24, on: true }, { num: 37 }, { num: 59 }, { num: 72, on: true },
];

const DRAW_BALLS: { num: number; cls: string }[] = [
  { num: 14, cls: 'b1' }, { num: 27, cls: 'b2' }, { num: 63, cls: 'b3' },
  { num: 88, cls: 'b4' }, { num: 7, cls: 'b1' }, { num: 31, cls: 'b3' },
];

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-inner">
        {/* ── Left: text ── */}
        <div>
          <div className="hero-tag">
            ✦ QUIN<span className="d">O</span>VA — Nouvelle génération
          </div>
          <h1 id="hero-heading">
            Organisez vos lotos,{' '}
            <em>sans prise de tête.</em>
          </h1>
          <p className="hero-desc">
            Quinova est l'application gratuite qui accompagne les <strong>associations</strong> et les{' '}
            <strong>particuliers</strong> de A à Z : sessions, lots, cartons, tirage en direct et paiements — le tout en
            quelques clics.
          </p>
          <div className="hero-ctas">
            <a href="https://app.quinova.fr" className="btn btn-p btn-lg" rel="noopener noreferrer">
              Créer mon loto — gratuit
            </a>
            <a href="#comment" className="btn btn-o btn-lg">
              Voir une démo
            </a>
          </div>
          <div className="hero-trust" aria-label="Garanties">
            {TRUST_ITEMS.map((item) => (
              <span key={item}>
                <Check size={16} aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: decorative cards ── */}
        <div className="hero-visual" aria-hidden="true">
          {/* Carton / ticket card */}
          <div className="h-card ticket">
            <div className="ticket-head">
              <span>Grille N°</span>
              <span>042</span>
            </div>
            <div className="t-grid">
              {TICKET_CELLS.map((cell, i) => (
                <div
                  key={i}
                  className={['cell', cell.on ? 'on' : '', cell.st ? 'st' : ''].filter(Boolean).join(' ')}
                >
                  {cell.st ? '★' : cell.num}
                </div>
              ))}
            </div>
          </div>

          {/* Draw card */}
          <div className="h-card draw">
            <div className="dr-e">Tirage en direct · Boule n°7</div>
            <div className="dr-big">42</div>
            <div className="dr-row">
              {DRAW_BALLS.map((b) => (
                <div key={b.num} className={`ball ${b.cls}`}>
                  {b.num}
                </div>
              ))}
            </div>
          </div>

          {/* Stat card */}
          <div className="h-card stat">
            <div className="lb">Récoltés ce soir</div>
            <div className="val">486 €</div>
            <div className="sub">162 cartons vendus</div>
          </div>
        </div>
      </div>

      {/* Wave SVG */}
      <svg className="hero-waves" viewBox="0 0 1440 180" preserveAspectRatio="none" aria-hidden="true">
        <path fill="#FFFFFF" fillOpacity="0.5" d="M0,80 C240,140 480,20 720,60 C960,100 1200,140 1440,70 L1440,180 L0,180 Z" />
        <path fill="#FFFFFF" fillOpacity="0.8" d="M0,110 C200,70 440,150 720,110 C1000,70 1240,150 1440,120 L1440,180 L0,180 Z" />
        <path fill="#FFFFFF" d="M0,140 C240,120 480,170 720,150 C960,130 1200,170 1440,145 L1440,180 L0,180 Z" />
      </svg>
    </section>
  );
}
