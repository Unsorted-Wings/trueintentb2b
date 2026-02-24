'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';
import { Target, Menu, X, ArrowRight, Linkedin, Twitter, Facebook } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

// --- NAVIGATION COMPONENT ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' }, // You can create this later
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition duration-300">
            <Target size={24} strokeWidth={3} />
          </div>
          <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-black'} transition-colors`}>
            TrueIntent<span className="text-blue-500">B2B</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-semibold transition hover:text-blue-500 ${
                pathname === link.href ? 'text-blue-500' : (scrolled ? 'text-slate-600' : 'text-slate-500')
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact">
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-500/30">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-500" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-900">
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- FOOTER COMPONENT ---
const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
            <Target size={18} />
          </div>
          <span className="text-2xl font-bold text-white">TrueIntent<span className="text-blue-500">B2B</span></span>
        </div>
        <p className="max-w-sm mb-8 text-slate-400">
          We combine human intelligence with AI-driven intent data to deliver leads that actually convert. Stop guessing, start closing.
        </p>
        <div className="flex gap-4">
          {[Linkedin, Twitter, Facebook].map((Icon, i) => (
            <div key={i} className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition cursor-pointer">
              <Icon size={18} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 text-lg">Solutions</h4>
        <ul className="space-y-3 text-sm">
          {['Lead Generation', 'Content Syndication', 'Account Based Marketing', 'Data Cleansing', 'Intent Data'].map(item => (
             <li key={item} className="hover:text-blue-500 cursor-pointer transition">{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 text-lg">Contact</h4>
        <ul className="space-y-3 text-sm">
          <li>hello@trueintentb2b.com</li>
          <li>+1 (858) 733-7444</li>
          <li>2036 North Gilbert Road Suite 2, Mesa AZ 85203</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 text-center text-xs text-slate-600 border-t border-slate-900 pt-8">
      &copy; {new Date().getFullYear()} TrueIntentB2B. All rights reserved.
    </div>
  </footer>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}