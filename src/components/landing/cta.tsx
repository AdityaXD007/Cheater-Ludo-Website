import Container from '../global/container'
import AnimateWrapper from '../global/animate-wrapper'
import {IconBrandAppstore, IconBrandGooglePlay} from '@tabler/icons-react'
import {Button} from '../ui/button'
import {WobbleCard} from '../ui/wobble-card'
import Image from 'next/image'
import Link from 'next/link'

const CTASection = () => {
  return (
    <Container id="download-app">
      <AnimateWrapper>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-orange-900  relative">
          <div className="grid  grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-xl">
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Download Cheater Ludo!
              </h2>
              <p className="mt-4 max-w-lg text-left text-base/6 text-neutral-200">
                Get the app on your phone and start playing with your friends.
                Available for iOS and Android devices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 text-white mt-8 z-20 relative">
                <Button
                  size={'lg'}
                  asChild
                  className="w-full text-white sm:w-auto gap-2"
                  variant="secondary"
                >
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <IconBrandAppstore className="size-5" />
                    App Store
                  </Link>
                </Button>
                <Button
                  asChild
                  size={'lg'}
                  className="w-full text-white sm:w-auto gap-2"
                  variant="secondary"
                >
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.techeverest.cvmaker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandGooglePlay className="size-5" />
                    Google Play
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:flex items-center justify-center">
              <Image
                src="/images/landing-hero-new.png"
                alt="App Interface"
                width={1000}
                height={1000}
                className="w-full h-auto object-contain max-h-[400px]"
              />
            </div>
          </div>
        </WobbleCard>
      </AnimateWrapper>
    </Container>
  )
}

export default CTASection
