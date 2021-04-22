import './App.css';
import logo from './logomuffin.png';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo}/>
        <nav className="navigation">
          <ul>
            <li><a href="">Inicio</a></li>
            <li><a href="">Productos</a></li>
            <li><a href="">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <h1>Oli & Co Bakery</h1>
    </div>
  );
}

export default App;
