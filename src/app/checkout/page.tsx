/**
 * Checkout Route (/checkout)
 * 
 * This page handles the checkout process for the shopping cart.
 * The file must be named 'page.tsx' for Next.js App Router.
 * 
 * Route: /checkout
 * Layout: RootLayout
 * State:
 * - Uses CartContext for cart state
 * - Redirects to products if cart is empty
 * 
 * Components:
 * - EmptyCartMessage: Shown when cart is empty
 * - CheckoutHeader: Page title and layout
 * - CheckoutForm: Form for shipping and payment info
 * - OrderSummary: Displays cart items and total
 */

'use client'

import React from 'react'
import Layout from '@/components/layout/Layout'
import CheckoutForm from '@/components/checkout/CheckoutForm'
import OrderSummary from '@/components/checkout/OrderSummary'
import EmptyCartMessage from '@/components/checkout/EmptyCartMessage'
import CheckoutHeader from '@/components/checkout/CheckoutHeader'
import { useCart } from '@/lib/context/CartContext'

export default function CheckoutPage() {
  const { state } = useCart()

  if (state.items.length === 0) {
    return (
      <Layout>
        <EmptyCartMessage />
      </Layout>
    )
  }

  return (
    <Layout>
      <CheckoutHeader>
        {/* Checkout Form */}
        <div>
          <CheckoutForm />
        </div>

        {/* Order Summary */}
        <div className="lg:pl-8">
          <OrderSummary />
        </div>
      </CheckoutHeader>
    </Layout>
  )
} 