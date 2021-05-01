import {muffinData} from './ItemList'

let getMuffin = new Promise ((resolve) => {
setTimeout (() => {
  resolve(getMuffin)
}, 2000)
})

.then((response) => {
  console.log('muffinData')
  for (let i = 0; i < response.length; i++){
    console.log("Muffin tittle:", response[i].name)
  }
})