import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="w-full px-16 py-28 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[55%] max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col items-stretch max-md:max-w-full max-md:mt-10">
            <h1 className="text-white text-[58px] font-bold leading-[70px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
              Focused on function, obsessed with detail.
            </h1>
            <p className="text-white text-xl font-normal leading-8 mr-[41px] mt-8 max-md:max-w-full max-md:mr-2.5">
              Ik help merken met het ontwerpen én bouwen van
              gebruiksvriendelijke websites die impact maken. Gericht op
              resultaat, afgestemd op jouw doelgroep, van eerste idee tot live
              ervaring.
            </p>
            <div className="flex items-stretch gap-5 text-lg font-semibold text-center mt-8">
              <button className="bg-black text-white px-[13px] py-[18px] hover:bg-gray-800 transition-colors">
                Afspraak Maken
              </button>
              <button className="bg-white text-black px-[38px] py-[18px] max-md:px-5 hover:bg-gray-100 transition-colors">
                Bekijk Werk
              </button>
            </div>
          </div>
        </div>
        <div className="w-[45%] ml-5 max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4bfaf042babf4f058c6e929fb8210c61/e35d5731c1bda526ce1868c3d62872fd1a7502f6?placeholderIfAbsent=true"
            alt="Marijn Snoeren profile"
            className="aspect-[1] object-contain w-full grow max-md:max-w-full max-md:mt-10"
          />
        </div>
      </div>
    </section>
  );
};
