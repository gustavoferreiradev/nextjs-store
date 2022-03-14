import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Footer from '.'

describe('<Footer />', () => {
  it('should render all components and children', () => {
    render(<Footer />)
    expect(screen.getByText(/Copyright/i)).toBeInTheDocument()
    expect(screen.getByText(/Store/i)).toBeInTheDocument()
    expect(screen.getByText(/2022/i)).toBeInTheDocument()
  })
})
