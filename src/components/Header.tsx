import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white overflow-hidden">
      <nav className="bg-white flex w-full items-stretch gap-5 text-black flex-wrap justify-between px-[60px] py-3.5 max-md:max-w-full max-md:px-5">
        <div className="text-2xl font-bold">
          Marijn Snoeren
        </div>
        <button className="text-base font-semibold whitespace-nowrap text-center pt-3 pb-[26px] px-[39px] border-black border-solid border-2 max-md:px-5 hover:bg-black hover:text-white transition-colors">
          Contact
        </button>
      </nav>
    </header>
  );
};
