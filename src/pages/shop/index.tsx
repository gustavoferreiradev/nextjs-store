import { NextPage } from 'next'
import { useLayoutEffect, useState } from 'react'
import { Container } from './styles'
import getAllProducts from '../../services/Products/getAllProducts'
import ProductCard from '../../components/ProductCard'

const ShopPage: NextPage = (): JSX.Element => {
  const [products, setProducts] = useState<[]>([])

  const mountProducts = async () => {
    await getAllProducts(setProducts)
  }

  useLayoutEffect(() => {
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
