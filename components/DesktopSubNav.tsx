import Link from "next/link";

export default function DesktopSubNav() {
  return (
    <nav className="hidden min-[500px]:flex flex-1 justify-center items-center py-4 md:py-6"> 
      {/* Outer nav for centering and vertical padding */}
      <div 
        className="flex items-center space-x-8 px-5 py-[5px] rounded-xl bg-white/90 backdrop-blur-md border border-black/10 shadow-lg"
      >
        <Link href="/" className="font-sans font-normal text-[13px] text-gray-800 hover:text-[#febf00] transition-colors duration-300">Home</Link>
        <Link href="/home2" className="font-sans font-normal text-[13px] text-gray-800 hover:text-[#febf00] transition-colors duration-300">Home2</Link>
        <Link href="/about" className="font-sans font-normal text-[13px] text-gray-800 hover:text-[#febf00] transition-colors duration-300">About</Link>
        <Link href="/services" className="font-sans font-normal text-[13px] text-gray-800 hover:text-[#febf00] transition-colors duration-300">Services</Link>
        <Link href="/blog" className="font-sans font-normal text-[13px] text-gray-800 hover:text-[#febf00] transition-colors duration-300">Updates</Link>
        <Link href="/media" className="font-sans font-normal text-[13px] text-gray-800 hover:text-[#febf00] transition-colors duration-300">Media</Link>
        <Link href="/contact" className="font-sans font-normal text-[13px] text-gray-800 hover:text-[#febf00] transition-colors duration-300">Contact</Link>
      </div>
    </nav>
  );
} 