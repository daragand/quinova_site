'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'quinova:ck';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'ok');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="ck-banner" role="dialog" aria-label="Gestion des cookies" aria-live="polite">
      <div
        style={{
          fontFamily: 'var(--q-font-d)',
          fontWeight: 900,
          fontSize: 15,
          marginBottom: 6,
        }}
      >
        🍪 Un mot sur les cookies
      </div>
      <p style={{ fontSize: 13, lineHeight: 1.5, marginBottom: 12 }}>
        Quinova utilise uniquement les cookies strictement nécessaires au bon fonctionnement du site. Aucun traçage
        publicitaire.{' '}
        <Link href="/cookies" style={{ color: 'var(--q-blue-d)' }}>
          En savoir plus
        </Link>
        .
      </p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button className="btn btn-p btn-sm" onClick={accept}>
          J'ai compris
        </button>
        <Link href="/cookies" className="btn btn-g btn-sm">
          Paramétrer
        </Link>
      </div>
    </div>
  );
}
