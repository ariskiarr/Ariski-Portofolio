import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ariski Ade Raharjo - Frontend Developer & System Analyst",
  description: "Frontend Developer dan System Analyst yang passionate dalam menciptakan solusi teknologi inovatif. Mahasiswa Sistem Informasi Universitas Jember dengan keahlian React, Next.js, dan data analysis.",
  keywords: "frontend developer, web developer, react, nextjs, portfolio, system analyst, universitas jember, ariski ade raharjo",
  authors: [{ name: 'Ariski Ade Raharjo' }],
  creator: 'Ariski Ade Raharjo',
  publisher: 'Ariski Ade Raharjo',
  metadataBase: new URL('https://webporto-ariski.vercel.app'),
  openGraph: {
    title: 'Ariski Ade Raharjo - Frontend Developer & System Analyst',
    description: 'Frontend Developer dan System Analyst yang passionate dalam menciptakan solusi teknologi inovatif',
    url: 'https://webporto-ariski.vercel.app',
    siteName: 'Ariski Portfolio',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/images/avatar.png',
        width: 1200,
        height: 630,
        alt: 'Ariski Ade Raharjo Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ariski Ade Raharjo - Portfolio',
    description: 'Frontend Developer & System Analyst',
    images: ['/images/avatar.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
