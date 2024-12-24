/**
 * OrderSummary Component
 * 
 * This component displays the order summary including cart items,
 * subtotal, shipping, and total amount.
 */

'use client'

import React from 'react'
import Image from 'next/image'
import { Trash2 } from 'lucide-react'
import { useCart } from '@/lib/context/CartContext'

export default function OrderSummary() {
  const { state, removeItem, updateQuantity } = useCart()
  const shipping = 10 // Fixed shipping cost
  const total = state.total + shipping

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

      {/* Cart Items */}
      <div className="space-y-4 mb-6">
        {state.items.map((item) => (
          <div key={item.id} className="flex items-center space-x-4">
            {/* Product Image */}
            <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex-grow">
              <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
              <div className="mt-1 text-sm text-gray-500">
                {item.size && <span>Size: {item.size} / </span>}
                <span>Color: {item.color}</span>
              </div>
              <div className="mt-1 flex items-center space-x-4">
                <label className="text-sm text-gray-500">Qty:</label>
                <select
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="text-sm border-gray-300 rounded-md"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="text-sm font-medium text-gray-900">
              ${item.price * item.quantity}
            </div>
          </div>
        ))}
      </div>

      {/* Order Totals */}
      <div className="border-t border-gray-200 pt-4 space-y-2">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Subtotal</span>
          <span>${state.total}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Shipping</span>
          <span>${shipping}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold text-gray-900 pt-2 border-t border-gray-200">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>
    </div>
  )
} 