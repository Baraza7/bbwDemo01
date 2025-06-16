import React from 'react';
import TeamCard from './TeamCard';

const teamMembers = [
  {
    image: "/Arnold.png",
    name: "Arnold Ngusale",
    position: "CEO",
    bio: "Arnold holds over a decade of experience in investment banking and trade finance, providing strategic leadership. A seasoned microfinance banker, he brings diverse experience in the fast-moving Consumer Goods Industry, Energy, Government services, and Banking."
  },
  {
    image: "/Susann.png",
    name: "Susan Awuor",
    position: "Chief Operating Officer",
    bio: "A seasoned Banker with over 10 years' experience in SME, Consumer Banking and Trade Finance, Susan is known for her versatility, innovative, and relationship-driven approach to strategic and relationship management."
  },
  {
    image: "/Nelly.png",
    name: "Nelly Yano",
    position: "Regional Manager",
    bio: "Nelly brings on board expertise in agribusiness, credit, and trade finance, overseeing operations in West and Rift regions."
  },
  {
    image: "/Ruth (2).png",
    name: "Ruth Mwihaki",
    position: "Business Development Manager Operations Officer",
    bio: "Ruth holds 8+ years in consumer banking, leading efforts in Nairobi, Central, and Eastern regions."
  },
  {
    image: "/ALLAN (1).png",
    name: "Allan Juma",
    position: "Operations Officer",
    bio: "Allan specializes in trade finance operations, reconciliations, and data management."
  }
];

const TeamSection: React.FC = () => {
  // First row: Arnold, Susan, Nelly
  const firstRow = teamMembers.slice(0, 3);
  // Second row: Ruth, Allan, and the special yellow card
  const secondRow = teamMembers.slice(3, 5); // Ruth and Allan

  return (
    <section 
      className="team-section-grid font-montserrat pt-12 pb-6 relative"
      style={{
        backgroundImage: "url('/hero-background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Black overlay with 75% opacity */}
      <div 
        className="absolute inset-0 bg-black"
        style={{ opacity: 0.75 }}
      ></div>
      
      {/* Content with relative positioning to appear above overlay */}
      <div className="relative z-10" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {firstRow.map((member, idx) => (
            <TeamCard
              key={member.name}
              image={member.image}
              name={member.name}
              position={member.position}
              bio={member.bio}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Ruth and Allan in the second row */}
          {secondRow.map((member, idx) => (
            <TeamCard
              key={member.name}
              image={member.image}
              name={member.name}
              position={member.position}
              bio={member.bio}
            />
          ))}
          {/* Special yellow card with same height as other cards */}
          <div className="team-card-container font-montserrat border-[3px] border-[var(--accent-yellow)] rounded-2xl bg-[var(--accent-yellow)] flex items-end justify-end p-6 relative" style={{boxShadow: '0 0 15px rgba(248, 224, 142, 0.5)'}}>
            <span className="absolute bottom-6 right-6 text-3xl font-bold text-black text-right leading-tight font-italiana">
              Our <br/> Team
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 