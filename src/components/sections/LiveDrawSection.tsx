const BALLS: { num: number; bg: string; color?: string }[] = [
  { num: 14, bg: 'var(--q-blue)' },
  { num: 27, bg: 'var(--q-yellow)', color: '#5C3A00' },
  { num: 63, bg: 'var(--q-orange)' },
  { num: 88, bg: 'var(--q-navy)' },
  { num: 7,  bg: 'var(--q-blue)' },
  { num: 31, bg: 'var(--q-orange)' },
  { num: 52, bg: 'var(--q-yellow)', color: '#5C3A00' },
];

export default function LiveDrawSection() {
  return (
    <section className="section alt" aria-labelledby="draw-heading">
      <div className="section-head">
        <div className="eyebrow">03 — Tirage</div>
        <h2 id="draw-heading">Un écran de tirage comme à la télé</h2>
      </div>

      <div className="draw-vis">
        <svg className="draw-bg" viewBox="0 0 1200 400" preserveAspectRatio="none" aria-hidden="true">
          <path fill="#4A90B8" fillOpacity="0.5" d="M0,220 C200,260 420,160 620,200 C820,240 1020,280 1200,220 L1200,400 L0,400 Z" />
          <path fill="#2BBFA4" fillOpacity="0.3" d="M0,280 C200,240 420,320 620,280 C820,240 1020,320 1200,280 L1200,400 L0,400 Z" />
          <path fill="#FFD84D" fillOpacity="0.25" d="M0,340 C200,310 420,370 620,340 C820,310 1020,370 1200,340 L1200,400 L0,400 Z" />
        </svg>

        <div className="big-ball" aria-label="Numéro courant : 42">42</div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow" style={{ color: 'var(--q-yellow)' }}>
            Boule n°7 · en cours
          </div>
          <h3>Les joueurs la voient avant vous.</h3>
          <p style={{ maxWidth: 520 }}>
            Projetez sur grand écran — le numéro courant prend toute la place, le tableau de 1 à 90 se noircit
            progressivement, et l'historique défile en bas.
          </p>
          <div className="ball-strip" aria-label="Numéros déjà tirés" role="list">
            {BALLS.map((b) => (
              <div
                key={b.num}
                className="dball"
                style={{ background: b.bg, color: b.color ?? '#fff' }}
                role="listitem"
                aria-label={`Numéro ${b.num}`}
              >
                {b.num}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
