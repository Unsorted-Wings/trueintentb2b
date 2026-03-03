'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Phone, ShieldCheck, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ABMExecutionPage() {
  return (
    <main className="bg-slate-50 overflow-x-hidden">

      {/* HERO */}
      <section className="relative pt-40 pb-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[100px] opacity-15"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/services" className="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold mb-8 hover:text-blue-300 transition">
              ← Back to Services
            </Link>
            <span className="inline-block py-2 px-4 rounded-full bg-white/10 border border-white/10 text-blue-300 text-sm font-bold tracking-wide mb-6">
              SERVICE 02
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              ABM<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Execution</span>
            </h1>
            <p className="text-2xl text-blue-200 font-semibold mb-6 italic">Surround Your Best-Fit Accounts. Own the Conversation.</p>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              We build and run account-based marketing programs that penetrate your priority accounts through coordinated, multi-touch outreach.
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
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">End-to-End ABM, Built for B2B SaaS</h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
              <p>
                We build and run account-based marketing programs that penetrate your priority accounts through coordinated, multi-touch outreach across email, phone, and LinkedIn.
              </p>
              <p>
                From ICP development to persona-level messaging to pipeline reporting — we handle execution end to end, so your team can focus on closing rather than coordinating.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'ICP development and target account list building',
                'Persona-level messaging and content customization',
                'Multi-touch outreach: email, phone, and LinkedIn',
                'Account penetration tracking and stakeholder mapping',
                'Pipeline reporting and conversion analytics',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-indigo-100 text-indigo-600 p-1 rounded-full mt-0.5"><Check size={14} /></div>
                  <p className="text-slate-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2632&auto=format&fit=crop"
              alt="ABM Execution"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
              <div className="text-white">
                <div className="bg-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Target />
                </div>
                <p className="font-bold text-lg">Key Outcome</p>
                <p className="text-slate-300 text-sm">Deeper account penetration and sales conversations with the right people inside your priority accounts.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUTCOME BANNER */}
      <section className="py-16 bg-indigo-600 text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck size={40} className="mx-auto mb-4 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">Our Promise</h3>
          <p className="text-xl text-indigo-100 leading-relaxed">
            Deeper account penetration and sales conversations with the right people inside your priority accounts. We don&apos;t just reach accounts — we break into them.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to penetrate your top target accounts?</h2>
          <p className="text-slate-600 text-lg mb-10">Tell us your target account list and we&apos;ll show you our approach.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-indigo-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 transition shadow-lg inline-flex items-center gap-2">
                <Phone size={18} /> Book a Strategy Call
              </button>
            </Link>
            <Link href="/services">
              <button className="bg-white border border-slate-200 text-slate-800 px-10 py-4 rounded-full font-bold text-lg hover:border-indigo-200 transition inline-flex items-center gap-2">
                All Services <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
