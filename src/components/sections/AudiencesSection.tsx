import { Users, User } from 'lucide-react';

const ASSO_ITEMS = [
  'Multi-bénévoles avec rôles et droits',
  'Reçus et exports pour la trésorerie',
  'Historique pluriannuel des soirées',
];

const PERSO_ITEMS = [
  'Prise en main en 5 minutes',
  'Partage par lien, sans compte pour les invités',
  'Mode famille pour les plus petits',
];

export default function AudiencesSection() {
  return (
    <section className="section" aria-labelledby="aud-heading">
      <div className="section-head">
        <div className="eyebrow">04 — Pour qui ?</div>
        <h2 id="aud-heading">Associations ou particuliers — même simplicité</h2>
      </div>

      <div className="aud">
        <article className="aud-card a">
          <div className="ic" aria-hidden="true">
            <Users size={28} strokeWidth={2} />
          </div>
          <h3>Associations</h3>
          <p>
            Parents d'élèves, amicale de pompiers, club sportif — Quinova fluidifie toute la saison de lotos, pour vos
            causes.
          </p>
          <ul aria-label="Avantages pour les associations">
            {ASSO_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a href="https://app.quinova.fr" className="btn btn-p btn-sm" rel="noopener noreferrer">
            Créer le compte de mon association
          </a>
        </article>

        <article className="aud-card b">
          <div className="ic" aria-hidden="true">
            <User size={28} strokeWidth={2} />
          </div>
          <h3>Particuliers</h3>
          <p>
            Un loto entre amis, un anniversaire, un mariage, une kermesse familiale — organisez aussi simplement
            qu'en association.
          </p>
          <ul aria-label="Avantages pour les particuliers">
            {PERSO_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a href="https://app.quinova.fr" className="btn btn-w btn-sm" rel="noopener noreferrer">
            Lancer mon loto perso
          </a>
        </article>
      </div>
    </section>
  );
}
