/**
 * Products Page
 * 
 * Displays a grid of products with filtering options.
 */

'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import ProductGrid from '@/components/product/ProductGrid'
import { ProductGridSkeleton } from '@/components/ui/Skeleton'
import { products, getProductsByCategory, searchProducts } from '@/lib/data/products'

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const category = searchParams.get('category')
  const searchQuery = searchParams.get('search')

  useEffect(() => {
    setLoading(true)
    let result = products

    if (category) {
      result = getProductsByCategory(category)
    }

    if (searchQuery) {
      result = searchProducts(searchQuery)
    }

    setFilteredProducts(result)
    setLoading(false)
  }, [category, searchQuery])

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {category 
              ? `${category.charAt(0).toUpperCase() + category.slice(1)}`
              : searchQuery
                ? `Search Results for "${searchQuery}"`
                : 'All Products'
            }
          </h1>
          <p className="mt-2 text-gray-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} available
          </p>
        </div>

        {/* Product Grid */}
        {loading ? (
          <ProductGridSkeleton />
        ) : (
          <ProductGrid products={filteredProducts} />
        )}
      </div>
    </Layout>
  )
} 