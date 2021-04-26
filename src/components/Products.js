export const Productos = (props) => {
    const hacerClick = () => { alert(`Solo por hoy 2x1 en ${props.titulo}`) }

    return (
        <div onClick={hacerClick}>
            <h2>{props.titulo}</h2>
            <p>{props.precio}</p>
            <p>{props.descripcion}</p>
        </div>
    )
}