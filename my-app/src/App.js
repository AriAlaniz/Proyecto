import React from 'react';  
import  NavBar  from './components/NavBar';
import './styles/App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import  Footer from './components/Footer';
import Cart from './components/Cart';
import ItemDetailConteiner from './components/ItemDetailConteiner';
import ItemsListConteiner from './components/ItemsListConteiner';
import CartProvider from './components/CartContext';
import { getFirebase } from './Firebase';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemsListConteiner />
          </Route>
          <Route exact path="/category/:categoryId">
            <ItemsListConteiner greeting="Estás en la seccion: " categoryId=""/>
          </Route>
          <Route exact path="/item/:itemId">
            <ItemDetailConteiner />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;