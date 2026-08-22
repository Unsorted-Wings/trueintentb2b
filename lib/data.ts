export const services = [
  {
    slug: "lead-generation",
    name: "Lead Generation",
    short: "Fuel your funnel with high-intent, human-vetted leads.",
    icon: "Filter",
  },
  {
    slug: "appointment-setting",
    name: "Appointment Setting",
    short: "We book the meetings. You close the deals.",
    icon: "CalendarCheck",
  },
  {
    slug: "sdr-as-a-service",
    name: "SDR as a Service",
    short: "A fully managed sales development team without the overhead.",
    icon: "Users",
  },
  {
    slug: "crm-management",
    name: "CRM Management",
    short: "Clean data. Clear pipeline. Human oversight.",
    icon: "Database",
  },
  {
    slug: "linkedin-outreach",
    name: "LinkedIn Outreach",
    short: "Build relationships, not just connections.",
    icon: "Linkedin",
  },
  {
    slug: "email-marketing",
    name: "Email Marketing",
    short: "Cold email that sounds like it came from a human. Because it did.",
    icon: "Mail",
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

export const industries = [
  {
    name: "Manufacturing",
    blurb:
      "We connect with plant managers, procurement officers, and supply chain directors — speaking their language of efficiency, yield, and operational uptime.",
  },
  {
    name: "Healthcare",
    blurb:
      "We navigate complex compliance (HIPAA) and connect with hospital administrators and clinic owners, focusing on patient outcomes and cost reduction.",
  },
  {
    name: "Food & Beverage",
    blurb:
      "We get your products on shelves and in contracts, building relationships with distributors, hospitality groups, and retail buyers based on quality and margins.",
  },
  {
    name: "SaaS",
    blurb:
      "We shorten your sales cycle, helping B2B SaaS companies reach CTOs, VPs of Engineering, and Founders with messaging that highlights integration, scalability, and ROI.",
  },
  {
    name: "Logistics",
    blurb:
      "We connect with freight forwarders, fleet managers, and supply chain executives, addressing volatile market challenges with tangible solutions.",
  },
  {
    name: "Financial Services",
    blurb:
      "We build trust with high-net-worth individuals, CFOs, and financial institutions through compliant, consultative outreach.",
  },
] as const;

export const contactInfo = {
  email: "contact@trueintentb2b.com",
  phone: "+1 (858) 733-7444",
  address: "1646 West Monte Way, Phoenix AZ 85041",
};
