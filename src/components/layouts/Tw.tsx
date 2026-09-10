import Footer from '@/components/Footer'
import Navbar from '@/components/NavBar'
import * as React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const TwLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="overflow-x-hidden"
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Navbar />

      <main style={{ flex: 1 }}>{children}</main>

      <Footer />
    </div>
  )
}

export default TwLayout
