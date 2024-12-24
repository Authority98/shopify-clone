/**
 * Product Actions Component
 * 
 * Client component that handles product interactions like
 * size selection and adding to cart.
 */

'use client'

import React, { useState } from 'react'
import { useCart } from '@/lib/context/CartContext'
import { toast } from 'sonner'

interface ProductImage {
  id: number
  url: string
  alt: string
}

interface Product {
  id: number
  name: string
  price: number
  description: string
  images: ProductImage[]
  category: string
}

interface ProductActionsProps {
  product: Product
}

export default function ProductActions({ product }: ProductActionsProps) {
  const { dispatch } = useCart()
  const [selectedSize, setSelectedSize] = useState<string>('')

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size')
      return
    }

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0].url,
        quantity: 1
      }
    })

    toast.success('Added to cart!')
  }

  return (
    <div className="space-y-6">
      {/* Size Selection */}
      <div>
        <h3 className="text-lg font-medium text-gray-900">Size</h3>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {['S', 'M', 'L', 'XL'].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`border rounded-md py-2 px-4 text-sm font-medium transition-colors ${
                selectedSize === size
                  ? 'border-indigo-600 text-indigo-600'
                  : 'hover:border-indigo-600 hover:text-indigo-600'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  )
} 