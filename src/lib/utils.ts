import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines class names using clsx and tailwind-merge
 * This allows for dynamic class names and proper Tailwind class merging
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a price number to a currency string
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

/**
 * Formats a date to a readable string
 */
export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

/**
 * Adds delay to a promise
 */
export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Simulates loading time for demo purposes
 */
export async function simulateLoading() {
  await delay(1000)
  return true
}

/**
 * Truncates text to a specified length
 */
export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

/**
 * Generates a random ID
 */
export function generateId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

/**
 * Calculates average rating from an array of ratings
 */
export function calculateAverageRating(ratings: number[]) {
  if (!ratings.length) return 0
  return ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length
}

/**
 * Formats a number with commas
 */
export function formatNumber(num: number) {
  return new Intl.NumberFormat('en-US').format(num)
} 