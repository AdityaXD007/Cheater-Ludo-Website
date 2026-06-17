import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from '@/components/ui/sheet'
import {Button} from '@/components/ui/button'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import {cn} from '@/lib/utils'
import AnimateWrapper from '../global/animate-wrapper'
import Container from '../global/container'
import {IconMenu2} from '@tabler/icons-react'
import IconLogo from '../global/icon-logo'
import {RainbowButton} from '../ui/rainbow-button'

export const NavLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'How To Use',
    href: '/#how-to-use',
  },
  {
    name: 'Download App',
    href: '/#download-app',
  },
  {
    name: 'Contact Us',
    href: '/#contact-us',
  },
]
export const NavBar = () => {
  return (
    <header
      className={cn(
        'sticky bg-background/40 backdrop-blur-lg border-b border-border  top-0 inset-x-0 h-16 w-full  select-none z-50',
      )}
    >
      <AnimateWrapper reverse>
        <Container className="flex items-center justify-between lg:justify-normal gap-3 lg:gap-14  px-7 md:px-10 lg:px-24 ">
          <IconLogo />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <IconMenu2 className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="p-4" side="top">
              <SheetTitle className="w-fit">
                <IconLogo />
              </SheetTitle>

              <div className="grid gap-2 py-6">
                {NavLinks.map((link) => (
                  <Link
                    href={link.href}
                    key={link.name}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <RainbowButton asChild size="sm">
                <Link href="#download-app">Download App</Link>
              </RainbowButton>
            </SheetContent>
          </Sheet>

          <div className=" w-full hidden lg:flex md:justify-between ">
            <NavigationMenu className="">
              <NavigationMenuList>
                {NavLinks.map((link) => (
                  <NavigationMenuLink key={link.name} asChild>
                    <Link
                      href={link.href}
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-muted-foreground 
                      hover:dark:text-primary-foreground hover:text-black
                     hover:bg-primary-background transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuLink>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <div>
              <RainbowButton asChild size="lg">
                <Link href="#download-app">Download App</Link>
              </RainbowButton>
            </div>
          </div>
        </Container>
      </AnimateWrapper>
    </header>
  )
}
export default NavBar
