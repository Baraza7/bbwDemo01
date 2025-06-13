"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';

const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
    const AuthComponent = (props: P) => {
        const router = useRouter();
        const [user, setUser] = useState<User | null>(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user);
                    setLoading(false);
                } else {
                    router.push('/auth/login');
                }
            });

            return () => unsubscribe();
        }, [router]);

        if (loading) {
            return <div>Loading...</div>; // Or a spinner component
        }

        if (!user) {
            return null; // Or a redirect component
        }

        return <Component {...props} />;
    };

    AuthComponent.displayName = `WithAuth(${Component.displayName || Component.name || 'Component'})`;

    return AuthComponent;
};

export default withAuth; 