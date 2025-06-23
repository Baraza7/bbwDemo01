"use client"

import { useEffect, useState, useRef, useLayoutEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone, Globe, Briefcase, FileText, Handshake, Shield, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ResponsiveContainer } from "@/components/responsive-container"
import { useMobile } from "@/hooks/use-mobile"
import { useTheme } from "next-themes"
import { UpdateCard } from "@/components/UpdateCard"
import { unstable_noStore as noStore } from 'next/cache';
import { Call2Action } from "@/components/Call2Action"
import LogoGrid from "@/components/LogoGrid"
import TestimonialSlider from "@/components/TestimonialSlider"
import { HeroSection } from "@/components/hero-section"

// Define interfaces for type safety - these should match the ones on the updates page
interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorBio: string;
  authorImage: string;
  date: string;
  category: string;
  tags: string[];
  featuredImage: string;
  readTime: string;
  published: boolean;
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
}

interface UpdatesConfig {
  settings: {
    articlesPerPage: number;
    showExcerpts: boolean;
    showAuthor: boolean;
    showDate: boolean;
    showCategory: boolean;
    enableComments: boolean;
    featuredArticleId: string;
  };
  articles: Article[];
}

async function getUpdatesData(): Promise<UpdatesConfig | null> {
  noStore();
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
  const apiUrl = `${apiBaseUrl}/api/updates`;

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      console.error(`API fetch failed with status: ${res.status}`, await res.text());
      return null;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch updates data:', error);
    return null;
  }
}

// Component for Service Card
function ServiceCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  const IconComponent = {
    Handshake,
    Shield,
    TrendingUp,
    Briefcase,
  }[icon] || Handshake

  return (
    <div className="rounded-lg bg-white p-8 text-left shadow-lg transition-transform hover:-translate-y-2">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
        <IconComponent className="h-8 w-8 text-red-600" />
      </div>
      <h3 className="mb-3 font-serif text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

// Component for Team Member
function TeamMember({ name, position, bio, image }: { name: string; position: string; bio: string; image: string }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
      <div className="h-48 xs:h-64 bg-gray-200 relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 xs:p-6">
        <h3 className="service-card-title mb-1">{name}</h3>
        <p style={{ color: "#00B1D2" }} className="font-sans font-medium mb-2 xs:mb-3 text-base">
          {position}
        </p>
        <p className="team-member-bio">{bio}</p>
      </div>
    </div>
  )
}

// Typewriter component for animated text with HTML support
function Typewriter({ text, delay = 100, onComplete }: { text: string; delay?: number; onComplete?: () => void }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalDuration = 3000 // 3 seconds for the entire text
  const calculatedDelay = Math.min(totalDuration / text.length, delay)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, calculatedDelay)

      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, calculatedDelay, onComplete, text])

  return <span dangerouslySetInnerHTML={{ __html: displayText }} />
}

const logos = [
  { src: "/logoipsum-1.png", alt: "Logo 1" },
  { src: "/logoipsum-2.png", alt: "Logo 2" },
  { src: "/logoipsum-3.png", alt: "Logo 3" },
  { src: "/logoipsum-4.png", alt: "Logo 4" },
  { src: "/logoipsum-5.png", alt: "Logo 5" },
  { src: "/logoipsum-6.png", alt: "Logo 6" },
  { src: "/logoipsum-7.png", alt: "Logo 7" },
];

