import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Reveal from '@/components/reveal';
import ContactForm from '@/components/contact-form';
import { contactInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: "Let's Start a Conversation",
  description:
    'Ready to transform your pipeline with real human connections? Fill out the form and one of our strategists will reach out personally within 24 hours.',
};

const directInfo = [
  { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Phone, label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/[^+\d]/g, '')}` },
  { icon: MapPin, label: 'Address', value: contactInfo.address },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 bg-grid-white">
        <div className="pointer-events-none absolute -top-40 right-[-8%] h-[420px] w-[420px] rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-44">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-yellow">Contact</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Let&apos;s start a <span className="text-brand-400">conversation.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-200">
              Ready to transform your pipeline with real human connections? Fill out the
              form below, and one of our strategists will reach out to you personally
              within 24 hours.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-brand-500 via-accent-yellow to-accent-blue" />
      </section>

      {/* Form + direct info */}
      <section className="bg-navy-50 text-navy-900 bg-grid-navy">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.4fr] lg:py-28">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight">Direct info</h2>
            <p className="mt-3 text-sm leading-relaxed text-navy-600">
              Prefer to reach out the old-fashioned way? We&apos;re people — we answer.
            </p>
            <ul className="mt-8 space-y-4">
              {directInfo.map((item) => (
                <li key={item.label} className="flex items-start gap-4 border border-navy-100 bg-white p-5 shadow-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-navy-900 text-accent-yellow">
                    <item.icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-600">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="mt-1 block text-sm font-medium text-navy-800 transition hover:text-brand-600">
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-medium text-navy-800">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-l-4 border-accent-blue bg-navy-900 p-7 text-white">
              <p className="font-display text-lg font-semibold leading-snug">
                What happens after you reach out?
              </p>
              <ol className="mt-4 space-y-3 text-sm text-navy-200">
                <li>1. A strategist — not a bot — reads your message.</li>
                <li>2. We reply within 24 hours to schedule a discovery call.</li>
                <li>3. We map your ICP and propose a human-led game plan.</li>
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <Suspense fallback={<div className="min-h-[420px] animate-pulse border border-navy-100 bg-white" />}>
              <ContactForm />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </>
  );
}
