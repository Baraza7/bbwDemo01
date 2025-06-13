"use client"

import type { FC, ReactNode } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface InnerHeroSectionProps {
  /**
   * The main title displayed in the hero section
   */
  title: string
  /**
   * The description text displayed below the title
   */
  description?: string
  /**
   * The text for the call-to-action button
   */
  ctaText?: string
  /**
   * The URL that the CTA button links to
   */
  ctaLink?: string
  /**
   * Optional custom background image URL
   */
  backgroundImage?: string
  /**
   * Optional custom background color
   */
  backgroundColor?: string
  /**
   * Optional custom text color
   */
  textColor?: string
  /**
   * Optional additional className for the hero section
   */
  className?: string
  /**
   * Optional custom content to render instead of the default layout
   */
  children?: ReactNode
}

/**
 * A reusable hero section component for inner pages
 */
export const InnerHeroSection: FC<InnerHeroSectionProps> = ({
  title,
  description,
  ctaText = "Learn More",
  ctaLink = "#",
  backgroundImage,
  backgroundColor = "#27272A",
  textColor = "white",
  className,
  children,
}) => {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor,
      }
    : { backgroundColor }

  return (
    <section
      className={cn("relative w-full min-h-[400px] flex items-center justify-center px-4 py-12 md:py-20", className)}
      style={{
        ...backgroundStyle,
        color: textColor,
      }}
    >
      <div className="container mx-auto text-center max-w-4xl">
        {children || (
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{title}</h1>
            {description && (
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">{description}</p>
            )}
            {ctaText && (
              <div className="pt-4">
                <Link
                  href={ctaLink}
                  className="inline-flex items-center px-6 py-3 bg-[#FFBE00] text-black font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300"
                >
                  {ctaText} <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

// Default export for easier imports
export default InnerHeroSection
