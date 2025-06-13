import React from 'react';
import SquaresBackground from './ui/SquaresBackground';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  hasPlaceholder?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, hasPlaceholder = false }) => {
  return (
    <article className="bg-zinc-900 rounded-lg shadow border border-zinc-800 text-white w-full flex flex-col h-full">
      {hasPlaceholder ? (
        <div className="bg-white h-48 w-full" />
      ) : (
        <img
          src={imageUrl}
          alt={title}
          className="aspect-[1.46] object-cover w-full"
        />
      )}
      <div className="flex flex-col p-6 flex-1 justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm font-normal leading-6">{description}</p>
        </div>
      </div>
    </article>
  );
};

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "Marketing Loom",
      description: "Visueel contentplatform voor marketingtrends, gericht op structuur, focus en conversie bij jonge professionals.",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/4bfaf042babf4f058c6e929fb8210c61/113cf74f7b7c67ee4dfb730bf0be747ef6e93791?placeholderIfAbsent=true"
    },
    {
      title: "Upendo",
      description: "Empathisch ontworpen zorgwebsite met heldere structuur en makkelijke toegang tot ondersteuning en contact.",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/4bfaf042babf4f058c6e929fb8210c61/23562b7433f7856d50b2306b38f2dad1d36badea?placeholderIfAbsent=true"
    },
    {
      title: "GreenAI",
      description: "Slim dashboard voor duurzaamheidsdata met focus op overzicht, helderheid en gebruiksgemak.",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/4bfaf042babf4f058c6e929fb8210c61/113cf74f7b7c67ee4dfb730bf0be747ef6e93791?placeholderIfAbsent=true"
    }
  ];

  return (
    <section className="w-full bg-black py-24 max-md:py-16 relative overflow-hidden">
      <SquaresBackground />
      <div className="relative z-10 max-w-6xl mx-auto w-full px-8 max-md:px-4">
        <h2 className="text-white text-5xl font-bold text-center mb-2">Projecten</h2>
        <p className="text-white text-lg text-center mb-12 max-w-2xl mx-auto">
          Echte projecten, echte resultaten. Bekijk hoe ik bedrijven heb geholpen hun doelen te bereiken met strategisch design en development.
        </p>
        <div className="w-full flex gap-6 max-md:flex-col">
          {projects.map((project, index) => (
            <div key={index} className="flex-1 min-w-0 flex">
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
