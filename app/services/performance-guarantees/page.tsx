import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Mail, MapPin, Phone, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PerformanceGuaranteesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 h-[60vh] w-full flex items-center">
        {/* Dark background with grid pattern */}
        <div className="absolute inset-0 z-0 bg-[#27272A]">
          <div className="absolute inset-0 opacity-20 bg-grid-white/10" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-white">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[42px] font-bold mb-6 leading-tight tracking-tight">
              Performance Guarantees
            </h1>
            <p className="font-sans text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl leading-relaxed">
              Secure project completion with reliable performance guarantees that protect both contractors and project owners.
            </p>
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
                What are Performance Guarantees?
              </h2>
              <p className="font-body text-gray-700 mb-6 text-lg leading-relaxed">
                A Performance Guarantee is a written guarantee issued by a bank or insurance company to a procuring entity on behalf of the winning bidder/contractor. This guarantee ensures successful completion of the awarded project/contract according to the agreed specifications, timeline, and quality standards.
              </p>
              <p className="font-body text-gray-700 mb-6 text-lg leading-relaxed">
                At Blackbow Consult, we facilitate performance guarantees that provide security and confidence to both parties. For project owners, it ensures project completion even if the contractor defaults. For contractors, it demonstrates commitment and enables access to larger projects.
              </p>
              <p className="font-body text-gray-700 text-lg leading-relaxed">
                Our performance guarantees typically range from 5-10% of the contract value and remain valid throughout the project duration plus warranty period, ensuring complete protection for all stakeholders.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="relative rounded-lg overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/PERFOMANCE GUARANTEES.png"
                  alt="Performance Guarantee Illustration"
                  width={500}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-[#27272A] tracking-tight">
              Benefits of Performance Guarantees
            </h2>
            <p className="font-body text-gray-600 max-w-2xl mx-auto text-lg">
              Secure your projects with performance guarantees that provide confidence and protection for successful project completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-sans font-semibold text-lg mb-2 text-[#27272A]">Client Confidence</h3>
              <p className="font-body text-gray-600">Provide assurance to project owners of successful completion.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-sans font-semibold text-lg mb-2 text-[#27272A]">Project Security</h3>
              <p className="font-body text-gray-600">Protect against contractor default and ensure project completion.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-sans font-semibold text-lg mb-2 text-[#27272A]">Professional Credibility</h3>
              <p className="font-body text-gray-600">Demonstrate commitment and financial backing to clients.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-sans font-semibold text-lg mb-2 text-[#27272A]">Risk Management</h3>
              <p className="font-body text-gray-600">Professional risk assessment and mitigation strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 md:py-24 bg-[#27272A] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Secure Your Contracts with Reliable Performance Guarantees
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Contact our experts today to discuss your performance guarantee requirements and get started.
          </p>
          <div className="flex justify-center">
            <Link href="/contacts">
              <Button size="lg" className="bg-[#FFBE00] text-black hover:bg-opacity-90">
                Request a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 