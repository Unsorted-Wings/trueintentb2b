import type { Metadata } from 'next';
import ServiceTemplate from '@/components/service-template';

export const metadata: Metadata = {
  title: 'CRM Management',
  description:
    'Clean data. Clear pipeline. Human oversight. Data cleansing, custom routing rules, workflow optimization, and pipeline hygiene.',
};

export default function CrmManagementPage() {
  return (
    <ServiceTemplate
      slug="crm-management"
      name="CRM Management"
      headline="Clean data. Clear pipeline. Human oversight."
      intro="A leaky CRM costs you money. We ensure your data is an asset, not a liability. Our human experts manage your systems with care:"
      points={[
        {
          title: 'Data Cleansing & Deduplication',
          body: 'Manually reviewing and correcting records to ensure your team is working with accurate information.',
        },
        {
          title: 'Custom Routing Rules',
          body: 'Ensuring the right lead gets to the right sales rep at the right time based on territory, account size, or industry.',
        },
        {
          title: 'Workflow Optimization',
          body: 'Streamlining your CRM processes so your sales team spends less time on admin work and more time selling.',
        },
        {
          title: 'Pipeline Hygiene',
          body: 'Regular audits to ensure deals are moving through the stages accurately.',
        },
      ]}
    />
  );
}
