import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Valen & Partners | Premium Consulting, Marketing & AI Implementation",
  description: "We partner with ambitious companies to scale without limits. Premium consulting, marketing, and AI implementation firm delivering sustainable growth and competitive advantage.",
  keywords: [
    "business consulting",
    "marketing agency",
    "AI implementation",
    "business growth",
    "premium consulting",
    "digital transformation",
    "business strategy",
    "marketing strategy",
    "artificial intelligence",
    "business scaling"
  ],
  authors: [{ name: "Valen & Partners" }],
  creator: "Valen & Partners",
  publisher: "Valen & Partners",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://valenpartners.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Valen & Partners | Premium Consulting, Marketing & AI Implementation",
    description: "We partner with ambitious companies to scale without limits. Premium consulting, marketing, and AI implementation firm delivering sustainable growth and competitive advantage.",
    url: 'https://valenpartners.com',
    siteName: 'Valen & Partners',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Valen & Partners - Premium Business Consulting',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Valen & Partners | Premium Consulting, Marketing & AI Implementation",
    description: "We partner with ambitious companies to scale without limits. Premium consulting, marketing, and AI implementation firm delivering sustainable growth and competitive advantage.",
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo-2.png',
    shortcut: '/logo-2.png',
    apple: '/logo-2.png',
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
