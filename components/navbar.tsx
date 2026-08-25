'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { services } from '@/lib/data';

const links = [
  { name: 'About', href: '/about' },
  { name: 'Industries', href: '/industries' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Resources', href: '/resources' },
  { name: 'Careers', href: '/careers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkCls = (href: string) =>
    `relative text-sm font-medium transition after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-full after:skew-x-[-12deg] after:bg-brand-500 after:transition-transform after:duration-300 ${
      pathname.startsWith(href)
        ? 'font-semibold text-brand-600 after:scale-x-100'
        : 'text-navy-600 after:scale-x-0 hover:text-navy-900 hover:after:scale-x-100'
    }`;

  const closeAll = () => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-navy-200/70 bg-white/90 py-3 backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="TrueIntent B2B" width={40} height={40} className="h-9 w-auto" priority />
          <span className="font-display text-lg font-bold tracking-tight text-navy-900">
            TRUE<span className="text-brand-500">INTENT</span>
            <span className="text-gold-500">B2B</span>
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-7 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className={`${linkCls('/services')} flex items-center gap-1`}>
              Services
              <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 top-full mt-4 w-80 -translate-x-1/2 overflow-hidden rounded-xl border border-navy-100 bg-white shadow-xl shadow-navy-900/10"
                >
                  <div className="p-2">
                    <Link
                      href="/services"
                      onClick={closeAll}
                      className="mb-1 flex items-center justify-between rounded-lg px-4 py-3 text-xs font-bold uppercase tracking-widest text-brand-600 transition hover:bg-navy-50"
                    >
                      All Services <ArrowRight size={14} />
                    </Link>
                    {services.map((svc) => (
                      <Link
                        key={svc.slug}
                        href={`/services/${svc.slug}`}
                        onClick={closeAll}
                        className="block rounded-lg px-4 py-2.5 text-sm text-navy-700 transition hover:bg-navy-50 hover:text-navy-900"
                      >
                        {svc.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {links.map((l) => (
            <Link key={l.href} href={l.href} className={linkCls(l.href)}>
              {l.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className="clip-slant-btn group inline-flex items-center gap-2 bg-brand-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-600"
          >
            Book a Strategy Call
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-navy-900 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-navy-100 bg-white lg:hidden"
          >
            <div className="flex max-h-[75vh] flex-col gap-1 overflow-y-auto p-6">
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex w-full items-center justify-between py-2 font-display text-base font-semibold text-navy-900"
                >
                  Services
                  <ChevronDown size={18} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="space-y-1 pb-2 pl-4">
                    <Link href="/services" onClick={closeAll} className="block py-1.5 text-sm font-semibold text-brand-600">
                      All Services
                    </Link>
                    {services.map((svc) => (
                      <Link key={svc.slug} href={`/services/${svc.slug}`} onClick={closeAll} className="block py-1.5 text-sm text-navy-600">
                        {svc.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/" onClick={closeAll} className="py-2 font-display text-base font-semibold text-navy-900">
                Home
              </Link>
              {links.map((l) => (
                <Link key={l.href} href={l.href} onClick={closeAll} className="py-2 font-display text-base font-semibold text-navy-900">
                  {l.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={closeAll}
                className="mt-4 inline-flex w-fit items-center gap-2 bg-brand-500 px-6 py-3 text-sm font-bold text-white"
              >
                Book a Strategy Call <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
