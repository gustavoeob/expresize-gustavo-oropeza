import './App.css';
import NavBar from './components/navbar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/items/itemListContainer/ItemListContainer';
import Landing from './components/views/landing/Landing'
import Footer from './components/views/footer/Footer'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <ItemListContainer greetings='The catalog of our amazing language learning courses will be displayed here soon!' />
      <Footer />
    </div>
    
  );
}

export default App;
