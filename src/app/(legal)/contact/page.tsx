import ContactForm from '@/components/sections/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Quinova',
  description: "Contactez l'équipe Quinova pour toute question ou signalement.",
};

export default function ContactPage() {
  return <ContactForm />;
}
