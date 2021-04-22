import './App.css';
import logo from './logomuffin.png';

function App() {
  return (
    <div className="App">
      <header className="navbar">
      <img src={logo} /> 
        <h1>Oli & Co Bakery</h1>
        <nav className="navigation">
          <ul>
            <li><a href="">Inicio</a></li>
            <li><a href="">Productos</a></li>
            <li><a href="">Contacto</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;