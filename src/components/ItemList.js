import React, { useEffect, useState } from 'react'
import { Items } from './Item.js'
import { ItemListContainer } from './ItemListContainer.js'
export const muffinData = [
  {
    name: 'Cupcake Chocolate',
    description: 'Muffin de chocolate semi amargo',
    price: 80,
    stock: 5,
  },
  {
    name: 'Cupcake Blueberry',
    description: 'Muffin de arándanos',
    price: 100,
    stock: 5,
  },
  {
    name: 'Muffin Frutilla',
    description: 'Muffin de frutillas',
    price: 90,
    stock: 5,
  }
]

export const ItemList = () => {
  const [muffins, setMuffins] = useState([]);
  useEffect(() => {
    const getProducts = () => {
      return new Promise((resolve, reject) => {
        resolve(muffinData);
        console.log(muffinData)
      }).then(data => setMuffins(data)
      );
    };
    setTimeout(() => {
      getProducts();
    }, 2000);
  }, []);
  console.log(muffins)
  return (
    <div>
      <ItemListContainer
        muffins={muffins} />
      {muffins.map((nombre) =>
        <div>
          <p>{nombre.name}</p>
        </div>
      )}
    </div>
  )
}

















/*import { useState, useEffect } from 'react';

export const muffinData = [
  {
    name: 'Cupcake Chocolate',
    description: 'Muffin de chocolate semi amargo',
    price: 80,
    stock: 5,
  },
  {
    name: 'Cupcake Blueberry',
    description: 'Muffin de arándanos',
    price: 100,
    stock: 5,
  },
  {
    name: 'Muffin Frutilla',
    description: 'Muffin de frutillas',
    price: 90,
    stock: 5,
  }
]

export muffins ()
const [muffins, setMuffins] = useState([]);


const getMuffin = () => {
  new Promise(
    (resolve) => {
      setTimeout(() => {
        resolve(muffinData);
      }, 2000);
    },
    (reject) => {
      if (muffinData) reject ("Lo sentimos 😥 Error del servidor");
    }
  ).then ((resolve) => {
    setMuffins(resolve);
  });
};

useEffect(() => {
  getMuffin();
}, []);
}*/



