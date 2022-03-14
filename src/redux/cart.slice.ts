import { createSlice } from '@reduxjs/toolkit'
import { RootStateOrAny } from 'react-redux'
import { Reducer } from 'redux'

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state: RootStateOrAny, action) => {
      const itemExists = state.find(
        (item: RootStateOrAny) => item.id === action.payload.id
      )
      if (itemExists) {
        itemExists.quantity++
      } else {
        state.push({ ...action.payload, quantity: 1 })
      }
    },
    incrementQuantity: (state: RootStateOrAny, action) => {
      const item = state.find(
        (item: RootStateOrAny) => item.id === action.payload
      )
      item.quantity++
    },

    decrementQuantity: (state, action) => {
      const item: RootStateOrAny = state.find(
        (item: RootStateOrAny) => item.id === action.payload
      )
      if (item.quantity === 1) {
        const index = state.findIndex(
          (item: RootStateOrAny) => item.id === action.payload
        )
        state.splice(index, 1)
      } else {
        item.quantity--
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex(
        (item: RootStateOrAny) => item.id === action.payload
      )
      state.splice(index, 1)
    },
  },
})

export const cartReducer: Reducer = cartSlice.reducer

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions
