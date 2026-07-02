'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import Link from 'next/link';
import { Project } from '@/data/projects';

interface FeaturedCarouselProps {
  projects: Project[];
}

export default function FeaturedCarousel({ projects }: FeaturedCarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ playOnInit: true, speed: 1.2, stopOnInteraction: false, stopOnMouseEnter: true })
  ]);

  return (
    <div className="w-full overflow-hidden py-4 select-none">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="embla__slide flex-none w-[280px] md:w-[360px] group cursor-pointer"
            >
              <Link href={`/works/${project.id}`}>
                <div className="overflow-hidden bg-white border border-gray-100 rounded-lg hover:shadow-lg transition-all duration-300">
                  <div className="relative w-full h-auto overflow-hidden bg-gray-50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors duration-200 truncate">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
