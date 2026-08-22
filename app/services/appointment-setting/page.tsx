import type { Metadata } from 'next';
import ServiceTemplate from '@/components/service-template';

export const metadata: Metadata = {
  title: 'Appointment Setting',
  description:
    'We book the meetings. You close the deals. Multi-channel outreach, objection handling, confirmations, and pre-meeting briefings.',
};

export default function AppointmentSettingPage() {
  return (
    <ServiceTemplate
      slug="appointment-setting"
      name="Appointment Setting"
      headline="We book the meetings. You close the deals."
      intro="Our trained sales development representatives handle the critical work of connecting with qualified leads and scheduling meetings directly on your calendar. We focus on:"
      points={[
        {
          title: 'Multi-Channel Outreach',
          body: 'Strategic cadences across phone, email, and LinkedIn — designed to start a conversation, not just blast a message.',
        },
        {
          title: 'Active Listening & Objection Handling',
          body: 'Our reps are trained to handle objections with empathy and pivot them into opportunities.',
        },
        {
          title: 'Meeting Confirmation & Reminders',
          body: 'Personal touchpoints to maximize show rates.',
        },
        {
          title: 'Pre-Meeting Briefings',
          body: 'We hand off the context of the conversation so your sales team is fully prepared.',
        },
      ]}
    />
  );
}
