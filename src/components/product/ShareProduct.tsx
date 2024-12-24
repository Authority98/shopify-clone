/**
 * ShareProduct Component
 * 
 * This component provides social media sharing functionality
 * for products.
 */

'use client'

import React, { useState } from 'react'
import { Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ShareProductProps {
  productName: string
  productUrl: string
}

export default function ShareProduct({ productName, productUrl }: ShareProductProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`,
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `Check out ${productName}`
      )}&url=${encodeURIComponent(productUrl)}`,
      color: 'bg-sky-500 hover:bg-sky-600',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        productUrl
      )}&title=${encodeURIComponent(productName)}`,
      color: 'bg-blue-700 hover:bg-blue-800',
    },
  ]

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(productUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Share product"
      >
        <Share2 className="h-5 w-5" />
      </button>

      {/* Share Menu */}
      <div
        className={cn(
          'absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all transform origin-top-right',
          isOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        )}
      >
        <div className="py-1" role="menu">
          {/* Social Media Links */}
          {shareLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={(e) => {
                e.preventDefault()
                window.open(link.url, '_blank', 'width=600,height=400')
              }}
            >
              <link.icon className="h-4 w-4 mr-3" />
              Share on {link.name}
            </a>
          ))}

          {/* Copy Link */}
          <button
            onClick={handleCopyLink}
            className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-3 text-green-500" />
                <span className="text-green-500">Copied!</span>
              </>
            ) : (
              <>
                <LinkIcon className="h-4 w-4 mr-3" />
                Copy Link
              </>
            )}
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
} 