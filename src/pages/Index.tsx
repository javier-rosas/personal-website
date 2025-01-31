import { useEffect } from 'react';

import MatrixRain from '@/components/MatrixRain';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: "Project Neo",
    description: "A revolutionary AI system that predicts the future.",
    link: "#",
    technologies: ["React", "TypeScript", "AI"],
  },
  {
    title: "Morpheus",
    description: "Dream analysis platform using machine learning.",
    link: "#",
    technologies: ["Python", "TensorFlow", "React"],
  },
  {
    title: "Zion",
    description: "Secure communication platform for the resistance.",
    link: "#",
    technologies: ["Node.js", "WebRTC", "Encryption"],
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
