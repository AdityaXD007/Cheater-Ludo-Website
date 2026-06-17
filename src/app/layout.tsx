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
  title: 'CV Maker - Create Professional Looking CV',
  description: 'CV Maker - Create professional CV in a minute',
  appleWebApp: {
    title: 'CV Maker',
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
