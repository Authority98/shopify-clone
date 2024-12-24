/**
 * Footer Component
 * 
 * This component serves as the main footer for the e-commerce site.
 * It includes various links organized in sections and social media icons.
 */

import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Company
            </h3>
            <div className="mt-4 space-y-4">
              <Link href="/about" className="text-base text-gray-500 hover:text-gray-900 block">
                About
              </Link>
              <Link href="/careers" className="text-base text-gray-500 hover:text-gray-900 block">
                Careers
              </Link>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Shop
            </h3>
            <div className="mt-4 space-y-4">
              <Link href="/products" className="text-base text-gray-500 hover:text-gray-900 block">
                All Products
              </Link>
              <Link href="/products?category=new" className="text-base text-gray-500 hover:text-gray-900 block">
                New Arrivals
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Customer Service
            </h3>
            <div className="mt-4 space-y-4">
              <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900 block">
                Contact
              </Link>
              <Link href="/shipping" className="text-base text-gray-500 hover:text-gray-900 block">
                Shipping
              </Link>
              <Link href="/returns" className="text-base text-gray-500 hover:text-gray-900 block">
                Returns
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-base text-gray-500">
              The latest deals and savings, sent to your inbox weekly.
            </p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="submit"
                className="mt-2 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2024 ShopifyClone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 