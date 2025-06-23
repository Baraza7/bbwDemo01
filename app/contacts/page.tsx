import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, MessageSquare, Briefcase, Handshake } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { InfoCard } from "@/components/InfoCard"
import { FaqTabs } from "@/components/faq-tabs"
import SharedPageSections from "@/components/SharedPageSections"
import InnerHero from "@/components/InnerHero"
import ContactForm from "@/components/contact-form"

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('/ContactsHero1.png')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Welcome to our contacts page. In this section, you will find all the information you need to reach out to us on any queries, feedback, or partnership opportunities. We are dedicated to providing seamless support and fostering strong relationships with our clients and partners.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="md:col-span-1">
                  <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                  <ContactForm />
                </div>
                <div className="md:col-span-1">
                  <h3 className="text-2xl font-bold mb-6">Our Office</h3>
                  <div className="space-y-4">
                    <p className="flex items-start">
                      <MapPin className="w-6 h-6 mr-4 mt-1 text-yellow-500" />
                      <span>Wing A, 4th Floor, Suite A5, ABC Place, Waiyaki Way, Nairobi, Kenya</span>
                    </p>
                    <p className="flex items-center">
                      <Phone className="w-6 h-6 mr-4 text-yellow-500" />
                      <span>0720-709711 / 0786525716</span>
                    </p>
                    <p className="flex items-center">
                      <Mail className="w-6 h-6 mr-4 text-yellow-500" />
                      <span>info@blackbow.co.ke</span>
                    </p>
                  </div>
                  <div className="mt-8">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.841582828228!2d36.78854931534493!3d-1.267198999075727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17515a20857d%3A0x805781328674259a!2sABC%20Place!5e0!3m2!1sen!2ske!4v1629896749382!5m2!1sen!2ske"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="Google Maps Location of ABC Place"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SharedPageSections variant="contacts" />
      </main>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#27272A] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-gray-600 max-w-3xl mx-auto text-lg">
              Find quick answers to common questions about our services and process. If you don't find what you're looking for, feel free to send us a message.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <FaqTabs />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
