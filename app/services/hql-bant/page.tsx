'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Phone, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HQLBANTPage() {
  return (
    <main className="bg-slate-50 overflow-x-hidden">

      {/* HERO */}
      <section className="relative pt-40 pb-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500 rounded-full blur-[100px] opacity-15"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/services" className="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold mb-8 hover:text-blue-300 transition">
              ← Back to Services
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              HQL / BANT-<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Qualified Leads</span>
            </h1>
            <p className="text-2xl text-blue-200 font-semibold mb-6 italic">Sales-Ready Leads. Every Single One.</p>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Your reps walk into every conversation already knowing it&apos;s worth having.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BANT PILLARS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">All Four BANT Pillars. Confirmed on Every Lead.</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Our tele-qualification team conducts live conversations with prospects to confirm all four BANT pillars — Budget, Authority, Need, and Timeline — before any lead reaches your sales team.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { letter: 'B', label: 'Budget', desc: 'Confirmed budget range aligned to your deal size.' },
                  { letter: 'A', label: 'Authority', desc: 'Verified decision-making authority or influence.' },
                  { letter: 'N', label: 'Need', desc: 'Active business need confirmed via live conversation.' },
                  { letter: 'T', label: 'Timeline', desc: 'Buying timeline within your sales cycle confirmed.' },
                ].map((item) => (
                  <div key={item.letter} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                    <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-bold text-xl mb-3">
                      {item.letter}
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.label}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {[
                  'Live tele-qualification with trained SDRs',
                  'Full BANT confirmation before lead delivery',
                  'Recorded call notes and qualification summary',
                  'CRM-ready with complete context for your reps',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="bg-emerald-100 text-emerald-600 p-1 rounded-full mt-0.5"><Check size={14} /></div>
                    <p className="text-slate-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
                alt="BANT Qualified"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="bg-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Phone />
                  </div>
                  <p className="font-bold text-lg">Key Outcome</p>
                  <p className="text-slate-300 text-sm">Higher conversion rates, shorter sales cycles, and a pipeline your team trusts.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUTCOME BANNER */}
      <section className="py-16 bg-emerald-600 text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck size={40} className="mx-auto mb-4 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">Our Promise</h3>
          <p className="text-xl text-emerald-100 leading-relaxed">
            Higher conversion rates, shorter sales cycles, and a pipeline your team trusts — because every lead has been confirmed ready before it lands in your CRM.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready for leads your sales team will actually call?</h2>
          <p className="text-slate-600 text-lg mb-10">Let&apos;s talk about your BANT criteria and how we&apos;d qualify against them.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 transition shadow-lg inline-flex items-center gap-2">
                <Phone size={18} /> Book a Strategy Call
              </button>
            </Link>
            <Link href="/services">
              <button className="bg-white border border-slate-200 text-slate-800 px-10 py-4 rounded-full font-bold text-lg hover:border-emerald-200 transition inline-flex items-center gap-2">
                All Services <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
