"use client"

import { useState } from "react"
import Link from "next/link"
import { Home } from "lucide-react"

export default function HomeButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href="/"
      className="fixed top-8 left-8 z-50 block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Return to homepage"
    >
      <div
        className={`rounded-full p-3 transition-all duration-300 ${
          isHovered ? "bg-transparent border-2 border-[#FFBE00]" : "bg-[#FFBE00] border-2 border-[#FFBE00]"
        }`}
      >
        <Home size={24} className={`transition-colors duration-300 ${isHovered ? "text-[#FFBE00]" : "text-black"}`} />
      </div>
    </Link>
  )
}
