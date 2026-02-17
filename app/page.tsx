'use client';

import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { ArrowRight, BarChart3, Check, Database, Globe, Layers, Mail, Play, Target, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

// --- ANIMATION VARIANTS ---
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <main className="bg-slate-50 overflow-x-hidden">
      
      {/* 1. HERO SECTION: Soft Gradient + Grid (Not stark white) */}
      <section ref={targetRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] z-0"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-50 z-0"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[100px] opacity-50 z-0"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 text-blue-700 text-xs font-bold tracking-wide mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              NEW: Intent Data 2.0
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Stop guessing. <br />
              Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">closing.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              We combine AI-driven intent signals with human-verified contact data to fill your pipeline with buyers who are actually ready to purchase.
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition duration-300">
                  Get Free Leads
                </button>
              </Link>
              <button className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition shadow-sm">
                <Play size={18} fill="currentColor" /> Watch Demo
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-sm text-slate-500 font-medium">
               <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 relative overflow-hidden">
                     <Image src={`https://randomuser.me/api/portraits/men/${i*10}.jpg`} alt="User" fill className="object-cover" />
                   </div>
                 ))}
               </div>
               <p>Trusted by 500+ Revenue Leaders</p>
            </div>
          </motion.div>

          {/* Hero Image / Visual */}
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
               {/* Floating Stat Card */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-[200px]"
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
            {/* Background Blob behind image */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-blue-600/10 rounded-3xl -rotate-3"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. LOGO SECTION: Solid Light Gray Block */}
      <section className="bg-white py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400 font-bold text-sm uppercase tracking-widest mb-8">Powering sales teams at</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-60">
             {/* Replace with actual SVGs or Images */}
             {['Adobe', 'Salesforce', 'HubSpot', 'Oracle', 'IBM'].map((logo, i) => (
               <span key={i} className="text-2xl font-black text-slate-300">{logo}</span>
             ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES BENTO: Light Gray Background (Contrast) */}
      <section className="py-24 bg-slate-100 px-6 relative">
        <div className="absolute inset-0 bg-grid-slate-100 opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Everything you need to grow.</h2>
            <p className="text-slate-600 text-lg">We don't just give you data. We give you a system. From identifying your TAM to booking the meeting.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            
            {/* Card 1: Large Visual (White Card on Gray BG) */}
            <motion.div whileHover={{ y: -5 }} className="md:col-span-2 row-span-2 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative group">
               <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <h3 className="text-white text-3xl font-bold mb-2">Intent Data Streams</h3>
                  <p className="text-slate-200 text-lg">Identify companies researching your competitors in real-time.</p>
               </div>
               <Image 
                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
                 alt="Data" 
                 fill 
                 className="object-cover transition duration-700 group-hover:scale-105" 
               />
            </motion.div>

            {/* Card 2: Solid Blue Block (Adds Color) */}
            <motion.div whileHover={{ y: -5 }} className="bg-blue-600 text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl shadow-blue-500/20">
               <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm">
                 <Mail className="text-white" />
               </div>
               <div>
                 <h3 className="text-2xl font-bold mb-2">Cold Email</h3>
                 <p className="text-blue-100">AI-written sequences that get 45% open rates.</p>
               </div>
            </motion.div>

            {/* Card 3: White Card */}
            <motion.div whileHover={{ y: -5 }} className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-xl border border-slate-200">
               <div className="bg-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center text-indigo-600">
                 <Database />
               </div>
               <div>
                 <h3 className="text-2xl font-bold mb-2 text-slate-900">Data Enrichment</h3>
                 <p className="text-slate-500">Refresh your CRM with 99% accurate info.</p>
               </div>
            </motion.div>

             {/* Card 4: Wide Bottom Card */}
             <motion.div whileHover={{ y: -5 }} className="md:col-span-3 bg-slate-900 text-white rounded-3xl p-10 flex items-center justify-between overflow-hidden relative">
                <div className="relative z-10 max-w-lg">
                   <h3 className="text-2xl font-bold mb-2">Appointment Setting</h3>
                   <p className="text-slate-400">We book the meetings. You close the deals. Pay per qualified meeting.</p>
                </div>
                <div className="hidden md:flex gap-4">
                   <button className="bg-white text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition">See Pricing</button>
                </div>
                {/* Abstract graphic */}
                <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-600/30 to-transparent"></div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 4. "DARK MODE" SECTION: Break visual fatigue */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Grid Pattern White opacity */}
        <div className="absolute inset-0 bg-grid-white-10 opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
           <div>
             <h2 className="text-4xl md:text-5xl font-bold mb-6">Why the world's best sales teams choose TrueIntent.</h2>
             <div className="space-y-6">
               {[
                 { title: "Privacy Compliant", desc: "GDPR, CCPA, and SOC2 Compliant data sourcing." },
                 { title: "Real-time Verification", desc: "We call and verify leads before you ever see them." },
                 { title: "Seamless Integration", desc: "Push leads directly to Salesforce, HubSpot, or Outreach." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4">
                   <div className="mt-1 bg-blue-500/20 p-2 rounded-lg text-blue-400">
                     <Check size={20} />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                     <p className="text-slate-400">{item.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
           
           <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800">
                 <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" alt="Analytics" width={600} height={400} className="object-cover opacity-80" />
                 {/* Overlay UI element */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-center">
                    <p className="text-5xl font-bold text-white mb-1">3.5x</p>
                    <p className="text-blue-200 text-sm font-bold uppercase">ROI Average</p>
                 </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600 rounded-full blur-[60px] opacity-50"></div>
           </div>
        </div>
      </section>

      {/* 5. CTA SECTION: Photo Heavy Background */}
      <section className="py-24 px-6 bg-slate-50">
         <div className="max-w-6xl mx-auto relative rounded-[3rem] overflow-hidden shadow-2xl h-[500px] flex items-center justify-center text-center">
            <Image 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop" 
              alt="Office" 
              fill 
              className="object-cover"
            />
            {/* Gradient Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
            
            <div className="relative z-10 px-6 max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to scale?</h2>
              <p className="text-blue-100 text-xl mb-10">
                Get 50 free verified leads when you schedule your strategy session today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                   <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition transform hover:-translate-y-1 shadow-lg">
                     Get Started
                   </button>
                </Link>
              </div>
            </div>
         </div>
      </section>

    </main>
  );
}