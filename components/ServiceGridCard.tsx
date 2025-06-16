import { type LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceGridCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
  href?: string;
}

export const ServiceGridCard = ({ icon, title, description, isActive, href }: ServiceGridCardProps) => {
  const content = (
    <div className={`p-8 rounded-none h-full transition-all duration-300 cursor-pointer ${isActive ? 'bg-yellow-400' : 'bg-black/20'} hover:bg-yellow-400 group`}>
      <div className={`mb-4 transition-colors duration-300 ${isActive ? 'text-black' : 'text-yellow-400'} group-hover:text-black`}>
        {icon}
      </div>
      <h3 className={`text-2xl font-bold font-serif mb-3 transition-colors duration-300 ${isActive ? 'text-black' : 'text-white'} group-hover:text-black`}>
        {title}
      </h3>
      <p className={`transition-colors duration-300 ${isActive ? 'text-gray-800' : 'text-white/70'} group-hover:text-gray-800`}>
        {description}
      </p>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}; 