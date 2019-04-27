import React, { useState } from 'react'

const AddProductForm = props => {
  const initialFormState = { id: null, name: '', price: '' }
  const [product, setProduct] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setProduct({ ...product, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!product.name || !product.price) return
        
        props.addProduct(product)
        setProduct(initialFormState)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={product.name} onChange={handleInputChange} />
      <label>Price</label>
      <input type="text" name="price" value={product.price} onChange={handleInputChange} />
      <button>Add new Product</button>
    </form>
  )
}
export default AddProductForm 