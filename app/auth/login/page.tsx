import LoginForm from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
         style={{ backgroundImage: "url('/hero-background.jpg')" }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10">
        <LoginForm />
      </div>
    </div>
  )
}
