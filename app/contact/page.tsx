import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, MessageSquare, Briefcase, Handshake } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { InfoCard } from "@/components/InfoCard"
import { FaqTabs } from "@/components/faq-tabs"
import SharedPageSections from "@/components/SharedPageSections"
import InnerHero from "@/components/InnerHero"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      {/* Hero Section */}
      <InnerHero>
        <h1 className="hero-title text-white">
            Get in Touch
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFBE00] to-[#00B1D2]">
                Talk to Us
            </span>
        </h1>
      </InnerHero>

      {/* Info Cards Section - Overlapping Design */}
      <section className="relative -mt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto">
            <InfoCard icon={<MapPin className="h-8 w-8 text-white" />} title="Postal Address">
              <p className="text-sm">Garden Chambers, Mokta-Daddah St</p>
              <p className="text-sm">Suite 301A, P.O. Box 3143-00506</p>
              <p className="text-sm">Nairobi, Kenya</p>
            </InfoCard>
            <InfoCard icon={<Phone className="h-8 w-8 text-white" />} title="Call Details">
                <p className="text-sm">Mon - Fri, 8am - 5pm</p>
                <p className="text-sm">0720-709711</p>
                <p className="text-sm">0786-525716</p>
            </InfoCard>
            <InfoCard icon={<Mail className="h-8 w-8 text-white" />} title="Email Details">
                <p className="text-sm">For inquiries & support</p>
                <p className="text-sm">info@blackbow.co.ke</p>
                <p className="text-sm">&nbsp;</p> {/* Spacer */}
            </InfoCard>
          </div>
        </div>
      </section>

      {/* New Introductory Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--accent-yellow)' }}>
              Our friendly staff are always happy to help
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Welcome to our contact us page. In this section, you will find all the information you need to reach out to us on any queries, feedback, or partnership opportunities. We are dedicated to providing seamless support and look forward to hearing from you. Our team is ready to assist you with tailor-made financial solutions and investment advisory services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-serif" style={{ color: 'var(--accent-yellow)' }}>
                Send Us a Message
              </h2>
              <p className="text-lg text-white/80 mt-4 max-w-2xl mx-auto">
                Have a question or a project in mind? Fill out the form below and our team of experts will get back to you promptly.
              </p>
            </div>

            <form className="space-y-6 bg-black/20 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-yellow-400 text-black font-bold py-3 px-12 rounded-md hover:bg-yellow-500 transition-colors"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

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

      <SharedPageSections variant="contact" />

      {/* Map Section */}
      <section className="bg-white">
        <div className="container mx-auto px-0 md:px-0 max-w-full">
          <div className="h-[450px] w-full">
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.818292393335!2d36.81944257577881!3d-1.282799735623838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d296236599%3A0x53375806e0984902!2sGarden%20Chambers!5e0!3m2!1sen!2ske!4v1718022513944!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
