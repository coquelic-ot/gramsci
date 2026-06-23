import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gramsci.studio'),
  title: {
    default: 'gramsci | Creative Design Solutions for Brands',
    template: '%s | gramsci'
  },
  description: 'Strategic and creative design solutions. Specializing in branding, web design, graphic design, and digital campaigns.',
  keywords: ['design', 'graphic design', 'web design', 'branding', 'creative agency', 'Tokyo', 'UX/UI design', 'art direction', 'portfolio'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'gramsci',
    description: 'Creative design solutions for forward-thinking brands',
    type: 'website',
    url: 'https://www.gramsci.studio',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        )}
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
