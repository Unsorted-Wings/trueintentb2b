import type { Metadata } from 'next';
import ServiceTemplate from '@/components/service-template';

export const metadata: Metadata = {
  title: 'Lead Generation',
  description:
    'Fuel your funnel with high-intent, human-vetted leads. Manual account research, ICP targeting, human verification, and BANT qualification.',
};

export default function LeadGenerationPage() {
  return (
    <ServiceTemplate
      slug="lead-generation"
      name="Lead Generation"
      headline="Fuel your funnel with high-intent, human-vetted leads."
      intro="We don't just scrape lists. Our team manually researches and qualifies prospects to ensure they fit your Ideal Customer Profile (ICP). Our process includes:"
      points={[
        {
          title: 'Manual Account Research',
          body: "Understanding a prospect's business, recent news, and potential pain points before we reach out.",
        },
        {
          title: 'Targeted Account Profiling',
          body: 'Building look-alike audiences based on your best existing customers.',
        },
        {
          title: 'Human Verification',
          body: 'Every lead is touched and verified by a human being to ensure accuracy and relevance.',
        },
        {
          title: 'BANT Qualification',
          body: 'Our reps ask the right questions to ensure every lead has the Budget, Authority, Need, and Timeline to buy.',
        },
      ]}
    />
  );
}
