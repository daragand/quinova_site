import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CGU — Quinova',
  description: "Conditions Générales d'Utilisation du service Quinova.",
};

export default function CguPage() {
  return (
    <main className="page">
      <div className="eyebrow">Légal</div>
      <h1>Conditions Générales d'Utilisation</h1>
      <p style={{ marginTop: 10 }}>
        Les présentes CGU régissent l'utilisation du site <b>quinova.fr</b> et de l'application{' '}
        <b>app.quinova.fr</b> (ci-après «&nbsp;le Service&nbsp;»).
      </p>

      <h2>1. Objet</h2>
      <p>
        Le Service permet aux associations et aux particuliers d'organiser un loto&nbsp;: déclaration de session,
        gestion des lots, génération automatique des cartons, suivi du tirage en direct et gestion des paiements.
      </p>

      <h2>2. Accès &amp; gratuité</h2>
      <p>
        Le Service est fourni <b>gratuitement</b>. L'accès nécessite la création d'un compte. L'éditeur se réserve le
        droit de suspendre l'accès en cas d'usage abusif (fraude, spam, contenus illicites).
      </p>

      <h2>3. Compte utilisateur</h2>
      <p>
        L'utilisateur s'engage à fournir des informations exactes et à préserver la confidentialité de ses
        identifiants. Toute activité réalisée depuis un compte engage son titulaire.
      </p>

      <h2>4. Usage conforme</h2>
      <p>
        L'utilisateur s'engage à respecter la législation française applicable aux lotos organisés par les associations
        à but non lucratif (art. L322-3 du Code de la sécurité intérieure), notamment les règles de déclaration
        préalable et de plafond des mises.
      </p>

      <h2>5. Paiements</h2>
      <p>
        Les paiements en ligne éventuellement encaissés via le Service transitent par un prestataire de paiement
        agréé. Quinova ne conserve aucune donnée bancaire.
      </p>

      <h2>6. Données personnelles</h2>
      <p>
        Le traitement des données personnelles est détaillé dans la{' '}
        <Link href="/confidentialite">politique de confidentialité</Link> et conforme au RGPD.
      </p>

      <h2>7. Propriété intellectuelle</h2>
      <p>
        Le contenu du Service est protégé. Les données saisies par l'utilisateur restent sa propriété exclusive.
      </p>

      <h2>8. Responsabilité</h2>
      <p>
        Le Service est fourni en l'état, sans garantie de disponibilité ni de résultat. L'éditeur ne peut être tenu
        responsable d'un dommage indirect lié à l'utilisation du Service.
      </p>

      <h2>9. Don</h2>
      <p>
        Les dons effectués via le Service sont libres et intégralement reversés à l'association des parents d'élèves
        de l'école Georges Braque (Montigny-lès-Cormeilles). Ils ne donnent pas droit à reçu fiscal.
      </p>

      <h2>10. Modification des CGU</h2>
      <p>
        L'éditeur peut modifier les présentes CGU à tout moment. Les utilisateurs en sont informés par e-mail ou
        notification in-app.
      </p>

      <h2>11. Droit applicable</h2>
      <p>
        Les présentes CGU sont soumises au droit français. Tout litige relève de la compétence des tribunaux français.
      </p>

      <p style={{ marginTop: 30, fontSize: 13, color: 'var(--q-fg-3)' }}>Dernière mise à jour&nbsp;: avril 2026.</p>
    </main>
  );
}
