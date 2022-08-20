import React from 'react'

export default function Item({product}) {
  return (
    <div>
        <p>{product.id}</p>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.stock}</p>
    </div>
  )
}
