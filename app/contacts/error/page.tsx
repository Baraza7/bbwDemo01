import { AlertTriangle, ArrowLeft, Home } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactsErrorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center p-8">
          <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Submission Error</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We apologize, but there was an error sending your message. Please try again or contact us directly by email.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/">
              <Button>
                <Home className="mr-2 h-4 w-4" /> Go to Homepage
              </Button>
            </Link>
            <Link href="/contacts">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Try Again
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
