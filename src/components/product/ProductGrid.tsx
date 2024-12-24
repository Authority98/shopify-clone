/**
 * ProductGrid Component
 * 
 * This component displays a grid of product cards with
 * images, prices, and ratings.
 */

'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

interface Product {
  id: number
  name: string
  price: number
  rating: number
  image: string
  category: string
}

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No products found matching your criteria.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="group"
        >
          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            {/* Product Image */}
            <div className="relative h-64 w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600">
                {product.name}
              </h3>
              
              <p className="mt-1 text-sm text-gray-500">
                {product.category}
              </p>

              <div className="mt-2 flex items-center justify-between">
                <p className="text-lg font-medium text-gray-900">
                  {formatPrice(product.price)}
                </p>

                {/* Rating */}
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">
                    {product.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
} 