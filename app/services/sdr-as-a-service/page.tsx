import type { Metadata } from 'next';
import ServiceTemplate from '@/components/service-template';

export const metadata: Metadata = {
  title: 'SDR as a Service',
  description:
    'A fully managed sales development team without the overhead. Recruiting, coaching, human oversight, and a predictable pipeline.',
};

export default function SdrAsAServicePage() {
  return (
    <ServiceTemplate
      slug="sdr-as-a-service"
      name="SDR as a Service"
      headline="A fully managed sales development team without the overhead."
      intro="Scale your outbound efforts instantly with a dedicated team of Sales Development Representatives (SDRs). We handle the heavy lifting:"
      points={[
        {
          title: 'Recruiting & Training',
          body: 'Building a team that understands your product, market, and tone of voice.',
        },
        {
          title: 'Day-to-Day Coaching',
          body: 'Continuous mentoring, call reviews, and strategy adjustments to improve performance.',
        },
        {
          title: 'Human Oversight',
          body: 'Real managers tracking quality assurance and pipeline generation — not just robotic activity metrics.',
        },
        {
          title: 'Predictable Pipeline',
          body: 'Delivering a steady stream of qualified opportunities month after month.',
        },
      ]}
    />
  );
}
