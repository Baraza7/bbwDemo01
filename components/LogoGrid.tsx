import React from "react";
import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
}

interface LogoGridProps {
  logos: Logo[];
}

const LogoGrid: React.FC<LogoGridProps> = ({ logos }) => {
  // As requested, display 5 logos by taking from the 2nd to the 2nd-to-last
  const logosToShow = logos.slice(1, -1);
  
  // Duplicate the logos to create a seamless loop
  const duplicatedLogos = [...logosToShow, ...logosToShow];

  return (
    <section 
      id="logo-grid-section"
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-[var(--accent-yellow)]"
          style={{ fontFamily: "Italiana, 'Italiana Fallback', serif" }}
        >
          Trusted By Leading Companies
        </h2>
        
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-infinite-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-full sm:w-1/3 lg:w-1/5 flex justify-center items-center p-4">
                <Image
                  src={logo.src} 
                  alt={logo.alt} 
                  width={150}
                  height={60}
                  className="object-contain max-h-16 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoGrid; 