import './App.css';
import { Navbar } from './components/NavBar.js';
import { Productos } from './components/ItemListContainer.js';
import { muffinData } from './components/ItemList'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
