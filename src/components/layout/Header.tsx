/**
 * Header Component
 * 
 * This component serves as the main navigation header for the e-commerce site.
 * It includes the site logo, navigation menu, and shopping cart icon.
 */

'use client'

import React from 'react'
import Link from 'next/link'
import CartIcon from './CartIcon'
import MobileMenu from './MobileMenu'

export default function Header() {
  return (
    <header className="border-b sticky top-0 bg-white z-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu */}
          <div className="flex items-center">
            <MobileMenu />
            {/* Logo */}
            <Link href="/" className="text-xl font-bold">
              ShopifyClone
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-600 hover:text-gray-900">
              All Products
            </Link>
            <Link href="/products?category=electronics" className="text-gray-600 hover:text-gray-900">
              Electronics
            </Link>
            <Link href="/products?category=clothing" className="text-gray-600 hover:text-gray-900">
              Clothing
            </Link>
          </nav>

          {/* Cart Icon */}
          <CartIcon />
        </div>
      </div>
    </header>
  )
} 