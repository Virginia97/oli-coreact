function ItemDetail({ muffinData }) {
    return (
        <div className="App">
            {muffins.map((muffin) => {<ItemDetail muffinData={muffinData}/> 
            <>
            <h2>{muffin.name}</h2>
            <p>{muffin.description}</p>
            <p>{muffin.price}</p>
            <p>{muffin.image}</p>
            </>
            })
        </div>
    );
}
