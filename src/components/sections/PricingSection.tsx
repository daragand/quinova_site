export default function PricingSection() {
  return (
    <section className="section alt" aria-labelledby="price-heading">
      <div className="price">
        <svg className="price-bg" viewBox="0 0 1200 400" preserveAspectRatio="none" aria-hidden="true">
          <path fill="#FFFFFF" fillOpacity="0.25" d="M0,200 C200,260 420,140 620,200 C820,260 1020,320 1200,220 L1200,400 L0,400 Z" />
          <path fill="#FFD84D" fillOpacity="0.2" d="M0,280 C200,240 420,320 620,280 C820,240 1020,320 1200,280 L1200,400 L0,400 Z" />
        </svg>

        <span className="free">✦ 100 % gratuit · pour toujours</span>
        <h2 id="price-heading">Quinova ne vous coûte rien.</h2>
        <p>
          Pas d'abonnement, pas de commission, pas de version « premium ». Toutes les fonctionnalités sont incluses —
          simplement.
        </p>
        <a href="https://app.quinova.fr" className="btn btn-y btn-lg" rel="noopener noreferrer">
          Créer mon loto
        </a>
      </div>
    </section>
  );
}
