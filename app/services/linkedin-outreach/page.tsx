import type { Metadata } from 'next';
import ServiceTemplate from '@/components/service-template';

export const metadata: Metadata = {
  title: 'LinkedIn Outreach',
  description:
    'Build relationships, not just connections. Profile optimization, thoughtful networking, value-first messaging, and community engagement.',
};

export default function LinkedinOutreachPage() {
  return (
    <ServiceTemplate
      image="/images/service-linkedin-outreach.jpg"
      slug="linkedin-outreach"
      name="LinkedIn Outreach"
      headline="Build relationships, not just connections."
      intro="We execute sophisticated social selling campaigns that bypass the inbox and start real conversations with decision-makers. Our approach includes:"
      points={[
        {
          title: 'Profile Optimization',
          body: "Making your team's profiles reflect your brand's personality and value proposition.",
        },
        {
          title: 'Thoughtful Networking',
          body: "Sending personalized connection requests that show we've actually read their profile.",
        },
        {
          title: 'Value-First Messaging',
          body: 'Sharing relevant industry insights and asking insightful questions before ever pitching.',
        },
        {
          title: 'Community Engagement',
          body: 'Participating in and contributing to industry groups on your behalf.',
        },
      ]}
    />
  );
}
