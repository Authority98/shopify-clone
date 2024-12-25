/**
 * HeroSection Component
 * 
 * A full-width hero banner with background image, heading, and call-to-action button.
 */

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  backgroundImage: string
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage
}: HeroSectionProps) {
  return (
    <div className="relative h-[70vh] bg-gray-900">
      <Image
        src={backgroundImage}
        alt="Hero Background"
        fill
        className="object-cover opacity-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            {subtitle}
          </p>
          <Link
            href={ctaLink}
            className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  )
} 