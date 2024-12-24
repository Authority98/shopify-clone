/**
 * Product Detail Page
 * 
 * Server component that renders the product page content.
 */

import React from 'react'
import { Metadata } from 'next'
import ProductPageContent from '@/components/product/ProductPageContent'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Fetch product data if needed
  const productId = await Promise.resolve(params.id)
  
  return {
    title: `Product ${productId} | Shopify Clone`,
    description: 'View product details and make a purchase',
  }
}

export default async function ProductPage({ params }: Props) {
  // Resolve params asynchronously
  const productId = await Promise.resolve(params.id)
  
  return <ProductPageContent productId={productId} />
} 