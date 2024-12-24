/**
 * Skeleton Component
 * 
 * This component provides a loading placeholder animation
 * similar to Reddit's loading state.
 */

import React from 'react'
import { cn } from '@/lib/utils'

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-gray-200 dark:bg-gray-800',
        className
      )}
      {...props}
    />
  )
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <Skeleton className="h-64 w-full" />
      <div className="p-4 space-y-2">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-3 w-1/2" />
        <div className="flex justify-between items-center pt-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
        </div>
      </div>
    </div>
  )
}

export function ProductDetailSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Skeleton className="h-96 md:h-[600px] rounded-lg" />
      <div className="space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-6 w-1/4" />
        </div>
        <Skeleton className="h-24 w-full" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-1/4" />
          <div className="grid grid-cols-5 gap-2">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-10" />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-6 w-1/4" />
          <div className="grid grid-cols-3 gap-2">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-10" />
            ))}
          </div>
        </div>
        <Skeleton className="h-12 w-full" />
      </div>
    </div>
  )
}

export function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  )
} 