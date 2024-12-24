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

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  return {
    title: `Product ${params.id} | Shopify Clone`,
    description: 'View product details and make a purchase',
  }
}

export default function ProductPage({ params }: Props) {
  return <ProductPageContent productId={params.id} />
} 