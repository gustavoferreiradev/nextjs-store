import type { NextPage } from 'next'
import CategoryCard from '../components/CategoryCard'
import { Container, Large, Small } from './styles'

const Home: NextPage = (): JSX.Element => {
  return (
    <Container>
      <Small>
        <CategoryCard image="https://imgur.com/uKQqsuA.png" name="Xbox" />
        <CategoryCard image="https://imgur.com/3Y1DLYC.png" name="PS5" />
        <CategoryCard image="https://imgur.com/Dm212HS.png" name="Switch" />
      </Small>
      <Large>
        <CategoryCard image="https://imgur.com/qb6IW1f.png" name="PC" />
        <CategoryCard
          image="https://imgur.com/HsUfuRU.png"
          name="Accessories"
        />
      </Large>
    </Container>
  )
}

export default Home
