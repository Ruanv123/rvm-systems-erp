import { About } from './_components/about'
import { FAQ } from './_components/faq'
import { Features } from './_components/features'
import { Footer } from './_components/footer'
import { Hero } from './_components/hero'
import { Navbar } from './_components/navbar'
import { Newsletter } from './_components/newsletter'
import { Pricing } from './_components/pricing'
import { ScrollToTop } from './_components/scroll-to-top'
import { Services } from './_components/services'
import { Testimonials } from './_components/testimonial'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Services />
      <Testimonials />
      {/* <Pricing /> */}
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  )
}
