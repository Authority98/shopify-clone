/**
 * RecentlyViewed Component
 * 
 * This component displays a list of recently viewed products
 * and persists them in localStorage.
 */

'use client'

import React, { useEffect, useState } from 'react'
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

const MAX_RECENT_PRODUCTS = 4

export default function RecentlyViewed() {
  const [recentProducts, setRecentProducts] = useState<Product[]>([])

  useEffect(() => {
    // Load recently viewed products from localStorage
    const loadRecentProducts = () => {
      const saved = localStorage.getItem('recentlyViewed')
      if (saved) {
        try {
          const products = JSON.parse(saved)
          setRecentProducts(products)
        } catch (err) {
          console.error('Failed to parse recently viewed products:', err)
        }
      }
    }

    loadRecentProducts()
  }, [])

  if (recentProducts.length === 0) return null

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Recently Viewed
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentProducts.map((product) => (
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
      </div>
    </section>
  )
}

// Helper function to add a product to recently viewed
export function addToRecentlyViewed(product: Product) {
  try {
    const saved = localStorage.getItem('recentlyViewed')
    let recentProducts: Product[] = saved ? JSON.parse(saved) : []

    // Remove the product if it already exists
    recentProducts = recentProducts.filter((p) => p.id !== product.id)

    // Add the new product to the beginning
    recentProducts.unshift(product)

    // Keep only the most recent products
    recentProducts = recentProducts.slice(0, MAX_RECENT_PRODUCTS)

    // Save back to localStorage
    localStorage.setItem('recentlyViewed', JSON.stringify(recentProducts))
  } catch (err) {
    console.error('Failed to save recently viewed product:', err)
  }
} 