/**
 * CategoryGrid Component
 * 
 * Displays a grid of category cards with images and links.
 */

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Category {
  name: string
  image: string
  href: string
}

interface CategoryGridProps {
  title: string
  categories: Category[]
}

export default function CategoryGrid({ title, categories }: CategoryGridProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative h-64 rounded-lg overflow-hidden"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all">
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 