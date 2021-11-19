import React from 'react'; 
 import  NavBar  from './components/NavBar';
 import './styles/App.css';
 import { BrowserRouter, Switch} from 'react-router-dom';
 import Product from './components/Product';
 import Products from './components/Products';
 
 
 

 

function App () {
  return (
  <BrowserRouter>
    <Switch>
    <NavBar/>
    <Product/>
    <Products/>
    
    
    </Switch>
    </BrowserRouter>
  )
}
export default App;