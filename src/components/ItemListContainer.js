import { getMuffin, muffinData } from './ItemList.js'

export const ItemListContainer = () => {
    return (
        <div className="App">
            <h2>{muffinData.name}</h2>
            <p>{muffinData.description}</p>
            <p>{muffinData.price}</p>
            <p>{muffinData.stock}</p>
        </div>

    );
}