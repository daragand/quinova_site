import type { Metadata } from 'next';
import './globals.css';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Quinova — Gérez vos lotos associatifs en toute simplicité',
  description:
    "Quinova est l'application gratuite qui aide les associations et les particuliers à organiser un loto de A à Z : sessions, lots, cartons, tirage en direct et paiements.",
  keywords: 'loto, association, organisateur, tirage, cartons, gratuit, quinova',
  openGraph: {
    title: 'Quinova — Gérez vos lotos associatifs en toute simplicité',
    description: "L'application gratuite pour organiser vos lotos — pour les associations et les particuliers.",
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <ScrollToTop />
        <ScrollReveal />
      </body>
    </html>
  );
}
