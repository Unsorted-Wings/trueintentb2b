'use client';

import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { Heart, Linkedin, ShieldCheck, Target, User, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

// --- ANIMATION VARIANTS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <main className="bg-slate-50 overflow-x-hidden">

      {/* 1. HERO */}
      <section ref={containerRef} className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] z-0"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 text-blue-700 text-xs font-bold tracking-widest mb-6 shadow-sm uppercase">
              About Us
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-bold text-slate-900 mb-8 tracking-tight leading-[0.9]">
              We Are <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">TrueIntent B2B.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Not another lead vendor. A true demand generation partner that delivers verified intent, qualified pipeline, and measurable revenue outcomes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* Image Side */}
          <motion.div
            style={{ y: yParallax }}
            className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
              alt="Founders"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>

            <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-bold text-slate-900 uppercase text-xs tracking-wider">Our Focus</span>
              </div>
              <p className="text-3xl font-bold text-slate-900">B2B SaaS</p>
              <p className="text-slate-500 text-sm">Exclusively. Always.</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                TrueIntent B2B was born from a simple frustration — too many B2B SaaS teams were investing heavily in demand generation and getting very little in return. Leads were unverified. Data was stale. Marketing and sales were misaligned.
              </p>
              <p>
                Our founders, with decades of combined experience in demand gen, sales operations, and global market strategy, decided to build something different. <strong className="text-slate-900">Not another lead vendor</strong> — a true demand generation partner that delivers verified intent, qualified pipeline, and measurable revenue outcomes.
              </p>
            </div>

            {/* Mission */}
            <div className="mt-10 p-8 bg-blue-50 border border-blue-100 rounded-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Our Mission</p>
              <p className="text-slate-900 font-semibold text-lg leading-relaxed">
                To eliminate pipeline uncertainty for B2B SaaS companies by delivering human-verified, intent-driven demand generation that sales teams can actually trust.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden relative">
                <Image src="/assets/rohit_sharma.jpeg" alt="CEO" fill className="object-cover" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Rohit Sharma</p>
                <p className="text-slate-500 text-sm">Co-Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUES */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What We Stand For</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Four principles that govern every campaign, every call, every deliverable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Target />
              </div>
              <h3 className="text-xl font-bold mb-3">Precision Over Volume</h3>
              <p className="text-slate-600">We&apos;d rather deliver 50 conversations worth having than 500 contacts worth ignoring. Quality over quantity — in every single engagement.</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition duration-300">
              <div className="bg-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                <ShieldCheck />
              </div>
              <h3 className="text-xl font-bold mb-3">Transparency Always</h3>
              <p className="text-slate-600">No black boxes. No mystery margins. You see exactly how we sourced your leads, what was verified, and how we measure success — every time.</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition duration-300">
              <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                <Zap />
              </div>
              <h3 className="text-xl font-bold mb-3">Execution Excellence</h3>
              <p className="text-slate-600">Strategy means nothing without flawless execution. We hold ourselves to delivery timelines, quality benchmarks, and outcome targets — not just activity metrics.</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-3xl shadow-xl overflow-hidden relative">
              <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Heart className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Partnership, Not Vendor-ship</h3>
              <p className="text-blue-100">We don&apos;t drop a spreadsheet and disappear. We embed ourselves in your revenue motion — as a true partner invested in your outcomes, not just our invoice.</p>
              <div className="absolute right-0 top-0 h-full w-1/3 bg-white/10 transform skew-x-12"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Leadership</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Decades of combined experience in demand gen, sales ops, and global market strategy — united by one mission.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Rohit Sharma */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl transition duration-300 group"
            >
              <div className="relative h-64 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <Image src="/assets/rohit_sharma.jpeg" alt="CEO" fill className="object-cover object-top"/>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Rohit Sharma</h3>
                    <p className="text-blue-600 text-sm font-semibold mt-0.5">Co-Founder &amp; CEO</p>
                    <p className="text-slate-400 text-xs font-medium mt-0.5">TrueIntent B2B</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition cursor-pointer">
                      <Linkedin size={14} />
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Rohit founded TrueIntent B2B on a simple but powerful belief: that B2B growth shouldn&apos;t be built on noise — it should be built on intent. With over <strong className="text-slate-800">7 years of hands-on experience</strong> in demand generation, lead qualification, and inside sales across global markets, he has helped marketing teams and agencies transform bloated pipelines into precision revenue engines. At TrueIntent B2B, Rohit leads with a vision where every lead is a conversation worth having, and every campaign is a step closer to predictable, scalable growth.
                </p>
              </div>
            </motion.div>

            {/* Ravi Makwana */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl transition duration-300 group"
            >
              <div className="relative h-64 bg-gradient-to-br from-indigo-50 to-violet-100 flex items-center justify-center">
                <Image src="/assets/ravi_makwana.jpeg" alt="COO" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Ravi Makwana</h3>
                    <p className="text-indigo-600 text-sm font-semibold mt-0.5">Co-Founder &amp; COO</p>
                    <p className="text-slate-400 text-xs font-medium mt-0.5">TrueIntent B2B</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition cursor-pointer">
                      <Linkedin size={14} />
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ravi is the operational backbone of TrueIntent B2B, bringing <strong className="text-slate-800">over a decade of deep expertise</strong> in B2B demand generation, training, and project execution. Having built and scaled high-performance teams across lead generation, content syndication, BANT qualification, and data operations, he ensures TrueIntent&apos;s delivery engine runs with precision, consistency, and zero compromise on quality. Ravi&apos;s vision is simple — great strategy means nothing without flawless execution, and that&apos;s exactly what he&apos;s built his career on.
                </p>
              </div>
            </motion.div>

            {/* Ruben Christie */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl transition duration-300 group"
            >
              <div className="relative h-64 bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center">
                <Image src="/assets/ruben_christie.jpeg" alt="Head of Sales" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Ruben Christie</h3>
                    <p className="text-emerald-600 text-sm font-semibold mt-0.5">Partner &amp; Consultant</p>
                    <p className="text-slate-400 text-xs font-medium mt-0.5">TrueIntent B2B</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition cursor-pointer">
                      <Linkedin size={14} />
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ruben brings a rare blend of <strong className="text-slate-800">US market expertise, MBA-level strategic thinking</strong>, and hands-on experience across sales, operations, and business development to TrueIntent B2B. With roots spanning B2B demand generation, IT software sales, and international market expansion across both India and the United States, he bridges the gap between global strategy and ground-level execution. His cross-industry perspective and relationship-first approach make him the driving force behind TrueIntent&apos;s consulting practice and client growth strategy.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden relative shadow-2xl h-[450px] flex items-center justify-center text-center">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2684&auto=format&fit=crop"
            alt="Handshake"
            fill
            className="object-cover opacity-20"
          />
          <div className="relative z-10 px-6 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Let&apos;s build your pipeline together.</h2>
            <p className="text-slate-300 text-lg mb-10">
              Ready to work with a team that treats your revenue like their own?
            </p>
            <Link href="/contact">
              <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-500 transition shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1">
                Book a Strategy Call
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
