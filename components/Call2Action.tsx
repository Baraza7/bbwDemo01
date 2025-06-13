import React from "react";
import { ArrowRight } from 'lucide-react';

const Call2Action = () => {
  return (
    <section
      id="cta-section"
      className="w-full" 
    >
      <div id="cta-responsive-container" className="mx-auto w-full max-w-screen-xl px-4 md:px-6">
        <div
          id="gradient-inner-container"
          className="p-8 xs:p-12 md:p-16 rounded-2xl text-center"
          style={{
            backgroundColor: "transparent",
          }}
        >
          <h2
            id="cta-title"
            className="mb-4 xs:mb-6"
            style={{
              fontFamily: "Italiana, 'Italiana Fallback', serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "rgb(255, 255, 255)",
              textAlign: "center",
              lineHeight: "1.2",
              letterSpacing: "1px",
            }}
          >
            Ready to Elevate Your Business?
          </h2>

          <p
            id="cta-inner-text"
            className="font-inter text-white/90 max-w-2xl mx-auto mb-6 xs:mb-8"
            style={{
              fontSize: "clamp(0.875rem, 2.5vw, 1.125rem)",
              lineHeight: "1.6",
            }}
          >
            Let's discuss how Black Bow Consult can provide the financial solutions you need to achieve your goals. Contact us today for a personalized consultation.
          </p>

          <a id="cta-link" href="/contact" className="inline-block">
            <button
              id="cta-button"
              className="modern-hover-button inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 bg-white transition-all duration-500 ease-out rounded-full px-8 py-4 text-lg font-semibold shadow-md relative overflow-hidden"
            >
              <span
                id="cta-button-text"
                className="font-inter font-semibold relative z-10 transition-colors duration-300"
                style={{ color: "black" }}
              >
                Contact Us Now
              </span>
              <ArrowRight
                id="cta-button-icon"
                className="ml-2 h-5 w-5 relative z-10 transition-all duration-300"
                style={{ color: "black" }}
              />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Call2Action; 