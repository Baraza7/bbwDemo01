"use client";

import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Home,
  Briefcase,
  ImageIcon,
  FileText,
  Users,
  Settings,
} from "lucide-react";
import withAuth from "@/components/auth/withAuth";
import React from "react";
import Link from "next/link";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "Services", href: "/admin?section=services", icon: Briefcase },
    { name: "Gallery", href: "/admin?section=gallery", icon: ImageIcon },
    { name: "Full Gallery", href: "/admin?section=fullgallery", icon: ImageIcon },
    { name: "Updates", href: "/admin?section=updates", icon: FileText },
    { name: "Users", href: "/admin?section=users", icon: Users },
    { name: "Settings", href: "/admin?section=settings", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <aside className="w-64 flex-shrink-0 bg-gray-800 p-6">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold">Admin</p>
            <p className="text-xs text-gray-400">Blackbow Consult</p>
          </div>
        </div>
        <nav className="mt-8">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-gray-700 text-white"
                      : "text-gray-400 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default withAuth(AdminLayout); 