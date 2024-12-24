/**
 * Thank You Page
 * 
 * This page is displayed after a successful checkout.
 * It includes order confirmation details and next steps.
 */

import React from 'react'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import Layout from '@/components/layout/Layout'

export default function ThankYouPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
          </div>

          {/* Thank You Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You for Your Order!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your order has been successfully placed. We'll send you an email with your order details
            and tracking information once your package ships.
          </p>

          {/* Order Number */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-600 mb-2">Order Number</p>
            <p className="text-xl font-semibold text-gray-900">#2024-0001</p>
          </div>

          {/* Next Steps */}
          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-semibold text-gray-900">What's Next?</h2>
            <div className="text-gray-600">
              <p>1. You'll receive an order confirmation email</p>
              <p>2. We'll notify you when your order ships</p>
              <p>3. Your items will arrive in 3-5 business days</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-x-4">
            <Link
              href="/products"
              className="inline-block bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Continue Shopping
            </Link>
            <Link
              href="/account/orders"
              className="inline-block bg-white text-indigo-600 py-3 px-6 rounded-md border border-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              View Order Status
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
} 