import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Container } from './styles'
import getAllProducts from '../../services/Products/getAllProducts'
import ProductCard from '../../components/ProductCard'

const ShopPage: NextPage = (): JSX.Element => {
  const [products, setProducts] = useState<[]>([])

  const mountProducts = async () => {
    await getAllProducts(setProducts)
  }

  useEffect(() => {
    mountProducts()
  }, [])

  return (
    <Container>
      <h1 className="title">All Results</h1>
      <div className="cards">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  )
}

export default ShopPage
