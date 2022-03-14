import React, { ReactChild, ReactChildren, ReactNode } from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore, PreloadedState } from '@reduxjs/toolkit'
import { Provider, RootStateOrAny } from 'react-redux'
import { cartReducer } from '../redux/cart.slice'
import { RootState } from '../redux/store'

interface testUtilsProps {
  children: ReactChild | ReactChildren
}

function render(
  ui: JSX.Element,
  {
    preloadedState,
    store = configureStore({ reducer: { cart: cartReducer }, preloadedState }),
    ...renderOptions
  }: PreloadedState<RootStateOrAny> = {}
) {
  function Wrapper({ children }: testUtilsProps) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { render }
