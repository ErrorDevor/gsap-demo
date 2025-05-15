import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import './globals.css';

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter', 
  display: 'swap',
});

export const metadata: Metadata = {
  title: "GSAP Demo Animation",
  description: "Gsap ScrollTrigger Demo Animation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={interTight.variable}>
      <body>{children}</body>
    </html>
  );
}