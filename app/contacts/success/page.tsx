import Link from "next/link"
import { ArrowLeft, CheckCircle, CircleCheck, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactSuccessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Success Message Section */}
      <section className="pt-32 pb-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-md mx-auto">
            <div className="mb-6 flex justify-center">
              <CircleCheck className="h-16 w-16 text-green-500 mx-auto mb-6" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-[#27272A]">
              Message Sent Successfully
            </h1>
            <p className="font-body text-gray-600 mb-8 text-lg">
              Thank you for contacting Blackbow Consult. We have received your message and will get back to you as soon
              as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button
                  style={{ backgroundColor: "#D01C1F", color: "white" }}
                  className="hover:bg-opacity-90 rounded-full px-8"
                  size="lg"
                >
                  <Home className="mr-2 h-4 w-4" /> Go to Homepage
                </Button>
              </Link>
              <Link href="/contacts">
                <Button
                  variant="outline"
                  style={{ borderColor: "#00B1D2", color: "#00B1D2" }}
                  className="hover:bg-[#00B1D2] hover:text-white rounded-full px-8"
                  size="lg"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Contacts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
