/**
 * Products Page
 * 
 * This page displays all products with filtering and sorting options.
 */

'use client'

import React, { useState } from 'react'
import Layout from '@/components/layout/Layout'
import ProductFilters, { FilterState } from '@/components/product/ProductFilters'
import ProductGrid from '@/components/product/ProductGrid'

// Mock data - Replace with actual API call
const products = [
  {
    id: 1,
    name: 'Basic Tee',
    price: 35,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b',
    category: 'clothing',
  },
  {
    id: 2,
    name: 'Wireless Earbuds',
    price: 129,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df',
    category: 'electronics',
  },
  {
    id: 3,
    name: 'Best-Selling Novel',
    price: 19,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
    category: 'books',
  },
  {
    id: 4,
    name: 'Garden Tools Set',
    price: 89,
    rating: 3.9,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b',
    category: 'home',
  },
]

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(products)

  const handleFilterChange = (filters: FilterState) => {
    let filtered = [...products]

    // Apply category filters
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => 
        filters.categories.includes(product.category)
      )
    }

    // Apply price range filter
    filtered = filtered.filter(product => 
      product.price >= filters.priceRange[0] && 
      product.price <= filters.priceRange[1]
    )

    // Apply rating filter
    if (filters.ratings.length > 0) {
      filtered = filtered.filter(product => 
        filters.ratings.some(rating => product.rating >= rating)
      )
    }

    setFilteredProducts(filtered)
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="md:col-span-1">
            <ProductFilters onFilterChange={handleFilterChange} />
          </div>

          {/* Products */}
          <div className="md:col-span-3">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </Layout>
  )
} 