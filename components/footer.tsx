"use client"
import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Newsletter from "./Newsletter"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // When the component mounts on the client, we set the state to true
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer
      className={`py-12 transition-colors duration-300 ${
        mounted ? (theme === "light" ? "bg-gray-900 text-white" : "bg-black text-white") : "bg-black text-white"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="BlackbowConsult Logo" width={120} height={40} className="h-10 w-auto" />
              <span className="font-heading font-bold text-xl text-[#FFBE00]">blackbow</span>
            </div>
            <p className="text-gray-400 max-w-xs text-sm sm:text-base">
              Home of your customized trade finance solutions in Kenya and across Africa.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              Garden Chambers Bld, Mokta-Daddah Street, Suite 301A
              <br />
              P.O. Box 3143-00506, Nairobi - Kenya
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-[#FFBE00] transition-colors text-sm sm:text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#FFBE00] transition-colors text-sm sm:text-base"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-[#FFBE00] transition-colors text-sm sm:text-base"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-[#FFBE00] transition-colors text-sm sm:text-base"
                >
                  Updates
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className="text-gray-400 hover:text-[#FFBE00] transition-colors text-sm sm:text-base"
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="text-gray-400 hover:text-[#FFBE00] transition-colors text-sm sm:text-base"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 font-heading">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-[#FFBE00] transition-colors text-sm sm:text-base"
                >
                  Trade Finance
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-[#FFBE00] transition-colors text-sm sm:text-base"
                >
                  Investment Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-[#FFBE00] transition-colors text-sm sm:text-base"
                >
                  Insurance Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-[#FFBE00] transition-colors text-sm sm:text-base"
                >
                  Bid Securities
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-[#FFBE00] transition-colors text-sm sm:text-base"
                >
                  Performance Guarantees
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact and Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 font-heading">Contacts</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" style={{ color: "#FFBE00" }} />
                <span className="text-gray-400 text-sm sm:text-base">Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" style={{ color: "#FFBE00" }} />
                <span className="text-gray-400 text-sm sm:text-base">0720-709711 / 0786525716</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" style={{ color: "#FFBE00" }} />
                <span className="text-gray-400 text-sm sm:text-base">info@blackbow.co.ke</span>
              </li>
            </ul>

            <Newsletter isFooter={true} />

            <div className="flex space-x-3 pt-6">
              <a
                href="https://linkedin.com"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-600 hover:bg-[#FFBE00] hover:border-[#FFBE00] hover:text-[#27272A] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={14} />
              </a>
              <a
                href="https://twitter.com"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-600 hover:bg-[#FFBE00] hover:border-[#FFBE00] hover:text-[#27272A] transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={14} />
              </a>
              <a
                href="https://facebook.com"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-600 hover:bg-[#FFBE00] hover:border-[#FFBE00] hover:text-[#27272A] transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="https://instagram.com"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-600 hover:bg-[#FFBE00] hover:border-[#FFBE00] hover:text-[#27272A] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            &copy; {currentYear} <span className="text-[#FFBE00]">BlackbowConsult Co. Ltd.</span> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
