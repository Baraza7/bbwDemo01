import { type LucideIcon } from "lucide-react";

interface ServiceGridCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
}

export const ServiceGridCard = ({ icon, title, description, isActive }: ServiceGridCardProps) => {
  return (
    <div className={`p-8 rounded-none h-full transition-all duration-300 ${isActive ? 'bg-yellow-400' : 'bg-black/20'}`}>
      <div className={`mb-4 transition-colors duration-300 ${isActive ? 'text-black' : 'text-yellow-400'}`}>
        {icon}
      </div>
      <h3 className={`text-2xl font-bold font-serif mb-3 transition-colors duration-300 ${isActive ? 'text-black' : 'text-white'}`}>
        {title}
      </h3>
      <p className={`transition-colors duration-300 ${isActive ? 'text-gray-800' : 'text-white/70'}`}>
        {description}
      </p>
    </div>
  );
}; 