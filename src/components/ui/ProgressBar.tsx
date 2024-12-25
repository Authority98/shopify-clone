/**
 * ProgressBar Component
 * 
 * This component implements a YouTube-style loading progress bar
 * using NProgress.
 */

'use client'

import { useEffect } from 'react'
import NProgress from 'nprogress'
import { usePathname, useSearchParams } from 'next/navigation'

// Configure NProgress
NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
})

export default function ProgressBar() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    NProgress.start()
    
    // Simulate a delay to show the progress bar
    const timer = setTimeout(() => {
      NProgress.done()
    }, 500)

    return () => {
      clearTimeout(timer)
      NProgress.done()
    }
  }, [pathname, searchParams])

  return null
} 