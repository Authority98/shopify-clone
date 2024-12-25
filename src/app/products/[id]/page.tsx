/**
 * Product Detail Page
 * 
 * Server component that renders the product page content.
 */

import React from 'react'
import { Metadata } from 'next'
import ProductPageContent from '@/components/product/ProductPageContent'
import { getProductById } from '@/lib/data/products'
import Layout from '@/components/layout/Layout'

type Props = {
  params: Promise<{ id: string }> | { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  // Wait for the params to be available
  const resolvedParams = await Promise.resolve(params)
  const productId = parseInt(resolvedParams.id)
  const product = getProductById(productId)

  return {
    title: product ? `${product.name} | Shopify Clone` : 'Product Not Found',
    description: product?.description || 'View product details and make a purchase',
  }
}

export default async function ProductPage({ params }: Props) {
  // Wait for the params to be available
  const resolvedParams = await Promise.resolve(params)
  const productId = parseInt(resolvedParams.id)
  const product = getProductById(productId)

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </Layout>
    )
  }

  return <ProductPageContent product={product} />
} 