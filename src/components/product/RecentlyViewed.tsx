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
import { Product } from '@/lib/data/products'

const MAX_RECENT_PRODUCTS = 4

interface RecentProduct extends Product {
  viewedAt: number
}

interface ProductImage {
  id: number
  url: string
  alt: string
}

interface OldProductFormat {
  id: number
  name: string
  price: number
  description?: string
  category: string
  rating: number
  image?: string
  viewedAt?: number
}

// Helper function to validate product data structure
function isValidProduct(product: unknown): product is RecentProduct {
  if (!product || typeof product !== 'object') return false
  
  const p = product as Partial<RecentProduct>
  return (
    typeof p.id === 'number' &&
    typeof p.name === 'string' &&
    typeof p.price === 'number' &&
    typeof p.description === 'string' &&
    typeof p.category === 'string' &&
    typeof p.rating === 'number' &&
    Array.isArray(p.images) &&
    p.images.length > 0 &&
    p.images.every((img: ProductImage) => 
      typeof img.id === 'number' &&
      typeof img.url === 'string' &&
      typeof img.alt === 'string'
    )
  )
}

// Helper function to migrate old product data structure
function migrateProduct(oldProduct: OldProductFormat | RecentProduct, index: number): RecentProduct | null {
  try {
    // Add timestamp if it's missing
    const baseTimestamp = Date.now()
    const viewedAt = baseTimestamp - (index * 1000) // Ensure different timestamps

    if (isValidProduct(oldProduct)) {
      return {
        ...oldProduct,
        viewedAt: oldProduct.viewedAt || viewedAt
      }
    }

    // If it's the old format with a single image
    if (oldProduct && oldProduct.image) {
      return {
        ...oldProduct,
        description: oldProduct.description || 'No description available',
        images: [{
          id: oldProduct.id * 1000,
          url: oldProduct.image,
          alt: oldProduct.name
        }],
        viewedAt: oldProduct.viewedAt || viewedAt
      } as RecentProduct
    }

    return null
  } catch (error) {
    console.error('Error migrating product:', error)
    return null
  }
}

export default function RecentlyViewed() {
  const [recentProducts, setRecentProducts] = useState<RecentProduct[]>([])

  useEffect(() => {
    // Load recently viewed products from localStorage
    const loadRecentProducts = () => {
      const saved = localStorage.getItem('recentlyViewed')
      if (saved) {
        try {
          const parsedData = JSON.parse(saved)
          const validProducts = (Array.isArray(parsedData) ? parsedData : [])
            .map((product, index) => migrateProduct(product, index))
            .filter((p): p is RecentProduct => p !== null)
            .sort((a, b) => b.viewedAt - a.viewedAt) // Sort by timestamp
          
          setRecentProducts(validProducts)

          // Save back the migrated data
          if (validProducts.length > 0) {
            localStorage.setItem('recentlyViewed', JSON.stringify(validProducts))
          }
        } catch (err) {
          console.error('Failed to parse recently viewed products:', err)
          // Clear invalid data
          localStorage.removeItem('recentlyViewed')
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
          {recentProducts.map((product, index) => (
            <Link
              key={`recent-${product.id}-${product.viewedAt}-${index}`}
              href={`/products/${product.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                {/* Product Image */}
                <div className="relative h-64 w-full">
                  <Image
                    src={product.images[0].url}
                    alt={product.images[0].alt}
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
  if (!isValidProduct(product)) {
    console.error('Invalid product data:', product)
    return
  }

  try {
    const saved = localStorage.getItem('recentlyViewed')
    let recentProducts: RecentProduct[] = []

    if (saved) {
      const parsedData = JSON.parse(saved)
      recentProducts = (Array.isArray(parsedData) ? parsedData : [])
        .map((p, index) => migrateProduct(p, index))
        .filter((p): p is RecentProduct => p !== null)
    }

    // Remove the product if it already exists
    recentProducts = recentProducts.filter((p) => p.id !== product.id)

    // Add the new product to the beginning with timestamp
    recentProducts.unshift({
      ...product,
      viewedAt: Date.now()
    })

    // Keep only the most recent products
    recentProducts = recentProducts.slice(0, MAX_RECENT_PRODUCTS)

    // Save back to localStorage
    localStorage.setItem('recentlyViewed', JSON.stringify(recentProducts))
  } catch (err) {
    console.error('Failed to save recently viewed product:', err)
  }
} 