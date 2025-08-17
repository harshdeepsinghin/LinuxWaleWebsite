import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WelcomeRedirect from "@/components/WelcomeRedirect";
import ClientScripts from "@/components/ClientScripts";
import ConditionalLayout from "@/components/ConditionalLayout";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedPenguin from "@/components/AnimatedPenguin";
import MatrixBackground from "@/components/MatrixBackground";

import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
  metadataBase: new URL('https://linuxwale.in'),
  title: {
    default: 'LinuxWale – Linux Community India',
    template: '%s | LinuxWale'
  },
  description: 'LinuxWale (also searched as Linux Wale, Linux Vale, Linux Waale, Linux Wala) – community for Linux, FOSS, privacy & education. Why windows, when we have doors?',
  keywords: [
  'LinuxWale','Linux Wale','Linux Vale','Linux Waale','Linux Wala','Linux Vaale','LinuxWaleOfficial','linuxwaleofficial','Linux community India','learn linux','open source community','FOSS education','privacy awareness'
  ],
  applicationName: 'LinuxWale',
  authors: [{ name: 'LinuxWale Community' }],
  creator: 'LinuxWale',
  publisher: 'LinuxWale',
  alternates: {
    canonical: 'https://linuxwale.in/'
  },
  openGraph: {
    title: 'LinuxWale – Linux & FOSS Community',
    description: 'LinuxWale (Linux Wale / Linux Vale / Linux Waale) – community for Linux beginners & enthusiasts. Join us for FOSS, privacy and learning.',
    url: 'https://linuxwale.in/',
    siteName: 'LinuxWale',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://linuxwale.in/images/LW_W_on_B.webp',
        width: 1200,
        height: 630,
        alt: 'LinuxWale – Linux & FOSS Community Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LinuxWale – Linux & FOSS Community',
    description: 'Join LinuxWale (Linux Wale / Linux Vale) – community for Linux, open source & privacy.',
    creator: '@linuxwale',
    images: ['https://linuxwale.in/images/LW_W_on_B.webp']
  },
  category: 'technology',
  icons: {
    icon: 'favicon.ico',
    shortcut: 'favicon.ico',
    apple: 'favicon.ico',
  },
  verification: {
    other: {
      // Add search console code here later if available
    }
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        {/* Primary site canonical (metadata.alternates handles as well) */}
        <link rel="canonical" href="https://linuxwale.in/" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'LinuxWale',
              alternateName: [
                'Linux Wale', 'Linux Vale', 'Linux Waale', 'Linux Wala', 'Linux Vaale', 'LinuxWale.com'
              ],
              url: 'https://linuxwale.in/',
              alternateUrl: 'https://linuxwale.com/',
              logo: 'https://linuxwale.in/images/LW_W_on_B.webp',
              sameAs: [
                'https://t.me/linuxwale',
                'https://x.com/linuxwale',
                'https://x.com/linuxwaleofficial',
                'https://twitter.com/linuxwale',
                'https://twitter.com/linuxwaleofficial',
                'https://github.com/linuxwale',
                'https://youtube.com/@linuxwale',
                'https://youtube.com/@linuxwaleofficial',
                'https://www.instagram.com/linuxwale',
                'https://www.instagram.com/linuxwaleofficial'
              ],
              description: 'LinuxWale (Linux Wale / Linux Vale / Linux Waale) – community for Linux, FOSS, privacy & open source education.'
            })
          }}
        />
        {/* Client-side safety redirect if .com is served without server 301 */}
        <script
          dangerouslySetInnerHTML={{
            __html: "if(location.hostname==='linuxwale.com'){location.replace('https://linuxwale.in'+location.pathname+location.search+location.hash);}"
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'LinuxWale',
              url: 'https://linuxwale.in/',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.google.com/search?q=LinuxWale+{search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <MatrixBackground />
          <ScrollProgress />
          <AnimatedPenguin />
          <WelcomeRedirect />
          <ConditionalLayout pageContent={children}>
            <>
              <Navbar />
              {children}
              <Footer />
            </>
          </ConditionalLayout>
          <ClientScripts />
        </ThemeProvider>
      </body>
    </html>
  );
}