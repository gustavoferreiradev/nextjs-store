import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import { Container } from '../../pages/shop/styles'
import getProductsByCategory from '../../services/Products/getProductsByCategory'
import { Product } from '../../types/Product'

const CategoryPage: NextPage = (): JSX.Element => {
  const router = useRouter()

  const categoryName: string = `${router.query.name}`
  const [products, setProducts] = useState<Product[]>([])

  const mountProducts = async () => {
    await getProductsByCategory(setProducts, categoryName)
  }

  useEffect(() => {
    mountProducts()
  }, [])

  return (
    <Container>
      <h1 className="title">Results for {router.query.name}</h1>
      <div className="cards">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  )
}

export default CategoryPage
