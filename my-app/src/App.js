 import React from 'react';  
 import  NavBar  from './components/NavBar';
 import './styles/App.css';
 import { BrowserRouter, Switch, Route} from 'react-router-dom';
 import  Footer  from './components/Footer';
//import { Switch } from '@material-ui/core';
import { Home } from './components/Home';
import  { NotFound } from './components/NotFound';

 
 

 
function App () {
  return (
  <BrowserRouter>
    <NavBar/>
  <Switch>
   <Route exact path="/">
      <Home />
   </Route>
    <Route path="*">
       <NotFound/>
    </Route>
  </Switch>
   <Footer/>
  </BrowserRouter>
  );
}

export default App;