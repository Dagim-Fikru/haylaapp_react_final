import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HowAppWorks from '@/components/HowAppWorks'
import NavBar from '@/components/NavBar'
import Testimonials from '@/components/Testimonials'
import WhyHayla from '@/components/WhyHayla'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-[#131313] overflow-x-hidden">
      <NavBar/>
      <Hero/>
      <WhyHayla/>
      <HowAppWorks/>
      <Testimonials/>
      <Faq/>
      <Footer/>
    </main>
  )
}
