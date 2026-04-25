'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/#fonctionnalites', label: 'Fonctionnalités' },
  { href: '/#comment', label: 'Comment ça marche' },
  { href: '/#soutenir', label: 'Soutenir' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Navigation principale">
        <div className="nav-inner">
          <Link href="/" className="logo on-light" style={{ fontSize: 28 }} aria-label="Quinova — accueil">
            QUIN<span className="dot">O</span>VA
          </Link>

          <div className="nav-links" role="list">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} role="listitem">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="nav-cta">
            <a href="https://app.quinova.fr" className="btn btn-g btn-sm" rel="noopener noreferrer">
              Se connecter
            </a>
            <Link href="/organiser-un-loto" className="btn btn-p btn-sm">
              Lancer un loto
            </Link>
          </div>

          <button
            className="nav-burger"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`nav-mobile${open ? ' open' : ''}`} role="dialog" aria-label="Menu mobile">
        {NAV_LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <div className="nav-mobile-btns">
          <a href="https://app.quinova.fr" className="btn btn-g btn-sm" rel="noopener noreferrer">
            Se connecter
          </a>
          <Link href="/organiser-un-loto" className="btn btn-p btn-sm" onClick={() => setOpen(false)}>
            Lancer un loto
          </Link>
        </div>
      </div>
    </>
  );
}
