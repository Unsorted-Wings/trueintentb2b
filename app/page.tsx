import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ScanSearch,
  PhoneCall,
  BadgeDollarSign,
  Handshake,
  Filter,
  CalendarCheck,
  Users,
  Database,
  Linkedin,
  Mail,
  CheckCircle2,
} from 'lucide-react';
import Reveal from '@/components/reveal';
import { services } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Predictable Pipeline. Powered by People. | TrueIntent B2B',
  description:
    'Technology is a tool, but people buy from people. We build high-converting B2B lead generation engines driven by human expertise, empathetic outreach, and real conversations.',
};

const stats = [
  { value: '399K+', label: 'Qualified Leads Generated' },
  { value: '148+', label: 'B2B Companies Served' },
  { value: '100%', label: 'Human-Led Outreach' },
  { value: '30%', label: 'Avg. Increase in Customer Engagement' },
];

const whyUs = [
  {
    icon: ScanSearch,
    title: 'Human-Led Prospecting',
    body: "We don't rely on blind automation. Our team researches your prospects, understands their pain points, and crafts personalized outreach that resonates.",
  },
  {
    icon: PhoneCall,
    title: 'Conversations, Not Just Clicks',
    body: 'We focus on metrics that matter — qualified phone calls and booked meetings with decision-makers who actually want to talk to you.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Pay-for-Performance Available',
    body: 'Transparent, ROI-focused models where you pay for results — qualified leads and booked appointments, not just activity.',
  },
  {
    icon: Handshake,
    title: 'An Extension of Your Team',
    body: 'We immerse ourselves in your brand, your voice, and your industry. We act, speak, and care about your success as if it were our own.',
  },
];

const serviceIcons = { Filter, CalendarCheck, Users, Database, Linkedin, Mail };

