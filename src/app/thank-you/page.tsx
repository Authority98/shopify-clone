/**
 * Thank You Page
 * 
 * Displayed after successful checkout, shows order confirmation
 * and next steps.
 */

'use client'

import React from 'react'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import Layout from '@/components/layout/Layout'

export default function ThankYouPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          </div>

          {/* Thank You Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Thank You for Your Order!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;ve received your order and will begin processing it right away.
            You&apos;ll receive a confirmation email shortly.
          </p>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What&apos;s Next?
            </h2>
            <ul className="text-left space-y-4 text-gray-600">
              <li>• You&apos;ll receive an order confirmation email</li>
              <li>• We&apos;ll notify you when your order ships</li>
              <li>• Track your order using the link in your email</li>
            </ul>
          </div>

          {/* Continue Shopping Button */}
          <Link
            href="/products"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </Layout>
  )
} 