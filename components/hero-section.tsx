export function HeroSection() {
  return (
    <div id="hero-section" className="w-full h-screen flex flex-col">
      {/* TopNavBar - 10% height, white background */}
      <div id="top-nav-bar" className="w-full h-[10%] bg-white">
        <div className="container mx-auto h-full flex items-center px-4">{/* Title removed as requested */}</div>
      </div>

      {/* HeroImage - 69% height with 10% margin on sides */}
      <div id="hero-image" className="w-full h-[69%] relative px-4 md:px-[51px] py-4 mx-[10%]">
        <div className="absolute inset-0 mx-4 md:mx-0 bg-[#5F2525] rounded-[12px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('/PageHero1.png')",
            }}
          >
            {/* Overlay to enhance text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            {/* Content with 10% padding on left and right */}
            <div className="container mx-auto h-full flex items-center justify-center px-[10%] relative z-10">
              <div className="text-white text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
                  Construction & Development
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto font-sans">
                  Professional tools and financial solutions for your construction projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LogoSlider - 21% height, green background */}
      <div id="logo-slider" className="w-full h-[21%] bg-green-600">
        <div className="container mx-auto h-full flex items-center px-4">
          <h2 className="text-white text-2xl font-bold">LogoSlider</h2>
        </div>
      </div>
    </div>
  )
}
