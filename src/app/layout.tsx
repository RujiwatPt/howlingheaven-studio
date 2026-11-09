import type { Metadata, Viewport } from 'next';
import { Inter, Cinzel, Playfair_Display } from 'next/font/google';
import { SiteJsonLd } from '@/components/seo/SiteJsonLd';
import { siteDescription, siteName, siteUrl } from '@/lib/site';
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
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Browser Games, Visual Novels & AI`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  keywords: [
    'Howling Heaven Studio',
    'visual novel studio',
    'browser games',
    'Howly.ai',
    'BeastForge',
    'AI chatbot development',
  ],
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/images/logo_emblem.png', type: 'image/png' }],
    apple: '/images/logo_emblem.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName,
    title: `${siteName} | Browser Games, Visual Novels & AI`,
    description: siteDescription,
    images: [
      {
        url: '/images/hero_wolf_moon.jpg',
        width: 1376,
        height: 768,
        alt: 'A wolf howling at a full moon, the mark of Howling Heaven Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | Browser Games, Visual Novels & AI`,
    description: siteDescription,
    images: ['/images/hero_wolf_moon.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#07090E',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${cinzel.variable} ${playfair.variable}`}>
      <body className="bg-[#07090E] text-slate-200 antialiased selection:bg-amber-400 selection:text-slate-950 min-h-screen flex flex-col">
        <SiteJsonLd />
        {children}
      </body>
    </html>
  );
}
