import React, { useState } from 'react';

interface Review {
  quote: string;
  author: string;
  company: string;
}

export const Reviews: React.FC = () => {
  const [currentReview] = useState(0);
  
  const reviews: Review[] = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "John Doe",
      company: "Bedrijfsnaam"
    }
  ];

  const handlePrevious = () => {
    // Navigation logic would go here
    console.log('Previous review');
  };

  const handleNext = () => {
    // Navigation logic would go here
    console.log('Next review');
  };

  return (
    <section className="bg-white flex w-full flex-col items-center justify-center px-20 py-24 max-md:max-w-full max-md:px-5">
      <div className="flex w-[800px] max-w-full flex-col items-stretch">
        <h2 className="text-black text-5xl font-bold text-center self-center max-md:text-[40px]">
          Reviews
        </h2>
        <p className="text-black text-lg font-normal text-center ml-[21px] mr-[22px] mt-2 max-md:max-w-full max-md:mr-2.5">
          Geloof niet alleen mijn woorden. Dit zeggen ondernemers over de
          samenwerking met mij.
        </p>
        <article className="bg-black flex flex-col items-center text-white font-normal text-center mt-16 px-[63px] py-[34px] max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="text-[32px]">
            &quot;
          </div>
          <blockquote className="text-lg leading-[29px] self-stretch mt-[19px] max-md:max-w-full">
            {reviews[currentReview].quote}
          </blockquote>
          <cite className="text-base font-semibold mt-[38px] not-italic">
            {reviews[currentReview].author}
          </cite>
          <div className="text-sm">
            {reviews[currentReview].company}
          </div>
        </article>
        <div className="self-center flex w-[116px] max-w-full items-stretch gap-5 mt-8">
          <button 
            onClick={handlePrevious}
            className="hover:opacity-70 transition-opacity"
            aria-label="Previous review"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4bfaf042babf4f058c6e929fb8210c61/f4a6e4ffcd03a1fb3233a7e633845a4b99a3fc3b?placeholderIfAbsent=true"
              alt="Previous"
              className="aspect-[1] object-contain w-12 shrink-0"
            />
          </button>
          <button 
            onClick={handleNext}
            className="hover:opacity-70 transition-opacity"
            aria-label="Next review"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4bfaf042babf4f058c6e929fb8210c61/f20f496bdb8e00b54ee223c2ed8074f480691410?placeholderIfAbsent=true"
              alt="Next"
              className="aspect-[1] object-contain w-12 shrink-0"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
