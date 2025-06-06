import React from 'react';

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
  return (
    <div className="mt-8">
      <div className="flex items-stretch gap-4 font-semibold">
        <div className="bg-black flex w-6 shrink-0 h-6 mt-1 rounded-[16777200px]" />
        <div className="basis-auto">{title}</div>
      </div>
      <p className="text-base leading-6 ml-10 mt-[7px] max-md:max-w-full">
        {description}
      </p>
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
    <section className="bg-white w-full px-16 py-24 max-md:max-w-full max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[45%] max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4bfaf042babf4f058c6e929fb8210c61/aa3ab6106c538019bc4e26985e42e682592676eb?placeholderIfAbsent=true"
            alt="About Marijn Snoeren"
            className="aspect-[0.83] object-contain w-full grow max-md:max-w-full max-md:mt-10"
          />
        </div>
        <div className="w-[55%] ml-5 max-md:w-full max-md:ml-0">
          <article className="flex w-full flex-col items-stretch text-lg text-black font-normal max-md:max-w-full max-md:mt-10">
            <h2 className="text-5xl font-bold max-md:text-[40px]">
              About Me
            </h2>
            <p className="leading-[29px] mt-6 max-md:max-w-full">
              Ik ben Marijn Snoeren, UI/UX designer en frontend developer met
              een scherp oog voor zowel creatief design als technische
              uitvoering. Ik help bedrijven hun online presence te versterken
              en bezoekers te veranderen in klanten.
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
    </section>
  );
};
