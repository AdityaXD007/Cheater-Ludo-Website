import Link from 'next/link'
import Container from '../global/container'
import DelayContainer from '../global/delay-container'
import IconLogo from '../global/icon-logo'
import {NavLinks} from '@/config/constant'

const Footer = () => {
  return (
    <Container className="pt-20">
      <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">
        <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

        <div className="grid gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 w-full">
          <DelayContainer delay={0.1} className="col-span-2 lg:col-span-2">
            <div className="flex flex-col items-start justify-start max-w-xs">
              <div className="flex items-start">
                <IconLogo />
              </div>
              <p className="text-muted-foreground mt-4 text-sm text-start leading-relaxed">
                The ultimate companion app for tracking your Teen Patti games. Enjoy seamless scorekeeping and player management.
              </p>
            </div>
          </DelayContainer>

          <DelayContainer delay={0.2} className="col-span-1">
            <div className="flex flex-col">
              <h3 className="text-base font-semibold text-foreground">
                Product
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {NavLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </DelayContainer>

          <DelayContainer delay={0.3} className="col-span-1">
            <div className="flex flex-col">
              <h3 className="text-base font-semibold text-foreground">
                Socials
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="https://www.facebook.com/everesttechechnologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/everest_technologies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/@everesttechnologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </DelayContainer>

          <DelayContainer delay={0.4} className="col-span-1">
            <div className="flex flex-col">
              <h3 className="text-base font-semibold text-foreground">
                Downloads
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    App Store
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.techeverest.cvmaker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    Google Play
                  </Link>
                </li>
              </ul>
            </div>
          </DelayContainer>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 w-full">
          <DelayContainer delay={0.5}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                &copy; {new Date().getFullYear()}{' '}
                <Link
                  href="https://everesttechnologies.com.np/"
                  target="_blank"
                  className="text-primary"
                  rel="noopener noreferrer"
                >
                  Everest Technologies.{' '}
                </Link>
                All rights reserved.
              </p>
              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <Link
                  href="/privacy-policy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </DelayContainer>
        </div>
      </footer>
    </Container>
  )
}

export default Footer
