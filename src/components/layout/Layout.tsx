'use client'

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { CartProvider } from '@/lib/context/CartContext'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
} 