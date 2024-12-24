/**
 * ProductReviews Component
 * 
 * This component displays product reviews with ratings,
 * comments, and helpful votes.
 */

'use client'

import React, { useState } from 'react'
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react'
import { formatDate } from '@/lib/utils'

interface Review {
  id: number
  author: string
  rating: number
  date: string
  title: string
  comment: string
  helpful: number
  notHelpful: number
  verified: boolean
}

interface ProductReviewsProps {
  reviews: Review[]
  averageRating: number
  totalReviews: number
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating
              ? 'text-yellow-400 fill-current'
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

export default function ProductReviews({
  reviews,
  averageRating,
  totalReviews,
}: ProductReviewsProps) {
  const [sortBy, setSortBy] = useState<'recent' | 'helpful'>('recent')
  const [helpfulVotes, setHelpfulVotes] = useState<Record<number, boolean>>({})

  const handleHelpfulVote = (reviewId: number, isHelpful: boolean) => {
    if (helpfulVotes[reviewId] !== undefined) return // Already voted
    setHelpfulVotes((prev) => ({ ...prev, [reviewId]: isHelpful }))
  }

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
    return b.helpful - a.helpful
  })

  const ratingCounts = reviews.reduce((acc, review) => {
    acc[review.rating] = (acc[review.rating] || 0) + 1
    return acc
  }, {} as Record<number, number>)

  return (
    <div className="space-y-8">
      {/* Reviews Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
          <div className="flex items-center gap-2 mb-2">
            <StarRating rating={averageRating} />
            <span className="text-lg font-medium">
              {averageRating.toFixed(1)} out of 5
            </span>
          </div>
          <p className="text-gray-600">{totalReviews} total ratings</p>
        </div>

        {/* Rating Distribution */}
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-2">
              <button className="text-sm text-gray-600 hover:text-gray-900">
                {rating} star
              </button>
              <div className="flex-grow h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-yellow-400 rounded-full"
                  style={{
                    width: `${((ratingCounts[rating] || 0) / totalReviews) * 100}%`,
                  }}
                />
              </div>
              <span className="text-sm text-gray-600">
                {((ratingCounts[rating] || 0) / totalReviews * 100).toFixed(0)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Sort Controls */}
      <div className="flex items-center gap-4 border-b pb-4">
        <span className="text-gray-600">Sort by:</span>
        <button
          onClick={() => setSortBy('recent')}
          className={`text-sm ${
            sortBy === 'recent' ? 'text-indigo-600 font-medium' : 'text-gray-600'
          }`}
        >
          Most Recent
        </button>
        <button
          onClick={() => setSortBy('helpful')}
          className={`text-sm ${
            sortBy === 'helpful' ? 'text-indigo-600 font-medium' : 'text-gray-600'
          }`}
        >
          Most Helpful
        </button>
      </div>

      {/* Reviews List */}
      <div className="space-y-8">
        {sortedReviews.map((review) => (
          <div key={review.id} className="border-b pb-8">
            <div className="flex items-start justify-between mb-2">
              <div>
                <StarRating rating={review.rating} />
                <h3 className="font-medium mt-2">{review.title}</h3>
              </div>
              {review.verified && (
                <span className="text-sm text-green-600 font-medium">
                  Verified Purchase
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <span>{review.author}</span>
              <span>•</span>
              <span>{formatDate(new Date(review.date))}</span>
            </div>

            <p className="text-gray-800 mb-4">{review.comment}</p>

            <div className="flex items-center gap-6">
              <button
                onClick={() => handleHelpfulVote(review.id, true)}
                disabled={helpfulVotes[review.id] !== undefined}
                className={`flex items-center gap-2 text-sm ${
                  helpfulVotes[review.id] === true
                    ? 'text-green-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <ThumbsUp className="h-4 w-4" />
                <span>Helpful ({review.helpful})</span>
              </button>

              <button
                onClick={() => handleHelpfulVote(review.id, false)}
                disabled={helpfulVotes[review.id] !== undefined}
                className={`flex items-center gap-2 text-sm ${
                  helpfulVotes[review.id] === false
                    ? 'text-red-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <ThumbsDown className="h-4 w-4" />
                <span>Not Helpful ({review.notHelpful})</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 