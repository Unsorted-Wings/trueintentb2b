import type { Metadata } from 'next';
import ServiceTemplate from '@/components/service-template';

export const metadata: Metadata = {
  title: 'Email Marketing',
  description:
    'Cold email that sounds like it came from a human — because it did. Conversational copywriting, hyper-personalization, and reply management.',
};

export default function EmailMarketingPage() {
  return (
    <ServiceTemplate
      slug="email-marketing"
      name="Email Marketing"
      headline="Cold email that sounds like it came from a human. Because it did."
      intro="We craft and execute email campaigns that cut through the noise by being deeply personal and conversational. We focus on:"
      points={[
        {
          title: 'Conversational Copywriting',
          body: 'Writing like we speak — no corporate jargon, just clear, compelling messages.',
        },
        {
          title: 'Hyper-Personalization',
          body: 'Referencing specific company news, recent LinkedIn posts, or industry challenges in every email.',
        },
        {
          title: 'Strategic Sequences',
          body: 'Multi-step cadences that read like a natural back-and-forth dialogue.',
        },
        {
          title: 'Human Reply Management',
          body: 'When a prospect replies, a real person picks up the conversation and guides them to a meeting.',
        },
      ]}
    />
  );
}
