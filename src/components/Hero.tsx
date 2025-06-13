import React from 'react';
import SquaresBackground from './ui/SquaresBackground';

export const Hero: React.FC = () => {
  return (
    <section className="w-full bg-black py-24 max-md:py-16 relative overflow-hidden">
      <SquaresBackground />
      <div className="relative z-10 max-w-6xl mx-auto w-full px-8 max-md:px-4">
        <div className="flex gap-10 items-center max-md:flex-col max-md:gap-8">
          <div className="flex-1">
            <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight md:leading-[70px]">
              Focused on function, obsessed with detail.
            </h1>
            <p className="text-white text-lg md:text-xl mt-8 max-w-xl">
              Ik help merken met het ontwerpen én bouwen van gebruiksvriendelijke websites die impact maken. Gericht op resultaat, afgestemd op jouw doelgroep, van eerste idee tot live ervaring.
            </p>
            <div className="flex gap-4 mt-8">
              <button className="bg-white text-black px-6 py-4 font-semibold rounded hover:bg-gray-100 transition-colors">
                Afspraak Maken
              </button>
              <button className="bg-black border border-white text-white px-6 py-4 font-semibold rounded hover:bg-white hover:text-black transition-colors">
                Bekijk Werk
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4bfaf042babf4f058c6e929fb8210c61/e35d5731c1bda526ce1868c3d62872fd1a7502f6?placeholderIfAbsent=true"
              alt="Marijn Snoeren profile"
              className="w-full max-w-xs md:max-w-md aspect-square object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
