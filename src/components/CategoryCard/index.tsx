import Image from 'next/image'
import Link from 'next/link'
import { Card } from './styles'

interface CategoryCardProps {
  image: string
  name: string
}

function CategoryCard(props: CategoryCardProps): JSX.Element {
  return (
    <Card>
      <Image className="image" src={props.image} height={700} width={1300} />
      <Link href={`/category/${props.name.toLowerCase()}`}>
        <div className="info">
          <h2>{props.name}</h2>
          <p>SHOP NOW</p>
        </div>
      </Link>
    </Card>
  )
}

export default CategoryCard
