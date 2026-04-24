export default function FinalCtaSection() {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }} aria-labelledby="cta-heading">
      <div className="final-cta">
        <h2 id="cta-heading">
          Votre prochain loto,{' '}
          <span style={{ color: 'var(--q-orange)' }}>en 5 minutes.</span>
        </h2>
        <p>Rejoignez les associations et les familles qui ont choisi Quinova pour leurs soirées loto.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://app.quinova.fr" className="btn btn-p btn-lg" rel="noopener noreferrer">
            Créer mon premier loto
          </a>
          <a href="#soutenir" className="btn btn-o btn-lg">
            Soutenir le projet
          </a>
        </div>
      </div>
    </section>
  );
}
