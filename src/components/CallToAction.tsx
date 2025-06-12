import React, { useState } from 'react';

export const CallToAction: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactClick = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      console.log('Contact form opened');
    }, 1000);
  };

  return (
    <section className="w-full bg-black py-24 max-md:py-16">
      <div className="max-w-6xl mx-auto w-full px-8 max-md:px-4 flex flex-col items-center justify-center text-center">
        <div className="max-w-xl w-full flex flex-col items-center mx-auto">
          <h2 className="text-5xl font-bold text-white mb-2">Ready to improve your website?</h2>
          <p className="text-lg text-white mb-8">Laten we jouw project bespreken en kijken hoe ik je kan helpen jouw doelen te bereiken met behulp van design en development.</p>
          <button 
            onClick={handleContactClick}
            disabled={isSubmitting}
            className="bg-white text-black font-semibold px-8 py-4 rounded hover:bg-gray-100 transition-colors disabled:opacity-50 mb-12"
          >
            {isSubmitting ? 'Loading...' : 'Afspraak Maken'}
          </button>
          <div className="font-semibold text-white mb-1">Marijn Snoeren</div>
          <div className="text-sm text-white">UI/UX Designer & Frontend Developer</div>
        </div>
      </div>
    </section>
  );
};
