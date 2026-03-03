'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, BookOpen, Check, Database, FileText, Phone, Search, Target, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    slug: 'intent-data',
    icon: <Search size={24} />,
    color: 'bg-blue-100 text-blue-600',
    title: 'Intent Data & Tele-Verification',
    tagline: 'Know Who\'s Ready Before Your Competitor Does.',
    description: 'We layer human validation on top of intent data to verify active need, decision-making authority, and buying timeline — so your team only engages accounts that are genuinely in-market.',
    outcome: 'Fewer wasted calls. Higher connect rates. Pipeline that moves.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
  },
  {
    slug: 'abm-execution',
    icon: <Target size={24} />,
    color: 'bg-indigo-100 text-indigo-600',
    title: 'ABM Execution',
    tagline: 'Surround Your Best-Fit Accounts. Own the Conversation.',
    description: 'We build and run account-based marketing programs that penetrate your priority accounts through coordinated, multi-touch outreach across email, phone, and LinkedIn.',
    outcome: 'Deeper account penetration and sales conversations with the right people inside your priority accounts.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2632&auto=format&fit=crop',
  },
  {
    slug: 'mql-generation',
    icon: <Users size={24} />,
    color: 'bg-violet-100 text-violet-600',
    title: 'MQL Generation',
    tagline: 'Top-of-Funnel Leads That Are Actually Worth Following Up.',
    description: 'We deliver Marketing Qualified Leads built to your exact criteria — sourced from verified databases, captured through multi-channel outreach, and scored against your MQL definition before delivery.',
    outcome: 'A consistent, predictable flow of top-of-funnel opportunities.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop',
  },
  {
    slug: 'hql-bant',
    icon: <Phone size={24} />,
    color: 'bg-emerald-100 text-emerald-600',
    title: 'HQL / BANT-Qualified Leads',
    tagline: 'Sales-Ready Leads. Every Single One.',
    description: 'Our tele-qualification team conducts live conversations with prospects to confirm all four BANT pillars — Budget, Authority, Need, and Timeline — before any lead reaches your sales team.',
    outcome: 'Higher conversion rates, shorter sales cycles, and a pipeline your team trusts.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop',
  },
  {
    slug: 'content-syndication',
    icon: <FileText size={24} />,
    color: 'bg-orange-100 text-orange-600',
    title: 'Whitepaper & Content Syndication',
    tagline: 'Put Your Expertise in Front of the Right Buyers.',
    description: 'We distribute your whitepapers, eBooks, and reports to verified, in-market B2B SaaS decision-makers across our network — delivering content-engaged leads with optional tele-follow-up.',
    outcome: 'Brand authority, mid-funnel pipeline, and leads who already know what you stand for.',
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2674&auto=format&fit=crop',
  },
  {
    slug: 'crm-enrichment',
    icon: <Database size={24} />,
    color: 'bg-cyan-100 text-cyan-600',
    title: 'CRM Data Cleansing & Enrichment',
    tagline: 'Your CRM Should Be Your Greatest Asset. Is It?',
    description: 'We cleanse duplicates, verify emails and direct dials, enrich missing firmographic fields, and restructure data for better ICP targeting — so every campaign starts from a foundation you can trust.',
    outcome: 'A CRM your sales and marketing teams actually use — and rely on.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop',
  },
  {
    slug: 'bookkeeping',
    icon: <BookOpen size={24} />,
    color: 'bg-rose-100 text-rose-600',
    title: 'Bookkeeping Services',
    tagline: 'Clean Books. Clear Vision. Confident Decisions.',
    description: 'TrueIntent B2B\'s bookkeeping service gives you accurate, up-to-date financial records managed by experienced professionals — so your leadership team stays focused on pipeline, not paperwork.',
    outcome: 'Accurate books, clean records, and financial visibility that supports smarter, faster business decisions.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2672&auto=format&fit=crop',
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-slate-50 overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500 rounded-full blur-[100px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-blue-300 text-sm font-bold tracking-wide mb-6">
              OUR SERVICES
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Demand Generation That <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Delivers More Than Data.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Every service we offer is designed with one goal — getting your sales team in front of buyers who are ready, verified, and qualified.
            </p>
            <Link href="/contact">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-blue-500 transition shadow-lg shadow-blue-500/30 inline-flex items-center gap-2">
                Book a Strategy Call <ArrowRight size={18} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.color}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm font-semibold text-blue-600 mb-3 italic">{service.tagline}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{service.description}</p>

                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mb-6">
                    <div className="flex items-start gap-2">
                      <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                      <p className="text-xs text-slate-700 font-medium leading-relaxed"><span className="font-bold">Outcome:</span> {service.outcome}</p>
                    </div>
                  </div>

                  <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROCESS OVERVIEW */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4">The Engagement Model</h2>
            <p className="text-slate-400">How we go from "Kickoff" to "Closed Won".</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-700 z-0"></div>

            {[
              { title: "Onboarding", icon: <Zap />, desc: "We map your ICP, define your MQL/HQL criteria, and align on campaign goals." },
              { title: "Data & Intent", icon: <Search />, desc: "We identify in-market accounts using intent signals and build your verified prospect list." },
              { title: "Tele-Qualification", icon: <Phone />, desc: "Our team conducts live conversations to confirm BANT before any lead reaches you." },
              { title: "Delivery & Optimize", icon: <BarChart3 />, desc: "Qualified leads delivered to your CRM with full context. Weekly reporting calls to refine." }
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

      {/* 4. CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <Image src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2670&auto=format&fit=crop" alt="Abstract" fill className="object-cover opacity-10 mix-blend-overlay" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to talk pipeline?</h2>
            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
              Let our team build you a custom demand gen strategy tailored to your ICP and revenue goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition shadow-lg">
                  Book a Strategy Call
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );}