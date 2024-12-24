/**
 * ProductGallery Component
 * 
 * This component displays a product image gallery with thumbnails
 * and zoom functionality.
 */

'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProductImage {
  id: number
  url: string
  alt: string
}

interface ProductGalleryProps {
  images: ProductImage[]
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden group">
        <Image
          src={images[currentImage].url}
          alt={images[currentImage].alt}
          fill
          className={cn(
            'object-cover transition-transform duration-500',
            isZoomed ? 'scale-150' : 'scale-100'
          )}
        />
        
        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={previousImage}
            className="p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Zoom Button */}
        <button
          onClick={handleZoom}
          className="absolute bottom-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 transition-colors opacity-0 group-hover:opacity-100"
          aria-label={isZoomed ? 'Zoom out' : 'Zoom in'}
        >
          <ZoomIn className="h-6 w-6" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setCurrentImage(index)}
            className={cn(
              'relative h-20 rounded-md overflow-hidden',
              currentImage === index && 'ring-2 ring-indigo-600'
            )}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
} 