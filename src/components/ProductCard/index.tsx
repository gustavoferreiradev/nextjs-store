import Image from 'next/image'
import { Card } from './styles'

function ProductCard({ product }): JSX.Element {
  return (
    <Card>
      <Image src={product.image} height={300} width={220} />
      <h2 className="title">{product.title}</h2>
      <h3 className="category">{product.category}</h3>
      <p>$ {product.price}</p>
      <button className="button">Add to Cart</button>
    </Card>
  )
}

export default ProductCard
