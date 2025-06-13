import React, { useState, useEffect } from 'react';
import TeamCard from './TeamCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Placeholder data - 5 members
const teamMembers = [
  {
    image: "/Arnold.png",
    name: "Arnold Ngusale",
    position: "CEO",
    bio: "Arnold holds over a decade of experience ininvestment banking and trade finance, providingstrategic leadership. A seasoned microfinancebanker, he brings diverse experience in the fast-moving Consumer Goods Industry, Energy,Government services, and Banking"
  },
  {
    image: "/Susann.png",
    name: "Susan Awuor",
    position: "Chief Operationg Officer",
    bio: "A seasoned Banker with over 10 years' experiencein SME, Consumer Banking and Trade Finance,Susan is known for her versatility, innovative, andrelationship-driven approach to strategic andrelationship management."
  },
  {
    image: "/Nelly.png",
    name: "Nelly Yano",
    position: "Regional Manager",
    bio: "Nelly brings on board expertise in agribusiness,credit, and trade finance, overseeing operationsin West and Rift regions"
  },
  {
    image: "/Ruth (2).png",
    name: "Ruth Mwihaki",
    position: "Business Development ManagerOperations Officer",
    bio: "Ruth holds 8+ years in consumer banking, leading efforts in Nairobi, Central, and Eastern regions."
  },
  {
    image: "/ALLAN (1).png",
    name: "Allan Juma",
    position: "Operations Officer",
    bio: "Allan specializes in trade finance operations,reconciliations, and data management."
  }
];

const TeamSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - slidesToShow + teamMembers.length) % teamMembers.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + slidesToShow) % teamMembers.length);
  };

  return (
    <section className="team-section-grid font-montserrat pt-12 pb-6">
      <div className="relative w-full">
        <div className="carousel-viewport-container relative w-full flex flex-col py-8 md:py-0">
          <div className="carousel-track-wrapper relative w-full overflow-hidden">
            <div
              className="carousel-track flex transition-transform duration-500 ease-in-out items-center"
              style={{
                width: `${(teamMembers.length / slidesToShow) * 100}%`,
                transform: `translateX(-${(currentIndex / teamMembers.length) * 100}%)`,
              }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="carousel-slide flex-none p-4"
                  style={{
                    width: `${100 / teamMembers.length}%`,
                  }}
                >
                  <TeamCard
                    image={member.image}
                    name={member.name}
                    position={member.position}
                    bio={member.bio}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center justify-center space-x-4 mt-2">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-[var(--accent-yellow)] text-black hover:bg-opacity-80 transition-all duration-200"
            aria-label="Previous team members"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-[var(--accent-yellow)] text-black hover:bg-opacity-80 transition-all duration-200"
            aria-label="Next team members"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 