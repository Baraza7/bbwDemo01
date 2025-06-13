"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { useMobile } from "@/hooks/use-mobile"

interface ResponsiveImageProps extends Omit<ImageProps, "src"> {
  mobileSrc: string
  tabletSrc: string
  desktopSrc: string
  alt: string
}

export function ResponsiveImage({ mobileSrc, tabletSrc, desktopSrc, alt, ...props }: ResponsiveImageProps) {
  const { isMobile, isTablet } = useMobile()
  const [src, setSrc] = useState(desktopSrc)

  useEffect(() => {
    if (isMobile) {
      setSrc(mobileSrc)
    } else if (isTablet) {
      setSrc(tabletSrc)
    } else {
      setSrc(desktopSrc)
    }
  }, [isMobile, isTablet, mobileSrc, tabletSrc, desktopSrc])

  return <Image src={src || "/placeholder.svg"} alt={alt} {...props} />
}
