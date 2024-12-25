/**
 * ProductFilters Component
 * 
 * Provides category and search filtering for products.
 * Uses URL parameters to maintain filter state.
 * Features auto-search with debounce.
 */

'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search } from 'lucide-react'
import debounce from 'lodash/debounce'

const categories = [
  { id: 'all', name: 'All Products', href: '/products' },
  { id: 'electronics', name: 'Electronics', href: '/products?category=electronics' },
  { id: 'clothing', name: 'Clothing', href: '/products?category=clothing' },
  { id: 'home', name: 'Home & Garden', href: '/products?category=home' }
]

export default function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '')
  const currentCategory = searchParams.get('category')

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      if (query.trim()) {
        router.push(`/products?search=${encodeURIComponent(query.trim())}`)
      } else {
        router.push('/products')
      }
    }, 300), // 300ms delay
    [router]
  )

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      debouncedSearch.cancel()
    }
  }, [debouncedSearch])

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    debouncedSearch(query)
  }

  return (
    <div className="mb-8">
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((category) => (
          <a
            key={category.id}
            href={category.href}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              (category.id === 'all' && !currentCategory) ||
              category.id === currentCategory
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </a>
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search products..."
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
    </div>
  )
} 