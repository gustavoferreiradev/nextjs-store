import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Navbar from '.'
import Link from 'next/link'

describe('Testing the Text of Navbar Component', () => {
  it('Testing the list of links', () => {
    render(
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/loja">Loja</Link>
        </li>
        <li>
          <Link href="/cart">Carrinho</Link>
        </li>
      </ul>
    )

    expect(screen.queryByText('Home')).toBeInTheDocument()
    expect(screen.queryByText('Loja')).toBeInTheDocument()
    expect(screen.queryByText('Carrinho')).toBeInTheDocument()
  })
})
