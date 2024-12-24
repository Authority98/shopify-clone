/**
 * Single Product Page
 * 
 * This page displays detailed information about a single product.
 * It includes product images, description, pricing, and add to cart functionality.
 */

'use client'

import React, { useState, useEffect } from 'react'
import { Star, Minus, Plus, ShoppingCart, Ruler } from 'lucide-react'
import Layout from '@/components/layout/Layout'
import { useCart } from '@/lib/context/CartContext'
import { ProductDetailSkeleton } from '@/components/ui/Skeleton'
import { simulateLoading } from '@/lib/utils'
import ProductGallery from '@/components/product/ProductGallery'
import ProductReviews from '@/components/product/ProductReviews'
import ShareProduct from '@/components/product/ShareProduct'
import SizeGuide from '@/components/product/SizeGuide'
import RecentlyViewed, { addToRecentlyViewed } from '@/components/product/RecentlyViewed'

// Mock data - Replace with actual API call
const product = {
  id: 1,
  name: 'Basic Tee',
  price: 35,
  rating: 4.5,
  description: 'A comfortable and versatile t-shirt made from premium cotton. Perfect for everyday wear.',
  images: [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b',
      alt: 'Basic Tee Front'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80',
      alt: 'Basic Tee Back'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=60',
      alt: 'Basic Tee Detail'
    }
  ],
  category: 'Clothing',
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  colors: ['White', 'Black', 'Gray'],
  reviews: [
    {
      id: 1,
      author: 'John Doe',
      rating: 5,
      date: '2024-01-15',
      title: 'Great quality!',
      comment: 'Very comfortable and fits perfectly. Will definitely buy more.',
      helpful: 12,
      notHelpful: 1,
      verified: true
    },
    {
      id: 2,
      author: 'Jane Smith',
      rating: 4,
      date: '2024-01-14',
      title: 'Good value',
      comment: 'Nice material and good price. Shipping was fast.',
      helpful: 8,
      notHelpful: 0,
      verified: true
    }
  ]
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)
  const [showSizeGuide, setShowSizeGuide] = useState(false)

  useEffect(() => {
    const loadProduct = async () => {
      await simulateLoading()
      setIsLoading(false)
      // Add to recently viewed
      addToRecentlyViewed({
        id: product.id,
        name: product.name,
        price: product.price,
        rating: product.rating,
        image: product.images[0].url,
        category: product.category
      })
    }
    loadProduct()
  }, [])

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta))
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select both size and color')
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.images[0].url,
      size: selectedSize,
      color: selectedColor,
    })

    // Reset selections
    setQuantity(1)
    setSelectedSize('')
    setSelectedColor('')
  }

  const productUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <ProductDetailSkeleton />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Gallery */}
              <ProductGallery images={product.images} />

              {/* Product Info */}
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                    <p className="mt-1 text-lg text-gray-500">{product.category}</p>
                  </div>
                  <ShareProduct productName={product.name} productUrl={productUrl} />
                </div>

                {/* Price and Rating */}
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-gray-900">${product.price}</p>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-lg text-gray-600">{product.rating}</span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-lg font-medium text-gray-900">Description</h2>
                  <p className="mt-2 text-gray-600">{product.description}</p>
                </div>

                {/* Size Selection */}
                <div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">Select Size</h2>
                    <button
                      onClick={() => setShowSizeGuide(true)}
                      className="text-sm text-indigo-600 hover:text-indigo-500 flex items-center gap-1"
                    >
                      <Ruler className="h-4 w-4" />
                      Size Guide
                    </button>
                  </div>
                  <div className="mt-2 grid grid-cols-5 gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`border rounded-md py-2 text-sm font-medium transition-colors ${
                          selectedSize === size
                            ? 'border-indigo-600 text-indigo-600'
                            : 'hover:border-indigo-600 hover:text-indigo-600'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div>
                  <h2 className="text-lg font-medium text-gray-900">Select Color</h2>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`border rounded-md py-2 text-sm font-medium transition-colors ${
                          selectedColor === color
                            ? 'border-indigo-600 text-indigo-600'
                            : 'hover:border-indigo-600 hover:text-indigo-600'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <h2 className="text-lg font-medium text-gray-900">Quantity</h2>
                  <div className="mt-2 flex items-center space-x-4">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 border rounded-md hover:border-indigo-600 hover:text-indigo-600"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="text-lg font-medium">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-2 border rounded-md hover:border-indigo-600 hover:text-indigo-600"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>

            {/* Product Reviews */}
            <div className="mt-16">
              <ProductReviews
                reviews={product.reviews}
                averageRating={product.rating}
                totalReviews={product.reviews.length}
              />
            </div>

            {/* Recently Viewed Products */}
            <RecentlyViewed />

            {/* Size Guide Modal */}
            <SizeGuide
              isOpen={showSizeGuide}
              onClose={() => setShowSizeGuide(false)}
              category={product.category}
            />
          </>
        )}
      </div>
    </Layout>
  )
} 