import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/reveal';
import CtaBand from '@/components/cta-band';
import { services, industries } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'A comprehensive suite of services spanning the entire demand generation lifecycle — lead generation, appointment setting, SDR as a service, CRM management, LinkedIn outreach, and email marketing.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-100 via-navy-50 to-white bg-grid-navy">
        <div className="pointer-events-none absolute -top-40 right-[-8%] h-[420px] w-[420px] rounded-full bg-brand-600/10 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-44">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">Our Services</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-navy-900 md:text-6xl">
              The entire demand generation lifecycle.{' '}
              <span className="text-brand-600">Guided by human strategy.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-600">
              We offer a comprehensive suite of services that span the entire demand
              generation lifecycle. But whether we are cleaning data or cold calling, our
              approach is always guided by human strategy and insight.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-brand-500 via-accent-yellow to-accent-blue" />
      </section>

      {/* Service list */}
      <section className="bg-white text-navy-900 bg-grid-navy">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => (
              <Reveal key={svc.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/services/${svc.slug}`}
                  className="group relative flex h-full flex-col border border-navy-100 bg-navy-50/50 p-8 transition duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:bg-white hover:shadow-xl hover:shadow-brand-500/10"
                >
                  <span className="font-display text-sm font-bold text-navy-300 transition group-hover:text-brand-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-4 font-display text-xl font-bold leading-snug">{svc.name}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">{svc.short}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-600">
                    Learn more
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries strip */}
      <section className="border-t border-navy-100 bg-navy-50 bg-grid-navy">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy-900">
              We speak your industry&apos;s language
            </h2>
            <Link
              href="/industries"
              className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-600 transition hover:text-navy-900"
            >
              All Industries <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-navy-200 bg-navy-200 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((ind) => (
              <Link
                key={ind.name}
                href="/industries"
                className="flex min-h-24 items-center justify-center bg-white px-4 py-6 text-center font-display text-sm font-semibold text-navy-700 transition hover:bg-brand-600 hover:text-white"
              >
                {ind.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
