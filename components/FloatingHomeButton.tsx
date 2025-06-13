import Link from 'next/link';
import { Home } from 'lucide-react';

const FloatingHomeButton = () => {
  return (
    <Link 
        href="/"
        className="fixed bottom-5 left-5 w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center text-black shadow-lg hover:bg-yellow-500 transition-colors z-50"
        aria-label="Back to Home"
    >
        <Home className="w-7 h-7" />
    </Link>
  );
};

export default FloatingHomeButton; 