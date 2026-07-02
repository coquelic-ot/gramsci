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
      <div className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-100 pb-6 gap-4">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${
              selectedCategory === null
                ? 'bg-primary text-secondary shadow-md'
                : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
            }`}
          >
            All Works
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-secondary shadow-md'
                  : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <span className="text-xs text-gray-400 font-mono">
          {filteredProjects.length} projects listed
        </span>
      </div>

      {/* Masonry Columns Layout (Preserves original aspect ratio perfectly) */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 [column-fill:_auto]">
        {filteredProjects.map((project, index) => {
          const isFeatured = project.id === 'project-10';
          
          return (
            <div 
              key={project.id} 
              className={`break-inside-avoid mb-6 md:mb-8 ${
                isFeatured ? 'w-full lg:[column-span:_all]' : ''
              }`}
            >
              <Link
                href={`/works/${project.id}`}
                className="group block relative overflow-hidden bg-gray-50 rounded-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200/50"
              >
                {/* Image Container - preserves natural image aspect ratio */}
                <div className="relative w-full h-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-contain group-hover:scale-102 transition-transform duration-700 ease-out"
                    loading={index < 4 ? "eager" : "lazy"}
                  />
                  
                  {/* Visual Gradient Overlay (Slight shadow at bottom for text readability) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-300" />
                </div>

                {/* Text Layout (Overlay) */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
                  <span className="text-[10px] font-semibold text-accent uppercase tracking-wider mb-1 block translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {project.category}
                  </span>
                  <h3 className={`text-white font-bold tracking-tight leading-snug group-hover:text-accent transition-colors duration-300 ${
                    isFeatured ? 'text-xl md:text-3xl' : 'text-lg'
                  }`}>
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className={`text-gray-300 mt-1 line-clamp-2 transition-opacity duration-300 ${
                      isFeatured ? 'text-xs md:text-sm opacity-100' : 'text-[11px] opacity-0 group-hover:opacity-100'
                    }`}>
                      {project.description}
                    </p>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-lg border border-dashed border-gray-200">
          <p className="text-gray-400">No projects found in this category.</p>
        </div>
      )}
    </section>
  );
}
