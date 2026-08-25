import type { Metadata } from 'next';
import Image from 'next/image';
import { BookOpen, FileText, ScrollText, Lock } from 'lucide-react';
import Reveal from '@/components/reveal';
import CtaBand from '@/components/cta-band';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Insights, strategies, and thoughts to help you master the human side of B2B sales — blog articles, guides, and whitepapers.',
};

const blogPosts = [
  {
    title: 'The Art of the Cold Call',
    sub: 'Why the phone is still your best sales tool.',
    image:
      '/images/resource-cold-call.jpg',
  },
  {
    title: 'Why Human Empathy Wins in B2B Sales',
    sub: '(and how to show it)',
    image:
      '/images/resource-empathy.jpg',
  },
  {
    title: 'Personalization at Scale',
    sub: "How to write 100 emails that don't sound like a template.",
    image:
      '/images/resource-personalization.jpg',
  },
];

const guides = [
  {
    title: 'The B2B Sales Discovery Checklist',
    sub: 'Questions your SDRs should ask to uncover real pain points.',
    image:
      '/images/resource-checklist.jpg',
  },
  {
    title: 'Manufacturing Demand Generation Playbook',
    sub: 'Industry-specific tactics for building human relationships.',
    image:
      '/images/resource-mfg-playbook.jpg',
  },
];

const whitepapers = [
  {
    title: 'The Death of the Auto-Responder',
    sub: 'Why automated sequences are killing your brand reputation — and what to do instead.',
    image:
      '/images/resource-autoresponder.jpg',
  },
  {
    title: 'Building a High-Performing SDR Team',
    sub: 'A guide to recruiting, training, and retaining human sales talent.',
    image:
      '/images/resource-sdr-team.jpg',
  },
];

function ResourceCard({
  icon: Icon,
  title,
  sub,
  image,
  gated,
}: {
  icon: typeof BookOpen;
  title: string;
  sub: string;
  image?: string;
  gated?: boolean;
}) {
  return (
    <article className="group flex h-full cursor-pointer flex-col border border-navy-100 bg-navy-50/50 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-xl hover:shadow-brand-500/10">
      {image && (
        <div className="relative h-40 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-start justify-between">
          <Icon size={24} strokeWidth={1.6} className="text-navy-400 transition group-hover:text-brand-500" />
          {gated && (
            <span className="inline-flex items-center gap-1 border border-accent-blue-dark/20 bg-accent-blue/10 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-blue-dark">
              <Lock size={10} /> Gated
            </span>
          )}
        </div>
        <h3 className="mt-5 font-display text-lg font-bold leading-snug">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">{sub}</p>
      </div>
    </article>
  );
}

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-100 via-navy-50 to-white bg-grid-navy">
        <div className="pointer-events-none absolute -top-40 right-[-8%] h-[420px] w-[420px] rounded-full bg-brand-600/10 blur-[120px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-44 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">Resources</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-navy-900 md:text-6xl">
              Master the <span className="text-brand-600">human side</span> of B2B sales.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-600">
              Insights, strategies, and thoughts to help you master the human side of
              B2B sales.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div
              className="relative hidden h-[320px] overflow-hidden border-l-4 border-brand-500 shadow-2xl shadow-navy-900/20 lg:block"
              style={{ clipPath: 'polygon(4% 0, 100% 0, 96% 100%, 0 100%)' }}
            >
              <Image
                src="/images/resources-hero.jpg"
                alt="A library of sales resources and guides"
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

      {/* Blog */}
      <section className="bg-white text-navy-900 bg-grid-navy">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
          <Reveal>
            <h2 className="beam flex items-center gap-3 font-display text-3xl font-bold tracking-tight">
              <BookOpen size={26} className="text-brand-500" /> From the Blog
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.title} delay={i * 0.08}>
                <ResourceCard icon={BookOpen} {...post} />
              </Reveal>
            ))}
          </div>

          {/* Guides */}
          <Reveal>
            <h2 className="beam mt-20 flex items-center gap-3 font-display text-3xl font-bold tracking-tight">
              <FileText size={26} className="text-brand-500" /> Guides
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {guides.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.08}>
                <ResourceCard icon={FileText} {...g} gated />
              </Reveal>
            ))}
          </div>

          {/* Whitepapers */}
          <Reveal>
            <h2 className="beam mt-20 flex items-center gap-3 font-display text-3xl font-bold tracking-tight">
              <ScrollText size={26} className="text-brand-500" /> Whitepapers
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {whitepapers.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <ResourceCard icon={ScrollText} {...w} gated />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-16 text-sm text-navy-500">
              Full resource library coming soon — subscribe via our{' '}
              <a href="/contact" className="font-semibold text-brand-600 underline-offset-4 hover:underline">
                contact form
              </a>{' '}
              to be notified when gated content goes live.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
