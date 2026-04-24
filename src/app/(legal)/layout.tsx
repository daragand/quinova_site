import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main id="main-content" style={{ paddingTop: 72 }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
