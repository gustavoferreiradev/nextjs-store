import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Container } from './styles'
import getAllProducts from '../../services/Products/getAllProducts'
import ProductCard from '../../components/ProductCard'
import { v4 as uuid } from 'uuid'
import { Product } from '../../types/Product'

const ShopPage: NextPage = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([])

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
          <ProductCard key={uuid()} product={product} />
        ))}
      </div>
    </Container>
  )
}

export default ShopPage
