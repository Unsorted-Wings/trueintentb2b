import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, HeartHandshake, Eye, Ear, Telescope } from 'lucide-react';
import Reveal from '@/components/reveal';

export const metadata: Metadata = {
  title: 'About — We Believe in the Power of Human Connection',
  description:
    'TrueIntent B2B was founded to bring back the art of the human conversation in B2B sales. Active listening, empathy, and genuine relationship-building.',
};

const values = [
  {
    icon: HeartHandshake,
    title: 'People Over Pixels',
    body: "We invest in our team's training and emotional intelligence because we know that good salespeople build great relationships.",
  },
  {
    icon: Eye,
    title: 'Radical Transparency',
    body: 'No vanity metrics or hidden algorithms. Just honest reporting on the calls we make and the meetings we book.',
  },
  {
    icon: Ear,
    title: 'Empathy First',
    body: 'We put ourselves in the shoes of your prospects. We seek to understand their challenges before we ever pitch a solution.',
  },
  {
    icon: Telescope,
    title: 'Relentless Curiosity',
    body: 'We dig deep into your industry, your product, and your buyers to ask the right questions and start the right conversations.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-100 via-navy-50 to-white bg-grid-navy">
        <div className="pointer-events-none absolute -top-40 right-[-8%] h-[420px] w-[420px] rounded-full bg-brand-600/10 blur-[120px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-44 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">About Us</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-navy-900 md:text-6xl">
              We believe in the power of{' '}
              <span className="text-brand-600">human connection</span> in B2B sales.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <div
              className="relative hidden h-[320px] overflow-hidden border-l-4 border-brand-500 shadow-2xl shadow-navy-900/20 lg:block"
              style={{ clipPath: 'polygon(4% 0, 100% 0, 96% 100%, 0 100%)' }}
            >
              <Image
                src="/images/about-hero.jpg"
                alt="TrueIntent B2B team members connecting and collaborating"
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

      {/* Story */}
      <section className="bg-white text-navy-900 bg-grid-navy">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:py-32">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">Our Story</p>
            <h2 className="beam mt-4 font-display text-3xl font-bold tracking-tight lg:text-4xl">
              Bringing back the lost art of conversation
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-700">
              In an era of mass automation and generic spam, the art of the human
              conversation has been lost. We founded TrueIntent B2B to bring it back.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-navy-700">
              We saw too many companies hiding behind automated sequences and wondering why
              their pipelines were dry. So we built a company that prioritizes active
              listening, empathy, and genuine relationship-building.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div
              className="relative h-[380px] overflow-hidden border-l-4 border-brand-500 shadow-2xl shadow-navy-900/20 lg:h-[460px]"
              style={{ clipPath: 'polygon(4% 0, 100% 0, 96% 100%, 0 100%)' }}
            >
              <Image
                src="/images/about-conversation.jpg"
                alt="Two professionals having a real conversation"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative overflow-hidden bg-navy-50 bg-grid-navy">
        <div className="pointer-events-none absolute left-[-10%] top-[-30%] h-[420px] w-[420px] rounded-full bg-accent-blue/10 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full border border-navy-100 bg-white p-10 shadow-sm">
                <span className="skew-panel inline-block bg-brand-500 px-4 py-1 font-display text-sm font-bold uppercase tracking-widest text-white">
                  <span>Our Mission</span>
                </span>
                <p className="mt-7 font-display text-2xl font-semibold leading-snug text-navy-800">
                  To empower B2B businesses with high-quality sales opportunities through
                  strategic, human-to-human demand generation.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="h-full border border-navy-100 bg-white p-10 shadow-sm">
                <span className="skew-panel inline-block bg-accent-yellow px-4 py-1 font-display text-sm font-bold uppercase tracking-widest text-navy-900">
                  <span>Our Vision</span>
                </span>
                <p className="mt-7 font-display text-2xl font-semibold leading-snug text-navy-800">
                  To be the most trusted partner for B2B companies looking to scale their
                  revenue through authentic outreach and real conversations.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Values */}
          <div className="mt-24">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">Core Values</p>
              <h2 className="beam mt-4 font-display text-4xl font-bold tracking-tight text-navy-900">
                What we stand for
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="group h-full border border-navy-100 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10">
                    <v.icon size={26} strokeWidth={1.6} className="text-accent-blue-dark transition group-hover:text-brand-600" />
                    <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{v.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-600">{v.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <Link
              href="/contact"
              className="clip-slant-btn group mt-16 inline-flex items-center gap-2 bg-brand-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-600"
            >
              Start a Conversation With Us
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
