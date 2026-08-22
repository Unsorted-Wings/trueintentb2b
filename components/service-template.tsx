import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/reveal';
import CtaBand from '@/components/cta-band';
import { services, type ServiceSlug } from '@/lib/data';

export default function ServiceTemplate({
  slug,
  name,
  headline,
  intro,
  points,
}: {
  slug: ServiceSlug;
  name: string;
  headline: string;
  intro: string;
  points: { title: string; body: string }[];
}) {
  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 bg-grid-white">
        <div className="pointer-events-none absolute -top-40 right-[-8%] h-[420px] w-[420px] rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-44">
          <Reveal>
            <nav className="text-xs font-semibold uppercase tracking-widest text-navy-300">
              <Link href="/services" className="transition hover:text-accent-yellow">Services</Link>
              <span className="mx-2 text-white/30">/</span>
              <span className="text-accent-yellow">{name}</span>
            </nav>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              {headline}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-200">{intro}</p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-brand-500 via-accent-yellow to-accent-blue" />
      </section>

      {/* Points */}
      <section className="bg-white text-navy-900 bg-grid-navy">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">How We Deliver</p>
            <h2 className="beam mt-4 font-display text-3xl font-bold tracking-tight lg:text-4xl">
              What&apos;s included
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08}>
                <div className="group relative h-full border border-navy-100 bg-navy-50/50 p-8 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10">
                  <span className="font-display text-sm font-bold text-brand-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-600">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="border-t border-white/10 bg-navy-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-yellow">Explore More Services</p>
          </Reveal>
          <div className="mt-7 flex flex-wrap gap-3">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.04}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group inline-flex items-center gap-2 border border-white/15 px-5 py-3 text-sm font-medium text-navy-100 transition hover:border-brand-500 hover:bg-brand-500 hover:text-white"
                >
                  {s.name}
                  <ArrowRight size={14} className="opacity-50 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
