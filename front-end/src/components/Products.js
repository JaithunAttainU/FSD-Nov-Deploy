import React, { useState } from 'react'

function Products() {
  const [products, setProducts] = useState([])

  const getAllProducts = async () => {
    const response = await fetch('/api/products')
    const productsData = await response.json()
    setProducts(productsData)
  }
  return (
    <>
      <h1>Products</h1>
      <button onClick={getAllProducts}>Fetch Products</button>

      <ul>
        {products.map((product) => <li>{product.name} -- {product.price}</li>)}
      </ul>

    </>
  )
}

export default Products