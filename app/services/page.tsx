'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Bot, Check, Database, Filter, Globe, Layers, MessageSquare, MousePointer, Phone, Search, Target, UserCheck, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="bg-slate-50 overflow-x-hidden">
      
      {/* 1. HERO SECTION: Dark & Bold */}
      <section className="relative pt-40 pb-24 bg-slate-900 text-white overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-blue-300 text-sm font-bold tracking-wide mb-6">
              OUR CAPABILITIES
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              A full-stack <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">growth engine.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              We don't just "generate leads." We build the infrastructure, data pipelines, and outreach systems to scale your revenue predictability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE SERVICES (Zig-Zag with Texture) */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        
        <div className="max-w-7xl mx-auto px-6 space-y-32 relative z-10">
          
          {/* Service 1: Intent Data */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 group"
             >
                <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" alt="Data" fill className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent flex items-end p-8">
                   <div className="text-white">
                      <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <Search />
                      </div>
                      <p className="font-bold text-lg">Key Outcome</p>
                      <p className="text-slate-300 text-sm">Identify 500+ in-market accounts per month.</p>
                   </div>
                </div>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
               <h2 className="text-4xl font-bold text-slate-900 mb-6">Intent Data Intelligence</h2>
               <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                 97% of your market isn't ready to buy. We focus on the 3% that is. By tracking content consumption across the web, we identify companies researching your solution <em>right now</em>.
               </p>
               <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: <Globe size={20}/>, title: "IP Identification", desc: "Know which companies visit your site." },
                    { icon: <Database size={20}/>, title: "Keyword Tracking", desc: "Monitor 5,000+ topics." },
                    { icon: <Filter size={20}/>, title: "Ideal Customer Profile", desc: "Filter by revenue, size, and tech stack." },
                    { icon: <UserCheck size={20}/>, title: "Contact Mapping", desc: "Get direct dials for decision makers." },
                  ].map((feat, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                       <div className="text-blue-600 mb-2">{feat.icon}</div>
                       <h4 className="font-bold text-slate-900 text-sm">{feat.title}</h4>
                       <p className="text-xs text-slate-500 mt-1">{feat.desc}</p>
                    </div>
                  ))}
               </div>
             </motion.div>
          </div>

          {/* Service 2: Cold Outreach (Reversed) */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="order-2 lg:order-1"
             >
               <h2 className="text-4xl font-bold text-slate-900 mb-6">Multi-Channel Outreach</h2>
               <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                 We don't spam. We orchestrate. Our team builds hyper-personalized sequences across Email, LinkedIn, and Phone to break through the noise.
               </p>
               <ul className="space-y-4 mb-8">
                 {[
                   "A/B Tested Subject Lines",
                   "LinkedIn Connection & InMail Requests",
                   "US-Based SDR Calling Support",
                   "Calendar Booking & Handoff"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                     <div className="bg-green-100 text-green-600 p-1 rounded-full"><Check size={14} /></div>
                     {item}
                   </li>
                 ))}
               </ul>
               <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                 View Sample Campaigns <ArrowRight size={18} />
               </button>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="order-1 lg:order-2 relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 group"
             >
                <Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2632&auto=format&fit=crop" alt="Outreach" fill className="object-cover transition duration-700 group-hover:scale-105" />
                {/* Floating Email UI */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 bg-white rounded-xl shadow-2xl p-6 border border-slate-100 rotate-3 transition duration-500 group-hover:rotate-0">
                   <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><MessageSquare size={16}/></div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">Meeting Booked</p>
                        <p className="text-[10px] text-slate-500">Just now</p>
                      </div>
                   </div>
                   <p className="text-sm text-slate-600 font-medium">"Hey Sarah, I saw your post about AI scaling. Would love to discuss how..."</p>
                </div>
             </motion.div>
          </div>

          {/* Service 3: Content Syndication */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 group"
             >
                <Image src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2674&auto=format&fit=crop" alt="Content" fill className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay"></div>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
               <h2 className="text-4xl font-bold text-slate-900 mb-6">Content Syndication</h2>
               <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                 Turn your whitepapers and eBooks into lead magnets. We distribute your content to our network of 50M+ B2B professionals and filter for your specific criteria.
               </p>
               <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                      <Target />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Cost Per Lead (CPL)</h4>
                      <p className="text-slate-600 text-sm">Pay only for leads that match your filters.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                      <Layers />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Custom Questions</h4>
                      <p className="text-slate-600 text-sm">Ask qualification questions (e.g. "What is your budget?") before you pay.</p>
                    </div>
                  </div>
               </div>
             </motion.div>
          </div>

        </div>
      </section>

      {/* 3. PROCESS TIMELINE (Horizontal) */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="mb-16 text-center">
             <h2 className="text-4xl font-bold mb-4">The Engagement Model</h2>
             <p className="text-slate-400">How we go from "Kickoff" to "Closed Won".</p>
           </div>

           <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-700 z-0"></div>

              {[
                { title: "Onboarding", icon: <Zap />, desc: "We map your TAM, configure domains, and setup mailboxes." },
                { title: "Data Mining", icon: <Database />, desc: "AI scans for intent signals and builds the prospect list." },
                { title: "Campaign Launch", icon: <MousePointer />, desc: "Sequences go live. We A/B test copy daily." },
                { title: "Optimization", icon: <BarChart3 />, desc: "Weekly reporting calls to refine targeting and messaging." }
              ].map((step, i) => (
                <div key={i} className="relative z-10 bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition duration-300">
                   <div className="w-16 h-16 bg-slate-900 rounded-full border border-slate-600 flex items-center justify-center text-blue-400 mb-6 mx-auto md:mx-0">
                     {step.icon}
                   </div>
                   <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. DELIVERABLES GRID (Bento Mini) */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">What you get.</h2>
          <p className="text-slate-500">No fluff. Just deliverables.</p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
           {[
             "Dedicated Success Manager",
             "Weekly Strategy Calls",
             "Live Dashboard Access",
             "CRM Integration",
             "Unlimited Email Sending",
             "A/B Copywriting",
             "Data Replacement Guarantee",
             "GDPR Compliance"
           ].map((item, i) => (
             <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 text-center font-bold text-slate-700 shadow-sm hover:shadow-md transition">
               {item}
             </div>
           ))}
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
           <Image src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2670&auto=format&fit=crop" alt="Abstract" fill className="object-cover opacity-10 mix-blend-overlay" />
           <div className="relative z-10">
             <h2 className="text-4xl md:text-6xl font-bold mb-6">Stop buying lists.<br/>Start buying meetings.</h2>
             <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
               Partner with the agency that treats your budget like their own.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link href="/contact">
                 <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition shadow-lg">
                   Book a Strategy Call
                 </button>
               </Link>
               <button className="bg-blue-700 border border-blue-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition">
                 View Pricing
               </button>
             </div>
           </div>
        </div>
      </section>

    </main>
  );
}