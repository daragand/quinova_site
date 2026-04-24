import { Check } from 'lucide-react';

const CHECKLIST = [
  'Suivi en temps réel de la salle',
  'Exports PDF et Excel pour le trésorier',
  'Historique des lotos précédents',
];

const MOCK_ROWS = [
  { color: 'var(--q-blue)', title: 'Carton plein', sub: 'Panier gourmand · valeur 120 €', pillLabel: 'Rang 1', pillStyle: {} },
  { color: 'var(--q-yellow)', title: 'Double quine', sub: "Bon d'achat 80 €", pillLabel: 'Rang 2', pillStyle: { background: '#FFF7D6', color: '#7A5000' } },
  { color: 'var(--q-orange)', title: 'Quine', sub: 'Corbeille de produits locaux', pillLabel: 'Rang 3', pillStyle: { background: '#FFF0EA', color: '#B84000' } },
];

export default function ShowcaseSection() {
  return (
    <section className="section" aria-labelledby="showcase-heading">
      <div className="showcase">
        <div className="showcase-body">
          <div className="eyebrow">Tableau de bord</div>
          <h2 id="showcase-heading">Tout votre loto d'un coup d'œil</h2>
          <p>
            Un tableau de bord clair qui réunit inscriptions, recette, lots, bénévoles et alertes. Parce que le soir du
            loto, on n'a pas le temps de chercher.
          </p>
          <ul aria-label="Avantages du tableau de bord">
            {CHECKLIST.map((item) => (
              <li key={item}>
                <Check size={20} strokeWidth={2.5} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="showcase-frame" aria-label="Aperçu de l'application">
          <div className="browser-bar" aria-hidden="true">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="url">app.quinova.fr/lotos/amicale-du-val</div>
          </div>
          <div className="mock">
            <div className="mock-hd">
              <div>
                <div className="eyebrow">Samedi 19 Avril · 19h00</div>
                <div className="t">Grand Loto de l'Amicale</div>
              </div>
              <span className="btn btn-p btn-sm">Lancer le tirage</span>
            </div>
            <div className="mock-stats">
              <div className="mock-st">
                <div className="l">Inscrits</div>
                <div className="v" style={{ color: 'var(--q-blue)' }}>82</div>
              </div>
              <div className="mock-st">
                <div className="l">Cartons</div>
                <div className="v" style={{ color: 'var(--q-orange)' }}>246</div>
              </div>
              <div className="mock-st">
                <div className="l">Recette</div>
                <div className="v" style={{ color: 'var(--q-navy)' }}>738 €</div>
              </div>
            </div>
            <div className="mock-list">
              {MOCK_ROWS.map((row) => (
                <div key={row.title} className="mock-row">
                  <div className="bar" style={{ background: row.color }} />
                  <div className="tx">
                    <div className="t">{row.title}</div>
                    <div className="s">{row.sub}</div>
                  </div>
                  <span className="pill" style={row.pillStyle}>{row.pillLabel}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
