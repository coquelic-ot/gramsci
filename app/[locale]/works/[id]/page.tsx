import Link from 'next-intl/link';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetail({ params }: PageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Link href="/works" className="text-sm font-medium hover:text-accent mb-8 block">
            ← Back to Works
          </Link>

          <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-600 text-lg mb-8">{project.description}</p>

          <div className="grid grid-cols-2 gap-8 max-w-md">
            {project.year && (
              <div>
                <p className="text-sm text-gray-500 mb-1">Year</p>
                <p className="font-semibold">{project.year}</p>
              </div>
            )}
            {project.client && (
              <div>
                <p className="text-sm text-gray-500 mb-1">Client</p>
                <p className="font-semibold">{project.client}</p>
              </div>
            )}
          </div>

          {project.services && project.services.length > 0 && (
            <div className="mt-8">
              <p className="text-sm text-gray-500 mb-3">Services</p>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span key={service} className="px-3 py-1 bg-gray-200 text-sm rounded">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Image */}
      <div className="w-full px-6 py-20 bg-white">
        <div className="max-w-full">
          <img src={project.image} alt={project.title} className="w-full h-auto block" style={{maxWidth: '100%'}} />
        </div>
      </div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-12">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProjects.map((related) => (
              <ProjectCard key={related.id} {...related} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
