import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://gramsci.studio'),
  title: {
    default: 'Gramsci | Design Studio - Creative Design Solutions for Brands',
    template: '%s | Gramsci Design Studio'
  },
  description: 'Gramsci Design Studio - Strategic and creative design solutions. Specializing in branding, web design, graphic design, and digital campaigns.',
  keywords: [
    'design studio',
    'graphic design',
    'web design',
    'branding',
    'creative agency',
    'Tokyo',
    'UX/UI design',
    'art direction',
    'portfolio'
  ],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Gramsci | Design Studio',
    description: 'Creative design solutions for forward-thinking brands',
    type: 'website',
    url: 'https://gramsci.studio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gramsci Design Studio',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gramsci | Design Studio',
    description: 'Creative design solutions for forward-thinking brands',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  authors: [{ name: 'Gramsci, Inc.' }],
  category: 'Design & Creative',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        {gaId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {/* JSON-LD Organization Schema */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Gramsci, Inc.',
              url: 'https://gramsci.studio',
              logo: 'https://gramsci.studio/logo.png',
              description: 'Creative design studio specializing in branding, web design, and digital communications',
              contact: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: 'hello@gramsci.studio',
              },
            })
          }}
        />
      </head>
      <body className="bg-white text-primary">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
