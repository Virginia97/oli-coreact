import { ItemCount } from './ItemCount.js';

export const Productos = (props) => {
    const hacerClick = () => { alert(`Solo por hoy 2x1 en ${props.titulo}`) }

    return (
        <div className="App">
            <div onClick={hacerClick}>
                <h2>{props.titulo}</h2>
                <p>{props.precio}</p>
                <p>{props.descripcion}</p>
            </div>
            <ItemCount stock='5' initial='1' />
        </div>
    )
}