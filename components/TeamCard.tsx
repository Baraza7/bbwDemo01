import Image from 'next/image';

interface TeamCardProps {
  image: string;
  name: string;
  position: string;
  bio: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ image, name, position, bio }) => {
  return (
    <div className="team-card-container font-montserrat border-[3px] border-[var(--accent-yellow)] rounded-2xl" style={{boxShadow: '0 0 15px rgba(248, 224, 142, 0.5)'}}>
      <div className="team-card-inner">
        {/* Front Side */}
        <div className="team-card-front">
          <Image 
            src={image}
            alt={`${name} - ${position}`}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px" // Adjusted sizes for a 500px card
          />
          <div className="absolute bottom-5 right-5 text-right p-2 bg-black/30 rounded">
            <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 600, fontSize: '18px' }}>
              {name}
            </h3>
            <p className="text-sm text-white" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 400, fontSize: '14px' }}>
              {position}
            </p>
          </div>
        </div>

        {/* Back Side */}
        <div className="team-card-back">
          <div className="bio-container">
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard; 