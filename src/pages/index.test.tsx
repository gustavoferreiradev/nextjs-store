import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from './index'

describe('Testing index.tsx', () => {
  it('should be able to show the h1 element', () => {
    render(<Home />)
    const h1Element = screen.getByText(/Loja/)
    expect(h1Element).toBeInTheDocument()
  })
})
