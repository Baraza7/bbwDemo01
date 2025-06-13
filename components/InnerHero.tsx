import React from 'react';

interface InnerHeroProps {
  children: React.ReactNode;
}

const InnerHero: React.FC<InnerHeroProps> = ({ children }) => {
  return (
    <section className="relative pt-20 min-h-[70vh] pb-32 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/bbAbout.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#27272A] via-[#1a1a1c] to-[#0f0f10] opacity-70"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#FFBE00]/10 via-transparent to-[#00B1D2]/10" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
            {children}
        </div>
      </div>
    </section>
  );
};

export default InnerHero; 