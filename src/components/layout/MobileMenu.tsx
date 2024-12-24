/**
 * MobileMenu Component
 * 
 * This component provides a mobile-friendly navigation menu
 * with smooth animations and transitions.
 */

'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useCart } from '@/lib/context/CartContext'
import { cn } from '@/lib/utils'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { state } = useCart()
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset'
  }

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="p-2 hover:bg-gray-100 rounded-full"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 z-40 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={toggleMenu}
      />

      {/* Menu Panel */}
      <div
        className={cn(
          'fixed inset-y-0 left-0 w-3/4 max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-4 border-b">
            <Link
              href="/"
              className="text-xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              ShopifyClone
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4 space-y-4">
            <Link
              href="/products"
              className="block text-lg text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              All Products
            </Link>
            <Link
              href="/products?category=electronics"
              className="block text-lg text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Electronics
            </Link>
            <Link
              href="/products?category=clothing"
              className="block text-lg text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Clothing
            </Link>
          </nav>

          {/* Cart Link */}
          <div className="p-4 border-t">
            <Link
              href="/checkout"
              className="flex items-center justify-between py-2 text-lg text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              <span>Shopping Cart</span>
              {itemCount > 0 && (
                <span className="bg-indigo-600 text-white text-sm rounded-full h-6 w-6 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 