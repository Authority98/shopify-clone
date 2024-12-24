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
import { useRouter } from 'next/navigation'

export default function CheckoutPage() {
  const { state } = useCart()
  const router = useRouter()

  // Redirect to products if cart is empty
  React.useEffect(() => {
    if (state.items.length === 0) {
      router.push('/products')
    }
  }, [state.items.length, router])

  if (state.items.length === 0) {
    return null
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