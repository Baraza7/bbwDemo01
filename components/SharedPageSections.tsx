import LogoGrid from "./LogoGrid";
import Newsletter from "./Newsletter";
import Image from "next/image";

const logos = [
  { src: "/logoipsum-1.png", alt: "LogoIpsum 1" },
  { src: "/logoipsum-2.png", alt: "LogoIpsum 2" },
  { src: "/logoipsum-3.png", alt: "LogoIpsum 3" },
  { src: "/logoipsum-4.png", alt: "LogoIpsum 4" },
  { src: "/logoipsum-5.png", alt: "LogoIpsum 5" },
  { src: "/logoipsum-6.png", alt: "LogoIpsum 6" },
  { src: "/logoipsum-7.png", alt: "LogoIpsum 7" },
];

interface SharedPageSectionsProps {
  variant?: 'default' | 'contact';
}

const SharedPageSections: React.FC<SharedPageSectionsProps> = ({ variant = 'default' }) => {
    return (
        <>
            <LogoGrid logos={logos} />
            <Newsletter 
              title={variant === 'contact' ? "Want quick help? Reach out to us WhatsApp chat!" : undefined}
              subtitle={variant === 'contact' ? "For instant assistance, chat with us directly on WhatsApp! Simply click the floating WhatsApp icon at the bottom right corner of your screen. On mobile devices, this will open directly in your WhatsApp app, while on computers it will launch WhatsApp Web in your browser. Our team is ready to assist you in real-time!" : undefined}
              customContent={
                variant === 'contact' ? (
                  <div className="h-0"></div>
                ) : undefined
              }
            />
        </>
    )
}

export default SharedPageSections; 