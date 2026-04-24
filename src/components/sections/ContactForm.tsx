'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { Mail, MapPin, Info } from 'lucide-react';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';

type FormState = 'idle' | 'loading' | 'sent' | 'error';

const CONTACT_CARDS = [
  {
    icon: Mail,
    title: 'E-mail général',
    content: <a href="mailto:contact@quinova.fr">contact@quinova.fr</a>,
    iconStyle: {},
  },
  {
    icon: MapPin,
    title: 'Adresse',
    content: (
      <>
        Montigny-lès-Cormeilles (95)
        <br />
        France
      </>
    ),
    iconStyle: { background: '#FFF0EA', color: '#B84000' },
  },
  {
    icon: Info,
    title: 'DPO / RGPD',
    content: <a href="mailto:dpo@quinova.fr">dpo@quinova.fr</a>,
    iconStyle: { background: '#FFF7D6', color: '#7A5000' },
  },
];

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [subject, setSubject] = useState('Question générale');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [assoc, setAssoc] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!token) return;
    setFormState('loading');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, subject, firstName, lastName, email, assoc, message }),
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
    <div className="contact-layout">
      <div className="contact-info">
        <div className="eyebrow">Contact</div>
        <h1 style={{ fontSize: 44 }}>
          Une question&nbsp;?
          <br />
          Écrivez-nous.
        </h1>
        <p style={{ margin: '14px 0 26px', fontSize: 16 }}>
          Nous répondons sous 48 heures ouvrées. Pour l'exercice des droits RGPD, utilisez la{' '}
          <Link href="/rgpd">page dédiée</Link>.
        </p>

        {CONTACT_CARDS.map(({ icon: Icon, title, content, iconStyle }) => (
          <div key={title} className="contact-card">
            <div className="contact-card-ic" style={iconStyle}>
              <Icon size={20} />
            </div>
            <div>
              <h3>{title}</h3>
              <p>{content}</p>
            </div>
          </div>
        ))}
      </div>

      {formState === 'sent' ? (
        <div className="form-big" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', padding: '50px 0' }}>
            <div style={{ fontSize: 56 }}>✓</div>
            <h2 style={{ marginTop: 10 }}>Message envoyé&nbsp;!</h2>
            <p style={{ color: 'var(--q-fg-2)', marginTop: 10 }}>
              Nous revenons vers vous sous 48 heures ouvrées.
            </p>
          </div>
        </div>
      ) : (
        <form className="form-big" onSubmit={handleSubmit}>
          <label htmlFor="ct-subject">Sujet</label>
          <select id="ct-subject" value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option>Question générale</option>
            <option>Aide à l'utilisation</option>
            <option>Signaler un bug</option>
            <option>Partenariat / presse</option>
            <option>Autre</option>
          </select>

          <div className="row2">
            <div>
              <label htmlFor="ct-firstname">Prénom</label>
              <input
                id="ct-firstname"
                type="text"
                placeholder="Marie"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="ct-lastname">Nom</label>
              <input
                id="ct-lastname"
                type="text"
                placeholder="Dupont"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <label htmlFor="ct-email">E-mail</label>
          <input
            id="ct-email"
            type="email"
            placeholder="marie.dupont@exemple.fr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="ct-assoc">Association (facultatif)</label>
          <input
            id="ct-assoc"
            type="text"
            placeholder="Amicale du Val · APE École G. Braque…"
            value={assoc}
            onChange={(e) => setAssoc(e.target.value)}
          />

          <label htmlFor="ct-message">Votre message</label>
          <textarea
            id="ct-message"
            placeholder="Bonjour, je souhaite organiser un loto pour…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <div className="rgpd-box">
            🔒 En envoyant ce formulaire, vous acceptez que vos données soient utilisées uniquement pour répondre à
            votre demande — conformément à notre{' '}
            <Link href="/confidentialite">politique de confidentialité</Link>. Vous pouvez à tout moment exercer vos{' '}
            <Link href="/rgpd">droits RGPD</Link>.
          </div>

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
            className="btn btn-p btn-lg"
            disabled={!token || formState === 'loading'}
            aria-disabled={!token || formState === 'loading'}
          >
            {formState === 'loading' ? 'Envoi…' : 'Envoyer le message'}
          </button>
        </form>
      )}
    </div>
  );
}
