import { Dispatch, SetStateAction } from 'react'

async function getAllCategories(
  setCategories: Dispatch<SetStateAction<string[]>>
) {
  fetch('https://fakestoreapi.com/products/categories')
    .then((res) => res.json())
    .then((json) => setCategories(json))
}

export default getAllCategories
