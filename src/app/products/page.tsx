/**
 * Products List Route (/products)
 * 
 * This page displays the product catalog with filtering and search capabilities.
 * The file must be named 'page.tsx' for Next.js App Router.
 * 
 * Route: /products
 * Layout: RootLayout
 * Query Parameters:
 * - category: Filter products by category
 * - search: Filter products by search term
 * 
 * Components:
 * - ProductsHeader: Title and product count
 * - ProductFilters: Category and search filters
 * - ProductGrid: Product cards display
 * - ProductGridSkeleton: Loading state
 */

'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import ProductGrid from '@/components/product/ProductGrid'
import ProductsHeader from '@/components/product/ProductsHeader'
import ProductFilters from '@/components/product/ProductFilters'
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
        <ProductsHeader
          category={category}
          searchQuery={searchQuery}
          productCount={filteredProducts.length}
        />

        <ProductFilters />

        {loading ? (
          <ProductGridSkeleton />
        ) : (
          <ProductGrid products={filteredProducts} />
        )}
      </div>
    </Layout>
  )
} 