import ContactForm from '@/components/landing/contact-form'
import CTASection from '@/components/landing/cta'
import HeroSection from '@/components/landing/hero'
import StepsSection from '@/components/landing/steps'

const LandingPage = () => {
  return (
    <main>
      <HeroSection />
      <StepsSection />
      <CTASection />
      <ContactForm />
    </main>
  )
}
export default LandingPage
