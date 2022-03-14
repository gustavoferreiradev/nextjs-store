async function getAllCategories(setCategories) {
  fetch('https://fakestoreapi.com/products/categories')
    .then((res) => res.json())
    .then((json) => setCategories(json))
}

export default getAllCategories
