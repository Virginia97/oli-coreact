export const ItemCount = ({ stock, initial, onAdd }) => {
    var total = initial
    function quitarItem() {
        if (total > initial) {
            total--
            console.log(total)
        }
        return total
    }

    function agregarItem() {
        if (total < stock) {
            total++
            console.log(total)
        }
        return total
    }

    return (
        <div>
            <p>{total}</p>
            <button onClick={() => quitarItem()}>+</button>
            <button onClick={() => agregarItem()}>-</button>
            <button>Añadir al carrito</button>
        </div>
    );
}