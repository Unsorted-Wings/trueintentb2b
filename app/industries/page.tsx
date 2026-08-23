import type { Metadata } from 'next';
import {
  Factory,
  HeartPulse,
  UtensilsCrossed,
  Cloud,
  Truck,
  Landmark,
} from 'lucide-react';
import Reveal from '@/components/reveal';
import CtaBand from '@/components/cta-band';
import { industries } from '@/lib/data';

const industryIcons = { Factory, HeartPulse, UtensilsCrossed, Cloud, Truck, Landmark };

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'We speak your industry\u2019s language — manufacturing, healthcare, food & beverage, SaaS, logistics, and financial services.',
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-100 via-navy-50 to-white bg-grid-navy">
        <div className="pointer-events-none absolute -top-40 right-[-8%] h-[420px] w-[420px] rounded-full bg-brand-600/10 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-44">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">Industries</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-navy-900 md:text-6xl">
              We speak your industry&apos;s{' '}
              <span className="text-brand-600">language.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-600">
              Our team takes the time to understand the unique buying cycles, pain points,
              and regulations of your sector so we can have credible conversations with
              your buyers.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-brand-500 via-accent-yellow to-accent-blue" />
      </section>

      {/* Industry grid */}
      <section className="bg-white text-navy-900 bg-grid-navy">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => {
              const Icon = industryIcons[ind.icon as keyof typeof industryIcons];
              return (
                <Reveal key={ind.name} delay={(i % 3) * 0.08}>
                  <article className="group relative flex h-full flex-col overflow-hidden border border-navy-100 bg-navy-50/50 p-8 transition duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:bg-white hover:shadow-xl hover:shadow-brand-500/10">
                    <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-accent-blue transition-transform duration-300 group-hover:scale-x-100" />
                    <div className="flex h-12 w-12 items-center justify-center bg-navy-900 text-accent-yellow transition group-hover:bg-brand-500 group-hover:text-white">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <h2 className="mt-6 font-display text-xl font-bold">{ind.name}</h2>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-navy-600">{ind.blurb}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-16 border-l-4 border-accent-blue bg-navy-900 p-8 text-white lg:p-10">
              <p className="font-display text-xl font-semibold leading-snug lg:text-2xl">
                Don&apos;t see your sector? If your buyers are people, we can reach them.
              </p>
              <p className="mt-3 text-sm text-navy-200">
                Our research process adapts to any B2B market with a defined buying committee.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
