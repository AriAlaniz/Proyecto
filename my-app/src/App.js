import NavBar from './components/NavBar';
import './styles/App.css';
import ItemsConteiner from './components/ItemsListConteiner';
import './styles/cardItems.css';
import ItemDetailConteiner from './components/ItemDetailConteiner';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter/>
      <NavBar/>
      <Switch/>
      <Route exact path="/"/>
      <Home/>
      <Route path="/cart"/>
      <ItemsConteiner/>
      <ItemDetailConteiner/>
      <Route/>
      <Footer/>
      <BrowserRouter/>
    </>
  );
}

export default App;
