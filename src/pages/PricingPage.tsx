import { SeoHead } from '@/components/common/SeoHead';
import { SkyHero } from '@/components/heroes/SkyHero';
import { PricingSection } from '@/components/pricing/PricingSection';
import { FAQSection } from '@/components/faq/FAQSection';
import { FinalCloudCTA } from '@/components/cta/FinalCloudCTA';

export function PricingPage() {
  return (
    <>
      <SeoHead
        title="Pricing - Tidemark"
        description="Pick the retainer that matches your spend today. Move up or down any month after the first 90 days."
      />
      <SkyHero
        badge="Flat monthly fee, no markup on spend"
        title={
          <>
            Simple plans. Serious
            <br />
            growth.
          </>
        }
        subtitle="Pick the retainer that matches your spend today. Move up or down any month after the first 90 days."
      />
      <PricingSection showTable />
      <FAQSection />
      <FinalCloudCTA />
    </>
  );
}
