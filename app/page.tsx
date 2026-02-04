import { Hero } from '@/components/hero'
import dynamic from 'next/dynamic'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Navigation } from '@/components/navigation'

const SubAcquirer = dynamic(() => import('@/components/sub-acquirer').then(mod => ({ default: mod.SubAcquirer })), {
  loading: () => <div className="h-screen" />
})
const Features = dynamic(() => import('@/components/features').then(mod => ({ default: mod.Features })))
const Integrations = dynamic(() => import('@/components/integrations').then(mod => ({ default: mod.Integrations })))
const Stats = dynamic(() => import('@/components/stats').then(mod => ({ default: mod.Stats })))
const Benefits = dynamic(() => import('@/components/benefits').then(mod => ({ default: mod.Benefits })))
const Support = dynamic(() => import('@/components/support').then(mod => ({ default: mod.Support })))
const Testimonials = dynamic(() => import('@/components/testimonials').then(mod => ({ default: mod.Testimonials })))
const CTA = dynamic(() => import('@/components/cta').then(mod => ({ default: mod.CTA })))
const Footer = dynamic(() => import('@/components/footer').then(mod => ({ default: mod.Footer })))

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navigation />
      
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#FF7A18] opacity-10 blur-[80px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-[#FF5A00] opacity-10 blur-[70px] md:blur-[100px] rounded-full" />
      </div>
      
      <Hero />
      <SubAcquirer />
      <Stats />
      <Features />
      <Integrations />
      <Benefits />
      <Support />
      <Testimonials />
      <CTA />
      <Footer />
      
      <WhatsAppButton />
    </main>
  )
}
