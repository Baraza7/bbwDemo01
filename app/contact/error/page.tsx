import Link from "next/link"
import { ArrowLeft, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactErrorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Error Message Section */}
      <section className="pt-32 pb-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-md mx-auto">
            <div className="mb-6 flex justify-center">
              <AlertTriangle className="h-20 w-20 text-[#D01C1F]" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-[#27272A]">Message Not Sent</h1>
            <p className="font-body text-gray-600 mb-8 text-lg">
              We apologize, but there was an error sending your message. Please try again or contact us directly by
              phone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  style={{ backgroundColor: "#D01C1F", color: "white" }}
                  className="hover:bg-opacity-90 rounded-full px-8"
                  size="lg"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Try Again
                </Button>
              </Link>
              <a href="tel:+254720709711">
                <Button
                  variant="outline"
                  style={{ borderColor: "#00B1D2", color: "#00B1D2" }}
                  className="hover:bg-[#00B1D2] hover:text-white rounded-full px-8"
                  size="lg"
                >
                  Call Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
