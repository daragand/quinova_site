---
name: Quinova Site — contexte projet
description: Stack, structure et données clés du site portail Quinova (marketing/landing)
type: project
---

Site portail de Quinova (anciennement Quineo) — application gratuite d'organisation de lotos pour associations et particuliers.

**Why:** Présenter l'application et recueillir des dons pour l'école Georges Braque (Montigny-lès-Cormeilles). App 100% gratuite, sans pub.

**How to apply:** Toute modification doit respecter la maquette `aide/index.html` comme référence visuelle. Ne pas utiliser la charte sombre de l'app quineo — le portail est en thème clair (Bleu Ciel Doux).

## Stack

- Next.js 16.2.1 (App Router) · TypeScript strict
- Tailwind CSS v4 + CSS variables (`--q-*` dans globals.css)
- Icônes : lucide-react
- Polices : @fontsource/nunito + @fontsource/nunito-sans (self-hosted)
- Pas de dangerouslySetInnerHTML nulle part
- `src/app/page.tsx` assemble les sections

## Structure src/

```
src/
  app/
    globals.css       ← Tokens CSS (--q-*) + toutes les classes du portail
    layout.tsx
    page.tsx          ← assemble les 10 sections
  components/
    layout/Nav.tsx    ← client, hamburger mobile, sticky glassmorphism
    layout/Footer.tsx ← dark footer, 5 colonnes
    CookieBanner.tsx  ← client, localStorage quinova:ck
    sections/
      HeroSection.tsx
      FeaturesSection.tsx
      HowItWorksSection.tsx
      ShowcaseSection.tsx
      LiveDrawSection.tsx
      AudiencesSection.tsx
      PricingSection.tsx
      DonationSection.tsx   ← client (sélection montant)
      FaqSection.tsx        ← details/summary natif
      FinalCtaSection.tsx
```

## Pages légales

Fichiers HTML statiques dans `public/aide/` (servis à `/aide/`).
Source dans `aide/` à la racine (référence design).

## Identité de marque

- Nom affiché : `QUIN<span class="dot">O</span>VA` — le O est orange (#F97B4B)
- Slogan : "L'application gratuite pour organiser vos lotos"
- App URL : https://app.quinova.fr
- Créateur : Demba THIAM (parent bénévole)
- Bénéficiaire des dons : APE école Georges Braque, Montigny-lès-Cormeilles
