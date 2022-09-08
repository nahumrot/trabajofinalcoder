import React from 'react'
import { useCartContext } from '../context/CartContext'
import {Link} from 'react-router-dom';
import ItemCart from './ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export default function Cart() {
  const {cart, totalPrice} = useCartContext();

  const order = {
    buyer:{
      name: 'nahum',
      email: 'nahum@rud.com',
      phone: '6987452'
    },
    items: cart.map(product => ({ id:product.id, name: product.id, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }

  const handClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db,'orders');
    addDoc(ordersCollection, order)
  }

  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to= '/'> Hacer compras</Link>
      </>
    );
  }

  return (
    <>
        {
            cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        <p>
            total: {totalPrice()}
        </p>
        <button onClick={handClick}>Realizar compra</button>
    </>
  )
}
