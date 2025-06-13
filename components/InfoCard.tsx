import { type LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export const InfoCard = ({ icon, title, children }: InfoCardProps) => {
  return (
    <div className="bg-gradient-to-br from-[#D01D1F] to-[#b31217] shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] group border-none rounded-none text-center h-full flex flex-col justify-center cursor-pointer">
      <div className="p-8 flex flex-col items-center text-white">
        <div className="w-16 h-16 bg-white/20 flex items-center justify-center mx-auto mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold font-serif mb-2 transition-all duration-300 group-hover:text-[#FFBE00]">
          {title}
        </h3>
        <div className="text-base font-sans text-white/80 transition-all duration-300 group-hover:text-white">
            {children}
        </div>
      </div>
    </div>
  );
}; 