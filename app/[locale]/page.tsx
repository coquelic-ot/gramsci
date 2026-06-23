import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { content } from '@/data/content';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Design That Moves"
        subtitle="We create strategic and creative solutions that help brands stand out and inspire action"
        cta={{ text: 'Explore Our Work', href: '/works' }}
      />

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Works</h2>
          <p className="text-lg text-gray-600">
            A selection of our recent projects and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/works"
            className="inline-block px-8 py-4 border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-secondary transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-primary text-secondary py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-gray-300">
              Comprehensive design services spanning strategy, creativity, and execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.services.offerings.slice(0, 3).map((service) => (
              <div key={service.title} className="p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <ul className="text-xs text-gray-400 space-y-2">
                  {service.items.slice(0, 2).map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-secondary text-primary font-semibold hover:bg-accent hover:text-secondary transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's work together to create something extraordinary. Contact us to discuss your project.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-primary text-secondary font-semibold hover:bg-accent transition-colors"
        >
          Get In Touch
        </Link>
      </section>
    </>
  );
}
