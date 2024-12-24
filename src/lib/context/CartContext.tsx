'use client'

import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { toast } from 'sonner'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

interface CartState {
  items: CartItem[]
  itemCount: number
  total: number
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' }

const initialState: CartState = {
  items: [],
  itemCount: 0,
  total: 0,
}

function cartReducer(state: CartState, action: CartAction): CartState {
  try {
    switch (action.type) {
      case 'ADD_ITEM': {
        const existingItem = state.items.find(item => item.id === action.payload.id)
        
        if (existingItem) {
          const updatedItems = state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
          
          return {
            ...state,
            items: updatedItems,
            itemCount: state.itemCount + 1,
            total: state.total + action.payload.price,
          }
        }

        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          itemCount: state.itemCount + 1,
          total: state.total + action.payload.price,
        }
      }

      case 'REMOVE_ITEM': {
        const itemToRemove = state.items.find(item => item.id === action.payload)
        if (!itemToRemove) {
          toast.error('Item not found in cart')
          return state
        }

        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
          itemCount: state.itemCount - itemToRemove.quantity,
          total: state.total - (itemToRemove.price * itemToRemove.quantity),
        }
      }

      case 'UPDATE_QUANTITY': {
        const item = state.items.find(item => item.id === action.payload.id)
        if (!item) {
          toast.error('Item not found in cart')
          return state
        }

        if (action.payload.quantity < 1) {
          toast.error('Quantity must be at least 1')
          return state
        }

        const quantityDiff = action.payload.quantity - item.quantity
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )

        return {
          ...state,
          items: updatedItems,
          itemCount: state.itemCount + quantityDiff,
          total: state.total + (item.price * quantityDiff),
        }
      }

      case 'CLEAR_CART':
        return initialState

      default:
        return state
    }
  } catch (error) {
    console.error('Error in cart reducer:', error)
    toast.error('Something went wrong with the cart operation')
    return state
  }
}

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
} | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart)
        dispatch({ type: 'CLEAR_CART' })
        parsedCart.items.forEach((item: CartItem) => {
          dispatch({ type: 'ADD_ITEM', payload: item })
        })
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error)
      toast.error('Failed to load cart data')
    }
  }, [])

  // Save cart to localStorage on changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(state))
    } catch (error) {
      console.error('Error saving cart to localStorage:', error)
      toast.error('Failed to save cart data')
    }
  }, [state])

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  return (
    <CartContext.Provider value={{ state, dispatch, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
} 