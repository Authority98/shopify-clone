/**
 * Layout Component
 * 
 * This component serves as the main layout wrapper for all pages.
 * It includes the Header and Footer components and wraps the main content.
 */

import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
} 