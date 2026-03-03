'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Check, Phone, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BookkeepingPage() {
  return (
    <main className="bg-slate-50 overflow-x-hidden">

      {/* HERO */}
      <section className="relative pt-40 pb-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-600 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500 rounded-full blur-[100px] opacity-15"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/services" className="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold mb-8 hover:text-blue-300 transition">
              ← Back to Services
            </Link>
            <span className="inline-block py-2 px-4 rounded-full bg-white/10 border border-white/10 text-blue-300 text-sm font-bold tracking-wide mb-6">
              SERVICE 07
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Bookkeeping<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">Services</span>
            </h1>
            <p className="text-2xl text-blue-200 font-semibold mb-6 italic">Clean Books. Clear Vision. Confident Decisions.</p>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Growing B2B SaaS companies can&apos;t afford financial chaos slowing down their revenue momentum.
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
            className="relative h-[580px] rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2672&auto=format&fit=crop"
              alt="Bookkeeping Services"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
              <div className="text-white">
                <div className="bg-rose-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen />
                </div>
                <p className="font-bold text-lg">Key Outcome</p>
                <p className="text-slate-300 text-sm">Accurate books, clean records, and financial visibility that supports smarter, faster business decisions.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What We Handle</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              TrueIntent B2B&apos;s bookkeeping service gives you accurate, up-to-date financial records managed by experienced professionals — so your leadership team stays focused on pipeline, not paperwork.
            </p>

            <div className="space-y-4 mb-10">
              {[
                'Monthly bookkeeping and ledger maintenance',
                'Invoice processing and accounts payable/receivable management',
                'Bank and credit card reconciliations',
                'Expense tracking and categorization',
                'Month-end close support and financial reporting',
                'Payroll coordination support',
                'QuickBooks, Sage, and NetSuite management',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-rose-100 text-rose-600 p-1 rounded-full mt-0.5"><Check size={14} /></div>
                  <p className="text-slate-700 font-medium">{item}</p>
                </div>
              ))}
            </div>

            {/* Who It's For */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6">
              <h4 className="font-bold text-slate-900 mb-2">Who It&apos;s For</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                B2B SaaS founders and finance teams who need reliable, outsourced bookkeeping support without the overhead of a full-time in-house hire.
              </p>
            </div>

            {/* Why TrueIntent */}
            <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6">
              <h4 className="font-bold text-slate-900 mb-2">Why TrueIntent for Bookkeeping</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our bookkeeping practice is led by professionals with hands-on experience managing AP operations for US-based companies, with deep proficiency across QuickBooks, Sage Intacct, and NetSuite. You get US-market-aligned expertise, delivered with the same precision and accountability we bring to every service we offer.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUTCOME BANNER */}
      <section className="py-16 bg-rose-600 text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck size={40} className="mx-auto mb-4 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">Our Promise</h3>
          <p className="text-xl text-rose-100 leading-relaxed">
            Accurate books, clean records, and financial visibility that supports smarter, faster business decisions — delivered with the same precision we bring to every engagement.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready for books your CFO can rely on?</h2>
          <p className="text-slate-600 text-lg mb-10">Let&apos;s talk about your bookkeeping needs and how we can support your finance team.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-rose-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-rose-700 transition shadow-lg inline-flex items-center gap-2">
                <Phone size={18} /> Book a Consultation
              </button>
            </Link>
            <Link href="/services">
              <button className="bg-white border border-slate-200 text-slate-800 px-10 py-4 rounded-full font-bold text-lg hover:border-rose-200 transition inline-flex items-center gap-2">
                All Services <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
