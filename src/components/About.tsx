import React from 'react';

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
  return (
    <div className="mt-8">
      <div className="flex items-stretch gap-4 font-semibold">
        <div className="bg-black flex w-6 shrink-0 h-6 mt-1 rounded-full" />
        <div className="basis-auto">{title}</div>
      </div>
      <p className="text-base leading-6 ml-10 mt-[7px]">{description}</p>
    </div>
  );
};

export const About: React.FC = () => {
  const features = [
    {
      title: "Design + Ontwikkeling",
      description: "Ik combineer design en development, zodat jouw project soepel verloopt van idee tot livegang, zonder communicatieverlies."
    },
    {
      title: "Resultaatgericht",
      description: "Mijn werk is gebaseerd op gebruikersinzichten en data, altijd gericht op het behalen van jouw doelen."
    },
    {
      title: "Persoonlijke Aanpak",
      description: "Ik werk samen met jou als partner, zodat jouw visie duidelijk wordt en bezoekers in actie komen."
    }
  ];

  return (
    <section className="w-full bg-white py-24 max-md:py-16">
      <div className="max-w-6xl mx-auto w-full px-8 max-md:px-4">
        <div className="flex gap-10 items-center max-md:flex-col max-md:gap-8">
          <div className="flex-1 flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4bfaf042babf4f058c6e929fb8210c61/aa3ab6106c538019bc4e26985e42e682592676eb?placeholderIfAbsent=true"
              alt="About Marijn Snoeren"
              className="w-full max-w-xs md:max-w-md aspect-[0.83] object-contain"
            />
          </div>
          <div className="flex-1">
            <article className="flex flex-col text-lg text-black font-normal">
              <h2 className="text-5xl font-bold mb-6">About Me</h2>
              <p className="leading-[29px] mb-4">
                Ik ben Marijn Snoeren, UI/UX designer en frontend developer met een scherp oog voor zowel creatief design als technische uitvoering. Ik help bedrijven hun online presence te versterken en bezoekers te veranderen in klanten.
              </p>
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
