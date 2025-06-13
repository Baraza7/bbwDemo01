import { InnerHeroSection } from "./inner-hero-section"

export function InnerHeroExamples() {
  return (
    <div className="space-y-8">
      {/* Basic example with minimal props */}
      <InnerHeroSection
        title="Surface Deals"
        description="Select Surfaces are on sale now - save while supplies last"
        ctaText="Shop Now"
      />

      {/* Example with custom background image */}
      <InnerHeroSection
        title="Xbox Game Pass Ultimate"
        description="Xbox Game Pass Ultimate Xbox Live Gold and over 100 high-quality console and PC games."
        ctaText="Join Now"
        backgroundImage="https://i.ibb.co/tBJGPD9/xbox.png"
      />

      {/* Example with custom colors */}
      <InnerHeroSection
        title="Carbon Negative Initiative"
        description="Microsoft will be carbon negative by 2030 and by 2050 we will remove all carbon the company has emitted since it was founded in 1975"
        ctaText="Learn More"
        backgroundColor="#04a4b4"
        textColor="#ffffff"
      />

      {/* Example with custom content */}
      <InnerHeroSection backgroundColor="#000000">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white mb-4">Custom Hero Content</h2>
          <p className="text-xl text-gray-300 mb-6">This example shows how to use custom content in the hero section</p>
          <div className="flex justify-center gap-4">
            <button className="bg-[#ffbe00] text-black px-6 py-3 rounded-full font-semibold">Primary Action</button>
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-semibold">
              Secondary Action
            </button>
          </div>
        </div>
      </InnerHeroSection>
    </div>
  )
}
