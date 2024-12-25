/**
 * ProductsHeader Component
 * 
 * Displays the title and product count for the products page.
 * Handles different title formats based on category or search query.
 */

import React from 'react'

interface ProductsHeaderProps {
  category?: string | null
  searchQuery?: string | null
  productCount: number
}

export default function ProductsHeader({
  category,
  searchQuery,
  productCount
}: ProductsHeaderProps) {
  const title = category 
    ? `${category.charAt(0).toUpperCase() + category.slice(1)}`
    : searchQuery
      ? `Search Results for "${searchQuery}"`
      : 'All Products'

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">
        {title}
      </h1>
      <p className="mt-2 text-gray-600">
        {productCount} {productCount === 1 ? 'product' : 'products'} available
      </p>
    </div>
  )
} 