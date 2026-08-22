import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-brand-600">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-55deg, transparent 0 28px, rgba(255,255,255,.35) 28px 30px)',
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-white lg:text-4xl">
          Let&apos;s start a conversation.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-50">
          Tell us about your sales goals and one of our strategists will reach out
          personally within 24 hours.
        </p>
        <Link
          href="/contact"
          className="clip-slant-btn group mt-9 inline-flex items-center gap-2 bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-brand-600 transition hover:bg-navy-900 hover:text-white"
        >
          Book a Strategy Call
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
