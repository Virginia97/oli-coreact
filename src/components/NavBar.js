import logo from './../logomuffin.png';
import { Carrito } from './../components/CartWidget.js';

export const Navbar = () => {
  return (
    <div className="App">
      <header className="navbar">
      <img src={logo} alt="" /> 
        <h1>Oli & Co Bakery</h1>
        <nav className="navigation">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
            <Carrito/>
          </ul>
        </nav>
      </header>
      
    </div>
  );
}