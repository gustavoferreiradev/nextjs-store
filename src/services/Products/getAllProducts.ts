async function getAllProducts(setProducts) {
  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((json) => setProducts(json))
}

export default getAllProducts
