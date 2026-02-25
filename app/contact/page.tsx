'use client';

import { motion } from 'framer-motion';
import { Check, ChevronDown, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// --- FAQ COMPONENT ---
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-slate-200">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">{question}</span>
        <ChevronDown className={`transform transition-transform duration-300 text-slate-400 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-slate-600 leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
};

export default function ContactPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO / FORM SECTION */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-5 gap-8 lg:gap-16">
          
          {/* LEFT SIDE: Info & Context (2 cols) */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Let's fill your <br /> <span className="text-blue-600">pipeline.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Tell us about your Ideal Customer Profile (ICP) and revenue goals. Our strategists will build a custom sample list for you.
              </p>
              
              <div className="space-y-6">
                 {[
                   { icon: <Mail />, title: "Email", val: "contact@trueintent.com" },
                   { icon: <Phone />, title: "Phone", val: "+1 (858) 733-7444" },
                   { icon: <MapPin />, title: "HQ", val: "2036 North Gilbert Road Suite 2, Mesa AZ 85203" }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 group cursor-pointer">
                     <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition duration-300 shadow-sm">
                       {item.icon}
                     </div>
                     <div>
                       <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.title}</p>
                       <p className="font-semibold text-slate-900">{item.val}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </motion.div>

            {/* Visual Social Proof */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
               <div className="relative z-10">
                 <div className="flex -space-x-3 mb-4">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 relative overflow-hidden bg-slate-700">
                         <Image src={`https://randomuser.me/api/portraits/women/${i*10+20}.jpg`} alt="User" fill className="object-cover" />
                      </div>
                    ))}
                 </div>
                 <p className="text-lg font-medium italic mb-4">"TrueIntent revolutionized our outbound. We booked 40 meetings in month one."</p>
                 <p className="text-sm text-slate-400 font-bold">— VP of Sales, TechFlow</p>
               </div>
               {/* Abstract Blob */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-[50px] opacity-30"></div>
            </div>
          </div>

          {/* RIGHT SIDE: The Form (3 cols) */}
          <div className="lg:col-span-3">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-8 md:p-12"
            >
               <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-900 ml-1">First Name</label>
                      <input type="text" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition font-medium" placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-900 ml-1">Last Name</label>
                      <input type="text" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition font-medium" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 ml-1">Work Email</label>
                    <input type="email" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition font-medium" placeholder="jane@company.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 ml-1">I am interested in...</label>
                    <div className="grid grid-cols-2 gap-4">
                       {['Lead Generation', 'Intent Data', 'Data Cleansing', 'Partnership'].map((opt, i) => (
                         <label key={i} className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">
                           <input type="radio" name="interest" className="w-5 h-5 text-blue-600 accent-blue-600" />
                           <span className="text-sm font-bold text-slate-700">{opt}</span>
                         </label>
                       ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 ml-1">Additional Details</label>
                    <textarea rows={4} className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition font-medium" placeholder="Tell us about your target market..."></textarea>
                  </div>

                  <button type="button" className="w-full bg-blue-600 text-white font-bold text-lg py-5 rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition transform hover:-translate-y-1">
                    Get Free Strategy Audit
                  </button>
                  
                  <p className="text-center text-xs text-slate-400 mt-4">
                    By submitting, you agree to our privacy policy. We respect your inbox.
                  </p>
               </form>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. "WHAT HAPPENS NEXT" SECTION */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-16">What happens after you click submit?</h2>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
             {/* Connector Line */}
             <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 rounded-full"></div>

             {[
               { title: "1. Discovery", desc: "We research your company and TAM before we even call you." },
               { title: "2. Strategy Call", desc: "A 15-min chat to validate your ICP and show you live data samples." },
               { title: "3. Launch", desc: "If we're a fit, we can have your first campaign live in 48 hours." }
             ].map((step, i) => (
               <div key={i} className="relative z-10 flex flex-col items-center">
                 <div className="w-24 h-24 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mb-6 shadow-sm">
                   {i + 1}
                 </div>
                 <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
                 <p className="text-slate-600 max-w-xs">{step.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. FAQ SECTION */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Common Questions</h2>
            <p className="text-slate-600">Everything you need to know before booking.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
             <FAQItem 
               question="Do you offer a free trial?" 
               answer="We offer a free data sample (50 verified leads) customized to your ICP so you can test our data accuracy before committing." 
             />
             <FAQItem 
               question="Where do you source your data?" 
               answer="We aggregate data from 15+ premium vendors and cross-reference it with our proprietary intent signals. Then, our human team verifies phone numbers manually." 
             />
             <FAQItem 
               question="Does this integrate with Salesforce?" 
               answer="Yes. We have native integrations for Salesforce, HubSpot, Pipedrive, and Outreach.io. Data flows automatically into your CRM." 
             />
             <FAQItem 
               question="What is your pricing model?" 
               answer="We offer both retainer-based models for full service and CPL (Cost Per Lead) models for data delivery. Book a call to see which fits your needs." 
             />
          </div>
        </div>
      </section>

    </main>
  );
}