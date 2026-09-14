import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import CustomCursor from '@/components/custom-cursor';
import ScrollProgress from '@/components/scroll-progress';
import BackToTop from '@/components/back-to-top';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: {
    default: 'TrueIntent B2B | Predictable Pipeline. Powered by People.',
    template: '%s | TrueIntent B2B',
  },
  description:
    'High-converting B2B lead generation engines driven by human expertise, empathetic outreach, and real conversations. Stop chasing auto-replies. Start building real business relationships.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-white font-sans text-navy-900 antialiased`}
      >
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <CustomCursor />
      </body>
    </html>
  );
}
