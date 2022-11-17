import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailsProduit = () => {
  const { id } = useParams();
  const [produit, setProduit] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      return res.data;
    };

    getData().then((prod) => setProduit(prod));
  }, []);
  return <div>
    {
        produit && <table>
            <tr>
                <td colSpan={2}> 
                    <img src={produit.images[0]} />
                    <img src={produit.images[1]} />
                    <img src={produit.images[2]} />
                </td>
            </tr>
            <tr>
                <td>Nom de produit</td>
                <td>{produit.title}</td>
            </tr>
            <tr>
                <td>Description de produit</td>
                <td>{produit.description}</td>
            </tr>
            <tr>
                <td>Prix de produit</td>
                <td>{produit.price}</td>
            </tr>
        </table>
    }
    
  </div>;
};

export default DetailsProduit;
