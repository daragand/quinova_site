import Link from 'next/link';
import type { Metadata } from 'next';
import s from './guide.module.css';

export const metadata: Metadata = {
  title: 'Organiser un loto — Guide complet | Quinova',
  description:
    "Tout ce qu'il faut savoir pour organiser un loto associatif réussi : cadre légal, préparation, lots, cartons, animation du tirage et pièges à éviter.",
  keywords: 'organiser un loto, guide loto associatif, tirage loto, cartons loto, cadre légal loto',
};

export default function OrganiserUnLotoPage() {
  return (
    <div className={s.guide}>

      {/* ── Hero ──────────────────────────────────────────── */}
      <header className={s['guide-hero']}>
        <div className="eyebrow">Guide pratique</div>
        <h1>Organiser un loto réussi</h1>
        <p className={s['guide-intro']}>
          De la déclaration légale au coup de marteau final — tout ce qu'il faut savoir pour préparer,
          animer et réussir votre loto associatif sans mauvaise surprise.
        </p>
        <nav className={s['guide-toc']} aria-label="Sommaire">
          <div className={s['guide-toc-title']}>Sommaire</div>
          <ol>
            <li><a href="#legal">Cadre légal</a></li>
            <li><a href="#preparation">Préparer l'événement</a></li>
            <li><a href="#lots">Choisir les lots</a></li>
            <li><a href="#cartons">Les cartons</a></li>
            <li><a href="#animation">Animer le tirage</a></li>
            <li><a href="#pieges">Les pièges à éviter</a></li>
          </ol>
        </nav>
      </header>

      {/* ── 1. Cadre légal ────────────────────────────────── */}
      <section id="legal" className={s['guide-section']}>
        <h2>1. Cadre légal</h2>
        <p>
          Les lotos traditionnels sont autorisés en France par l'article L322-3 du Code de la sécurité
          intérieure. Ils peuvent être organisés par des <b>associations à but non lucratif déclarées en
          préfecture</b> (loi 1901), mais aussi par des particuliers dans un cadre strictement privé
          (entre amis, famille).
        </p>

        <h3>Ce que dit la loi</h3>
        <ul>
          <li>
            L'organisateur doit être une <b>association loi 1901 déclarée</b>, ou un particulier dans
            un cadre privé non-commercial.
          </li>
          <li>
            Les <b>lots doivent être des objets ou des bons d'achat</b> — jamais de l'argent liquide
            remis directement comme lot.
          </li>
          <li>Les bénéfices doivent financer exclusivement les activités non lucratives de l'association.</li>
          <li>
            <b>Aucune déclaration préalable</b> en préfecture n'est exigée pour un loto traditionnel
            classique.
          </li>
        </ul>

        <div className={s['guide-tip']}>
          <b>Bon à savoir</b>
          <br />
          Si vous organisez un événement de grande ampleur ou si vous avez un doute sur vos statuts
          associatifs, rapprochez-vous de votre mairie ou d'un conseiller juridique.
        </div>
      </section>

      {/* ── 2. Préparation ────────────────────────────────── */}
      <section id="preparation" className={s['guide-section']}>
        <h2>2. Préparer l'événement</h2>
        <p>
          Un loto réussi se joue bien avant le jour J. Idéalement, commencez la préparation
          <b> 4 à 6 semaines à l'avance</b>.
        </p>

        <h3>Choisir la date et le lieu</h3>
        <ul>
          <li>Évitez les week-ends chargés : vacances scolaires, grands événements locaux, marchés.</li>
          <li>
            Choisissez une salle adaptée : tables larges, acoustique correcte, accès PMR,
            stationnement facile.
          </li>
          <li>
            Prévoyez la sonorisation dès le départ — même pour 50 personnes, un micro et un
            ampli font toute la différence.
          </li>
          <li>
            Comptez environ <b>1,5 à 2 m² par participant</b> pour que chacun soit à l'aise avec
            ses cartons.
          </li>
        </ul>

        <h3>Budget prévisionnel</h3>
        <ul>
          <li>
            <b>Location de salle</b> : souvent gratuite ou à tarif préférentiel pour les associations
            membres de la commune.
          </li>
          <li>
            <b>Lots</b> : prévoyez l'équivalent de 30 à 50 % des recettes cartons en valeur de lots.
          </li>
          <li>
            <b>Cartons</b> : impression PDF à faible coût (Quinova génère les fichiers automatiquement).
          </li>
          <li><b>Communication</b> : affiches, réseaux sociaux — souvent quasi-gratuit.</li>
          <li>
            <b>Buvette / snacks</b> : une buvette bien tenue peut générer autant que les cartons.
          </li>
        </ul>

        <h3>Constituer votre équipe</h3>
        <p>Pour un loto de 80 à 150 personnes, comptez au minimum :</p>
        <ul>
          <li>1 <b>animateur·rice</b> — voix posée, rythme, un brin d'humour</li>
          <li>2 <b>vendeurs·ses de cartons</b> (avant et à l'accueil)</li>
          <li>2 <b>vérificateurs·rices de quines</b></li>
          <li>1 <b>responsable des lots</b></li>
          <li>1 <b>responsable de la caisse</b></li>
        </ul>

        <div className={s['guide-tip']}>
          <b>Conseil</b>
          <br />
          Organisez un briefing de 30 minutes avec tous vos bénévoles la veille ou 1 h avant
          l'ouverture. Un rôle clair pour chacun évite 90 % des problèmes le jour J.
        </div>
      </section>

      {/* ── 3. Lots ───────────────────────────────────────── */}
      <section id="lots" className={s['guide-section']}>
        <h2>3. Choisir les lots</h2>
        <p>
          Les lots, c'est le cœur de votre loto. Ce sont eux qui font venir les gens et qui maintiennent
          l'attention jusqu'au bout.
        </p>

        <h3>La hiérarchie des lots</h3>
        <ul>
          <li>
            <b>Quine</b> (une ligne horizontale complète) → lot modeste : bouteille, coffret,
            livre, bon d'achat 10–20 €
          </li>
          <li>
            <b>Double quine</b> (deux lignes) → lot intermédiaire : appareil électroménager,
            bon d'achat 30–50 €
          </li>
          <li>
            <b>Carton plein</b> → lot principal : téléviseur, robot cuisine, week-end, bon d'achat
            100 € et plus
          </li>
        </ul>

        <h3>Où trouver des lots ?</h3>
        <ul>
          <li>
            <b>Dons de commerçants locaux</b> : contactez-les 3 semaines avant — c'est une belle
            vitrine pour eux en échange d'un lot.
          </li>
          <li><b>Achats groupés</b> en grande surface ou en ligne pour maîtriser le budget.</li>
          <li>
            <b>Partenariats</b> avec des enseignes nationales (certaines ont des programmes
            de sponsoring associatif).
          </li>
        </ul>

        <div className={s['guide-tip']}>
          <b>Règle d'or</b>
          <br />
          Le lot du carton plein doit faire envie à <em>tout le monde dans la salle</em>. Un lot
          principal décevant fait partir les gens avant la fin. Investissez sur ce lot — c'est
          lui qui "tire" toute la soirée.
        </div>

        <div className={s['guide-warn']}>
          <b>Attention — lots interdits</b>
          <br />
          Remettre de l'argent liquide en guise de lot est interdit dans le cadre légal des lotos
          associatifs. Préférez les bons d'achat ou les chèques cadeaux.
        </div>
      </section>

      {/* ── 4. Cartons ────────────────────────────────────── */}
      <section id="cartons" className={s['guide-section']}>
        <h2>4. Les cartons</h2>
        <p>
          Les cartons (ou grilles) sont des tableaux de 5 × 5 cases contenant des numéros uniques
          tirés entre 1 et 90. Chaque carton doit être différent — c'est la condition d'un jeu
          équitable.
        </p>

        <h3>Prix et volume</h3>
        <ul>
          <li>Prix standard : entre <b>1 € et 3 € par carton</b>, selon le standing de l'événement.</li>
          <li>Proposez des <b>packs</b> (3 cartons pour 5 €, 6 pour 9 €) pour augmenter les recettes.</li>
          <li>Estimez en moyenne <b>3 à 5 cartons par participant</b>.</li>
          <li>Imprimez toujours <b>20 % de plus</b> que votre estimation.</li>
        </ul>

        <h3>Format et génération</h3>
        <ul>
          <li>Le format standard imprime <b>4 grilles par feuille A4</b>.</li>
          <li>Chaque carton doit être <b>numéroté</b> pour permettre la vérification des quines.</li>
          <li>Les numéros sont répartis par colonnes (1–15, 16–30, 31–45, 46–60, 61–75).</li>
        </ul>

        <div className={s['guide-tip']}>
          <b>Avec Quinova</b>
          <br />
          La génération des cartons est entièrement automatique — aucun doublon possible, fichier
          PDF prêt à imprimer, numérotation incluse. Vous pouvez aussi activer la vente en ligne
          avant l'événement.
        </div>
      </section>

      {/* ── 5. Animation ──────────────────────────────────── */}
      <section id="animation" className={s['guide-section']}>
        <h2>5. Animer le tirage</h2>
        <p>
          L'animateur·rice est la clé de voûte de la soirée. Un bon rythme, une voix claire et
          quelques touches d'humour transforment un simple jeu en soirée mémorable.
        </p>

        <h3>Déroulement type d'une partie</h3>
        <ol className={s['guide-steps']}>
          <li>Annonce du numéro de la partie et des lots en jeu.</li>
          <li>Vente ou distribution des cartons si ce n'est pas déjà fait.</li>
          <li>Tirage des numéros — annonce claire et répétée deux fois.</li>
          <li>
            Premier "Quine !" : un bénévole vérifie le carton en direct, le lot est remis
            devant la salle.
          </li>
          <li>"Double Quine" puis "Carton plein" : même procédure.</li>
          <li>Courte pause (5 min) avant la partie suivante.</li>
        </ol>

        <h3>Conseils d'animation</h3>
        <ul>
          <li>Répétez chaque numéro deux fois, et rappelez les 5 derniers numéros sortis régulièrement.</li>
          <li>Faites une pause de 10 à 15 minutes toutes les 2–3 parties pour la buvette.</li>
          <li>Annoncez combien de numéros ont été tirés pour maintenir le suspense.</li>
          <li>Prévoyez une musique d'ambiance pendant les pauses.</li>
          <li>Ne brusquez pas le rythme : laissez le temps à tous de cocher leurs cartons.</li>
        </ul>
      </section>

      {/* ── 6. Pièges ─────────────────────────────────────── */}
      <section id="pieges" className={s['guide-section']}>
        <h2>6. Les pièges à éviter</h2>

        <div className={s['guide-pitfalls']}>
          {[
            {
              titre: 'Sous-estimer la jauge',
              texte: 'Prévoyez 20 % de participants en plus que votre estimation. Une salle bondée et inconfortable fait partir les gens à la première pause.',
            },
            {
              titre: 'Un lot principal qui ne fait pas rêver',
              texte: 'Un lot trop banal démotive la salle entière dès l\'annonce. Le lot du carton plein doit susciter des "Oh !" — sinon les gens partent avant la fin.',
            },
            {
              titre: 'Des cartons avec erreurs ou doublons',
              texte: 'Deux cartons identiques ruinent l\'équité du jeu et provoquent des conflits difficiles à gérer devant une salle pleine. Utilisez un générateur fiable.',
            },
            {
              titre: 'Pas assez de bénévoles',
              texte: 'Vendre des cartons, gérer la caisse, vérifier les quines et tenir la buvette en même temps, c\'est impossible seul. Prévoyez votre équipe à l\'avance.',
            },
            {
              titre: 'Oublier la monnaie',
              texte: 'Les participants arrivent souvent avec des billets de 50 €. Préparez une caisse avec des petites coupures dès le départ.',
            },
            {
              titre: 'Communiquer trop tard',
              texte: 'Une affiche posée 3 jours avant ne suffit pas. Commencez à communiquer 3 semaines avant : réseaux sociaux, mairie, parents d\'élèves, commerçants.',
            },
            {
              titre: 'Négliger la sonorisation',
              texte: 'Sans micro, les joueurs du fond n\'entendent pas les numéros et se démotivent rapidement. Même un système basique fait une vraie différence.',
            },
            {
              titre: 'Aucun plan B pour les incidents',
              texte: 'Panne de sono, bénévole absent, réclamation d\'un joueur — anticipez ces scénarios lors de votre briefing.',
            },
          ].map(({ titre, texte }) => (
            <div key={titre} className={s['guide-pitfall']}>
              <div className={s['pitfall-icon']}>✗</div>
              <div>
                <b>{titre}</b>
                <br />
                <span>{texte}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <div className={s['guide-cta-block']}>
        <h2>Prêt à vous lancer ?</h2>
        <p>
          Quinova prend en charge la génération des cartons, la gestion des lots et le tirage en
          temps réel. Concentrez-vous sur votre événement — on s'occupe du reste.
        </p>
        <a href="https://app.quinova.fr" className="btn btn-p btn-lg" rel="noopener noreferrer">
          Lancer mon loto gratuitement
        </a>
        <div style={{ marginTop: 16, fontSize: 13, color: 'var(--q-fg-3)' }}>
          Gratuit · Sans engagement · Hébergé en France
        </div>
      </div>

      <p style={{ marginTop: 40, fontSize: 13, color: 'var(--q-fg-3)' }}>
        Mise à jour : avril 2026 —{' '}
        <Link href="/cgu">CGU</Link> ·{' '}
        <Link href="/mentions-legales">Mentions légales</Link>
      </p>
    </div>
  );
}
