import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return {};
  return {
    title: `${project.title} | gramsci`,
    description: project.description,
  };
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <>
      <section className="max-w-5xl mx-auto px-6 py-20">
        <Link href="/works" className="text-primary hover:text-accent mb-8 inline-block">
          ← Back to Works
        </Link>

        <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{project.description}</p>

        <div className="bg-gray-100 rounded-lg overflow-hidden mb-12 aspect-video relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-2 gap-8 mb-20">
          <div>
            <h3 className="text-lg font-bold mb-2">Category</h3>
            <p className="text-gray-600">{project.category}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Year</h3>
            <p className="text-gray-600">{project.year}</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProjects.map((p) => (
              <ProjectCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
