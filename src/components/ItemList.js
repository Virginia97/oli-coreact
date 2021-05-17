import React, { useEffect, useState } from 'react'
import { Items } from './Item.js'
import { ItemListContainer } from './ItemListContainer.js'
export const muffinData = [
  {
    name: 'Cupcake Chocolate',
    description: 'Muffin de chocolate semi amargo',
    price: 80,
    image: 'src/images/chocolate.jpg',
  },
  {
    name: 'Cupcake Blueberry',
    description: 'Muffin de arándanos',
    price: 100,
    image: 'src/images/blueberry.jpg',
  },
  {
    name: 'Muffin Frutilla',
    description: 'Muffin de frutillas',
    price: 90,
    image: 'src/images/muffinfrutilla.png',
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





















