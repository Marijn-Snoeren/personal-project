import React, { useState } from 'react';
import SquaresBackground from './ui/SquaresBackground';

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
    <section className="w-full bg-white py-24 max-md:py-16 relative overflow-hidden">
      <SquaresBackground />
      <div className="relative z-10 max-w-6xl mx-auto w-full px-8 max-md:px-4 flex flex-col items-center">
        <h2 className="text-black text-5xl font-bold text-center mb-2">Reviews</h2>
        <p className="text-black text-lg font-normal text-center mb-8">
          Geloof niet alleen mijn woorden. Dit zeggen ondernemers over de samenwerking met mij.
        </p>
        <article className="bg-black flex flex-col items-center text-white font-normal text-center w-full max-w-2xl mx-auto rounded-lg px-8 py-10 mb-8">
          <div className="text-[32px]">&quot;</div>
          <blockquote className="text-lg leading-[29px] self-stretch mt-4">
            {reviews[currentReview].quote}
          </blockquote>
          <cite className="text-base font-semibold mt-8 not-italic">
            {reviews[currentReview].author}
          </cite>
          <div className="text-sm">{reviews[currentReview].company}</div>
        </article>
        <div className="flex w-[116px] max-w-full items-stretch gap-5">
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
