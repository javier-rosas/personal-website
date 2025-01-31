import { useEffect } from 'react';

import MatrixRain from '@/components/MatrixRain';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/types/index';

const projects: Project[] = [
  {
    title: "Twitter Clone",
    description:
      "A clone of Twitter built with React, Typescript, Express, and MongoDB.",
    link: "https://tuiter-7.netlify.app/",
    github: "https://github.com/orgs/team7-tuiter/repositories",
    technologies: ["React", "TypeScript", "Express", "MongoDB"],
  },
  {
    title: "Regium",
    description:
      "A centralized NFT marketplace made with React, Javascript, and Express.",
    link: "#",
    github: "https://github.com/javier-rosas/regium-backend",
    technologies: ["React", "Javascript", "Express", "MongoDB"],
  },
  {
    title: "Streambuddy",
    description:
      "A chrome extension that allows you to watch Netflix with your friends",
    link: "#",
    github: "https://github.com/javier-rosas/streambuddy",
    technologies: ["React", "TypeScript", "Express", "MongoDB"],
  },
];

const Index = () => {
  useEffect(() => {
    console.log("Matrix has you...");
  }, []);

  return (
    <div className="min-h-screen text-white font-matrix">
      <MatrixRain />

      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-matrix-green">
            Welcome to the Matrix
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Choose the red pill and I'll show you how deep the rabbit hole goes.
            Explore my projects and discover the truth.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>

      <footer className="text-center text-white py-8 relative z-10">
        <p>Follow the white rabbit. 🐰</p>
      </footer>
    </div>
  );
};

export default Index;
