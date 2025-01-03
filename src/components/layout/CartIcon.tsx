/**
 * CartIcon Component
 * 
 * This component displays the shopping cart icon with the current number of items.
 */

'use client'

import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/lib/context/CartContext'

export default function CartIcon() {
  const { state } = useCart()
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0)

  const handleClick = () => {
    window.location.href = '/checkout'
  }

  return (
    <button 
      onClick={handleClick}
      className="relative p-2 hover:bg-gray-100 rounded-full"
    >
      <ShoppingCart className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  )
} 