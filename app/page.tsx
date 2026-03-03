'use client';

import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { ArrowRight, Check, Database, Phone, Target, Users, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

// --- ANIMATION VARIANTS ---
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const comparison = [
  { others: "Raw leads", us: "BANT-qualified opportunities" },
  { others: "Form fills", us: "Tele-verified intent" },
  { others: "Volume", us: "Pipeline velocity" },
  { others: "Generic data", us: "CRM-enriched, clean contacts" },
  { others: "Vanity metrics", us: "Revenue outcomes" },
];

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <main className="bg-slate-50 overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section ref={targetRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] z-0"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-50 z-0"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[100px] opacity-50 z-0"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 text-blue-700 text-xs font-bold tracking-wide mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Human-Verified · Tele-Qualified · B2B SaaS
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Where Intent <br />
              Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Pipeline.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              TrueIntent B2B delivers human-verified, tele-qualified demand generation built exclusively for B2B SaaS companies. We don&apos;t send you leads. We send you conversations worth having.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-blue-700 transition shadow-lg shadow-blue-500/30 flex items-center gap-2">
                  Explore Our Services <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-white border border-slate-200 text-slate-800 px-8 py-4 rounded-full font-bold text-base hover:border-blue-300 transition shadow-sm flex items-center gap-2">
                  <Phone size={18} className="text-blue-600" /> Book a Strategy Call
                </button>
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm text-slate-500 font-medium">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 relative overflow-hidden">
                    <Image src={`https://randomuser.me/api/portraits/men/${i * 10}.jpg`} alt="User" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <p>Trusted by 500+ Revenue Leaders</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop"
                alt="Dashboard"
                width={800}
                height={600}
                className="object-cover"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-[220px]"
              >
                <div className="bg-green-100 p-2 rounded-lg text-green-600">
                  <Users size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Pipeline Added</p>
                  <p className="text-lg font-bold text-slate-900">$1.2M</p>
                </div>
              </motion.div>
            </div>
            <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-blue-600/10 rounded-3xl -rotate-3"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. PIPELINE NOISE PROBLEM */}
      <section className="py-24 bg-white px-6 border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Your Pipeline Has a <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Noise Problem.</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Most B2B SaaS teams are drowning in data but starving for qualified pipeline. Bloated CRMs. Unverified contacts. MQLs that never convert. SQLs that stall. At TrueIntent B2B, we fix that — with precision-targeted demand generation powered by tele-verification, intent signals, and BANT-qualified outreach that puts sales-ready buyers in front of your team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Database className="text-red-500" />, label: "Bloated CRMs & stale data" },
              { icon: <X className="text-orange-500" />, label: "MQLs that never convert" },
              { icon: <Target className="text-blue-600" />, label: "We deliver sales-ready buyers" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`p-8 rounded-2xl border flex flex-col gap-4 ${i === 2 ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-500/20' : 'bg-slate-50 border-slate-200'}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${i === 2 ? 'bg-white/20' : 'bg-white shadow-sm border border-slate-100'}`}>
                  {item.icon}
                </div>
                <p className={`text-lg font-bold ${i === 2 ? 'text-white' : 'text-slate-800'}`}>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY TRUEINTENT B2B — COMPARISON TABLE */}
      <section className="py-24 bg-slate-900 text-white px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-700 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[100px] opacity-20"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why TrueIntent B2B</h2>
            <p className="text-slate-400 text-lg">The difference isn't just the data — it's what happens to it.</p>
          </motion.div>

          {/* Table Header */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-slate-800/80 rounded-2xl px-8 py-4 text-center">
              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">What Others Deliver</p>
            </div>
            <div className="bg-blue-600 rounded-2xl px-8 py-4 text-center shadow-lg shadow-blue-500/30">
              <p className="text-white font-bold uppercase tracking-widest text-sm">What We Deliver</p>
            </div>
          </div>

          <div className="space-y-3">
            {comparison.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-slate-800/60 border border-slate-700 rounded-2xl px-8 py-5 flex items-center gap-3">
                  <X size={16} className="text-red-400 shrink-0" />
                  <span className="text-slate-300 font-medium">{row.others}</span>
                </div>
                <div className="bg-blue-600/10 border border-blue-500/30 rounded-2xl px-8 py-5 flex items-center gap-3">
                  <Check size={16} className="text-blue-400 shrink-0" />
                  <span className="text-white font-semibold">{row.us}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto relative rounded-[3rem] overflow-hidden shadow-2xl h-[500px] flex items-center justify-center text-center">
          <Image
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop"
            alt="Office"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>

          <div className="relative z-10 px-6 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to fill your pipeline?</h2>
            <p className="text-blue-100 text-xl mb-10">
              Stop wasting budget on leads that don&apos;t convert. Let&apos;s build you a pipeline worth trusting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition transform hover:-translate-y-1 shadow-lg">
                  Explore Our Services
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-blue-600 border border-blue-400 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-500 transition transform hover:-translate-y-1 shadow-lg">
                  Book a Strategy Call
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}