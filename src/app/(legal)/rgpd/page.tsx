'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';

const RIGHTS = [
  {
    n: '1',
    title: "Droit d'accès",
    desc: 'Obtenir la copie intégrale des données qui vous concernent, dans un format lisible.',
  },
  {
    n: '2',
    title: 'Droit de rectification',
    desc: 'Corriger toute information inexacte ou incomplète vous concernant.',
  },
  {
    n: '3',
    title: "Droit à l'effacement",
    desc: "Demander la suppression de votre compte et de vos données (« droit à l'oubli »).",
  },
  {
    n: '4',
    title: 'Droit à la portabilité',
    desc: 'Récupérer vos données dans un format structuré (JSON / CSV) pour les réutiliser ailleurs.',
  },
  {
    n: '5',
    title: 'Droit à la limitation',
    desc: 'Demander la suspension temporaire du traitement de vos données.',
  },
  {
    n: '6',
    title: "Droit d'opposition",
    desc: 'Vous opposer, pour motif légitime, à un traitement vous concernant.',
  },
];

type FormState = 'idle' | 'loading' | 'sent' | 'error';

export default function RgpdPage() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [right, setRight] = useState('Accès à mes données');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [token, setToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!token) return;
    setFormState('loading');

    const res = await fetch('/api/rgpd', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, right, email, details }),
    });

    if (res.ok) {
      setFormState('sent');
    } else {
      setFormState('error');
      turnstileRef.current?.reset();
      setToken(null);
    }
  }

  return (
    <main className="page">
      <div className="eyebrow">RGPD</div>
      <h1>Mes droits sur mes données</h1>
      <p style={{ marginTop: 10 }}>
        Conformément au RGPD, vous disposez de droits étendus sur vos données personnelles. Voici ce que Quinova vous
        garantit et comment les exercer.
      </p>

      <h2>Vos 6 droits</h2>
      <div className="rights">
        {RIGHTS.map(({ n, title, desc }) => (
          <div key={n} className="right">
            <h3>
              <span className="right-ic">{n}</span>
              {title}
            </h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>

      <h2>Exercer un droit</h2>
      <p>
        Deux options&nbsp;: depuis votre compte (
        <a href="https://app.quinova.fr" target="_blank" rel="noopener noreferrer">
          Mon compte → Mes données RGPD
        </a>
        ), ou via le formulaire ci-dessous. Réponse garantie sous <b>30 jours</b>.
      </p>

      {formState === 'sent' ? (
        <div className="legal-form" style={{ textAlign: 'center', padding: '50px 0' }}>
          <div style={{ fontSize: 44 }}>✓</div>
          <h3 style={{ marginTop: 10 }}>Demande envoyée</h3>
          <p style={{ color: 'var(--q-fg-2)', marginTop: 6 }}>Notre DPO vous recontacte sous 30 jours.</p>
        </div>
      ) : (
        <form className="legal-form" onSubmit={handleSubmit}>
          <label htmlFor="rgpd-right">Droit à exercer</label>
          <select id="rgpd-right" value={right} onChange={(e) => setRight(e.target.value)}>
            <option>Accès à mes données</option>
            <option>Rectification</option>
            <option>Effacement / suppression de compte</option>
            <option>Portabilité</option>
            <option>Limitation</option>
            <option>Opposition</option>
          </select>

          <label htmlFor="rgpd-email">Votre e-mail (identifiant du compte)</label>
          <input
            id="rgpd-email"
            type="email"
            placeholder="vous@exemple.fr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="rgpd-details">Précisions (facultatif)</label>
          <textarea
            id="rgpd-details"
            placeholder="Détaillez votre demande si besoin…"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />

          <Turnstile
            ref={turnstileRef}
            siteKey={SITE_KEY}
            onSuccess={setToken}
            onExpire={() => setToken(null)}
            onError={() => setToken(null)}
            options={{ theme: 'light', language: 'fr' }}
            style={{ margin: '6px 0 14px' }}
          />

          {formState === 'error' && (
            <p style={{ color: '#c0392b', fontSize: 13, marginBottom: 10 }}>
              Une erreur est survenue. Veuillez réessayer.
            </p>
          )}

          <button
            type="submit"
            className="btn btn-p"
            disabled={!token || formState === 'loading'}
            aria-disabled={!token || formState === 'loading'}
          >
            {formState === 'loading' ? 'Envoi…' : 'Envoyer ma demande'}
          </button>
        </form>
      )}

      <h2 style={{ marginTop: 40 }}>Réclamation auprès de la CNIL</h2>
      <p>
        Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la{' '}
        <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer">
          CNIL
        </a>
        .
      </p>

      <p style={{ marginTop: 30, fontSize: 13, color: 'var(--q-fg-3)' }}>
        DPO&nbsp;: <a href="mailto:dpo@quinova.fr">dpo@quinova.fr</a> · Dernière mise à jour&nbsp;: avril 2026.
      </p>
    </main>
  );
}
