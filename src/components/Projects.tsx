import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  hasPlaceholder?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, hasPlaceholder = false }) => {
  return (
    <article className="bg-black border grow text-white w-full pt-px pb-6 border-black border-solid max-md:mt-10">
      {hasPlaceholder ? (
        <div className="bg-white flex shrink-0 h-[200px]" />
      ) : (
        <img
          src={imageUrl}
          alt={title}
          className="aspect-[1.46] object-contain w-full"
        />
      )}
      <div className="flex flex-col mt-6 px-6 max-md:px-5">
        <h3 className="text-xl font-semibold">
          {title}
        </h3>
        <p className="text-sm font-normal leading-[21px] mt-2">
          {description}
        </p>
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
      imageUrl: "",
      hasPlaceholder: true
    }
  ];

  return (
    <section className="flex flex-col relative min-h-[761px] w-full items-center justify-center px-20 py-24 max-md:max-w-full max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/4bfaf042babf4f058c6e929fb8210c61/d25f9f2a203e08f7a7ef64dc97cb6b3df416fb43?placeholderIfAbsent=true"
        alt="Projects background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative flex w-full max-w-[990px] flex-col items-center max-md:max-w-full">
        <h2 className="text-white text-5xl font-bold text-center max-md:text-[40px]">
          Projecten
        </h2>
        <p className="text-white text-lg font-normal leading-[27px] text-center w-[756px] mt-2 max-md:max-w-full">
          Echte projecten, echte resultaten. Bekijk hoe ik bedrijven heb
          geholpen hun doelen te bereiken met strategisch design en
          development.
        </p>
        <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {projects.map((project, index) => (
              <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  hasPlaceholder={project.hasPlaceholder}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
