import React from 'react'
import { useCartContext } from '../context/CartContext'

export default function ItemCart({product}) {
    const {removeProduct} = useCartContext();
  return (
    <div>
        <p>Nombre:{product.Name}</p>
        <p>Precio u.:{product.Price}</p>
        <p>Cantidad:{product.quantity}</p>
        <p>Subtotal: ${product.quantity * product.Price} </p>
        <button onClick={() => removeProduct(product.id)}>Eliminar</button>
    </div>
  )
}
