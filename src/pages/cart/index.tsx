import { NextPage } from 'next'
import { Container } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../../redux/cart.slice'

interface Product {
  quantity: number
  price: number
}

const CartPage: NextPage = (): JSX.Element => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator: number, item: Product) =>
        accumulator + item.quantity * item.price,
      0
    )
  }

  return (
    <Container>
      {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
          <div className="header">
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>

          {cart.map((item) => (
            <div className="body">
              <div className="image">
                <Image src={item.image} height="90" width="65" />
              </div>
              <p>{item.product}</p>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>
              <div className="buttons">
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  X
                </button>
              </div>
              <p>$ {item.quantity * item.price}</p>
            </div>
          ))}
          <h2>Grand Total: $ {getTotalPrice()}</h2>
        </>
      )}
    </Container>
  )
}

export default CartPage
