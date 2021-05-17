import './App.css';
import { Navbar } from './components/NavBar.js';
import { ItemListContainer } from './components/ItemListContainer.js';
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
