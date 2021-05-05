import React, { useEffect } from 'react'
import { Items } from './Item.js'

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

const MostrarMuffin = () => {
  useEffect(() => {
    let getMuffin = new Promise((resolve) => {
      console.log('Obteniendo muffin')
      setTimeout(() => {
        resolve(muffinData)
      }, 2000)
    }) 
      getMuffin.then((response) => {
      console.log(response)
      for (let i = 0; i < response.length; i++) {
        console.log("Muffin title:", response[i].name)
        Items(response[i])
      }
    })
  })
}