export default async function HomePage() {
  const updatesData = await getUpdatesData();
  const latestUpdates = updatesData?.articles
    ?.filter(article => article.published)
    ?.slice(0, 3) || [];

  const { isMobile } = useMobile()
  const [showBottomSection, setShowBottomSection] = useState(false)
  const servicesCardRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const heroSectionRef = useRef<HTMLElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Animation states
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [buttonsVisible, setButtonsVisible] = useState(false)
  const [servicesCardVisible, setServicesCardVisible] = useState(false)
  const [imageVisible, setImageVisible] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)

  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setShowBottomSection(!isMobile)

    // Start with everything hidden
    setHeaderVisible(false)
    setSubtitleVisible(false)
    setButtonsVisible(false)
    setServicesCardVisible(false)
    setImageVisible(false)

    // Title animation will start immediately via the Typewriter component
  }, [isMobile])

  // Handle title animation completion
  const handleTitleAnimationComplete = () => {
    setTitleAnimationComplete(true)

    // After title completes, show header and start subtitle + buttons fade-in together
    setHeaderVisible(true)

    // Start subtitle and buttons fade-in together after title completes
    setTimeout(() => {
      setSubtitleVisible(true)
      setButtonsVisible(true)

      // Start services card slide-in after subtitle/buttons complete (1 second)
      setTimeout(() => {
        setServicesCardVisible(true)

        // Start image fade-in after services card completes (3 seconds)
        setTimeout(() => {
          setImageVisible(true)
        }, 3000) // Wait 3s for services card to complete
      }, 1000) // Wait 1s for subtitle/buttons to complete
    }, 500) // Small buffer after title completes
  }

  // Function to precisely adjust the image position
  const adjustImagePosition = () => {
    if (!imageContainerRef.current || !heroSectionRef.current || isMobile) return

    // Make the image container extend from the current position to the bottom of the screen
    const heroSectionRect = heroSectionRef.current.getBoundingClientRect()
    const viewportHeight = window.innerHeight

    // Calculate the height needed to reach the bottom of the screen
    const heightToBottom = viewportHeight - heroSectionRect.top

    // Set the image container to extend to the bottom of the screen
    imageContainerRef.current.style.height = `${heightToBottom}px`
  }

  // Function to adjust the hero content position
  const adjustHeroContentPosition = () => {
    if (!heroContentRef.current || !heroSectionRef.current) return

    // Get the height of the hero section
    const heroSectionHeight = heroSectionRef.current.clientHeight

    // Calculate 5% of the hero section height to move the content up
    const upwardOffset = heroSectionHeight * 0.05

    // Apply the upward offset using transform
    heroContentRef.current.style.transform = `translateY(-${upwardOffset}px)`
  }

  // Use useLayoutEffect for synchronous layout calculations before paint
  useLayoutEffect(() => {
    if (!isMobile) {
      adjustImagePosition()
    }
    adjustHeroContentPosition()
  }, [isMobile, showBottomSection, imageLoaded])

  // Handle image load event
  const handleImageLoad = () => {
    setImageLoaded(true)
    adjustImagePosition()
  }

  useEffect(() => {
    if (isMobile) return

    // Initial adjustment
    adjustImagePosition()
    adjustHeroContentPosition()

    // Adjust on resize with a small debounce to improve performance
    let resizeTimer: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        adjustImagePosition()
        adjustHeroContentPosition()
      }, 50)
    }

    // Adjust on scroll to handle any dynamic content changes
    const handleScroll = () => {
      requestAnimationFrame(() => {
        adjustImagePosition()
        adjustHeroContentPosition()
      })
    }

    // Set up mutation observer to detect DOM changes
    const observer = new MutationObserver(() => {
      adjustImagePosition()
      adjustHeroContentPosition()
    })

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      })
    }

    // Add event listeners
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)

    // Run adjustment after a short delay to ensure all elements are properly rendered
    const initialTimer = setTimeout(() => {
      adjustImagePosition()
      adjustHeroContentPosition()
    }, 100)

    // Run adjustment periodically for the first few seconds to handle any dynamic content loading
    const intervalId = setInterval(() => {
      adjustImagePosition()
      adjustHeroContentPosition()
    }, 500)
    setTimeout(() => clearInterval(intervalId), 5000)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(resizeTimer)
      clearTimeout(initialTimer)
      clearInterval(intervalId)
      observer.disconnect()
    }
  }, [isMobile, showBottomSection, imageLoaded])

  // Get the background image based on theme
  const getBackgroundImage = () => {
    if (!mounted) return "/Home2Hero.png" // Default to new image
    // return theme === "light" ? "/construction-sunset-warm.png" : "/Home2Hero.png"
    return "/Home2Hero.png" // Use Home2Hero.png for all themes
  }

  // Get title text color based on theme
  const getTitleTextColor = () => {
    if (!mounted) return "text-white"
    return theme === "light" ? "text-white" : "text-white"
  }

  // Get subtitle text color based on theme
  const getSubtitleTextColor = () => {
    if (!mounted) return "text-white"
    return theme === "light" ? "text-white" : "text-white"
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />

        {/* Services Section */}
        <section id="services" className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold md:text-5xl" style={{ color: 'var(--accent-yellow)' }}>
              Our Services
            </h2>
            <p className="mx-auto mb-16 max-w-3xl text-lg text-gray-600">
              We provide a comprehensive range of financial instruments and advisory services designed to empower your business and secure your investments.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                title="Bid Securities"
                description="Secure your bids with our reliable and trusted bid securities, ensuring your proposals are backed by solid financial standing."
                icon="Handshake"
              />
              <ServiceCard
                title="Performance Guarantees"
                description="Guarantee project completion and performance with our robust financial instruments, tailored for contractors and developers."
                icon="Shield"
              />
              <ServiceCard
                title="Advance Payment Guarantees"
                description="Access working capital securely with our advance payment guarantees, facilitating smoother project starts and operations."
                icon="TrendingUp"
              />
              <ServiceCard
                title="Trade Finance"
                description="Navigate international trade with ease using our tailored trade finance solutions, designed to optimize your cash flow and mitigate risks."
                icon="Briefcase"
              />
            </div>
            <div className="mt-12">
              <Link href="/services">
                <Button size="lg" style={{ backgroundColor: '#D01C1F', color: 'white' }} className="hover:bg-opacity-90">
                  Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <LogoGrid logos={logos} />

        {/* Latest Updates Section */}
        <section id="updates" className="bg-gray-50 py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold md:text-5xl" style={{ color: 'var(--accent-yellow)' }}>
              Latest Updates
            </h2>
            <p className="mx-auto mb-16 max-w-3xl text-lg text-gray-600">
              Stay informed with our latest articles, insights, and news from the world of finance and investment.
            </p>
            {latestUpdates.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {latestUpdates.map((update) => (
                  <UpdateCard
                    key={update.id}
                    image={update.featuredImage}
                    category={update.category}
                    title={update.title}
                    excerpt={update.excerpt}
                    author={update.author}
                    date={update.date}
                    slug={update.slug}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600">No updates available at the moment. Please check back later.</p>
              </div>
            )}
          </div>
        </section>

        <TestimonialSlider />
        <Call2Action />
      </main>
      <Footer />
    </>
  )
}
