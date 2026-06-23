'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
}

interface ProjectGalleryProps {
  projects: Project[];
}

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects;

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      {/* Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-4 items-center">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              selectedCategory === null
                ? 'bg-primary text-secondary'
                : 'bg-gray-100 text-primary hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-secondary'
                  : 'bg-gray-100 text-primary hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-max">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/works/${project.id}`}
            className="group relative overflow-hidden bg-gray-200 hover:shadow-lg transition-all duration-300"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1574}
              height={1517}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10 pointer-events-none" />

            {/* Text overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
              <div>
                <p className="text-xs text-gray-300 uppercase tracking-wide mb-1">
                  {project.category}
                </p>
                <h3 className="text-white font-semibold">{project.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500">No projects found in this category.</p>
        </div>
      )}
    </section>
  );
}
