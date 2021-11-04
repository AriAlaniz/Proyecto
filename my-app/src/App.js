import NavBar from './components/NavBar';
import './styles/App.css';
import ItemsConteiner from './components/ItemsListConteiner';
import './styles/cardItems.css';
import ItemDetailsConteiner from './components/ItemDetailConteiner';


function App() {
  return (
    <>
      <NavBar/>
      <ItemsConteiner/>
      <ItemDetailsConteiner/>
    </>
  );
}

export default App;
