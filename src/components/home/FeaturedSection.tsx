/**
 * FeaturedSection Component
 * 
 * Displays a section of featured products with a title.
 */

import React from 'react'
import ProductGrid from '@/components/product/ProductGrid'
import { Product } from '@/lib/data/products'

interface FeaturedSectionProps {
  title: string
  products: Product[]
}

export default function FeaturedSection({ title, products }: FeaturedSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
        <ProductGrid products={products} />
      </div>
    </section>
  )
} 