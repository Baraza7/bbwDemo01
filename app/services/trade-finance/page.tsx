import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Mail, MapPin, Phone, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TradeFinancePage() {
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
              Trade Finance Solutions
            </h1>
            {/* Using Roboto for subheadings */}
            <p className="font-sans text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl leading-relaxed">
              Comprehensive trade finance solutions to support your business operations and contractual obligations.
            </p>
            {/* Using Fiery Red for CTA as specified */}
            <Link href="#contacts">
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
                What is Trade Finance?
              </h2>
              <p className="font-body text-gray-700 mb-6 text-lg leading-relaxed">
                Trade finance represents the financial instruments and products that are used by companies to facilitate
                international trade and commerce. At Blackbow Consult, we provide comprehensive trade finance solutions
                including bid securities, performance guarantees, advance payment guarantees, and bank guarantees to
                support your business operations.
              </p>
              <p className="font-body text-gray-700 mb-6 text-lg leading-relaxed">
                Our trade finance solutions are designed to bridge the gap between exporters and importers by
                introducing a third party to transactions to remove the payment risk and supply risk. We help businesses
                of all sizes to secure the financial backing they need to fulfill contractual obligations and expand
                their operations.
              </p>
              <p className="font-body text-gray-700 text-lg leading-relaxed">
                Trade finance also involves the discounting of Invoices for contracts/orders that have already been
                serviced while awaiting payments, providing you with the liquidity you need to continue your operations
                without delay.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="relative rounded-lg overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/finance-illustration.png"
                  alt="Trade Finance Illustration"
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
              Key Features
            </h2>
            <p className="font-body text-gray-600 max-w-2xl mx-auto text-lg">
              Our trade finance solutions offer a range of features designed to support your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FeatureItem
              title="Bid Securities/Bid Bonds"
              description="Guarantees provided to tendering institutions confirming bidders' capability to undertake projects."
            />
            <FeatureItem
              title="Performance Guarantees"
              description="Written guarantees ensuring successful completion of awarded projects or contracts."
            />
            <FeatureItem
              title="Advance Payment Guarantees"
              description="Guarantees securing upfront payments for jobs awarded but not yet executed."
            />
            <FeatureItem
              title="Bank Guarantees"
              description="Assurances from lending institutions ensuring liabilities of debtors will be met."
            />
            <FeatureItem
              title="Invoice Discounting"
              description="Converting outstanding invoices into immediate cash flow for your business."
            />
            <FeatureItem
              title="Customized Solutions"
              description="Tailored financial instruments designed to meet your specific business needs."
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
                Benefits of Our Trade Finance Solutions
              </h2>
              <p className="font-body text-gray-700 mb-6 text-lg leading-relaxed">
                Our trade finance solutions offer numerous advantages for businesses looking to secure contracts,
                fulfill obligations, and maintain healthy cash flow.
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
                    <span className="font-bold">Increased Competitiveness:</span> Ability to bid for and secure larger
                    contracts that require financial guarantees.
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
                    <span className="font-bold">Improved Cash Flow:</span> Access to funds tied up in outstanding
                    invoices, enabling better financial planning.
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
                    <span className="font-bold">Risk Mitigation:</span> Reduced financial risk through guarantees and
                    assurances from reputable financial institutions.
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
                    <span className="font-bold">Business Growth:</span> Ability to take on more projects simultaneously
                    with proper financial backing.
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
                    <span className="font-bold">Credibility Enhancement:</span> Increased trust from clients and
                    partners through financial guarantees.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h3 className="font-serif text-2xl font-bold mb-6 text-[#27272A]">Case Study</h3>
                <h4 className="font-sans text-xl font-semibold mb-3 text-[#00B1D2]">
                  Construction Company Secures Major Government Contract
                </h4>
                <p className="font-body text-gray-700 mb-4">
                  A medium-sized construction company was invited to bid on a major government infrastructure project
                  worth KES 50 million. The tender required a bid bond of 2% of the contract value.
                </p>
                <p className="font-body text-gray-700 mb-4">
                  <span className="font-bold">Challenge:</span> The company had the technical capability but lacked the
                  financial guarantee required for the bid.
                </p>
                <p className="font-body text-gray-700 mb-4">
                  <span className="font-bold">Solution:</span> Blackbow Consult facilitated a bid bond through our
                  banking partners, enabling the company to submit a compliant bid.
                </p>
                <p className="font-body text-gray-700 mb-4">
                  <span className="font-bold">Result:</span> The company won the contract and subsequently secured
                  performance guarantees and advance payment guarantees through our services, successfully completing
                  the project and growing their business significantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-[#27272A] tracking-tight">
              Required Documents
            </h2>
            <p className="font-body text-gray-600 max-w-2xl mx-auto text-lg">
              To process your trade finance application, we require the following documents:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <RequirementItem number="01" text="Fully filled guarantee request form" />
            <RequirementItem number="02" text="Business registration certificate" />
            <RequirementItem number="03" text="ID and pin of the client" />
            <RequirementItem number="04" text="Copy of award letter/Contract" />
            <RequirementItem
              number="05"
              text="6 months Bank Statements with evidence of the receipts from past employers/procuring entities"
            />
            <RequirementItem
              number="06"
              text="Copies of past bid bonds, performance bonds, APG, award letters, ongoing contracts and letters of completion of works if any"
            />
          </div>

          <div className="mt-10 text-center">
            <Link href="/services/requirements">
              <Button
                variant="outline"
                style={{ borderColor: "#00B1D2", color: "#00B1D2" }}
                className="hover:bg-[#00B1D2] hover:text-white rounded-full px-8"
              >
                View All Requirements
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#F8E08E" }}>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Quote className="h-12 w-12 mx-auto mb-6 text-[#D01C1F]" />
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-serif text-2xl md:text-3xl font-bold text-[#27272A] mb-6 italic">
              "THE ROAD TO A SUCCESSFUL INVESTMENT IS NARROW AND LESS TRAVELLED, YOU NEED A TRUSTWORTHY PARTNER TO HELP
              YOU NAVIGATE."
            </p>
          </blockquote>
          <p className="mt-8 text-gray-700 max-w-2xl mx-auto font-body text-lg">
            At Blackbow Consult, we pride ourselves on being that trustworthy partner, guiding you through the
            complexities of trade finance to ensure your business success.
          </p>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contacts" className="py-16 md:py-20 bg-[#27272A] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unlock Your Business's Potential with Our Trade Finance Solutions</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Contact us today to discuss your trade finance needs and how we can help your business succeed.
          </p>
          <Link href="/contacts">
            <Button size="lg" className="bg-[#FFBE00] text-black hover:bg-opacity-90">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Component for Feature Item
function FeatureItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="font-sans text-xl font-bold mb-3 text-[#00B1D2]">{title}</h3>
      <p className="font-body text-gray-600">{description}</p>
    </div>
  )
}

// Component for Requirement Item
function RequirementItem({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold"
        style={{ backgroundColor: "#FBE08E", color: "#27272A" }}
      >
        {number}
      </div>
      <div className="pt-2">
        <p className="font-body text-gray-700">{text}</p>
      </div>
    </div>
  )
}
