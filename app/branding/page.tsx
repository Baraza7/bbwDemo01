"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Copy, Check, Download, Menu, X, ExternalLink, Palette, Type, Layout, Zap, Eye, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import HomeButton from "@/components/home-button"

export default function BrandingPage() {
  const [copiedText, setCopiedText] = useState<string | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    intro: true,
    logo: true,
    colors: true,
    typography: true,
    components: true,
    layout: true,
    wireframe: true,
  })

  // Refs for smooth scrolling
  const introRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const colorsRef = useRef<HTMLDivElement>(null)
  const typographyRef = useRef<HTMLDivElement>(null)
  const componentsRef = useRef<HTMLDivElement>(null)
  const layoutRef = useRef<HTMLDivElement>(null)
  const wireframeRef = useRef<HTMLDivElement>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(id)
    setTimeout(() => setCopiedText(null), 2000)
  }

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    setSidebarOpen(false)
  }

  const downloadPDF = () => {
    // Enhanced PDF generation with modern styling
    const printWindow = window.open("", "_blank")
    if (!printWindow) return

    const pdfContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Blackbow Consult Brand Guidelines</title>
      <style>
        @page {
          size: A4;
          margin: 0;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          margin: 0;
          padding: 0;
          line-height: 1.6;
          color: white;
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
        }
        
        .cover-page {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #FFBE00 100%);
          color: white;
          height: 100vh;
          position: relative;
          page-break-after: always;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        
        .cover-logo {
          width: 200px;
          height: auto;
          margin-bottom: 60px;
          filter: brightness(0) invert(1);
        }
        
        .cover-title {
          font-size: 120px;
          font-weight: 900;
          line-height: 0.9;
          color: #FFBE00;
          margin: 0 0 30px 0;
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }
        
        .cover-subtitle {
          font-size: 24px;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        
        .page {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
          color: white;
          padding: 60px;
          position: relative;
          page-break-after: always;
          min-height: calc(100vh - 120px);
        }
        
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 60px;
          padding-bottom: 20px;
          border-bottom: 2px solid #333;
        }
        
        .page-number {
          font-size: 14px;
          color: #FFBE00;
          font-weight: 600;
        }
        
        .section-title {
          font-size: 48px;
          font-weight: 900;
          color: #FFBE00;
          margin-bottom: 30px;
          letter-spacing: -0.01em;
        }
        
        .section-intro {
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 40px;
          color: rgba(255, 255, 255, 0.9);
          max-width: 80%;
        }
        
        .color-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin: 40px 0;
        }
        
        .color-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .color-swatch {
          height: 120px;
          width: 100%;
        }
        
        .color-info {
          padding: 20px;
        }
        
        .color-name {
          font-weight: 700;
          font-size: 18px;
          margin-bottom: 8px;
          color: white;
        }
        
        .color-hex {
          font-family: 'Monaco', monospace;
          font-size: 14px;
          color: #FFBE00;
          margin-bottom: 8px;
        }
        
        .color-usage {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.4;
        }
        
        .typography-sample {
          margin: 30px 0;
          padding: 30px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .font-name {
          font-weight: 700;
          font-size: 20px;
          color: #FFBE00;
          margin-bottom: 15px;
        }
        
        .font-demo {
          font-size: 32px;
          margin: 15px 0;
          color: white;
        }
        
        .font-usage {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
        }
        
        .modern-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin: 40px 0;
        }
        
        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }
        
        .feature-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #FFBE00, #00B1D2);
          border-radius: 15px;
          margin: 0 auto 20px auto;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }
        
        .feature-title {
          font-size: 18px;
          font-weight: 700;
          color: white;
          margin-bottom: 15px;
        }
        
        .feature-desc {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
        }
      </style>
    </head>
    <body>
      <!-- Cover Page -->
      <div class="cover-page">
        <div class="cover-logo">📊</div>
        <h1 class="cover-title">Brand<br>Manual</h1>
        <p class="cover-subtitle">Visual Identity Guidelines</p>
      </div>
      
      <!-- Introduction Page -->
      <div class="page">
        <div class="page-header">
          <h1 class="section-title">Introduction</h1>
          <div class="page-number">01</div>
        </div>
        <p class="section-intro">
          This comprehensive brand manual establishes the visual identity standards for Blackbow Consult Limited. 
          Our brand identity represents more than visual elements—it embodies our promise to clients and our 
          commitment to excellence in financial services.
        </p>
        <div class="modern-grid">
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <div class="feature-title">Brand Purpose</div>
            <div class="feature-desc">Empowering African businesses through innovative financial solutions</div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <div class="feature-title">Brand Promise</div>
            <div class="feature-desc">Seamless, customized trade finance solutions that drive growth</div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🏆</div>
            <div class="feature-title">Brand Values</div>
            <div class="feature-desc">Integrity, Excellence, Innovation, and Client-Centricity</div>
          </div>
        </div>
      </div>
      
      <!-- Colors Page -->
      <div class="page">
        <div class="page-header">
          <h1 class="section-title">Color Palette</h1>
          <div class="page-number">02</div>
        </div>
        <p class="section-intro">
          Our color palette reflects professionalism, trust, and innovation. Each color has been carefully 
          selected to communicate our brand values and create emotional connections with our audience.
        </p>
        <div class="color-grid">
          <div class="color-card">
            <div class="color-swatch" style="background: linear-gradient(135deg, #FFBE00, #FFD700);"></div>
            <div class="color-info">
              <div class="color-name">Primary Gold</div>
              <div class="color-hex">#FFBE00</div>
              <div class="color-usage">Primary brand color, CTAs, highlights</div>
            </div>
          </div>
          <div class="color-card">
            <div class="color-swatch" style="background: linear-gradient(135deg, #00B1D2, #0EA5E9);"></div>
            <div class="color-info">
              <div class="color-name">Trust Blue</div>
              <div class="color-hex">#00B1D2</div>
              <div class="color-usage">Secondary actions, trust elements</div>
            </div>
          </div>
          <div class="color-card">
            <div class="color-swatch" style="background: linear-gradient(135deg, #D01C1F, #EF4444);"></div>
            <div class="color-info">
              <div class="color-name">Action Red</div>
              <div class="color-hex">#D01C1F</div>
              <div class="color-usage">Important CTAs, alerts</div>
            </div>
          </div>
          <div class="color-card">
            <div class="color-swatch" style="background: linear-gradient(135deg, #27272A, #404040);"></div>
            <div class="color-info">
              <div class="color-name">Professional Dark</div>
              <div class="color-hex">#27272A</div>
              <div class="color-usage">Text, backgrounds, sophistication</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Typography Page -->
      <div class="page">
        <div class="page-header">
          <h1 class="section-title">Typography</h1>
          <div class="page-number">03</div>
        </div>
        <p class="section-intro">
          Our typography system ensures consistency and readability across all communications. 
          The selected fonts reflect our brand personality—professional, modern, and approachable.
        </p>
        <div class="typography-sample">
          <div class="font-name">Italiana (Display)</div>
          <div class="font-demo" style="font-family: serif;">The Future of Finance</div>
          <div class="font-usage">Headlines, brand elements, sophisticated messaging</div>
        </div>
        <div class="typography-sample">
          <div class="font-name">Inter (Primary)</div>
          <div class="font-demo" style="font-family: sans-serif;">Empowering Business Growth</div>
          <div class="font-usage">Body text, UI elements, general content</div>
        </div>
        <div class="typography-sample">
          <div class="font-name">Roboto (Secondary)</div>
          <div class="font-demo" style="font-family: sans-serif;">Professional Excellence</div>
          <div class="font-usage">Navigation, buttons, technical content</div>
        </div>
      </div>
      
      <!-- Final Page -->
      <div class="page" style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
        <h2 style="color: #FFBE00; font-size: 48px; margin-bottom: 30px; font-weight: 900;">Excellence</h2>
        <h2 style="color: #00B1D2; font-size: 48px; margin-bottom: 30px; font-weight: 900;">Innovation</h2>
        <h2 style="color: #D01C1F; font-size: 48px; margin-bottom: 60px; font-weight: 900;">Growth</h2>
        <p style="color: rgba(255,255,255,0.8); max-width: 600px; margin: 0 auto 40px auto; font-size: 18px; line-height: 1.6;">
          Consistent application of these guidelines strengthens our brand identity and ensures 
          a cohesive experience across all touchpoints.
        </p>
        <p style="color: #FFBE00; font-size: 16px; font-weight: 600;">
          © 2024 Blackbow Consult Limited. All rights reserved.
        </p>
      </div>
    </body>
    </html>
    `

    printWindow.document.write(pdfContent)
    printWindow.document.close()
    printWindow.print()
  }

  // Navigation items for sidebar
  const navigationItems = [
    { id: "intro", label: "Brand Foundation", ref: introRef, number: "01", icon: <Zap className="h-4 w-4" /> },
    { id: "logo", label: "Logo System", ref: logoRef, number: "02", icon: <Eye className="h-4 w-4" /> },
    { id: "colors", label: "Color Palette", ref: colorsRef, number: "03", icon: <Palette className="h-4 w-4" /> },
    { id: "typography", label: "Typography", ref: typographyRef, number: "04", icon: <Type className="h-4 w-4" /> },
    { id: "components", label: "UI System", ref: componentsRef, number: "05", icon: <Layers className="h-4 w-4" /> },
    { id: "layout", label: "Layout Grid", ref: layoutRef, number: "06", icon: <Layout className="h-4 w-4" /> },
  ]

  // Enhanced Brand Colors
  const primaryColors = [
    {
      name: "Primary Gold",
      hex: "#FFBE00",
      rgb: "255, 190, 0",
      hsl: "45°, 100%, 50%",
      usage: "Primary brand color, CTAs, highlights",
      emotion: "Optimism, Success",
    },
    {
      name: "Trust Blue",
      hex: "#00B1D2",
      rgb: "0, 177, 210",
      hsl: "189°, 100%, 41%",
      usage: "Secondary actions, trust elements",
      emotion: "Trust, Reliability",
    },
    {
      name: "Action Red",
      hex: "#D01C1F",
      rgb: "208, 28, 31",
      hsl: "359°, 76%, 46%",
      usage: "Important CTAs, alerts",
      emotion: "Urgency, Importance",
    },
    {
      name: "Professional Dark",
      hex: "#27272A",
      rgb: "39, 39, 42",
      hsl: "240°, 4%, 16%",
      usage: "Text, backgrounds",
      emotion: "Sophistication, Authority",
    },
  ]

  const secondaryColors = [
    {
      name: "Light Gold",
      hex: "#FBE08E",
      rgb: "251, 224, 142",
      hsl: "45°, 91%, 77%",
      usage: "Backgrounds, subtle accents",
      emotion: "Warmth, Approachability",
    },
    {
      name: "Pure Black",
      hex: "#000000",
      rgb: "0, 0, 0",
      hsl: "0°, 0%, 0%",
      usage: "High contrast elements",
      emotion: "Elegance, Power",
    },
    {
      name: "Pure White",
      hex: "#FFFFFF",
      rgb: "255, 255, 255",
      hsl: "0°, 0%, 100%",
      usage: "Clean backgrounds, text",
      emotion: "Purity, Clarity",
    },
    {
      name: "Neutral Gray",
      hex: "#F5F5F5",
      rgb: "245, 245, 245",
      hsl: "0°, 0%, 96%",
      usage: "Subtle backgrounds",
      emotion: "Balance, Neutrality",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <HomeButton />

      {/* Modern Sidebar Navigation */}
      <div
        className={`fixed left-0 top-0 h-full w-80 bg-black/90 backdrop-blur-xl border-r border-white/10 shadow-2xl transform transition-transform duration-300 z-40 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="pt-24 pb-6 px-6">
          <div className="flex items-center justify-between mb-8 lg:hidden">
            <h3 className="font-bold text-xl text-[#FFBE00]">Navigation</h3>
            <button onClick={() => setSidebarOpen(false)} className="text-white hover:text-[#FFBE00]">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mb-8 lg:block hidden">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFBE00] to-[#00B1D2] rounded-xl flex items-center justify-center">
                <span className="text-black font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="font-bold text-xl text-[#FFBE00]">Brand Manual</h3>
                <p className="text-sm text-gray-400">Visual Identity System</p>
              </div>
            </div>

            <Button
              onClick={downloadPDF}
              className="w-full bg-gradient-to-r from-[#FFBE00] to-[#00B1D2] text-black hover:opacity-90 rounded-xl mb-6"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Manual
            </Button>
          </div>

          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.ref)}
                className="w-full text-left px-4 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#FFBE00]/20 to-[#00B1D2]/20 rounded-lg flex items-center justify-center group-hover:from-[#FFBE00] group-hover:to-[#00B1D2] transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[#FFBE00] font-bold text-sm">{item.number}</span>
                      <span className="text-white group-hover:text-[#FFBE00] transition-colors">{item.label}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed left-4 top-24 z-30 lg:hidden bg-gradient-to-r from-[#FFBE00] to-[#00B1D2] text-black p-3 rounded-xl shadow-lg"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <main className="pt-24 pb-16 lg:ml-80">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Hero Introduction */}
            <div ref={introRef} className="mb-20">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FFBE00]/20 to-[#00B1D2]/20 rounded-full border border-[#FFBE00]/30 mb-8">
                  <span className="text-[#FFBE00] font-semibold">Brand Guidelines 2024</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-[#FFBE00] via-white to-[#00B1D2] bg-clip-text text-transparent">
                  Brand Manual
                </h1>
                <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  A comprehensive guide to Blackbow Consult's visual identity, ensuring consistency and excellence
                  across all brand touchpoints.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FFBE00] to-[#FFBE00]/70 rounded-2xl flex items-center justify-center mb-6">
                    <Zap className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Brand Purpose</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Empowering African businesses through innovative financial solutions that drive sustainable growth
                    and success.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00B1D2] to-[#00B1D2]/70 rounded-2xl flex items-center justify-center mb-6">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Brand Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To be Africa's preferred financial consultant through seamless, tailor-made solutions that inspire
                    innovation.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D01C1F] to-[#D01C1F]/70 rounded-2xl flex items-center justify-center mb-6">
                    <Layers className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Brand Promise</h3>
                  <p className="text-gray-300 leading-relaxed">
                    "We get you the guarantee, you get the money" - delivering customized trade finance solutions with
                    excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Color Section */}
            <section ref={colorsRef} className="mb-20">
              <div className="mb-12">
                <h2 className="text-5xl font-black text-white mb-6 flex items-center">
                  <span className="text-[#FFBE00] mr-4">03</span>
                  <Palette className="h-12 w-12 text-[#FFBE00] mr-4" />
                  Color System
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
                  Our color palette is carefully crafted to evoke trust, professionalism, and innovation. Each color
                  carries emotional weight and serves specific functional purposes in our brand ecosystem.
                </p>
              </div>

              <div className="space-y-12">
                {/* Primary Colors */}
                <div>
                  <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#FFBE00] to-[#00B1D2] rounded-lg mr-3"></div>
                    Primary Palette
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {primaryColors.map((color) => (
                      <div key={color.hex} className="group">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:-translate-y-2">
                          <div className="h-32 w-full relative overflow-hidden" style={{ backgroundColor: color.hex }}>
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                          </div>
                          <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h4 className="text-lg font-bold text-white mb-1">{color.name}</h4>
                                <p className="text-sm text-gray-400">{color.emotion}</p>
                              </div>
                              <button
                                onClick={() => copyToClipboard(color.hex, color.hex)}
                                className="flex items-center text-xs font-mono bg-black/30 px-2 py-1 rounded-lg hover:bg-black/50 transition-colors"
                              >
                                {copiedText === color.hex ? (
                                  <Check className="h-3 w-3 mr-1 text-green-400" />
                                ) : (
                                  <Copy className="h-3 w-3 mr-1" />
                                )}
                                {color.hex}
                              </button>
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-400">RGB:</span>
                                <span className="text-white font-mono">{color.rgb}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">HSL:</span>
                                <span className="text-white font-mono">{color.hsl}</span>
                              </div>
                            </div>
                            <p className="text-xs text-gray-400 mt-4 leading-relaxed">{color.usage}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secondary Colors */}
                <div>
                  <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg mr-3"></div>
                    Supporting Palette
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {secondaryColors.map((color) => (
                      <div key={color.hex} className="group">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:-translate-y-2">
                          <div
                            className="h-32 w-full relative overflow-hidden"
                            style={{
                              backgroundColor: color.hex,
                              border: color.hex === "#FFFFFF" ? "1px solid rgba(255,255,255,0.2)" : "none",
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                          </div>
                          <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h4 className="text-lg font-bold text-white mb-1">{color.name}</h4>
                                <p className="text-sm text-gray-400">{color.emotion}</p>
                              </div>
                              <button
                                onClick={() => copyToClipboard(color.hex, color.hex)}
                                className="flex items-center text-xs font-mono bg-black/30 px-2 py-1 rounded-lg hover:bg-black/50 transition-colors"
                              >
                                {copiedText === color.hex ? (
                                  <Check className="h-3 w-3 mr-1 text-green-400" />
                                ) : (
                                  <Copy className="h-3 w-3 mr-1" />
                                )}
                                {color.hex}
                              </button>
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-400">RGB:</span>
                                <span className="text-white font-mono">{color.rgb}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">HSL:</span>
                                <span className="text-white font-mono">{color.hsl}</span>
                              </div>
                            </div>
                            <p className="text-xs text-gray-400 mt-4 leading-relaxed">{color.usage}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Color Psychology */}
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Color Psychology & Application</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-[#FFBE00] mb-4">Emotional Impact</h4>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <div className="w-3 h-3 bg-[#FFBE00] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>
                            <strong className="text-white">Gold:</strong> Conveys success, optimism, and premium quality
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-3 h-3 bg-[#00B1D2] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>
                            <strong className="text-white">Blue:</strong> Builds trust, reliability, and professionalism
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-3 h-3 bg-[#D01C1F] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>
                            <strong className="text-white">Red:</strong> Creates urgency and draws attention to key
                            actions
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#FFBE00] mb-4">Usage Guidelines</h4>
                      <ul className="space-y-3 text-gray-300">
                        <li>• Use Gold as the primary accent for 60% of brand applications</li>
                        <li>• Blue should comprise 30% for secondary elements and trust-building</li>
                        <li>• Red is reserved for 10% - critical CTAs and important alerts</li>
                        <li>• Maintain WCAG AA contrast ratios for accessibility</li>
                        <li>• Never use more than 3 brand colors in a single composition</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Enhanced Typography Section */}
            <section ref={typographyRef} className="mb-20">
              <div className="mb-12">
                <h2 className="text-5xl font-black text-white mb-6 flex items-center">
                  <span className="text-[#FFBE00] mr-4">04</span>
                  <Type className="h-12 w-12 text-[#FFBE00] mr-4" />
                  Typography System
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
                  Our typography creates hierarchy, improves readability, and reinforces our brand personality. Each
                  typeface serves a specific purpose in our communication ecosystem.
                </p>
              </div>

              <div className="space-y-8">
                {/* Italiana */}
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-[#FFBE00] mb-4">Italiana</h3>
                      <p className="text-gray-300 mb-4">
                        Our primary display typeface for headlines and brand moments.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Classification:</span>
                          <span className="text-white">Serif Display</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Weights:</span>
                          <span className="text-white">Regular (400)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Usage:</span>
                          <span className="text-white">Headlines, Logos</span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="space-y-4">
                        <div className="font-serif text-4xl text-white">The Future of Finance</div>
                        <div className="font-serif text-2xl text-gray-300">Empowering African Business</div>
                        <div className="font-serif text-lg text-gray-400">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                        <div className="font-serif text-lg text-gray-400">abcdefghijklmnopqrstuvwxyz 0123456789</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inter */}
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-[#00B1D2] mb-4">Inter</h3>
                      <p className="text-gray-300 mb-4">Our primary body typeface for readability and modern appeal.</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Classification:</span>
                          <span className="text-white">Sans-serif</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Weights:</span>
                          <span className="text-white">300, 400, 500, 600, 700</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Usage:</span>
                          <span className="text-white">Body text, UI</span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="space-y-4">
                        <div className="font-body text-3xl text-white font-semibold">Professional Excellence</div>
                        <div className="font-body text-xl text-gray-300">Delivering customized solutions</div>
                        <div className="font-body text-base text-gray-400">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                        <div className="font-body text-base text-gray-400">abcdefghijklmnopqrstuvwxyz 0123456789</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Roboto */}
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-[#D01C1F] mb-4">Roboto</h3>
                      <p className="text-gray-300 mb-4">Our secondary typeface for navigation and technical content.</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Classification:</span>
                          <span className="text-white">Sans-serif</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Weights:</span>
                          <span className="text-white">300, 400, 500, 700</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Usage:</span>
                          <span className="text-white">Navigation, Buttons</span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="space-y-4">
                        <div className="font-sans text-3xl text-white font-medium">Innovation & Growth</div>
                        <div className="font-sans text-xl text-gray-300">Trusted Financial Partner</div>
                        <div className="font-sans text-base text-gray-400">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                        <div className="font-sans text-base text-gray-400">abcdefghijklmnopqrstuvwxyz 0123456789</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Typography Scale */}
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Typography Scale & Hierarchy</h3>
                  <div className="space-y-6">
                    <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                      <span className="font-serif text-5xl text-white">Display Large</span>
                      <span className="text-gray-400 text-sm">48px / Italiana</span>
                    </div>
                    <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                      <span className="font-serif text-4xl text-white">Heading 1</span>
                      <span className="text-gray-400 text-sm">36px / Italiana</span>
                    </div>
                    <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                      <span className="font-body text-2xl text-white font-semibold">Heading 2</span>
                      <span className="text-gray-400 text-sm">24px / Inter Semibold</span>
                    </div>
                    <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                      <span className="font-body text-xl text-white font-medium">Heading 3</span>
                      <span className="text-gray-400 text-sm">20px / Inter Medium</span>
                    </div>
                    <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                      <span className="font-body text-lg text-white">Body Large</span>
                      <span className="text-gray-400 text-sm">18px / Inter Regular</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="font-body text-base text-white">Body Regular</span>
                      <span className="text-gray-400 text-sm">16px / Inter Regular</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Modern Components Section */}
            <section ref={componentsRef} className="mb-20">
              <div className="mb-12">
                <h2 className="text-5xl font-black text-white mb-6 flex items-center">
                  <span className="text-[#FFBE00] mr-4">05</span>
                  <Layers className="h-12 w-12 text-[#FFBE00] mr-4" />
                  Component System
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
                  Our design system components ensure consistency and efficiency across all digital touchpoints. Each
                  component is crafted with accessibility and user experience in mind.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Buttons */}
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Button System</h3>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <p className="text-sm text-gray-400">Primary Action</p>
                      <Button className="bg-[#FFBE00] text-black hover:bg-[#FFBE00]/90 rounded-full px-6">
                        Get Started
                      </Button>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm text-gray-400">Secondary Action</p>
                      <Button
                        variant="outline"
                        className="border-[#00B1D2] text-[#00B1D2] hover:bg-[#00B1D2]/10 rounded-full px-6"
                      >
                        Learn More
                      </Button>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm text-gray-400">Critical Action</p>
                      <Button className="bg-[#D01C1F] text-white hover:bg-[#D01C1F]/90 rounded-full px-6">
                        Contact Us
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Cards */}
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Card Components</h3>
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <h4 className="font-semibold text-white mb-2">Service Card</h4>
                      <p className="text-gray-400 text-sm">Standard content container with hover effects</p>
                    </div>
                    <div className="bg-gradient-to-br from-[#FFBE00]/10 to-[#00B1D2]/10 rounded-xl p-4 border border-[#FFBE00]/20">
                      <h4 className="font-semibold text-white mb-2">Featured Card</h4>
                      <p className="text-gray-400 text-sm">Highlighted content with gradient background</p>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Navigation</h3>
                  <div className="space-y-4">
                    <div className="flex space-x-6 text-sm">
                      <span className="text-[#FFBE00] font-medium">Home</span>
                      <span className="text-white hover:text-[#FFBE00] cursor-pointer transition-colors">About</span>
                      <span className="text-white hover:text-[#FFBE00] cursor-pointer transition-colors">Services</span>
                      <span className="text-white hover:text-[#FFBE00] cursor-pointer transition-colors">Contact</span>
                    </div>
                    <p className="text-gray-400 text-sm">Clean, minimal navigation with hover states</p>
                  </div>
                </div>

                {/* Forms */}
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Form Elements</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#FFBE00] focus:outline-none transition-colors"
                    />
                    <p className="text-gray-400 text-sm">Consistent styling with focus states</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Layout System */}
            <section ref={layoutRef} className="mb-20">
              <div className="mb-12">
                <h2 className="text-5xl font-black text-white mb-6 flex items-center">
                  <span className="text-[#FFBE00] mr-4">06</span>
                  <Layout className="h-12 w-12 text-[#FFBE00] mr-4" />
                  Layout System
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
                  Our grid system and spacing guidelines ensure consistent layouts across all platforms and devices.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Grid System</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-12 gap-2 h-8">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div key={i} className="bg-[#FFBE00]/30 rounded"></div>
                        ))}
                      </div>
                      <p className="text-gray-400 text-sm">12-column responsive grid system</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Spacing Scale</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-[#FFBE00] rounded"></div>
                        <span className="text-white text-sm">4px - Micro spacing</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-4 h-4 bg-[#FFBE00] rounded"></div>
                        <span className="text-white text-sm">16px - Base unit</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-[#FFBE00] rounded"></div>
                        <span className="text-white text-sm">32px - Section spacing</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-8 bg-[#FFBE00] rounded"></div>
                        <span className="text-white text-sm">64px - Large spacing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <div className="text-center py-16">
              <div className="bg-gradient-to-r from-[#FFBE00] to-[#00B1D2] rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-black mb-6">Ready to Apply These Guidelines?</h2>
                <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
                  Download the complete brand manual and start creating consistent, professional materials for Blackbow
                  Consult.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    onClick={downloadPDF}
                    size="lg"
                    className="bg-black text-white hover:bg-black/90 rounded-full px-8"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download Brand Manual
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-black text-black hover:bg-black/10 rounded-full px-8"
                    onClick={() => window.open("https://www.figma.com", "_blank")}
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    View in Figma
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
