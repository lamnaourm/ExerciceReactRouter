import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Categories() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://api.escuelajs.co/api/v1/categories')
      return res.data;
    }

    getData().then(categories => setCategories(categories));
  }, []);
  return (
    <div className='list'>
      <h1>Liste des categories de nos produits : </h1>
      {
        categories.map(item => <div className='card' key={item.id}> 
              <img src={item.image} />
              <h2>{item.name}</h2>
              <button>Liste des produits</button>
        </div>)
      }
    </div>
  )
}
