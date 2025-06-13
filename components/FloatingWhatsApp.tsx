"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FloatingWhatsApp = () => {
    const pathname = usePathname();

    // Do not render on the homepage
    if (pathname === '/') {
        return null;
    }

    // Placeholder number - will be updated later
    const whatsappNumber = "YOUR_WHATSAPP_NUMBER_HERE";
    const message = "Hello! I'm visiting your website and have a question.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <div className="fixed bottom-6 right-6 z-50 h-16 w-16 cursor-pointer transition-transform hover:scale-110">
                <Image
                    src="/WhatsAppIcon.png"
                    alt="Chat on WhatsApp"
                    fill
                    className="object-contain"
                />
            </div>
        </Link>
    );
};

export default FloatingWhatsApp; 