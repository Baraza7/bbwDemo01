"use client";

import Sidebar from "@/components/admin/Sidebar";
import FloatingHomeButton from "@/components/FloatingHomeButton";
import withAuth from "@/components/auth/withAuth";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
            <Sidebar />
            <FloatingHomeButton />
            <main className="flex-1 p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    );
};

export default withAuth(AdminLayout); 