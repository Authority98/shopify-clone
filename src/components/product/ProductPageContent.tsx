/**
 * Product Page Content Component
 * 
 * Client component that handles the display and interaction
 * of product details.
 */

'use client'

import React from 'react'
import Layout from '@/components/layout/Layout'
import ProductGallery from '@/components/product/ProductGallery'
import SizeGuide from '@/components/product/SizeGuide'
import ShareProduct from '@/components/product/ShareProduct'
import ProductReviews from '@/components/product/ProductReviews'
import RecentlyViewed from '@/components/product/RecentlyViewed'
import ProductActions from '@/components/product/ProductActions'

interface ProductPageContentProps {
  productId: string
}

// Mock product data - replace with API call
function getProduct(id: string) {
  return {
    id: parseInt(id),
    name: 'Sample Product',
    price: 99.99,
    description: 'This is a sample product description.',
    images: [{
      id: 1,
      url: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b',
      alt: 'Product Image'
    }],
    category: 'clothing'
  }
}

export default function ProductPageContent({ productId }: ProductPageContentProps) {
  const product = getProduct(productId)
  const productUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Gallery */}
          <ProductGallery images={product.images} />

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="mt-2 text-xl text-gray-500">${product.price}</p>
            </div>

            {/* Product Actions */}
            <ProductActions product={product} />

            {/* Product Description */}
            <div className="prose prose-sm">
              <h3 className="text-lg font-medium text-gray-900">Description</h3>
              <p>{product.description}</p>
            </div>

            {/* Additional Features */}
            <div className="border-t pt-6">
              <SizeGuide 
                isOpen={false}
                onClose={() => {}}
                category={product.category}
              />
              <ShareProduct 
                productName={product.name}
                productUrl={productUrl}
              />
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <ProductReviews 
            reviews={[]}
            averageRating={0}
            totalReviews={0}
          />
        </div>

        {/* Recently Viewed */}
        <div className="mt-16">
          <RecentlyViewed />
        </div>
      </div>
    </Layout>
  )
} 