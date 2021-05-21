import React, { useEffect, useState } from 'react'
import { muffinData } from './ItemList.js';
import { ItemDetail } from './ItemDetail.js';

export const ItemDetailContainer = () => {
    const [muffins, setMuffins] = useState([]);
    useEffect (() => {
        const getProducts = async () => {
         const response = await fetch({muffinData});
         setMuffins(muffins.items);
        };
    } , []);
    console.log(muffins.items);

    return(
        <div>
            <h1>Productos</h1>
            {
                muffins.length < 1
                ? <p>No se han encontrado productos</p>
                : muffins.map((muffins) => <ItemDetail />
            )
            }
        </div>
    )
}
   



