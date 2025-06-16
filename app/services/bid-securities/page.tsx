import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Mail, MapPin, Phone, Quote, FileText, Shield, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BidSecuritiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 h-[60vh] w-full flex items-center">
        {/* Dark background with grid pattern - matching the About Us page */}
        <div className="absolute inset-0 z-0 bg-[#27272A]">
          <div className="absolute inset-0 opacity-20 bg-grid-white/10" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-white">
          <div className="max-w-3xl">
            {/* Using Italiana font for headings as specified */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[42px] font-bold mb-6 leading-tight tracking-tight">
              Bid Securities & Tender Bonds
            </h1>
            {/* Using Roboto for subheadings */}
            <p className="font-sans text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl leading-relaxed">
              Secure your competitive advantage with reliable bid securities that demonstrate your commitment and capability to potential clients.
            </p>
            {/* Using Fiery Red for CTA as specified */}
            <Link href="#contact">
              <Button
                size="lg"
                style={{ backgroundColor: "#D01C1F", color: "white" }}
                className="hover:bg-opacity-90 rounded-full px-8"
              >
                Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-[#27272A] tracking-tight">
                What are Bid Securities?
              </h2>
              <p className="font-body text-gray-700 mb-6 text-lg leading-relaxed">
                A Bid Security, also known as a Tender Security or Bid Bond, is a financial guarantee provided by a bank or insurance company to a tendering institution on behalf of a bidder. This guarantee demonstrates that the bidder has the financial capability and serious intention to undertake the tendered project if selected.
              </p>
              <p className="font-body text-gray-700 mb-6 text-lg leading-relaxed">
                At Blackbow Consult, we facilitate the issuance of bid securities that protect both the project owner and the bidder. For project owners, it ensures that only serious and capable bidders participate in the tender process. For bidders, it demonstrates credibility and financial backing.
              </p>
              <p className="font-body text-gray-700 text-lg leading-relaxed">
                Our bid securities are typically issued for 2-5% of the tender value and remain valid throughout the tender evaluation period, giving you the competitive edge needed to secure valuable contracts.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="relative rounded-lg overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/bid-security-illustration.png"
                  alt="Bid Security Illustration"
                  width={500}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-[#27272A] tracking-tight">
              Key Features of Our Bid Securities
            </h2>
            <p className="font-body text-gray-600 max-w-2xl mx-auto text-lg">
              Our bid security solutions are designed to meet the diverse needs of contractors and businesses across various sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FeatureItem
              title="Quick Processing"
              description="Fast turnaround times to meet urgent tender submission deadlines."
            />
            <FeatureItem
              title="Competitive Rates"
              description="Affordable pricing structures that don't compromise your project margins."
            />
            <FeatureItem
              title="Flexible Terms"
              description="Customizable validity periods and amounts to match tender requirements."
            />
            <FeatureItem
              title="Bank Partnerships"
              description="Strong relationships with leading banks for reliable guarantee issuance."
            />
            <FeatureItem
              title="Expert Guidance"
              description="Professional advice on tender requirements and documentation."
            />
            <FeatureItem
              title="Sector Expertise"
              description="Experience across construction, supply, and service sectors."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-[#27272A] tracking-tight">
                Benefits of Our Bid Securities
              </h2>
              <p className="font-body text-gray-700 mb-6 text-lg leading-relaxed">
                Secure your position in competitive tenders with our reliable bid security solutions that demonstrate your commitment and financial capability.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1"
                    style={{ backgroundColor: "#FFBE00" }}
                  >
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="font-body text-gray-700">
                    <span className="font-bold">Enhanced Credibility:</span> Demonstrate financial backing and serious commitment to potential clients.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1"
                    style={{ backgroundColor: "#FFBE00" }}
                  >
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="font-body text-gray-700">
                    <span className="font-bold">Competitive Advantage:</span> Meet tender requirements that exclude competitors without guarantees.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1"
                    style={{ backgroundColor: "#FFBE00" }}
                  >
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="font-body text-gray-700">
                    <span className="font-bold">Cash Flow Protection:</span> No need to tie up working capital as collateral for tender participation.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1"
                    style={{ backgroundColor: "#FFBE00" }}
                  >
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="font-body text-gray-700">
                    <span className="font-bold">Risk Mitigation:</span> Professional assessment and backing from reputable financial institutions.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1"
                    style={{ backgroundColor: "#FFBE00" }}
                  >
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="font-body text-gray-700">
                    <span className="font-bold">Business Growth:</span> Access to larger tenders and government contracts requiring guarantees.
                  </p>
                </li>
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl border border-gray-200">
              <Image
                src="/tender-process.png"
                alt="Tender Process"
                width={500}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-[#27272A] tracking-tight">
              Our Process
            </h2>
            <p className="font-body text-gray-600 max-w-2xl mx-auto text-lg">
              A streamlined approach to securing your bid securities quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              title="Consultation"
              description="We assess your tender requirements and recommend the appropriate bid security structure."
            />
            <ProcessStep
              number="02"
              title="Documentation"
              description="Prepare and submit all necessary documentation to our banking partners."
            />
            <ProcessStep
              number="03"
              title="Approval"
              description="Fast-track approval process with our established banking relationships."
            />
            <ProcessStep
              number="04"
              title="Issuance"
              description="Receive your bid security in time for tender submission deadlines."
            />
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-[#27272A] tracking-tight">
                Documentation Requirements
              </h2>
              <p className="font-body text-gray-600 text-lg">
                To process your bid security application, we typically require the following documents:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <RequirementItem number="1" text="Certificate of Incorporation" />
                <RequirementItem number="2" text="Valid Business License" />
                <RequirementItem number="3" text="Tax Compliance Certificate" />
                <RequirementItem number="4" text="Audited Financial Statements" />
                <RequirementItem number="5" text="Bank Statements (6 months)" />
              </div>
              <div className="space-y-4">
                <RequirementItem number="6" text="Tender Documents" />
                <RequirementItem number="7" text="Company Profile" />
                <RequirementItem number="8" text="Directors' IDs and CVs" />
                <RequirementItem number="9" text="Previous Contract Awards" />
                <RequirementItem number="10" text="Professional Indemnity Insurance" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#27272A] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Next Tender?
          </h2>
          <p className="font-body text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Don't let lack of bid securities prevent you from competing for valuable contracts. Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                style={{ backgroundColor: "#D01C1F", color: "white" }}
                className="hover:bg-opacity-90 rounded-full px-8"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black rounded-full px-8"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function FeatureItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <h3 className="font-serif text-xl font-bold mb-3 text-[#27272A]">{title}</h3>
      <p className="font-body text-gray-600">{description}</p>
    </div>
  )
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4"
        style={{ backgroundColor: "#D01C1F" }}
      >
        {number}
      </div>
      <h3 className="font-serif text-xl font-bold mb-3 text-[#27272A]">{title}</h3>
      <p className="font-body text-gray-600">{description}</p>
    </div>
  )
}

function RequirementItem({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
        style={{ backgroundColor: "#FFBE00" }}
      >
        {number}
      </div>
      <p className="font-body text-gray-700">{text}</p>
    </div>
  )
} 