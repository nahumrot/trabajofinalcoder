import React, {useEffect, useState} from 'react';
import {collection, getDocs, getFirestore} from 'firebase/firestore';
import ItemList from './ItemList';

export default function ItemListContainer() {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        const db = getFirestore();
        const miCollection = collection (db, 'products');
    
        getDocs(miCollection).then((data) => {
            const auxProducts = data.docs.map ((products) => ({
                ...products.data(),
                id:products.id,
            }));
            setProducts(auxProducts);
        });
    },[]);
    

  return (
    < ItemList products={products} />
  )
}
