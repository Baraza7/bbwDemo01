"use client";
import LoginForm from "@/components/auth/login-form";
import FloatingHomeButton from "@/components/FloatingHomeButton";

export default function AdminLoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      <FloatingHomeButton />
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
        <LoginForm />
      </div>
    </div>
  );
} 