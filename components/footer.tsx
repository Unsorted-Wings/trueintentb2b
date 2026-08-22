import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { services, contactInfo } from '@/lib/data';

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Resources', href: '/resources' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="TrueIntent B2B" width={36} height={36} className="h-8 w-auto" />
            <span className="font-display text-lg font-bold tracking-tight text-white">
              TRUE<span className="text-brand-500">INTENT</span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-300">
            Technology is a tool, but people buy from people. We build high-converting B2B lead generation engines driven by human expertise and real conversations.
          </p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-navy-300 transition hover:border-brand-500 hover:bg-brand-500 hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">Services</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-navy-300 transition hover:text-accent-yellow">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">Company</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-navy-300 transition hover:text-accent-yellow">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">Get in Touch</h4>
          <ul className="mt-5 space-y-4 text-sm text-navy-300">
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-brand-400" />
              <a href={`mailto:${contactInfo.email}`} className="transition hover:text-white">{contactInfo.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-brand-400" />
              <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`} className="transition hover:text-white">{contactInfo.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-400" />
              <span>{contactInfo.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-navy-400">
        &copy; {new Date().getFullYear()} TrueIntent B2B. Predictable Pipeline. Powered by People.
      </div>
    </footer>
  );
}
