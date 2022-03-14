import Navbar from '.'
import { render, screen } from '../../utils/testUtils'
import '@testing-library/jest-dom/extend-expect'

describe('<Navbar />', () => {
  it('should render logo and links text', () => {
    render(<Navbar />)
    expect(screen.getByText(/Store/i)).toBeInTheDocument()
    expect(screen.getByText(/Home/i)).toBeInTheDocument()
    expect(screen.getByText(/Shop/i)).toBeInTheDocument()
    expect(screen.getByText(/Cart/i)).toBeInTheDocument()
  })

  it('should navigate to ... when link is clicked', () => {
    render(<Navbar />)
    const homeLink = screen.getByRole('link', { name: /Home/i })
    expect(homeLink.getAttribute('href')).toBe('/')

    const shopLink = screen.getByRole('link', { name: /Shop/i })
    expect(shopLink.getAttribute('href')).toBe('/shop')

    const CartLink = screen.getByRole('link', { name: /Cart/i })
    expect(CartLink.getAttribute('href')).toBe('/cart')
  })
})
