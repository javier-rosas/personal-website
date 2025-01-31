import { Card } from '@/components/ui/card';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  technologies: string[];
}

const ProjectCard = ({
  title,
  description,
  link,
  technologies,
}: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-matrix-black-light/30 backdrop-blur-lg border border-matrix-green/20 hover:border-matrix-green/40 transition-all duration-300">
      <div className="p-6">
        <h3 className="text-matrix-green font-matrix text-xl mb-2 group-hover:animate-glitch">
          {title}
        </h3>
        <p className="mb-4 text-white">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-matrix-green-dark text-matrix-green"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white hover:text-matrix-green/80 transition-colors"
        >
          View Project →
        </a>
      </div>
      <div className="absolute inset-0 pointer-events-none border border-matrix-green/20 group-hover:border-matrix-green/40 transition-all duration-300" />
    </Card>
  );
};

export default ProjectCard;
