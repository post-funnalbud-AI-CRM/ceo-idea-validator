import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { FAQ } from "@/components/faq"
import { About } from "@/components/about"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <FAQ />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
