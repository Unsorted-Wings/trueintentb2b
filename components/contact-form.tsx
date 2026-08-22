'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CheckCircle2 } from 'lucide-react';
import { services, contactInfo } from '@/lib/data';

const inputCls =
  'w-full border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const role = searchParams.get('role');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const company = String(data.get('company') || '');
    const interest = String(data.get('interest') || '');
    const goals = String(data.get('goals') || '');

    const subject = encodeURIComponent(
      `Strategy Call Request — ${interest}${role ? ` (${role} application)` : ''}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nWork Email: ${email}\nCompany: ${company}\nLooking for: ${interest}\n\nSales goals:\n${goals}${
        role ? `\n\n(Applying for the ${role} position)` : ''
      }`,
    );

    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center border border-navy-100 bg-white p-10 text-center shadow-sm">
        <CheckCircle2 size={48} className="text-brand-500" />
        <h3 className="mt-6 font-display text-2xl font-bold text-navy-900">
          Your email draft is ready.
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-navy-600">
          We&apos;ve opened your email client with everything pre-filled — hit send and
          one of our strategists will reach out personally within 24 hours.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-8 text-xs font-bold uppercase tracking-widest text-brand-600 underline-offset-4 hover:underline"
        >
          Back to form
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-navy-100 bg-white p-8 shadow-sm lg:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-widest text-navy-700">
            Name
          </label>
          <input id="name" name="name" required placeholder="Jane Smith" className={inputCls} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-widest text-navy-700">
            Work Email
          </label>
          <input id="email" name="email" type="email" required placeholder="jane@company.com" className={inputCls} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="company" className="mb-2 block text-xs font-bold uppercase tracking-widest text-navy-700">
          Company Name
        </label>
        <input id="company" name="company" required placeholder="Acme Inc." className={inputCls} />
      </div>

      <div className="mt-5">
        <label htmlFor="interest" className="mb-2 block text-xs font-bold uppercase tracking-widest text-navy-700">
          What are you looking for?
        </label>
        <select id="interest" name="interest" defaultValue={services[0].name} className={inputCls}>
          {services.map((s) => (
            <option key={s.slug}>{s.name}</option>
          ))}
          <option>Other</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="goals" className="mb-2 block text-xs font-bold uppercase tracking-widest text-navy-700">
          Tell us about your sales goals
        </label>
        <textarea
          id="goals"
          name="goals"
          rows={5}
          required
          defaultValue={role ? `I'd like to apply for the ${role} position.` : ''}
          placeholder="What does your pipeline look like today, and where do you want it to be?"
          className={inputCls}
        />
      </div>

      <button
        type="submit"
        className="clip-slant-btn group mt-7 inline-flex w-full items-center justify-center gap-2 bg-brand-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-600 sm:w-auto"
      >
        Send Message
        <Send size={15} className="transition-transform group-hover:translate-x-1" />
      </button>
      <p className="mt-4 text-xs text-navy-400">
        Submitting opens your email client with a pre-filled message to our team.
      </p>
    </form>
  );
}
