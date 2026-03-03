'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, FileText, Phone, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContentSyndicationPage() {
  return (
    <main className="bg-slate-50 overflow-x-hidden">

      {/* HERO */}
      <section className="relative pt-40 pb-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500 rounded-full blur-[100px] opacity-10"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/services" className="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold mb-8 hover:text-blue-300 transition">
              ← Back to Services
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Whitepaper &<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Content Syndication</span>
            </h1>
            <p className="text-2xl text-blue-200 font-semibold mb-6 italic">Put Your Expertise in Front of the Right Buyers.</p>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              We distribute your content to verified, in-market B2B SaaS decision-makers and deliver the content-engaged leads on the other side.
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
              src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2674&auto=format&fit=crop"
              alt="Content Syndication"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
              <div className="text-white">
                <div className="bg-orange-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <FileText />
                </div>
                <p className="font-bold text-lg">Key Outcome</p>
                <p className="text-slate-300 text-sm">Brand authority, mid-funnel pipeline, and leads who already know what you stand for.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Content, Reaching the Right Audience</h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
              <p>
                We distribute your whitepapers, eBooks, and reports to verified, in-market B2B SaaS decision-makers across our network — and deliver you the content-engaged leads on the other side.
              </p>
              <p>
                Optional tele-follow-up is available to further qualify content leads — turning mid-funnel engagement into sales-ready pipeline.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Distribution to verified B2B SaaS decision-makers',
                'Custom filtering by role, company size, and tech stack',
                'Engaged lead capture with full contact data',
                'Optional tele-follow-up for further qualification',
                'Content performance reporting and lead scoring',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-orange-100 text-orange-600 p-1 rounded-full mt-0.5"><Check size={14} /></div>
                  <p className="text-slate-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUTCOME BANNER */}
      <section className="py-16 bg-orange-600 text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck size={40} className="mx-auto mb-4 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">Our Promise</h3>
          <p className="text-xl text-orange-100 leading-relaxed">
            Brand authority, mid-funnel pipeline, and leads who already know what you stand for — delivered from a verified, in-market audience.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to turn your content into pipeline?</h2>
          <p className="text-slate-600 text-lg mb-10">Share your whitepaper or eBook and we&apos;ll build a distribution strategy around it.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition shadow-lg inline-flex items-center gap-2">
                <Phone size={18} /> Book a Strategy Call
              </button>
            </Link>
            <Link href="/services">
              <button className="bg-white border border-slate-200 text-slate-800 px-10 py-4 rounded-full font-bold text-lg hover:border-orange-200 transition inline-flex items-center gap-2">
                All Services <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
