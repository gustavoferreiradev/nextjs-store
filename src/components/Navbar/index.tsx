import Link from 'next/link'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Nav } from './styles'

interface Product {
  quantity: string
}

function Navbar(): JSX.Element {
  const cart = useSelector((state: RootState) => state.cart)

  const getItemsCount = () => {
    return cart.reduce(
      (accumulator: number, item: Product) => accumulator + item.quantity,
      0
    )
  }

  return (
    <Nav>
      <p className="logo">Store</p>
      <ul className="links">
        <li className="navlink">
          <Link href="/">Home</Link>
        </li>
        <li className="navlink">
          <Link href="/shop">Shop</Link>
        </li>
        <li className="navlink">
          <Link href="/cart">{`Cart (${getItemsCount()})`}</Link>
        </li>
      </ul>
    </Nav>
  )
}

export default Navbar
