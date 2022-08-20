import React from 'react'
import Item from './Item'

export default function ItemList({products}) {
  return (
    <div>
        {products.map((products) =>
        (<Item products={products}/>
        ))}
    </div>
  )
}
