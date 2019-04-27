import React, { useState } from 'react'
import ProductTable from './tables/ProductTable'
import AddProductForm from './forms/AddProductForm'

const App = () => {
  const productsData = [
    { id: 1, name: 'BAG', price: '100' },
    { id: 2, name: 'SKIRT', price: '200' },
    { id: 3, name: 'BOOK', price: '300' },
  ]
  const [products, setProducts] = useState(productsData)

  const addProduct = product => {
    product.id = products.length + 1
    setProducts([...products, product])
  }
  const deleteProduct = id => {
  
  setProducts(products.filter(product => product.id !== id))
 }
  return (
    <div className="container">
      <h1>App</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Product</h2>
          <AddProductForm addProduct={addProduct} />
        </div>
        <div className="flex-large">
          <h2>View Product</h2>
          <ProductTable products={products} deleteProduct={deleteProduct}/>
        </div>
      </div>
    </div>
  )
}
export default App 