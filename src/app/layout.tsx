import type { Metadata } from 'next';
import { Inter, Cinzel, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Howling Heaven Studio | Creative Forge for Stories, Brands & Games',
  description:
    'Howling Heaven Studio is a creative forge combining art, strategy, and technology to craft unforgettable brand identities, game art, cinematics, and interactive web experiences.',
  keywords: [
    'Howling Heaven Studio',
    'Game Art Design',
    'Branding & Identity',
    'Cinematic VFX',
    'Interactive Web Design',
    'Three.js Animation',
  ],
  authors: [{ name: 'Howling Heaven Studio' }],
  openGraph: {
    title: 'Howling Heaven Studio | We Create Worlds That Leave a Mark',
    description:
      'Howling Heaven Studio is a creative forge combining art, strategy, and technology.',
    type: 'website',
    images: ['/images/hero_wolf_moon.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${cinzel.variable} ${playfair.variable}`}>
      <body className="bg-[#07090E] text-slate-200 antialiased selection:bg-amber-400 selection:text-slate-950 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
