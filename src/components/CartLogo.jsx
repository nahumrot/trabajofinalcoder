import React from 'react'
import { useCartContext } from '../context/CartContext'

export default function CartLogo() {
  const {totalProducts} = useCartContext();

  return (
    <>
      <i className="bi bi-cart-check-fill"></i>
      <span> {totalProducts() || ''} </span>
    </>
  )
}
