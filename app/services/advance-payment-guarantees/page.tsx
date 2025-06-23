import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, DollarSign, Clock, Shield, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AdvancePaymentGuaranteesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 h-[60vh] w-full flex items-center">
        <div className="absolute inset-0 z-0 bg-[#27272A]">
          <div className="absolute inset-0 opacity-20 bg-grid-white/10" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-white">
          <div className="max-w-3xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-0">Advance Payment Guarantees</h1>
              <div className="flex space-x-4">
                <Link href="#overview">
                  <Button variant="outline" className="text-white">Overview</Button>
                </Link>
                <Link href="#benefits">
                  <Button variant="outline" className="text-white">Benefits</Button>
                </Link>
                <Link href="#process">
                  <Button variant="outline" className="text-white">Process</Button>
                </Link>
                <Link href="#contacts">
                  <Button variant="outline" className="text-white">Contact</Button>
                </Link>
              </div>
            </div>
            <p className="font-sans text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl leading-relaxed">
              Secure upfront payments for your projects with our reliable advance payment guarantees that protect both parties.
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
                What are Advance Payment Guarantees?
              </h2>
              <p className="font-body text-gray-700 mb-6 text-lg leading-relaxed">
                An Advance Payment Guarantee is a financial instrument issued by a bank on behalf of a contractor to a procuring entity. This guarantee secures upfront payments for jobs that have been awarded but not yet executed, enabling contractors to mobilize resources and begin project implementation.
              </p>
              <p className="font-body text-gray-700 mb-6 text-lg leading-relaxed">
                At Blackbow Consult, we facilitate advance payment guarantees that provide the necessary cash flow for project mobilization while protecting the interests of project owners. These guarantees typically cover 10-30% of the contract value and ensure proper utilization of advance payments.
              </p>
              <p className="font-body text-gray-700 text-lg leading-relaxed">
                Our advance payment guarantees enable contractors to access working capital for equipment procurement, material purchases, and workforce mobilization, ensuring smooth project commencement and execution.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="relative rounded-lg overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/advance-payment-illustration.png"
                  alt="Advance Payment Illustration"
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
              Key Features of Our Advance Payment Guarantees
            </h2>
            <p className="font-body text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive guarantee solutions that facilitate project mobilization and cash flow management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FeatureItem
              title="Cash Flow Optimization"
              description="Enables access to working capital for immediate project mobilization needs."
            />
            <FeatureItem
              title="Flexible Amounts"
              description="Guarantee amounts tailored to specific project requirements and contract terms."
            />
            <FeatureItem
              title="Progressive Reduction"
              description="Guarantee value reduces as project milestones are achieved and payments recovered."
            />
            <FeatureItem
              title="Quick Processing"
              description="Fast-track approval and issuance to meet project commencement deadlines."
            />
            <FeatureItem
              title="Competitive Rates"
              description="Cost-effective guarantee fees that preserve project profitability."
            />
            <FeatureItem
              title="Expert Management"
              description="Professional guidance on guarantee terms and utilization strategies."
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
                Benefits of Advance Payment Guarantees
              </h2>
              <p className="font-body text-gray-700 mb-6 text-lg leading-relaxed">
                Advance payment guarantees provide essential financial flexibility for contractors while ensuring security for project owners.
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
                    <span className="font-bold">Improved Cash Flow:</span> Access to upfront payments for immediate project needs.
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
                    <span className="font-bold">Project Mobilization:</span> Enables quick procurement of materials and equipment.
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
                    <span className="font-bold">Risk Management:</span> Protects project owners against misuse of advance payments.
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
                    <span className="font-bold">Competitive Advantage:</span> Ability to accept contracts requiring advance payments.
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
                    <span className="font-bold">Financial Flexibility:</span> Reduces dependency on own working capital for mobilization.
                  </p>
                </li>
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl border border-gray-200">
              <Image
                src="/cash-flow-management.png"
                alt="Cash Flow Management"
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
              A streamlined approach to securing advance payment guarantees for your projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              title="Application Review"
              description="We assess your contract terms and advance payment requirements."
            />
            <ProcessStep
              number="02"
              title="Financial Evaluation"
              description="Comprehensive review of your financial capacity and project viability."
            />
            <ProcessStep
              number="03"
              title="Guarantee Structuring"
              description="Design optimal guarantee terms and reduction mechanisms."
            />
            <ProcessStep
              number="04"
              title="Issuance & Monitoring"
              description="Facilitate guarantee issuance and provide ongoing project support."
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
                To process your advance payment guarantee application, we typically require:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <RequirementItem number="1" text="Contract Agreement with Advance Payment Clause" />
                <RequirementItem number="2" text="Company Registration & Licenses" />
                <RequirementItem number="3" text="Audited Financial Statements" />
                <RequirementItem number="4" text="Bank Statements & References" />
                <RequirementItem number="5" text="Project Cash Flow Projections" />
              </div>
              <div className="space-y-4">
                <RequirementItem number="6" text="Mobilization Plan & Budget" />
                <RequirementItem number="7" text="Equipment & Resource Schedule" />
                <RequirementItem number="8" text="Insurance Coverage Details" />
                <RequirementItem number="9" text="Management Team Profiles" />
                <RequirementItem number="10" text="Previous Project Performance Records" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#27272A] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Secure Your Advance Payments Today</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Our expert team is ready to assist you in securing the advance payment guarantees you need to move your projects forward with confidence.
          </p>
          <Link href="/contacts">
            <Button size="lg" className="bg-[#FFBE00] text-black hover:bg-opacity-90">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
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