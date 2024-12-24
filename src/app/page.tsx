/**
 * Home Page
 * 
 * The main landing page of the e-commerce site.
 * Features hero section, featured products, and category highlights.
 */

'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import ProductGrid from '@/components/product/ProductGrid'

// Mock featured products
const featuredProducts = [
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
]

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="Hero Image"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to ShopifyClone
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover amazing products at great prices
            </p>
            <Link
              href="/products"
              className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Electronics',
                image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661',
                href: '/products?category=electronics'
              },
              {
                name: 'Clothing',
                image: 'https://images.unsplash.com/photo-1445205170230-053b83016050',
                href: '/products?category=clothing'
              },
              {
                name: 'Home & Garden',
                image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a',
                href: '/products?category=home'
              }
            ].map((category) => (
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

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>
    </Layout>
  )
}
