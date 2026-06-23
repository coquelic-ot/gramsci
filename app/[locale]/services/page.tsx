import Hero from '@/components/Hero';
import { content } from '@/data/content';

export default function Services() {
  const { services } = content;

  return (
    <>
      <Hero
        title={services.title}
        subtitle={services.intro}
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-16">
          {services.offerings.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`relative aspect-video bg-gray-200 rounded-lg ${
                index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
              }`} />
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-primary text-secondary py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your vision, goals, and target audience',
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Developing a comprehensive creative strategy',
              },
              {
                step: '03',
                title: 'Design',
                description: 'Creating beautiful, functional design solutions',
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Implementing and launching your project',
              },
            ].map((phase) => (
              <div key={phase.step}>
                <p className="text-4xl font-bold text-accent mb-4">{phase.step}</p>
                <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                <p className="text-gray-400">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-lg text-gray-600 mb-8">
          Ready to bring your vision to life? Contact us to discuss your project and how we can help.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-primary text-secondary font-semibold hover:bg-accent transition-colors"
        >
          Start Your Project
        </a>
      </section>
    </>
  );
}
