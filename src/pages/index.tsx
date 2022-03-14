import type { NextPage } from 'next'
import { useLayoutEffect, useState } from 'react'
import CategoryCard from '../components/CategoryCard'
import { Container, Large, Small } from './styles'
import getAllCategories from '../services/Categories/getAllCategories'
import images from '../utils/images'

const Home: NextPage = (): JSX.Element => {
  const [categories, setCategories] = useState<string[]>([])

  const mountCategories = async () => {
    await getAllCategories(setCategories)
  }

  useLayoutEffect(() => {
    mountCategories()
  }, [])

  return (
    <Container>
      <Large>
        {categories && categories.length > 0
          ? categories.map((item, index) => (
              <CategoryCard key={item.id} image={images[index]} name={item} />
            ))
          : ''}
      </Large>
    </Container>
  )
}

export default Home
