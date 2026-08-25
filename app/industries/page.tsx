import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
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

const industryImages: Record<string, string> = {
  Manufacturing:
    '/images/industry-manufacturing.jpg',
  Healthcare:
    '/images/industry-healthcare.jpg',
  'Food & Beverage':
    '/images/industry-food-beverage.jpg',
  SaaS: '/images/industry-saas.jpg',
  Logistics:
    '/images/industry-logistics.jpg',
  'Financial Services':
    '/images/industry-financial.jpg',
};

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
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-44 lg:grid-cols-[1.15fr_0.85fr]">
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
          <Reveal delay={0.15}>
            <div
              className="relative hidden h-[320px] overflow-hidden border-l-4 border-brand-500 shadow-2xl shadow-navy-900/20 lg:block"
              style={{ clipPath: 'polygon(4% 0, 100% 0, 96% 100%, 0 100%)' }}
            >
              <Image
                src="/images/industries-hero.jpg"
                alt="Industries and markets TrueIntent B2B serves"
                fill
                sizes="40vw"
                priority
                className="object-cover"
              />
            </div>
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
                  <Link
                    href="/services"
                    aria-label={`See how we serve the ${ind.name} industry`}
                    className="group relative flex h-full flex-col overflow-hidden border border-navy-100 bg-navy-50/50 transition duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:bg-white hover:shadow-xl hover:shadow-brand-500/10"
                  >
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={industryImages[ind.name]}
                        alt={`${ind.name} industry`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
                      <div className="absolute -bottom-px left-8 flex h-12 w-12 items-center justify-center bg-navy-900 text-accent-yellow shadow-lg transition group-hover:bg-brand-500 group-hover:text-white">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-8 pt-10">
                      <h2 className="font-display text-xl font-bold">{ind.name}</h2>
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-navy-600">{ind.blurb}</p>
                    </div>
                  </Link>
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
