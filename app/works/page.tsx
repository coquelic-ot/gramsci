import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Works | gramsci',
};

export default function Works() {
  return (
    <>
      <Hero title="Our Works" subtitle="Portfolio of our recent projects and creative solutions" compact />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </>
  );
}
