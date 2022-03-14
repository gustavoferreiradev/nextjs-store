import { Dispatch, SetStateAction } from 'react'
import { Product } from '../../types/Product'

async function getProductsByCategory(
  setProducts: Dispatch<SetStateAction<Product[]>>,
  categoryName: string
) {
  fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
    .then((res) => res.json())
    .then((json) => setProducts(json))
}

export default getProductsByCategory
