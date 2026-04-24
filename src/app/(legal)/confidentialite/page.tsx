import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Quinova',
  description: 'Comment Quinova collecte, utilise et protège vos données personnelles.',
};

export default function ConfidentialitePage() {
  return (
    <main className="page">
      <div className="eyebrow">Légal · RGPD</div>
      <h1>Politique de confidentialité</h1>
      <p style={{ marginTop: 10 }}>
        Quinova traite vos données personnelles dans le strict respect du Règlement Général sur la Protection des
        Données (RGPD) et de la loi Informatique et Libertés.
      </p>

      <h2>Responsable du traitement</h2>
      <p>
        <b>Demba THIAM</b> — éditeur de Quinova — Montigny-lès-Cormeilles. Contact&nbsp;:{' '}
        <a href="mailto:dpo@quinova.fr">dpo@quinova.fr</a>.
      </p>

      <h2>Données collectées</h2>
      <ul>
        <li>
          <b>Compte</b>&nbsp;: nom, prénom, e-mail, mot de passe (haché).
        </li>
        <li>
          <b>Association</b>&nbsp;: nom, SIRET éventuel, adresse postale, rôle(s) attribué(s).
        </li>
        <li>
          <b>Sessions loto</b>&nbsp;: informations relatives à vos événements (titre, date, lieu, lots, inscrits).
        </li>
        <li>
          <b>Paiements</b>&nbsp;: identifiants de transaction (aucune donnée bancaire n'est stockée par Quinova).
        </li>
        <li>
          <b>Données techniques</b>&nbsp;: adresse IP, journaux de connexion (pour sécurité).
        </li>
      </ul>

      <h2>Finalités</h2>
      <ul>
        <li>Fournir et sécuriser le Service.</li>
        <li>Permettre l'organisation et le suivi de vos lotos.</li>
        <li>Gérer les paiements et la recette.</li>
        <li>Vous contacter en cas de problème d'exploitation.</li>
      </ul>

      <h2>Bases légales</h2>
      <p>
        Exécution du contrat (CGU), intérêt légitime (sécurité), consentement (cookies non-essentiels).
      </p>

      <h2>Durées de conservation</h2>
      <ul>
        <li>Compte actif&nbsp;: tant que le compte existe.</li>
        <li>Compte inactif depuis 3&nbsp;ans&nbsp;: suppression automatique.</li>
        <li>Journaux de connexion&nbsp;: 12&nbsp;mois.</li>
        <li>Données comptables (recettes)&nbsp;: 10&nbsp;ans (obligation légale).</li>
      </ul>

      <h2>Destinataires</h2>
      <p>
        Les données ne sont <b>jamais vendues</b>. Elles sont accessibles&nbsp;: à vous, à votre association (membres
        autorisés), et à nos sous-traitants techniques (hébergeur, prestataire de paiement) — tous situés en UE et
        encadrés contractuellement.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous disposez des droits d'accès, de rectification, d'effacement, de limitation, d'opposition et de
        portabilité&nbsp;— détaillés sur la page <Link href="/rgpd">Mes droits RGPD</Link>. Vous pouvez également
        introduire une réclamation auprès de la{' '}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
          CNIL
        </a>
        .
      </p>

      <h2>Sécurité</h2>
      <p>
        Chiffrement TLS de bout en bout, mots de passe hachés (bcrypt), sauvegardes chiffrées, accès restreint aux
        administrateurs autorisés.
      </p>

      <h2>Transferts hors UE</h2>
      <p>Aucun&nbsp;: données hébergées en France.</p>

      <p style={{ marginTop: 30, fontSize: 13, color: 'var(--q-fg-3)' }}>Dernière mise à jour&nbsp;: avril 2026.</p>
    </main>
  );
}
