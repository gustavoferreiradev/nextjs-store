import Link from 'next/link'
import { RootStateOrAny, useSelector } from 'react-redux'
import { Nav } from './styles'

interface Product {
  quantity: string
}

function Navbar(): JSX.Element {
  const cart = useSelector((state: RootStateOrAny) => state.cart)

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
