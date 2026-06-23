import Hero from '@/components/Hero';
import ProjectGallery from '@/components/ProjectGallery';
import { projects } from '@/data/projects';

export default function Works() {
  return (
    <>
      <div className="pt-16">
        <Hero
          title="Our Works"
          subtitle="A collection of projects that showcase our creative approach and strategic thinking"
          compact
        />
      </div>
      <ProjectGallery projects={projects} />
    </>
  );
}
