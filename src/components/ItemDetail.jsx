import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import {useCartContext} from '../context/CartContext'

export default function ItemDetail ({data}) {

    const [goToCart,setGoToCart] = useState(false);
    const{addProduct} = useCartContext();
    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data,quantity);
    }

  return (
    <div>
        <div>
            <h1>{data.Name}</h1>
            {
                goToCart
                ? <Link to='/cart'> Terminar compra</Link>
                : <ItemCount initial = {1} onAdd={onAdd} />
            }
        </div>
    </div>
  )
}
