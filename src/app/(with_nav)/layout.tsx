import Footer from '@/components/landing/footer'
import NavBar from '@/components/landing/navbar'
import React from 'react'

const WithNavFooterLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default WithNavFooterLayout
