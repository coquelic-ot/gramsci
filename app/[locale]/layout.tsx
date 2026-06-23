import type { Metadata } from 'next';
import Script from 'next/script';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';

type Props = {
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  const isJapanese = locale === 'ja';

  const title = isJapanese
    ? 'gramsci | クリエイティブデザインソリューション'
    : 'gramsci | Creative Design Solutions for Brands';

  const description = isJapanese
    ? 'gramsci - 戦略的かつ創造的なデザインソリューション。ブランディング、ウェブデザイン、グラフィックデザイン、デジタルキャンペーンを専門としています。'
    : 'gramsci - Strategic and creative design solutions. Specializing in branding, web design, graphic design, and digital campaigns.';

  const ogDescription = isJapanese
    ? 'クリエイティブなブランドのためのデザインソリューション'
    : 'Creative design solutions for forward-thinking brands';

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://gramsci.studio'),
    title: {
      default: title,
      template: `%s | gramsci`
    },
    description,
    keywords: isJapanese
      ? ['デザイン', 'グラフィックデザイン', 'ウェブデザイン', 'ブランディング', 'クリエイティブエージェンシー', '東京', 'UX/UIデザイン', 'アートディレクション', 'ポートフォリオ']
      : ['design', 'graphic design', 'web design', 'branding', 'creative agency', 'Tokyo', 'UX/UI design', 'art direction', 'portfolio'],
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    openGraph: {
      title: 'gramsci',
      description: ogDescription,
      type: 'website',
      url: isJapanese ? 'https://gramsci.studio/ja' : 'https://gramsci.studio/en',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'gramsci',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'gramsci',
      description: ogDescription,
      images: ['/og-image.png'],
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    authors: [{ name: 'gramsci' }],
    category: 'Design & Creative',
    alternates: {
      languages: {
        en: 'https://gramsci.studio/en',
        ja: 'https://gramsci.studio/ja',
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Props['params'] }) {
  const locale = params.locale;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({ locale });
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang={locale} suppressHydrationWarning>
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
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'gramsci',
              url: 'https://gramsci.studio',
              logo: 'https://gramsci.studio/logo.png',
              description: locale === 'ja'
                ? 'クリエイティブなブランドのためのデザインソリューション'
                : 'Creative design solutions for forward-thinking brands',
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
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
