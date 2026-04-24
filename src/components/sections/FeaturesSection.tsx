import { CalendarDays, Star, Ticket, Play, CreditCard, UserPlus } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  Icon: LucideIcon;
  title: string;
  desc: string;
  variant: '' | 'y' | 'o';
}

const FEATURES: Feature[] = [
  {
    Icon: CalendarDays,
    title: 'Déclaration de session',
    desc: 'Déclarez votre loto en 5 minutes : date, lieu, association, capacité, règles. Quinova guide chaque étape.',
    variant: '',
  },
  {
    Icon: Star,
    title: 'Gestion des lots',
    desc: "Catalogue complet : paniers gourmands, bons d'achat, quine exceptionnel. Photos, valeur, ordre de tirage.",
    variant: 'y',
  },
  {
    Icon: Ticket,
    title: 'Cartons automatiques',
    desc: 'Générez 20, 200 ou 2 000 cartons uniques, numérotés, prêts à imprimer. Pas deux grilles identiques.',
    variant: 'o',
  },
  {
    Icon: Play,
    title: 'Tirage en direct',
    desc: "Projetez l'écran de tirage — chaque boule s'affiche en grand, le tableau des 90 se met à jour.",
    variant: '',
  },
  {
    Icon: CreditCard,
    title: 'Paiements',
    desc: 'Encaissez sur place (espèces, chèque) ou en ligne. Tableau de recette consolidé, exports comptables.',
    variant: 'y',
  },
  {
    Icon: UserPlus,
    title: 'Participants & équipe',
    desc: 'Gérez les inscrits, les bénévoles, les rôles (caisse, animateur, contrôleur) — tout le monde sur la même page.',
    variant: 'o',
  },
];

export default function FeaturesSection() {
  return (
    <section className="section" id="fonctionnalites" aria-labelledby="feat-heading">
      <div className="section-head">
        <div className="eyebrow">01 — Fonctionnalités</div>
        <h2 id="feat-heading">Une plateforme pensée pour votre soirée loto</h2>
        <p>
          De la déclaration de session au tirage en direct, tout est conçu pour les bénévoles — simple, clair, et
          rassurant.
        </p>
      </div>

      <div className="features">
        {FEATURES.map(({ Icon, title, desc, variant }) => (
          <article key={title} className={`feat${variant ? ` ${variant}` : ''}`}>
            <div className="ic" aria-hidden="true">
              <Icon size={26} strokeWidth={2} />
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
