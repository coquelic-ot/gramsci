import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  cta?: {
    text: string;
    href: string;
  };
  compact?: boolean;
}

export default function Hero({ title, subtitle, cta, compact }: HeroProps) {
  const paddingTop = compact ? "pt-0" : "pt-32 md:pt-40";
  const paddingBottom = compact ? "pb-12" : "pb-20 md:pb-32";

  return (
    <section className={`${paddingTop} ${paddingBottom} px-6 bg-gradient-to-b from-white to-gray-50`}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        {cta && (
          <Link
            href={cta.href}
            className="inline-block px-8 py-4 bg-primary text-secondary font-semibold hover:bg-accent transition-colors"
          >
            {cta.text}
          </Link>
        )}
      </div>
    </section>
  );
}
