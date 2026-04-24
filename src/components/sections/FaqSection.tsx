import Link from 'next/link';

const FAQ_ITEMS = [
  {
    q: 'Quinova est-il vraiment gratuit ?',
    a: "Oui, à 100 % et pour tous les types d'organisateurs. Aucune fonctionnalité n'est payante. Les dons financent l'hébergement et l'association partenaire.",
    open: true,
  },
  {
    q: "Qui peut utiliser l'application ?",
    a: 'Les associations (loi 1901), les écoles, les clubs, mais aussi les particuliers souhaitant organiser un loto entre amis, en famille, ou pour un événement privé.',
  },
  {
    q: 'Où mes données sont-elles stockées ?',
    a: null,
    custom: true,
  },
  {
    q: 'Puis-je encaisser les cartons en ligne ?',
    a: 'Oui, Quinova accepte les paiements en ligne (carte) et les encaissements manuels sur place (espèces, chèque). Le tableau de recette consolide les deux.',
  },
  {
    q: 'Comment imprimer les cartons ?',
    a: 'Une fois la session créée, Quinova génère un PDF prêt à imprimer avec les cartons uniques numérotés — format A4, 4 grilles par page.',
  },
  {
    q: "Puis-je utiliser Quinova si je ne suis pas très à l'aise avec l'informatique ?",
    a: "Bien sûr. L'application est pensée pour les bénévoles — chaque étape est guidée, avec des exemples et une aide contextuelle.",
  },
];

export default function FaqSection() {
  return (
    <section className="section alt" aria-labelledby="faq-heading">
      <div className="section-head">
        <div className="eyebrow">06 — Questions fréquentes</div>
        <h2 id="faq-heading">Tout ce qu'il faut savoir</h2>
      </div>

      <div className="faq">
        {FAQ_ITEMS.map(({ q, a, open, custom }) => (
          <details key={q} className="q" open={open}>
            <summary>{q}</summary>
            {custom ? (
              <p>
                En France, chez un hébergeur respectant le RGPD. Vous gardez la maîtrise complète de vos données —
                consultez notre{' '}
                <Link href="/confidentialite">politique de confidentialité</Link>.
              </p>
            ) : (
              <p>{a}</p>
            )}
          </details>
        ))}
      </div>
    </section>
  );
}
