import Link from 'next/link'
import { Nav } from './styles'

function Navbar(): JSX.Element {
  return (
    <Nav>
      <p className="logo">Store</p>
      <ul className="links">
        <li className="navlink">
          <Link href="/">Home</Link>
        </li>
        <li className="navlink">
          <Link href="/shop">Loja</Link>
        </li>
        <li className="navlink">
          <Link href="/cart">Carrinho</Link>
        </li>
      </ul>
    </Nav>
  )
}

export default Navbar
