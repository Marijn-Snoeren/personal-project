import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white w-full">
      <nav className="max-w-6xl mx-auto w-full px-8 max-md:px-4 flex items-center justify-between py-4">
        <div className="text-2xl font-bold text-black">Marijn Snoeren</div>
        <button className="border-2 border-black text-black font-semibold px-8 py-2 rounded hover:bg-black hover:text-white transition-colors">
          Contact
        </button>
      </nav>
    </header>
  );
};
