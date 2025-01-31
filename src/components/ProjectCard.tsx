import { Card } from '@/components/ui/card';
import { Project } from '@/types/index';

const ProjectCard = ({
  title,
  description,
  link,
  github,
  technologies,
}: Project) => {
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
        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-matrix-green/40 text-matrix-green hover:bg-matrix-green/10 hover:border-matrix-green transition-all duration-300 font-matrix text-sm flex items-center gap-2 group/button"
          >
            View Project
            <span className="transform translate-x-0 group-hover/button:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-matrix-green/40 text-matrix-green hover:bg-matrix-green/10 hover:border-matrix-green transition-all duration-300 font-matrix text-sm flex items-center gap-2 group/button"
          >
            View Github
            <span className="transform translate-x-0 group-hover/button:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none border border-matrix-green/20 group-hover:border-matrix-green/40 transition-all duration-300" />
    </Card>
  );
};

export default ProjectCard;
