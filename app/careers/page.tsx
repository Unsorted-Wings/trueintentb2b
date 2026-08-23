import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  MapPin,
  Home,
} from 'lucide-react';
import Reveal from '@/components/reveal';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Grow your career in human-centric B2B sales. We are always looking for driven, curious, and articulate professionals to join our team.',
};

const positions = [
  {
    title: 'Senior SDR',
    location: 'Remote',
    body: 'Drive outbound campaigns for our top-tier clients. Requires 2+ years of experience, excellent phone skills, and a track record of quota attainment.',
  },
  {
    title: 'Sales Manager',
    location: 'Remote',
    body: 'Coach, mentor, and train our SDR teams. Focus on call reviews, strategy, and fostering a culture of empathy and resilience.',
  },
  {
    title: 'Copywriter',
    location: 'Remote',
    body: 'Write compelling, human-sounding scripts and email sequences for our diverse client base.',
  },
];

const perks = [
  'Remote-first culture',
  'Uncapped performance bonuses',
  'Continuous sales training focused on conversational skills and psychology',
  'Opportunity to work with diverse B2B clients across industries',
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-100 via-navy-50 to-white bg-grid-navy">
        <div className="pointer-events-none absolute -top-40 right-[-8%] h-[420px] w-[420px] rounded-full bg-brand-600/10 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-44">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">Careers</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-navy-900 md:text-6xl">
              Grow your career in{' '}
              <span className="text-brand-600">human-centric</span> B2B sales.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-600">
              We are always looking for driven, curious, and articulate professionals to
              join our team. If you love talking to people, solving problems, and get a
              thrill from turning a cold lead into a warm handshake — this is the place
              for you.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-brand-500 via-accent-yellow to-accent-blue" />
      </section>

      {/* Positions + Perks */}
      <section className="bg-white text-navy-900 bg-grid-navy">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.5fr_1fr] lg:py-28">
          <div>
            <Reveal>
              <h2 className="beam font-display text-3xl font-bold tracking-tight">Open positions</h2>
            </Reveal>
            <div className="mt-10 space-y-4">
              {positions.map((job, i) => (
                <Reveal key={job.title} delay={i * 0.08}>
                  <article className="group flex flex-col gap-5 border border-navy-100 bg-navy-50/50 p-7 transition duration-300 hover:border-brand-200 hover:bg-white hover:shadow-xl hover:shadow-brand-500/10 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-display text-xl font-bold">{job.title}</h3>
                        <span className="inline-flex items-center gap-1 border border-navy-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-navy-500">
                          <MapPin size={10} /> {job.location}
                        </span>
                      </div>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy-600">{job.body}</p>
                    </div>
                    <Link
                      href={`/contact?role=${encodeURIComponent(job.title)}`}
                      aria-label={`Apply for ${job.title}`}
                      className="clip-slant-btn inline-flex shrink-0 items-center gap-2 bg-navy-900 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition group-hover:bg-brand-600"
                    >
                      Apply <ArrowRight size={14} />
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <h2 className="beam font-display text-3xl font-bold tracking-tight">Perks & benefits</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-10 space-y-4">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 border-b border-navy-100 pb-4">
                    <span className="mt-1 h-2.5 w-6 shrink-0 bg-gradient-to-r from-brand-500 to-accent-yellow" />
                    <span className="text-sm font-medium text-navy-800">{perk}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-12 bg-navy-900 p-8 text-white">
                <Home size={22} className="text-accent-yellow" />
                <p className="mt-4 font-display text-lg font-semibold leading-snug">
                  Work from anywhere. Grow with everyone.
                </p>
                <p className="mt-2 text-sm text-navy-300">
                  Our team collaborates across time zones with weekly call reviews and a
                  culture of continuous feedback.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
