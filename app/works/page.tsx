import Hero from '@/components/Hero';
import ProjectGallery from '@/components/ProjectGallery';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Works | gramsci',
};

export default function Works() {
  return (
    <>
      <Hero title="Our Works" subtitle="Portfolio of our recent projects and creative solutions" compact />
      <ProjectGallery projects={projects} />
    </>
  );
}
