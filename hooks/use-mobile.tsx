"use client"

import { useState, useEffect } from "react"

const MOBILE_BREAKPOINT = 768
const TABLET_BREAKPOINT = 1024
const LAPTOP_BREAKPOINT = 1440

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isLaptop, setIsLaptop] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [orientation, setOrientation] = useState<"portrait" | "landscape">("portrait")

  useEffect(() => {
    // Function to check screen size and set states
    const checkScreenSize = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      // Set orientation
      setOrientation(width > height ? "landscape" : "portrait")

      // Set device type based on breakpoints
      setIsMobile(width <= MOBILE_BREAKPOINT)
      setIsTablet(width > MOBILE_BREAKPOINT && width <= TABLET_BREAKPOINT)
      setIsLaptop(width > TABLET_BREAKPOINT && width <= LAPTOP_BREAKPOINT)
      setIsDesktop(width > LAPTOP_BREAKPOINT)
    }

    // Initial check
    checkScreenSize()

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize)

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  return {
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
    orientation,
    // Helper functions
    isMobilePortrait: isMobile && orientation === "portrait",
    isMobileLandscape: isMobile && orientation === "landscape",
    isTabletPortrait: isTablet && orientation === "portrait",
    isTabletLandscape: isTablet && orientation === "landscape",
  }
}
