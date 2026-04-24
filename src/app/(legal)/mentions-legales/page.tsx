import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales — Quinova',
  description: "Informations légales sur l'éditeur, l'hébergement et la responsabilité du site Quinova.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="page">
      <div className="eyebrow">Légal</div>
      <h1>Mentions légales</h1>
      <p style={{ marginTop: 10, color: 'var(--q-fg-2)' }}>
        En application de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.
      </p>

      <h2>Éditeur du site</h2>
      <p>
        <b>Quinova</b> est un projet associatif non-commercial édité par <b>Demba THIAM</b>, bénévole.
        <br />
        Adresse de correspondance&nbsp;: Montigny-lès-Cormeilles (95), France.
        <br />
        Contact&nbsp;:{' '}
        <a href="mailto:contact@quinova.fr">contact@quinova.fr</a>
      </p>

      <h2>Directeur de la publication</h2>
      <p>Monsieur Demba THIAM.</p>

      <h2>Hébergement</h2>
      <p>
        Le site <b>quinova.fr</b> et l'application <b>app.quinova.fr</b> sont hébergés en France par un prestataire
        conforme au RGPD. Les coordonnées complètes de l'hébergeur sont disponibles sur simple demande à{' '}
        <a href="mailto:contact@quinova.fr">contact@quinova.fr</a>.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des éléments du site (textes, logo, identité graphique, interface) est protégé par le droit
        d'auteur. Toute reproduction sans autorisation écrite préalable est interdite.
      </p>

      <h2>Responsabilité</h2>
      <p>
        Quinova est fourni gratuitement, en l'état, sans garantie. L'éditeur décline toute responsabilité en cas
        d'indisponibilité, de perte de données, ou de mauvaise utilisation de l'outil dans le cadre de l'organisation
        d'un loto.
      </p>

      <h2>Don et financement</h2>
      <p>
        Quinova est gratuit. Les dons éventuels sont intégralement reversés à l'
        <b>association des parents d'élèves de l'école Georges Braque</b> (Montigny-lès-Cormeilles), qui finance à son
        tour les frais d'hébergement du site et les projets de l'école.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question&nbsp;: <Link href="/contact">formulaire de contact</Link> ou{' '}
        <a href="mailto:contact@quinova.fr">contact@quinova.fr</a>.
      </p>
      <p style={{ marginTop: 30, fontSize: 13, color: 'var(--q-fg-3)' }}>Dernière mise à jour&nbsp;: avril 2026.</p>
    </main>
  );
}
