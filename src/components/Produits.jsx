import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Produits() {

  const [produits, setProduits] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://api.escuelajs.co/api/v1/products')
      return res.data;
    }

    getData().then(prods => setProduits(prods));
  }, []);

  return (
    <div className='list'>
        <h1>Liste de nos produits : </h1>
        {produits.map(item => <div className='card' key={item.id}>
              <img src={item.images[0]} />
              <h2>{item.title}</h2>
              <button>Plus de details</button>
        </div> )}
    </div>
  )
}
