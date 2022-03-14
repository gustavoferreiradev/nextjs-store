async function getProductsByCategory(setProducts, categoryName: string) {
  fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
    .then((res) => res.json())
    .then((json) => setProducts(json))
}

export default getProductsByCategory
