import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Gramsci | Design Studio',
  description: 'Gramsci Design Studio - Creative and innovative design solutions for forward-thinking brands.',
  keywords: ['design', 'studio', 'creative', 'portfolio'],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Gramsci | Design Studio',
    description: 'Creative and innovative design solutions',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
