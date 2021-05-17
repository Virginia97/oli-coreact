import { muffinData } from './ItemList.js'

function ItemDetail({ muffinData }) {
    return (
        <div className="App">
            {muffinData.map(muffin =>
                <>
                    <h2>{muffin.name}</h2>
                    <p>{muffin.description}</p>
                    <p>{muffin.price}</p>
                    <p>{muffin.image}</p>
                </>
            )} 
        </div>
    );
}
 