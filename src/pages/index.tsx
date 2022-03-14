import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import CategoryCard from '../components/CategoryCard'
import { Container, Large } from '../styles/pages/Home'
import getAllCategories from '../services/Categories/getAllCategories'
import images from '../utils/images'
import { v4 as uuid } from 'uuid'

const Home: NextPage = (): JSX.Element => {
  const [categories, setCategories] = useState<string[]>([])

  const mountCategories = async () => {
    await getAllCategories(setCategories)
  }

  useEffect(() => {
    mountCategories()
  }, [])

  return (
    <Container>
      <Large>
        {categories && categories.length > 0
          ? categories.map((item, index: number) => (
              <CategoryCard image={images[index]} name={item} key={uuid()} />
            ))
          : ''}
      </Large>
    </Container>
  )
}

export default Home
