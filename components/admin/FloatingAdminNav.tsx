"use client";

import Link from 'next/link';
import { Home, Settings, ArrowLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';

const FloatingAdminNav = () => {
  const pathname = usePathname();
  
  // Determine if we're on a sub-admin page (like gallery or fullgallery)
  const isSubAdminPage = pathname.includes('/admin/') && pathname !== '/admin';
  
  // Get the parent admin page for back navigation
  const getParentAdminPath = () => {
    if (pathname.includes('/admin/media/fullgallery')) return '/admin/media';
    if (pathname.includes('/admin/gallery')) return '/admin/about';
    if (pathname.includes('/admin/about')) return '/admin';
    if (pathname.includes('/admin/media')) return '/admin';
    return '/admin';
  };

  return (
    <div className="fixed bottom-5 left-5 flex flex-col gap-3 z-50">
      {/* Home Button */}
      <Link 
        href="/"
        className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center text-black shadow-lg hover:bg-yellow-500 transition-colors duration-300 group"
        aria-label="Back to Website Home"
        title="Back to Website Home"
      >
        <Home className="w-7 h-7 transition-transform group-hover:scale-110" />
      </Link>
      
      {/* Conditional Back/Admin Button */}
      {isSubAdminPage ? (
        <Link 
          href={getParentAdminPath()}
          className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center text-black shadow-lg hover:bg-yellow-500 transition-colors duration-300 group"
          aria-label="Back to Parent Admin Page"
          title="Back to Parent Admin Page"
        >
          <ArrowLeft className="w-7 h-7 transition-transform group-hover:scale-110" />
        </Link>
      ) : (
        <Link 
          href="/admin"
          className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center text-black shadow-lg hover:bg-yellow-500 transition-colors duration-300 group"
          aria-label="Back to Admin Dashboard"
          title="Back to Admin Dashboard"
        >
          <Settings className="w-7 h-7 transition-transform group-hover:scale-110" />
        </Link>
      )}
    </div>
  );
};

export default FloatingAdminNav; 