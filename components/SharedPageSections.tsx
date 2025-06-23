import LogoGrid from "./LogoGrid";
import Newsletter from "./Newsletter";
import Image from "next/image";
import { Button } from "@/components/ui/button"

const logos = [
  { src: "/logoipsum-1.png", alt: "LogoIpsum 1" },
  { src: "/logoipsum-2.png", alt: "LogoIpsum 2" },
  { src: "/logoipsum-3.png", alt: "LogoIpsum 3" },
  { src: "/logoipsum-4.png", alt: "LogoIpsum 4" },
  { src: "/logoipsum-5.png", alt: "LogoIpsum 5" },
  { src: "/logoipsum-6.png", alt: "LogoIpsum 6" },
  { src: "/logoipsum-7.png", alt: "LogoIpsum 7" },
];

type SharedPageSectionsProps = {
  variant?: 'default' | 'contacts';
};

const SharedPageSections: React.FC<SharedPageSectionsProps> = ({ variant = 'default' }) => {
    return (
        <>
            <LogoGrid logos={logos} />
            <Newsletter 
              title={variant === 'contacts' ? "Want quick help? Reach out to us WhatsApp chat!" : undefined}
              subtitle={variant === 'contacts' ? "For instant assistance, chat with us directly on WhatsApp! Simply click the floating WhatsApp icon at the bottom right corner of your screen. On mobile devices, this will open directly in your WhatsApp application, making it easier than ever to get the help you need." : undefined}
              customContent={
                variant === 'contacts' ? (
                  <div className="h-0"></div>
                ) : undefined
              }
            />
        </>
    )
}

export default SharedPageSections; 