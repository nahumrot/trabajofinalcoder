import React, {useState} from 'react'
import { useContext } from 'react';
import Cart from '../components/CartLogo';
export const CartContext = React.createContext([]); 
export const useCartContext = () => useContext(CartContext);


export default function CartProvider({Children}) {
    const [cart,setCart] = useState([]);

const addProduct = (item, quantity) => {
    if (isInCart(item.id)){
        setCart(cart.map(product => {
            return product.id === item.id ? {...product,quantity: product.quantity + quantity } : product
        }));
    }   else {
        setCart([...cart, {...item, quantity}]);
    }
}
    const totalPrice = () => {
        return Cart.reduce((prev,act) => prev + act.quantity * act.price, 0);
    }
    const totalProducts = () => cart.reduce ((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
    const clearCart = () => setCart([]);
    const isInCart = (id) => cart.find (product => product.id === id) ? true : false;
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

  return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart
    }}>
        {Children}
    </CartContext.Provider>
  )
}
