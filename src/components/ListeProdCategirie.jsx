import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ListeProdCategirie = () => {
  const { id } = useParams();
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`);
      return res.data;
    };

    getData().then((prods) => setProduits(prods));
  }, []);

  return (
    <div className='list'>
        <h1>Liste des produits de la categorie {id}: </h1>
        {produits.map(item => <div className='card' key={item.id}>
              <img src={item.images[0]} />
              <h2>{item.title}</h2>
              <button>Plus de details</button>
        </div> )}
    </div>
  );
};

export default ListeProdCategirie;
