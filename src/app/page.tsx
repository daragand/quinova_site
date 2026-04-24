import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/CookieBanner';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ShowcaseSection from '@/components/sections/ShowcaseSection';
import LiveDrawSection from '@/components/sections/LiveDrawSection';
import AudiencesSection from '@/components/sections/AudiencesSection';
import PricingSection from '@/components/sections/PricingSection';
import DonationSection from '@/components/sections/DonationSection';
import FaqSection from '@/components/sections/FaqSection';
import FinalCtaSection from '@/components/sections/FinalCtaSection';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ShowcaseSection />
        <LiveDrawSection />
        <AudiencesSection />
        <PricingSection />
        <DonationSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
