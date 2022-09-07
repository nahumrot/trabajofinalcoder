import React, {useEffect, useState} from 'react';
import {collection, getDocs, getFirestore} from 'firebase/firestore';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

export default function ItemListContainer({texto}) {
    const [data,setData] = useState([]);
    const {IdCategory} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection (querydb, 'products');
    
        getDocs(queryCollection)
        .then(res => { setData(res.docs.map(product => ({id: product.id, ...product.data()})))
  
        })
    },[IdCategory]);
    

  return (
    < ItemList data={data} />
  )
}
