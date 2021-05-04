import { ItemCount } from './ItemCount.js';

export const Items = (props) => {
    console.log(props)
    const hacerClick = () => { alert(`Solo por hoy 2x1 en ${props.titulo}`) }

    return (
        <div className="App">
            <div onClick={hacerClick}>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <p>{props.price}</p>
                <p>{props.stock}</p>
            </div>
            <ItemCount stock='5' initial='1' />
        </div>
    )
}