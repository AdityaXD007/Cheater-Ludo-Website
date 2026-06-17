import type {Metadata} from 'next'
import {Geist, Geist_Mono, Inter} from 'next/font/google'
import './globals.css'
import {Toaster} from '@/components/ui/sonner'

const inter = Inter({subsets: ['latin'], variable: '--font-sans'})

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Teen Patti Tracker - The Ultimate Game Companion',
  description: 'Easily track scores, rounds, and players during your Teen Patti game nights. Download the ultimate tracker app now!',
  appleWebApp: {
    title: 'Teen Patti Tracker',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en" className={inter.variable}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  )
}
