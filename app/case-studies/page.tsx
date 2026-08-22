import type { Metadata } from 'next';
import { AlertTriangle, Lightbulb, TrendingUp } from 'lucide-react';
import Reveal from '@/components/reveal';
import CtaBand from '@/components/cta-band';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    "Don't just take our word for it. See how our human-led approach has helped businesses scale their revenue.",
};

const studies = [
  {
    tag: 'SaaS Scale-Up',
    title: 'From zero replies to a 35% reply rate',
    challenge:
      'A B2B SaaS company was using automated email tools, getting high open rates but zero replies. Their pipeline was stagnant.',
    solution:
      'Replaced the automated sequences with a dedicated human SDR team. We spent two weeks purely researching target accounts, then launched a call-and-LinkedIn strategy focused on starting genuine conversations.',
    results: [
      { metric: '45', label: 'qualified enterprise meetings booked in 90 days' },
      { metric: '35%', label: 'reply rate on personalized emails' },
    ],
  },
  {
    tag: 'Manufacturing Firm',
    title: '104 appointments and 4 major account wins',
    challenge:
      'A manufacturer of industrial equipment relied too heavily on trade shows (which were cancelled) and had no outbound voice strategy.',
    solution:
      'Launched a targeted cold-calling and appointment setting campaign. Our reps learned the technical specs of the equipment and engaged plant managers in consultative troubleshooting conversations.',
    results: [
      { metric: '104', label: 'appointments booked with qualified plants' },
      { metric: '-25%', label: 'sales cycle length after 6 months' },
      { metric: '4', label: 'major account wins within 6 months' },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 bg-grid-white">
        <div className="pointer-events-none absolute -top-40 right-[-8%] h-[420px] w-[420px] rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-44">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-yellow">Case Studies</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Proof, not <span className="text-brand-400">promises.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-200">
              Don&apos;t just take our word for it. See how our human-led approach has
              helped businesses like yours scale their revenue.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-brand-500 via-accent-yellow to-accent-blue" />
      </section>

      {/* Studies */}
      <section className="bg-white text-navy-900 bg-grid-navy">
        <div className="mx-auto max-w-7xl space-y-16 px-6 py-24 lg:py-28">
          {studies.map((study, idx) => (
            <Reveal key={study.tag}>
              <article className="border border-navy-100 bg-white shadow-sm">
                {/* header */}
                <div className="flex items-center justify-between gap-4 border-b border-navy-100 bg-navy-900 px-8 py-6 lg:px-12">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-yellow">
                      Case Study {String(idx + 1).padStart(2, '0')}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-bold text-white lg:text-3xl">
                      {study.title}
                    </h2>
                  </div>
                  <span className="clip-slant-btn hidden shrink-0 bg-brand-500 px-4 py-2 font-display text-xs font-bold uppercase tracking-widest text-white sm:inline-block">
                    {study.tag}
                  </span>
                </div>

                <div className="grid gap-10 px-8 py-10 lg:grid-cols-[1fr_1fr_1.1fr] lg:px-12">
                  <div>
                    <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-600">
                      <AlertTriangle size={15} /> The Challenge
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-navy-700">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent-blue-dark">
                      <Lightbulb size={15} /> The Solution
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-navy-700">{study.solution}</p>
                  </div>
                  <div className="bg-navy-50 p-7">
                    <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-navy-900">
                      <TrendingUp size={15} /> The Results
                    </h3>
                    <ul className="mt-4 space-y-4">
                      {study.results.map((r) => (
                        <li key={r.label} className="flex items-baseline gap-3 border-b border-navy-100 pb-3 last:border-0 last:pb-0">
                          <span className="font-display text-3xl font-bold text-brand-600">{r.metric}</span>
                          <span className="text-sm text-navy-700">{r.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
