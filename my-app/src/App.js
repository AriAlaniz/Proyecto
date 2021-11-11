import React from 'react'; 
 import  NavBar  from './components/NavBar';
 import './styles/App.css';
 import  ItemDetail  from './components/ItemDetail';
 import './styles/cardItems.css';
 //import ItemDetailConteiner from './components/ItemDetailConteiner';
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailConteiner } from './components/ItemDetailConteiner';
import { Footer } from './components/Footer';

 

function App () {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route exact path='/'>
    <ItemDetailConteiner/>
    </Route>
    <Route exact path='/Productos'>
     <ItemDetailConteiner/>
    </Route>
    <Route exact path='/Como comprar'>
      <ItemDetail/>
    </Route>
    <Route exact path='/Contacto'>
     <Footer/>
    </Route>
    </Routes>
    </BrowserRouter>
  )
}
export default App