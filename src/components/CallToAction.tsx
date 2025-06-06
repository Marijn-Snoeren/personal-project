import React, { useState } from 'react';

export const CallToAction: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactClick = () => {
    setIsSubmitting(true);
    // Simulate form submission or navigation
    setTimeout(() => {
      setIsSubmitting(false);
      console.log('Contact form opened');
    }, 1000);
  };

  return (
    <section className="flex flex-col relative min-h-[560px] w-full items-center text-lg text-white font-normal text-center justify-center px-20 py-24 max-md:max-w-full max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/4bfaf042babf4f058c6e929fb8210c61/27a323c0271a4670ce0e7ae472bab7b3cae49491?placeholderIfAbsent=true"
        alt="Call to action background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative flex w-[749px] max-w-full flex-col items-center">
        <h2 className="text-5xl font-bold self-stretch max-md:max-w-full max-md:text-[40px]">
          Ready to improve your website?
        </h2>
        <p className="leading-[27px] w-[466px] mt-2 max-md:max-w-full">
          Laten we jouw project bespreken en kijken hoe ik je kan helpen jouw
          doelen te bereiken met behulp van design en development.
        </p>
        <button 
          onClick={handleContactClick}
          disabled={isSubmitting}
          className="bg-white w-[174px] max-w-full text-black font-semibold mt-8 px-[17px] py-4 hover:bg-gray-100 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Loading...' : 'Afspraak Maken'}
        </button>
        <div className="font-semibold mt-16 max-md:mt-10">
          Marijn Snoeren
        </div>
        <div className="text-sm mt-1">
          UI/UX Designer & Frontend Developer
        </div>
      </div>
    </section>
  );
};
