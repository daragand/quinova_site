const STEPS = [
  {
    n: 1,
    title: 'Créez la session',
    desc: 'Titre, date, lieu, association bénéficiaire. Modèles prêts pour gagner du temps.',
  },
  {
    n: 2,
    title: 'Ajoutez les lots',
    desc: 'Photo, valeur, rang (carton plein, ligne, quine). Classement automatique.',
  },
  {
    n: 3,
    title: 'Générez les cartons',
    desc: 'Quinova produit des grilles uniques prêtes à imprimer ou à partager en ligne.',
  },
  {
    n: 4,
    title: 'Lancez le tirage',
    desc: 'Mode plein écran — les numéros défilent, les joueurs suivent. Magique.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="section alt" id="comment" aria-labelledby="steps-heading">
      <div className="section-head">
        <div className="eyebrow">02 — Comment ça marche</div>
        <h2 id="steps-heading">Quatre étapes, une soirée réussie</h2>
      </div>

      <ol className="steps" style={{ listStyle: 'none' }}>
        {STEPS.map(({ n, title, desc }) => (
          <li key={n} className="step">
            <div className="n" aria-hidden="true">
              {n}
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
