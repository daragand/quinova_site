'use client';

import { useState } from 'react';

const AMOUNTS = ['5 €', '15 €', '30 €', '50 €', '100 €', 'Libre'];
const DEFAULT_IDX = 1;
const HELLOASSO_BASE =
  'https://www.helloasso.com/associations/association-de-parents-d-eleves-de-l-ecole-georges-braque/formulaires/1';

function buildUrl(idx: number): string {
  const raw = AMOUNTS[idx].replace(' €', '').trim();
  if (raw === 'Libre') return HELLOASSO_BASE;
  return `${HELLOASSO_BASE}?amount=${raw}`;
}

export default function DonationSection() {
  const [selected, setSelected] = useState(DEFAULT_IDX);

  return (
    <section className="section" id="soutenir" aria-labelledby="don-heading">
      <div className="section-head">
        <div className="eyebrow">05 — Soutenir le projet</div>
        <h2 id="don-heading">Un don, deux bonnes causes</h2>
      </div>

      <div className="don">
        {/* ── Left: story ── */}
        <div className="don-l">
          <div className="eyebrow">Qui est derrière Quinova ?</div>
          <h2 style={{ fontSize: 30 }}>Un créateur, une école, une communauté.</h2>
          <p>
            Quinova est développé par <strong>Demba THIAM</strong>, parent d'élève bénévole. L'application restera
            toujours gratuite — mais l'hébergement, lui, a un coût.
          </p>
          <p>
            <strong>L'intégralité des dons</strong> est reversée à l'
            <strong>association des parents d'élèves de l'école Georges Braque</strong> à Montigny-lès-Cormeilles, pour
            financer les projets de l'école <strong>et</strong> l'hébergement du site et de l'application.
          </p>
          <div className="don-author">
            <div className="av" aria-hidden="true">DT</div>
            <div>
              <div className="n">Demba THIAM</div>
              <div className="r">Créateur · bénévole · parent d'élève</div>
            </div>
          </div>
        </div>

        {/* ── Right: donation form ── */}
        <div className="don-r">
          <h3>Faire un don</h3>
          <div className="don-amounts" role="group" aria-label="Choisir un montant">
            {AMOUNTS.map((amt, i) => (
              <button
                key={amt}
                type="button"
                className={`don-amt${selected === i ? ' on' : ''}`}
                onClick={() => setSelected(i)}
                aria-pressed={selected === i}
              >
                {amt}
              </button>
            ))}
          </div>
          <a
            href={buildUrl(selected)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-w btn-lg"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Je soutiens le projet
          </a>
          <div className="don-why">
            <strong>Où va votre don ?</strong>
            <br />
            100 % des fonds → association des parents d'élèves de l'école Georges Braque (Montigny-lès-Cormeilles).
            L'association prend ensuite en charge les frais d'hébergement de quinova.fr et app.quinova.fr, et finance les
            projets scolaires (sorties, matériel, kermesse).
          </div>
        </div>
      </div>
    </section>
  );
}
