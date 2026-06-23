import Hero from '@/components/Hero';
import { content } from '@/data/content';

export const metadata = {
  title: 'Services | gramsci',
};

export default function Services() {
  return (
    <>
      <Hero title="Our Services" subtitle="Comprehensive design services spanning strategy, creativity, and execution" compact />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.offerings.map((service) => (
            <div key={service.title} className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="text-sm text-gray-600">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
