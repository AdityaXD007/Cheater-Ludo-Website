import {cn} from '@/lib/utils'
import Container from '../global/container'
import {AnimatedShinyText} from '../ui/animated-shiny-text'
import AnimateWrapper from '../global/animate-wrapper'
import Image from 'next/image'
import Link from 'next/link'
import {DotPattern} from '../ui/dot-pattern'
import {RainbowButton} from '../ui/rainbow-button'

const HeroSection = () => {
  return (
    <Container className="pt-10 pb-20 md:pt-20 md:pb-32  relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center  ">
        <DotPattern
          className={cn(
            ' mask-[radial-gradient(1500px_circle_at_center,white,transparent)] hidden md:block  -z-5'
          )}
        />
        {/* Left Column: Text Content */}
        <AnimateWrapper className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 md:gap-8">
          <div
            className={cn(
              'group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span className="flex items-center gap-2 text-sm">
                <span className="bg-primary text-white h-4 w-11 rounded-full inline-flex items-center justify-center text-[10px] font-bold tracking-wide">
                  New
                </span>
                Discover Professional Templates
              </span>
            </AnimatedShinyText>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-pretty">
            Build Your <span className="text-primary">Perfect CV</span> in
            Minutes
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
            Create professional, ATS-friendly resumes that stand out. Choose
            from our modern templates and land your dream job today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <RainbowButton
              asChild
              size="lg"
              className="gap-2 h-12 px-8 text-base"
            >
              <Link href="#download-app">Download App Now</Link>
            </RainbowButton>
          </div>
        </AnimateWrapper>

        {/* Right Column: Hero Image visually representing the app */}
        <AnimateWrapper delay={0.4}>
          <Image
            src="/images/landing-hero.png"
            alt="CV Maker App Interface"
            height={1300}
            width={1300}
            className=""
            priority
          />
        </AnimateWrapper>
      </div>
    </Container>
  )
}

export default HeroSection
