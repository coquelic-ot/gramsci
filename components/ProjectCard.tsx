import Link from 'next/link';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
}

export default function ProjectCard({
  id,
  title,
  category,
  image,
  description,
}: ProjectCardProps) {
  return (
    <Link href={`/works/${id}`}>
      <div className="group cursor-pointer overflow-hidden">
        <div className="relative w-full bg-gray-100">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4 md:p-6">
          <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wide mb-2">
            {category}
          </p>
          <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
