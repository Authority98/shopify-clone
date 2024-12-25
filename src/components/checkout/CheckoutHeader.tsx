/**
 * CheckoutHeader Component
 * 
 * Displays the checkout page title and layout for the checkout form and order summary.
 */

import React from 'react'

interface CheckoutHeaderProps {
  children: React.ReactNode
}

export default function CheckoutHeader({ children }: CheckoutHeaderProps) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {children}
      </div>
    </div>
  )
} 