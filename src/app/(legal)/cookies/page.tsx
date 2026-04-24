'use client';

import { useState } from 'react';

export default function CookiesPage() {
  const [prefs, setPrefs] = useState(true);
  const [stats, setStats] = useState(false);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function acceptAll() {
    setPrefs(true);
    setStats(true);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function rejectAll() {
    setPrefs(false);
    setStats(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <main className="page">
      <div className="eyebrow">Légal · RGPD</div>
      <h1>Gestion des cookies</h1>
      <p style={{ marginTop: 10 }}>
        Quinova utilise uniquement les cookies strictement nécessaires au bon fonctionnement du service.{' '}
        <b>Aucun cookie publicitaire, aucun traceur tiers.</b>
      </p>

      <h2>Vos préférences</h2>

      <div className="ck-row">
        <div className="ck-info">
          <h3>Cookies essentiels</h3>
          <p>Session, connexion, sécurité. Indispensables — ne peuvent pas être désactivés.</p>
        </div>
        <button
          className="tog locked"
          aria-label="Toujours actif"
          aria-pressed={true}
          disabled
        />
      </div>

      <div className="ck-row">
        <div className="ck-info">
          <h3>Cookies de préférences</h3>
          <p>Mémorisent votre langue, votre thème, votre dernier loto consulté.</p>
        </div>
        <button
          className={`tog${prefs ? ' on' : ''}`}
          aria-label={prefs ? 'Désactiver les cookies de préférences' : 'Activer les cookies de préférences'}
          aria-pressed={prefs}
          onClick={() => setPrefs((v) => !v)}
        />
      </div>

      <div className="ck-row">
        <div className="ck-info">
          <h3>Statistiques anonymes</h3>
          <p>Nous aident à comprendre l'usage du service (sans identification individuelle).</p>
        </div>
        <button
          className={`tog${stats ? ' on' : ''}`}
          aria-label={stats ? 'Désactiver les statistiques' : 'Activer les statistiques'}
          aria-pressed={stats}
          onClick={() => setStats((v) => !v)}
        />
      </div>

      <div className="ck-row">
        <div className="ck-info">
          <h3>Publicité / traçage tiers</h3>
          <p>Quinova n'en utilise pas. Verrouillé sur «&nbsp;désactivé&nbsp;».</p>
        </div>
        <button
          className="tog"
          aria-label="Non disponible"
          aria-pressed={false}
          disabled
          style={{ opacity: 0.4, cursor: 'not-allowed' }}
        />
      </div>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 14, alignItems: 'center' }}>
        <button className="btn btn-p btn-sm" onClick={handleSave}>
          Enregistrer mes préférences
        </button>
        <button className="btn btn-o btn-sm" onClick={acceptAll}>
          Tout accepter
        </button>
        <button className="btn btn-g btn-sm" onClick={rejectAll}>
          Tout refuser (sauf essentiels)
        </button>
        {saved && (
          <span style={{ fontSize: 13, color: 'var(--q-blue-d)', fontFamily: 'var(--q-font-d)', fontWeight: 700 }}>
            ✓ Préférences enregistrées
          </span>
        )}
      </div>

      <h2>Détail des cookies déposés</h2>
      <table className="ck-tbl">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Finalité</th>
            <th>Durée</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>quinova_session</td>
            <td>Session utilisateur</td>
            <td>Session</td>
          </tr>
          <tr>
            <td>quinova_csrf</td>
            <td>Protection anti-CSRF</td>
            <td>Session</td>
          </tr>
          <tr>
            <td>quinova_prefs</td>
            <td>Préférences d'affichage</td>
            <td>12 mois</td>
          </tr>
          <tr>
            <td>quinova:ck</td>
            <td>Mémorisation du bandeau cookie</td>
            <td>12 mois</td>
          </tr>
        </tbody>
      </table>

      <p style={{ fontSize: 13, color: 'var(--q-fg-3)' }}>Dernière mise à jour&nbsp;: avril 2026.</p>
    </main>
  );
}
