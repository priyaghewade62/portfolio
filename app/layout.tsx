import type { Metadata } from 'next';
import '../styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Priya Ghewade | Blockchain & AI Developer',
  description: 'Personal portfolio of Priya Ghewade — Blockchain Developer, Smart Contract Engineer, and AI Developer.',
  metadataBase: new URL('https://priyaghewade.dev'),
  openGraph: {
    title: 'Priya Ghewade | Blockchain & AI Developer',
    description: 'Building secure blockchain infrastructure and intelligent AI applications.',
    type: 'website',
    url: 'https://priyaghewade.dev',
    siteName: 'Priya Ghewade Portfolio',
    images: [
      {
        url: 'https://priyaghewade.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Priya Ghewade Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priya Ghewade | Blockchain & AI Developer',
    description: 'Building secure blockchain infrastructure and intelligent AI applications.',
    creator: '@pri_yaghewade'
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-[#020617] text-white`}>{children}</body>
    </html>
  );
}
