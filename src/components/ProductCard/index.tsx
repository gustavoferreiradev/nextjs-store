import Image, { ImageProps } from 'next/image'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cart.slice'
import { AppDispatch } from '../../redux/store'
import { Card, Title } from './styles'
import { Product } from '../../types/Product'

interface ProductProps {
  product: Product
}

function ProductCard({ product }: ProductProps): JSX.Element {
  const dispatch: AppDispatch = useDispatch()

  return (
    <Card>
      <Image src={product.image} height={420} width={420} />
      <Title>{product.title}</Title>
      <h3 className="category">{product.category}</h3>
      <p>$ {product.price}</p>
      <button className="button" onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
    </Card>
  )
}

export default ProductCard
