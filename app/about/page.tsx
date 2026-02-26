'use client';

import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { Award, Briefcase, Globe, Heart, Linkedin, ShieldCheck, Twitter, User, Zap } from 'lucide-react';
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

      {/* 1. HERO SECTION: Text-Heavy & Bold */}
      <section ref={containerRef} className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] z-0"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-bold text-slate-900 mb-8 tracking-tight leading-[0.9]">
              Data without intent <br /> is just <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">noise.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We founded TrueIntentB2B to solve one specific problem: <br />
              <span className="font-semibold text-slate-900">Sales teams are tired of calling people who aren't ready to buy.</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR STORY: Split Screen with Parallax Image */}
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

            {/* Floating Badge */}
            <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-bold text-slate-900 uppercase text-xs tracking-wider">Live Metrics</span>
              </div>
              <p className="text-3xl font-bold text-slate-900">12.5M+</p>
              <p className="text-slate-500 text-sm">Leads verified globally.</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">From a Garage to Global Scale.</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                In 2018, our founders were running sales at a Fortune 500 tech company. They realized that <strong>90% of their team's time</strong> was spent researching <em>who</em> to call, rather than actually selling.
              </p>
              <p>
                The data providers on the market were selling static lists. "Here is a list of CTOs in New York." Great, but are they buying? Probably not.
              </p>
              <p>
                TrueIntent was built to bridge that gap. We built an engine that tracks consumption patterns—identifying when a company starts reading about your solution. That signals <strong>Intent</strong>. And Intent signals Revenue.
              </p>
            </div>

            {/* Signature / Founder Block */}
            <div className="mt-10 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden relative">
                <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop" alt="CEO" fill className="object-cover" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Rohit Sharma</p>
                <p className="text-slate-500 text-sm">Co-Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DARK MODE STATISTICS: "The Impact" */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full blur-[128px] opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full blur-[128px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/10">
            {[
              { val: "2018", label: "Founded" },
              { val: "150+", label: "Data Scientists" },
              { val: "35", label: "Countries Served" },
              { val: "$500M", label: "Pipeline Generated" }
            ].map((stat, i) => (
              <div key={i} className="px-4">
                <h3 className="text-5xl md:text-6xl font-bold mb-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
                  {stat.val}
                </h3>
                <p className="text-blue-200 font-medium uppercase tracking-widest text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES: Bento Grid Layout */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our DNA</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We are a team of data nerds, sales wolves, and creative strategists. These are the rules we play by.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Value 1 */}
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <ShieldCheck />
              </div>
              <h3 className="text-xl font-bold mb-3">Accuracy is Everything</h3>
              <p className="text-slate-600">If the data isn't 99% verified, we don't sell it. We replace bounced leads for free, no questions asked.</p>
            </motion.div>

            {/* Value 2 */}
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition duration-300">
              <div className="bg-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                <Zap />
              </div>
              <h3 className="text-xl font-bold mb-3">Speed to Lead</h3>
              <p className="text-slate-600">Intent data expires. We deliver insights in real-time so you can strike while the iron is hot.</p>
            </motion.div>

            {/* Value 3 */}
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition duration-300">
              <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                <Heart />
              </div>
              <h3 className="text-xl font-bold mb-3">Human-First</h3>
              <p className="text-slate-600">Algorithms find the data. Humans build the relationships. We treat your prospects with respect.</p>
            </motion.div>

            {/* Value 4: Wide Card */}
            <motion.div whileHover={{ y: -5 }} className="md:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-10 rounded-3xl shadow-xl flex items-center justify-between overflow-hidden relative">
              <div className="relative z-10 max-w-lg">
                <h3 className="text-2xl font-bold mb-2">Transparency</h3>
                <p className="text-blue-100">We don't operate black boxes. You see exactly how we sourced your leads, what consent they gave, and how we verified them.</p>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/3 bg-white/10 transform skew-x-12"></div>
            </motion.div>

            {/* Value 5 */}
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition duration-300">
              <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                <Globe />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Reach</h3>
              <p className="text-slate-600">We operate in 35 countries, ensuring compliance with GDPR, CCPA, and local regulations.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. TEAM SECTION: Magazine Style */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-2">Meet the Leadership</h2>
              <p className="text-slate-500">The minds behind the machine.</p>
            </div>
            <button className="text-blue-600 font-bold underline hover:text-blue-700 mt-4 md:mt-0">View all 150+ Employees</button>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Rohit Sharma", role: "Co-Founder & CEO" },
              { name: "Ravi Makwan", role: "Co-Founder & COO" },
              { name: "Ruben Christie", role: "Partner & Consultant" },
            ].map((member, i) => (
              <div key={i} className="group cursor-pointer">
                {/* Icon Container */}
                <div className="relative h-[400px] w-full mb-4 overflow-hidden rounded-xl bg-slate-100 flex items-center justify-center transition-colors group-hover:bg-slate-200">

                  {/* Profile Icon Replacement */}
                  <User
                    size={120}
                    strokeWidth={1.5}
                    className="text-slate-400 group-hover:text-blue-600 transition-colors duration-500"
                  />

                  {/* Social Overlay (Kept as requested) */}
                  <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white p-2 rounded-full shadow-sm hover:bg-blue-600 hover:text-white transition">
                      <Linkedin size={16} />
                    </div>
                    <div className="bg-white p-2 rounded-full shadow-sm hover:bg-blue-600 hover:text-white transition">
                      <Twitter size={16} />
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OFFICE / CULTURE: Masonry Grid */}
      <section className="py-24 bg-slate-50 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
            <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group">
              <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop" alt="Team Work" fill className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/60 to-transparent w-full">
                <p className="text-white font-bold text-xl">San Francisco HQ</p>
              </div>
            </div>
            <div className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden group">
              <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop" alt="Meeting" fill className="object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="col-span-1 row-span-2 relative rounded-3xl overflow-hidden group">
              <Image src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop" alt="Office Dog" fill className="object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden bg-blue-600 flex items-center justify-center group">
              <div className="text-center text-white">
                <Briefcase size={32} className="mx-auto mb-2" />
                <p className="font-bold">We're Hiring!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA: Photo Background */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden relative shadow-2xl h-[450px] flex items-center justify-center text-center">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2684&auto=format&fit=crop"
            alt="Handshake"
            fill
            className="object-cover opacity-20"
          />
          <div className="relative z-10 px-6 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's write your success story.</h2>
            <p className="text-slate-300 text-lg mb-10">
              Ready to see the data that powers the world's fastest growing companies?
            </p>
            <Link href="/contact">
              <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-500 transition shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1">
                Start a Conversation
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}