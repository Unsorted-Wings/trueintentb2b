'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Phone, ShieldCheck, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MQLGenerationPage() {
  return (
    <main className="bg-slate-50 overflow-x-hidden">

      {/* HERO */}
      <section className="relative pt-40 pb-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[100px] opacity-15"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/services" className="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold mb-8 hover:text-blue-300 transition">
              ← Back to Services
            </Link>
            <span className="inline-block py-2 px-4 rounded-full bg-white/10 border border-white/10 text-blue-300 text-sm font-bold tracking-wide mb-6">
              SERVICE 03
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              MQL<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">Generation</span>
            </h1>
            <p className="text-2xl text-blue-200 font-semibold mb-6 italic">Top-of-Funnel Leads That Are Actually Worth Following Up.</p>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              No guesswork. No junk. MQLs built to your exact definition, scored against your criteria before delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
              alt="MQL Generation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
              <div className="text-white">
                <div className="bg-violet-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Users />
                </div>
                <p className="font-bold text-lg">Key Outcome</p>
                <p className="text-slate-300 text-sm">A consistent, predictable flow of top-of-funnel opportunities.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">MQLs That Meet Your Standard, Not Ours</h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
              <p>
                We deliver Marketing Qualified Leads built to your exact criteria — sourced from verified databases, captured through multi-channel outreach, and scored against your MQL definition before delivery.
              </p>
              <p>
                You define what an MQL looks like for your business. We execute against that definition — and only deliver leads that pass the bar.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Custom MQL criteria definition and scoring',
                'Multi-channel outreach: email, phone, social',
                'Verified contact data before delivery',
                'Volume and velocity tailored to your capacity',
                'Seamless CRM delivery with lead scoring context',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-violet-100 text-violet-600 p-1 rounded-full mt-0.5"><Check size={14} /></div>
                  <p className="text-slate-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUTCOME BANNER */}
      <section className="py-16 bg-violet-600 text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck size={40} className="mx-auto mb-4 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">Our Promise</h3>
          <p className="text-xl text-violet-100 leading-relaxed">
            A consistent, predictable flow of top-of-funnel opportunities — delivered to your definition, not a generic industry standard.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to build a predictable MQL flow?</h2>
          <p className="text-slate-600 text-lg mb-10">Share your MQL definition and we&apos;ll show you how we&apos;d execute against it.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-violet-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-violet-700 transition shadow-lg inline-flex items-center gap-2">
                <Phone size={18} /> Book a Strategy Call
              </button>
            </Link>
            <Link href="/services">
              <button className="bg-white border border-slate-200 text-slate-800 px-10 py-4 rounded-full font-bold text-lg hover:border-violet-200 transition inline-flex items-center gap-2">
                All Services <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
