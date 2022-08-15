import './App.css';
import NavBar from './components/navbar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/items/itemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings='The catalog of our amazing language learning courses will be displayed here soon!' />
    </div>
    
  );
}

export default App;
