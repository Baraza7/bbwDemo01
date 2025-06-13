"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ResponsiveContainer } from "@/components/responsive-container";
import Image from "next/image";

// ServiceCard sub-component (moved here for encapsulation)
function ServiceCard({ title, description, icon }: { title: string; description: string; icon: string; }) {
  return (
    <div className="relative overflow-hidden group h-64 bg-white cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Front Face */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFBE00] to-[#FBE08E] p-4 xs:p-6 flex flex-col justify-between items-start transition-transform duration-500 ease-in-out group-hover:-translate-x-full">
        <div className="relative w-10 h-10 xs:w-12 xs:h-12">
          <Image 
            src={icon} 
            alt={`${title} icon`} 
            fill 
            style={{ objectFit: 'contain' }} 
            sizes="(max-width: 640px) 2.5rem, 3rem"
          />
        </div>
        <h3 className="service-card-title text-black uppercase font-sans font-semibold self-start mt-2">{title}</h3>
      </div>

      {/* Back Face */}
      <div className="absolute inset-0 bg-white p-4 xs:p-6 flex flex-col justify-center items-center text-center transition-transform duration-500 ease-in-out translate-x-full group-hover:translate-x-0">
        <p className="section-description text-black font-inter font-normal text-sm">{description}</p>
      </div>
    </div>
  );
}

export default function Servicescardab1() {
  return (
    <section 
      className="py-12 xs:py-16 md:py-24 relative"
      style={{
        backgroundImage: `url('/ServicesABbg1.jpg')`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to top left, rgba(39, 39, 42, 1) 0%, rgba(39, 39, 42, 0.9) 100%)',
          mixBlendMode: 'multiply',
        }}
      />
      <ResponsiveContainer className="px-4 md:px-6 relative z-10">
        <div className="text-center mb-8 xs:mb-12 md:mb-16">
          <h2 
            className="section-heading"
            style={{ color: '#FFBE00' }}
          >
            Our Key Services
          </h2>
          <p 
            className="section-description max-w-2xl mx-auto mt-2 xs:mt-4"
            style={{ color: '#FFBE00 !important' }}
          >
            We offer a comprehensive suite of financial solutions designed to meet the diverse needs of businesses
            across Africa.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 md:gap-8 divide-gray-700">
          <ServiceCard
            icon="/BID SECURITY.png"
            title="Bid Securities"
            description="Guarantees for tendering institutions, ensuring bidder capability to undertake projects."
          />
          <ServiceCard
            icon="/PERFOMANCE GUARANTEES.png"
            title="Performance Guarantees"
            description="Assurances for procuring entities, guaranteeing successful completion of awarded projects."
          />
          <ServiceCard
            icon="/ADVANCE PAYMENT.png"
            title="Advance Payment Guarantees"
            description="Security for upfront payments on jobs awarded but not yet executed."
          />
          <ServiceCard
            icon="/BANKGUARANTEECARD.png"
            title="Bank Guarantees"
            description="Lending institution assurances that debtor liabilities will be met for goods or loans."
          />
          <ServiceCard
            icon="/INSURANCESOLUTIONS.png"
            title="Insurance Solutions"
            description="Comprehensive coverage for contractors against construction risks and work-related injuries."
          />
          <ServiceCard
            icon="/INVESTMENTCARD.png"
            title="Investment Advisory"
            description="Professional placement and advisory to grow investments across various asset classes."
          />
        </div>
        <div className="text-center mt-8 xs:mt-12 md:mt-16">
          <Link href="/services">
            <Button
              size="lg"
              variant="outline"
              className="border-[#FFBE00] text-[#FFBE00] hover:bg-[#FFBE00] hover:text-black transition-colors duration-300 rounded-full px-8 py-4 text-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </ResponsiveContainer>
    </section>
  );
} 