const caseResults = [
  { metric: '45', label: 'qualified enterprise meetings booked in 90 days for a B2B SaaS scale-up' },
  { metric: '104', label: 'appointments booked with qualified plants for an industrial manufacturer' },
];

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-navy-950 bg-grid-white">
        <div className="pointer-events-none absolute -top-48 right-[-10%] h-[560px] w-[560px] rounded-full bg-brand-600/20 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-[-20%] left-[-5%] h-[420px] w-[420px] rounded-full bg-accent-blue/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-28 pt-40 lg:grid-cols-[1.05fr_0.95fr] lg:pt-48">
          <Reveal>
            <div className="skew-panel inline-flex items-center gap-2 border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-yellow backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500" />
              <span>Human-Led B2B Demand Generation</span>
            </div>

            <h1 className="mt-7 font-display text-5xl font-bold leading-[1.04] tracking-tight md:text-6xl xl:text-[4.4rem]">
              Predictable Pipeline.
              <br />
              <span className="text-accent-yellow">Powered by People.</span>
              <br />
              Driven by{' '}
              <span className="relative inline-block">
                Relationships.
                <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-brand-500/40" aria-hidden />
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-200">
              Technology is a tool, but people buy from people. We build high-converting
              B2B lead generation engines driven by human expertise, empathetic outreach,
              and real conversations. Stop chasing auto-replies. Start building real
              business relationships.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="clip-slant-btn group inline-flex items-center gap-2 bg-brand-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-600"
              >
                Book a Strategy Call
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="clip-slant-btn group inline-flex items-center gap-2 border border-white/25 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:border-accent-yellow hover:text-accent-yellow"
              >
                See Our Services
              </Link>
            </div>
          </Reveal>

          {/* Abstract composition echoing the logo mark */}
          <Reveal delay={0.15} className="relative hidden h-[480px] lg:block">
            <div className="absolute left-0 top-16 h-24 w-full skew-panel bg-gradient-to-r from-brand-400 via-brand-500 to-brand-700 shadow-2xl shadow-brand-600/30" />
            <div className="absolute left-1/3 top-36 flex h-72 w-52 items-end justify-center skew-panel border-2 border-accent-blue bg-gradient-to-b from-accent-yellow to-accent-yellow-dark/70 p-6 shadow-2xl shadow-black/40">
              <span className="pb-2 font-display text-sm font-bold uppercase tracking-widest text-navy-900">
                Real Conversations
              </span>
            </div>
            <div className="absolute left-8 top-64 w-64 border border-white/10 bg-navy-900/90 p-5 shadow-xl shadow-black/40 backdrop-blur">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-blue">
                <CheckCircle2 size={14} /> Meeting Booked
              </p>
              <p className="mt-2 text-sm text-navy-100">
                VP of Engineering · Series C SaaS
              </p>
              <p className="mt-1 text-xs text-navy-300">Thursday, 10:00 AM MST</p>
            </div>
            <div className="absolute bottom-2 right-0 w-56 border border-white/10 bg-navy-900/90 p-5 shadow-xl shadow-black/40 backdrop-blur">
              <p className="font-display text-3xl font-bold text-brand-400">35%</p>
              <p className="mt-1 text-xs leading-snug text-navy-300">
                reply rate on personalized outreach vs. 1–3% on automated sequences
              </p>
            </div>
          </Reveal>
        </div>

        {/* Stats band */}
        <div className="relative border-t border-white/10 bg-navy-900/60 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-8 text-center">
                <p className="font-display text-3xl font-bold text-white md:text-4xl">{s.value}</p>
                <p className="mt-1.5 text-xs uppercase tracking-wider text-navy-300">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE US ---------- */}
      <section className="bg-white text-navy-900">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">Why Choose Us</p>
            <h2 className="beam mt-4 font-display text-4xl font-bold tracking-tight lg:text-5xl">
              Automation scales noise. We scale conversations.
            </h2>
            <p className="mt-6 text-lg text-navy-600">
              Most agencies sell activity. We deliver outcomes that show up on your calendar.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="group relative h-full border border-navy-100 bg-navy-50/50 p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10">
                  <div className="flex h-12 w-12 items-center justify-center bg-navy-900 text-accent-yellow transition group-hover:bg-brand-500 group-hover:text-white">
                    <f.icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold leading-snug">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-600">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SERVICES PREVIEW ---------- */}
      <section className="bg-navy-950 bg-grid-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-yellow">What We Do</p>
              <h2 className="beam mt-4 font-display text-4xl font-bold tracking-tight text-white lg:text-5xl">
                Full-lifecycle demand generation, guided by human strategy
              </h2>
              <p className="mt-6 text-lg text-navy-300">
                Whether we are cleaning data or cold calling, our approach is always guided
                by human strategy and insight.
              </p>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent-yellow transition hover:text-white"
            >
              All Services <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => {
              const Icon = serviceIcons[svc.icon as keyof typeof serviceIcons];
              return (
                <Reveal key={svc.slug} delay={(i % 3) * 0.08}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="group relative block h-full overflow-hidden border border-white/10 bg-navy-900/60 p-8 transition duration-300 hover:-translate-y-1.5 hover:border-brand-500/60"
                  >
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-500/0 blur-2xl transition duration-500 group-hover:bg-brand-500/20" />
                    <Icon size={26} strokeWidth={1.6} className="text-accent-blue transition group-hover:text-accent-yellow" />
                    <h3 className="mt-5 font-display text-xl font-bold text-white">{svc.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-300">{svc.short}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-400 opacity-0 transition group-hover:opacity-100">
                      Explore <ArrowRight size={13} />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- CASE STUDY TEASER ---------- */}
      <section className="bg-navy-50 text-navy-900 bg-grid-navy">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">Proof, Not Promises</p>
            <h2 className="beam mt-4 font-display text-4xl font-bold tracking-tight lg:text-5xl">
              Don&apos;t take our word for it
            </h2>
            <p className="mt-6 text-lg text-navy-600">
              See how our human-led approach has helped businesses like yours scale revenue.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {caseResults.map((c, i) => (
              <Reveal key={c.metric} delay={i * 0.1}>
                <div className="flex h-full items-start gap-6 border-l-4 border-brand-500 bg-white p-8 shadow-sm">
                  <p className="font-display text-5xl font-bold text-brand-600">{c.metric}</p>
                  <p className="pt-2 text-sm leading-relaxed text-navy-700">{c.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <Link
              href="/case-studies"
              className="clip-slant-btn group mt-10 inline-flex items-center gap-2 bg-navy-900 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-600"
            >
              Read the Case Studies
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="relative overflow-hidden bg-brand-600">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-55deg, transparent 0 28px, rgba(255,255,255,.35) 28px 30px)',
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center lg:py-28">
          <Reveal>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white lg:text-5xl">
              Let&apos;s start a conversation.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-brand-50">
              Ready to transform your pipeline with real human connections? One of our
              strategists will reach out personally within 24 hours.
            </p>
            <Link
              href="/contact"
              className="clip-slant-btn group mt-10 inline-flex items-center gap-2 bg-white px-9 py-4 text-sm font-bold uppercase tracking-wide text-brand-600 transition hover:bg-navy-900 hover:text-white"
            >
              Book a Strategy Call
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
