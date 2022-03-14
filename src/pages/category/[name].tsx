import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useLayoutEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import { Container } from '../../pages/shop/styles'
import getProductsByCategory from '../../services/Products/getProductsByCategory'

const CategoryPage: NextPage = (): JSX.Element => {
  const router = useRouter()

  const [products, setProducts] = useState<[]>([])

  const mountProducts = async () => {
    await getProductsByCategory(setProducts, router.query.name)
  }

  useLayoutEffect(() => {
    mountProducts()
  }, [])

  return (
    <Container>
      <h1 className="title">Results for {router.query.name}</h1>
      <div className="cards">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  )
}

export default CategoryPage
