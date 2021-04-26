import './App.css';
import { Navbar } from './components/NavBar.js';
import { Productos } from './components/Products.js';
const listaProductos = [{
  titulo: 'Cupcake Chocolate',
  precio: 80,
  descripcion: 'Muffin de chocolate semi amargo'
},
{
  titulo: 'Cupcake Blueberry',
  precio: 100,
  descripcion: 'Muffin de arandanos'
}]

function App() {
  return (
    <div className="App">
      <Navbar />
      <Productos
        titulo={listaProductos[0].titulo}
        precio={listaProductos[0].precio}
        descripcion={listaProductos[0].descripcion}
      />
      <Productos
        titulo={listaProductos[1].titulo}
        precio={listaProductos[1].precio}
        descripcion={listaProductos[1].descripcion}
      />
      </div>

  );
}

export default App;
