/**
 * Checkout Page
 * 
 * This page handles the checkout process including shipping information,
 * payment details, and order summary.
 */

'use client'

import React from 'react'
import Layout from '@/components/layout/Layout'
import CheckoutForm from '@/components/checkout/CheckoutForm'
import OrderSummary from '@/components/checkout/OrderSummary'
import { useCart } from '@/lib/context/CartContext'
import Link from 'next/link'

export default function CheckoutPage() {
  const { state } = useCart()

  if (state.items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Add some items to your cart to proceed with checkout.</p>
          <Link 
            href="/products" 
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div>
            <CheckoutForm />
          </div>

          {/* Order Summary */}
          <div className="lg:pl-8">
            <OrderSummary />
          </div>
        </div>
      </div>
    </Layout>
  )
} 