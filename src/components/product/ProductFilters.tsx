/**
 * ProductFilters Component
 * 
 * This component provides filtering options for products including
 * categories, price range, ratings, and other relevant filters.
 */

'use client'

import React, { useState } from 'react'

interface ProductFiltersProps {
  onFilterChange: (filters: FilterState) => void
}

export interface FilterState {
  categories: string[]
  priceRange: [number, number]
  ratings: number[]
}

const initialFilters: FilterState = {
  categories: [],
  priceRange: [0, 1000],
  ratings: [],
}

export default function ProductFilters({ onFilterChange }: ProductFiltersProps) {
  const [filters, setFilters] = useState<FilterState>(initialFilters)

  const categories = [
    { id: 'electronics', name: 'Electronics' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'books', name: 'Books' },
    { id: 'home', name: 'Home & Garden' },
  ]

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    const newFilters: FilterState = {
      ...filters,
      categories: checked
        ? [...filters.categories, categoryId]
        : filters.categories.filter(id => id !== categoryId)
    }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handlePriceChange = (index: number, value: number) => {
    const newPriceRange: [number, number] = index === 0
      ? [value, filters.priceRange[1]]
      : [filters.priceRange[0], value]

    const newFilters: FilterState = {
      ...filters,
      priceRange: newPriceRange
    }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleRatingChange = (rating: number, checked: boolean) => {
    const newFilters: FilterState = {
      ...filters,
      ratings: checked
        ? [...filters.ratings, rating]
        : filters.ratings.filter(r => r !== rating)
    }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleReset = () => {
    setFilters(initialFilters)
    onFilterChange(initialFilters)
  }

  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="text-lg font-medium text-gray-900">Categories</h3>
        <div className="mt-4 space-y-4">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center">
              <input
                id={category.id}
                name="category"
                type="checkbox"
                checked={filters.categories.includes(category.id)}
                onChange={(e) => handleCategoryChange(category.id, e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor={category.id} className="ml-3 text-sm text-gray-600">
                {category.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-lg font-medium text-gray-900">Price Range</h3>
        <div className="mt-4">
          <div className="flex items-center space-x-4">
            <input
              type="number"
              value={filters.priceRange[0]}
              onChange={(e) => handlePriceChange(0, parseInt(e.target.value))}
              className="w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              min="0"
            />
            <span>to</span>
            <input
              type="number"
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceChange(1, parseInt(e.target.value))}
              className="w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              min="0"
            />
          </div>
        </div>
      </div>

      {/* Ratings */}
      <div>
        <h3 className="text-lg font-medium text-gray-900">Rating</h3>
        <div className="mt-4 space-y-4">
          {[4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center">
              <input
                id={`rating-${rating}`}
                name="rating"
                type="checkbox"
                checked={filters.ratings.includes(rating)}
                onChange={(e) => handleRatingChange(rating, e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor={`rating-${rating}`} className="ml-3 text-sm text-gray-600">
                {rating}+ Stars
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Reset Filters Button */}
      <button
        type="button"
        onClick={handleReset}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Reset Filters
      </button>
    </div>
  )
} 