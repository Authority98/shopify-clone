/**
 * EmptyCartMessage Component
 * 
 * Displays a message when the cart is empty with a link to browse products.
 */

import React from 'react'
import Link from 'next/link'

export default function EmptyCartMessage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Your cart is empty
      </h1>
      <p className="text-gray-600 mb-8">
        Add some items to your cart to proceed with checkout.
      </p>
      <Link 
        href="/products" 
        className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Browse Products
      </Link>
    </div>
  )
} 