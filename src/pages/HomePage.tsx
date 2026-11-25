import { SeoHead } from '@/components/common/SeoHead';
import { HomeHero } from '@/components/heroes/HomeHero';
import { MetricsSection } from '@/components/common/MetricsSection';
import { ServiceBentoGrid } from '@/components/services/ServiceBentoGrid';
import { GrowthProcess } from '@/components/process/GrowthProcess';
import { IntegrationEcosystem } from '@/components/integrations/IntegrationEcosystem';
import { FeaturedResultCarousel } from '@/components/results/FeaturedResultCarousel';
import { TestimonialSection } from '@/components/testimonials/TestimonialSection';
import { PricingSection } from '@/components/pricing/PricingSection';
import { FAQSection } from '@/components/faq/FAQSection';
import { FinalCloudCTA } from '@/components/cta/FinalCloudCTA';

export function HomePage() {
  return (
    <>
      <SeoHead
        title="Tidemark - Revenue-First Growth Marketing Agency"
        description="Tidemark is a growth marketing agency. Paid search, paid social, SEO and lifecycle, reported in revenue every week."
      />
      <HomeHero />
      <MetricsSection />
      <ServiceBentoGrid />
      <GrowthProcess />
      <IntegrationEcosystem />
      <FeaturedResultCarousel />
      <TestimonialSection />
      <PricingSection showTable />
      <FAQSection />
      <FinalCloudCTA />
    </>
  );
}
