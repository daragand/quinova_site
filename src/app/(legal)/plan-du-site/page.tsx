import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plan du site — Quinova',
  description: "Toutes les pages du site quinova.fr et de l'application app.quinova.fr.",
};

const APP_URL = 'https://app.quinova.fr';

export default function PlanDuSitePage() {
  return (
    <>
      <section className="tree-hero">
        <div className="tree-hero-inner">
          <div className="eyebrow">Arborescence</div>
          <h1>Plan du site</h1>
          <p style={{ marginTop: 12, maxWidth: 660, fontSize: 17 }}>
            L'intégralité des pages et sections du site <b>quinova.fr</b> et de l'application{' '}
            <b>app.quinova.fr</b>. Utilisez-le comme repère rapide.
          </p>
        </div>
      </section>

      <section className="sitemap">
        <div className="sitemap-grid">

          <div className="sm-col">
            <h3>
              <span className="sm-dot" style={{ background: 'var(--q-blue)' }} />
              Site public
            </h3>
            <div className="sub">quinova.fr</div>
            <ul>
              <li>
                <Link href="/">Accueil</Link>
                <ul>
                  <li><Link href="/#fonctionnalites">Fonctionnalités</Link></li>
                  <li><Link href="/#comment">Comment ça marche</Link></li>
                  <li><Link href="/#soutenir">Soutenir le projet</Link></li>
                </ul>
              </li>
              <li>
                <Link href="/#fonctionnalites">Fonctionnalités</Link>
                <ul>
                  <li><Link href="/#fonctionnalites">Déclaration de session</Link></li>
                  <li><Link href="/#fonctionnalites">Gestion des lots</Link></li>
                  <li><Link href="/#fonctionnalites">Cartons automatiques</Link></li>
                  <li><Link href="/#fonctionnalites">Tirage en direct</Link></li>
                  <li><Link href="/#fonctionnalites">Paiements</Link></li>
                  <li><Link href="/#fonctionnalites">Participants &amp; équipe</Link></li>
                </ul>
              </li>
              <li><Link href="/#comment">Comment ça marche</Link></li>
              <li><Link href="/#soutenir">Associations &amp; particuliers</Link></li>
              <li><Link href="/#soutenir">Faire un don</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="sm-col">
            <h3>
              <span className="sm-dot" style={{ background: 'var(--q-orange)' }} />
              Application
            </h3>
            <div className="sub">app.quinova.fr</div>
            <ul>
              <li>
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">Connexion / Inscription</a>
                <ul>
                  <li><a href={APP_URL} target="_blank" rel="noopener noreferrer">Créer un compte</a></li>
                  <li><a href={APP_URL} target="_blank" rel="noopener noreferrer">Mot de passe oublié</a></li>
                </ul>
              </li>
              <li><a href={APP_URL} target="_blank" rel="noopener noreferrer">Tableau de bord</a></li>
              <li>
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">Mes lotos</a>
                <ul>
                  <li><a href={APP_URL} target="_blank" rel="noopener noreferrer">Créer une session</a></li>
                  <li><a href={APP_URL} target="_blank" rel="noopener noreferrer">Lots &amp; gains</a></li>
                  <li><a href={APP_URL} target="_blank" rel="noopener noreferrer">Générer les cartons</a></li>
                  <li><a href={APP_URL} target="_blank" rel="noopener noreferrer">Participants</a></li>
                  <li><a href={APP_URL} target="_blank" rel="noopener noreferrer">Écran de tirage</a></li>
                </ul>
              </li>
              <li>
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">Paiements &amp; recette</a>
                <ul>
                  <li><a href={APP_URL} target="_blank" rel="noopener noreferrer">Encaissements</a></li>
                  <li><a href={APP_URL} target="_blank" rel="noopener noreferrer">Exports comptables</a></li>
                </ul>
              </li>
              <li>
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">Mon association</a>
                <ul>
                  <li><a href={APP_URL} target="_blank" rel="noopener noreferrer">Membres &amp; rôles</a></li>
                  <li><a href={APP_URL} target="_blank" rel="noopener noreferrer">Historique des sessions</a></li>
                </ul>
              </li>
              <li>
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">Mon compte</a>
                <ul>
                  <li><a href={APP_URL} target="_blank" rel="noopener noreferrer">Profil</a></li>
                  <li><a href={APP_URL} target="_blank" rel="noopener noreferrer">Préférences</a></li>
                  <li><Link href="/rgpd">Mes données (RGPD)</Link></li>
                </ul>
              </li>
              <li><a href={APP_URL} target="_blank" rel="noopener noreferrer">Aide &amp; support</a></li>
            </ul>
          </div>

          <div className="sm-col">
            <h3>
              <span className="sm-dot" style={{ background: 'var(--q-yellow)' }} />
              Légal &amp; RGPD
            </h3>
            <div className="sub">Informations réglementaires</div>
            <ul>
              <li><Link href="/mentions-legales">Mentions légales</Link></li>
              <li><Link href="/cgu">Conditions Générales d'Utilisation</Link></li>
              <li><Link href="/confidentialite">Politique de confidentialité</Link></li>
              <li><Link href="/cookies">Gestion des cookies</Link></li>
              <li>
                <Link href="/rgpd">Mes droits RGPD</Link>
                <ul>
                  <li><Link href="/rgpd">Droit d'accès</Link></li>
                  <li><Link href="/rgpd">Droit de rectification</Link></li>
                  <li><Link href="/rgpd">Droit à l'effacement</Link></li>
                  <li><Link href="/rgpd">Droit à la portabilité</Link></li>
                  <li><Link href="/rgpd">Droit d'opposition</Link></li>
                </ul>
              </li>
              <li><Link href="/contact">Contacter le DPO</Link></li>
              <li><Link href="/plan-du-site">Plan du site</Link></li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
