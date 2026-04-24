import Link from 'next/link';

const PRODUCT_LINKS = [
  { href: '#fonctionnalites', label: 'Fonctionnalités' },
  { href: '#comment', label: 'Comment ça marche' },
  { href: 'https://app.quinova.fr', label: 'Se connecter', external: true },
  { href: 'https://app.quinova.fr', label: 'Créer un loto', external: true },
];

const SUPPORT_LINKS = [
  { href: '#soutenir', label: 'Faire un don' },
  { href: '#soutenir', label: 'Le créateur' },
  { href: '#soutenir', label: 'École G. Braque' },
];

const LEGAL_LINKS = [
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/cgu', label: 'CGU' },
  { href: '/confidentialite', label: 'Confidentialité' },
  { href: '/cookies', label: 'Cookies' },
  { href: '/rgpd', label: 'Mes droits (RGPD)' },
];

const SITE_LINKS = [
  { href: '/plan-du-site', label: 'Plan du site' },
  { href: '/contact', label: 'Contact' },
  { href: 'https://app.quinova.fr', label: 'app.quinova.fr', external: true },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string; external?: boolean }[];
}) {
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {links.map((l) => (
          <li key={l.href + l.label}>
            {l.external ? (
              <a href={l.href} rel="noopener noreferrer">
                {l.label}
              </a>
            ) : (
              <Link href={l.href}>{l.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <svg
        className="wave-top"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ height: 70 }}
        aria-hidden="true"
      >
        <path fill="#FFFFFF" d="M0,50 C240,0 480,100 720,60 C960,20 1200,80 1440,50 L1440,0 L0,0 Z" />
      </svg>

      <div className="footer-inner">
        <div>
          <Link href="/" className="logo on-dark" style={{ fontSize: 30, marginBottom: 12, display: 'inline-block' }}>
            QUIN<span className="dot">O</span>VA
          </Link>
          <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, maxWidth: 320, marginTop: 12 }}>
            L'application gratuite pour organiser vos lotos en toute simplicité — pour les associations et les
            particuliers.
          </p>
          <div
            style={{
              marginTop: 14,
              fontFamily: 'var(--q-font-d)',
              fontWeight: 700,
              fontSize: 12,
              color: 'rgba(255,255,255,.45)',
            }}
          >
            Fait avec <span style={{ color: 'var(--q-orange)' }}>♥</span> à Montigny-lès-Cormeilles
          </div>
        </div>

        <FooterColumn title="Produit" links={PRODUCT_LINKS} />
        <FooterColumn title="Soutenir" links={SUPPORT_LINKS} />
        <FooterColumn title="Légal" links={LEGAL_LINKS} />
        <FooterColumn title="Site" links={SITE_LINKS} />
      </div>

      <div className="footer-bottom">
        <div>© 2025 Quinova · Tous droits réservés</div>
        <div>quinova.fr · app.quinova.fr</div>
      </div>
    </footer>
  );
}
