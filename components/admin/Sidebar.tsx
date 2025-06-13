"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Paintbrush, MessageCircle, BrainCircuit, Printer, LogOut } from 'lucide-react';
import { signOutUser } from '@/lib/auth';
import { useRouter } from 'next/navigation';

const navItems = [
    { href: '/admin', icon: Home, label: 'Admin' },
    { href: '/admin/branding', icon: Paintbrush, label: 'Brand Guidelines' },
    { href: '/admin/communication', icon: MessageCircle, label: 'Communication' },
    { href: '/admin/immersive', icon: BrainCircuit, label: 'Immersive.ai' },
    { href: '/admin/print', icon: Printer, label: 'Express Print' },
];

const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();

    const handleSignOut = async () => {
        await signOutUser();
        router.push('/auth/login');
    };

    return (
        <aside className="w-64 bg-white dark:bg-gray-800 shadow-md flex flex-col">
            <div className="p-4 border-b dark:border-gray-700">
                <h2 className="text-xl font-bold text-center">Admin Panel</h2>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center p-2 rounded-lg transition-colors ${
                            pathname === item.href
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                    >
                        <item.icon className="w-5 h-5 mr-3" />
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>
            <div className="p-4 border-t dark:border-gray-700">
                <button
                    onClick={handleSignOut}
                    className="flex items-center w-full p-2 rounded-lg text-red-500 hover:bg-red-50"
                >
                    <LogOut className="w-5 h-5 mr-3" />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar; 