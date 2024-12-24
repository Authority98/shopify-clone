'use client'

/**
 * Cart Context
 * 
 * This context manages the shopping cart state across the application.
 * It provides functions to add, remove, and update cart items.
 */

import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { toast } from 'sonner'
import { formatPrice } from '@/lib/utils'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  size?: string
  color: string
}

interface CartState {
  items: CartItem[]
  total: number
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { id: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' }

interface CartContextType {
  state: CartState
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id && 
        item.size === action.payload.size && 
        item.color === action.payload.color
      )

      let newItems: CartItem[]
      if (existingItemIndex > -1) {
        newItems = state.items.map((item, index) => {
          if (index === existingItemIndex) {
            return { ...item, quantity: item.quantity + action.payload.quantity }
          }
          return item
        })
      } else {
        newItems = [...state.items, action.payload]
      }

      return {
        items: newItems,
        total: newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      }
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload.id)
      return {
        items: newItems,
        total: newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      }
    }

    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: action.payload.quantity }
        }
        return item
      })
      return {
        items: newItems,
        total: newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      }
    }

    case 'CLEAR_CART': {
      return {
        items: [],
        total: 0
      }
    }

    default:
      return state
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 })

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      const { items, total } = JSON.parse(savedCart)
      dispatch({ type: 'CLEAR_CART' })
      items.forEach((item: CartItem) => {
        dispatch({ type: 'ADD_ITEM', payload: item })
      })
    }
  }, [])

  // Save cart to localStorage on changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state))
  }, [state])

  const addItem = (item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
    toast.success('Added to Cart', {
      description: `${item.name} (${item.size || ''} ${item.color}) - ${formatPrice(item.price)}`,
    })
  }

  const removeItem = (id: number) => {
    const item = state.items.find(item => item.id === id)
    if (item) {
      dispatch({ type: 'REMOVE_ITEM', payload: { id } })
      toast.info('Removed from Cart', {
        description: `${item.name} has been removed from your cart`,
      })
    }
  }

  const updateQuantity = (id: number, quantity: number) => {
    const item = state.items.find(item => item.id === id)
    if (item) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
      toast.info('Updated Quantity', {
        description: `${item.name} quantity updated to ${quantity}`,
      })
    }
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
    toast.success('Cart Cleared', {
      description: 'All items have been removed from your cart',
    })
  }

  return (
    <CartContext.Provider value={{ state, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
} 