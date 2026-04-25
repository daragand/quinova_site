'use client';
import { useEffect } from 'react';

const TARGETS = [
  '.section-head',
  '.features',
  '.steps',
  '.showcase',
  '.draw-vis',
  '.aud',
  '.price',
  '.don',
  '.faq',
  '.final-cta',
].join(',');

export default function ScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add('js-anim');

    const elements = Array.from(document.querySelectorAll<HTMLElement>(TARGETS));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
