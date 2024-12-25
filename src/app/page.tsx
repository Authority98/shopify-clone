/**
 * Home Page Route (/)
 * 
 * This is the main landing page of the e-commerce site.
 * The file must be named 'page.tsx' for Next.js App Router.
 * 
 * Route: /
 * Layout: RootLayout
 * Components:
 * - HeroSection: Main banner with CTA
 * - CategoryGrid: Featured categories grid
 * - FeaturedSection: Featured products section
 */

'use client'

import React from 'react'
import Layout from '@/components/layout/Layout'
import HeroSection from '@/components/home/HeroSection'
import CategoryGrid from '@/components/home/CategoryGrid'
import FeaturedSection from '@/components/home/FeaturedSection'
import { getFeaturedProducts } from '@/lib/data/products'

const categories = [
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
]

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  return (
    <Layout>
      <HeroSection
        title="Welcome to ShopifyClone"
        subtitle="Discover amazing products at great prices"
        ctaText="Shop Now"
        ctaLink="/products"
        backgroundImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
      />

      <CategoryGrid
        title="Shop by Category"
        categories={categories}
      />

      <FeaturedSection
        title="Featured Products"
        products={featuredProducts}
      />
    </Layout>
  )
} 