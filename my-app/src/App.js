import React from 'react'; 
 import NavBar from './components/NavBar';
 import './styles/App.css';
 import ItemsConteiner from './components/ItemsListConteiner';
 import './styles/cardItems.css';
 //import ItemDetailConteiner from './components/ItemDetailConteiner';
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
 

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/"> 
          {/* Home */}
        </Route>
        <Route path="/cart"/>
          <ItemsConteiner/>
        <Route/>
      </Routes>
    </BrowserRouter>
  )
}

// function App() {
//   return (
//     <>
//       <BrowserRouter/>
//       <NavBar/>
//       <Routes/>
//       <Route exact path="/"/>
//       <Home/>
//       <Route path="/cart"/>
//       {/* <ItemsConteiner/> */}
//       <Route/>
//       <Footer/>
//       <BrowserRouter/>
//     </>
//   );
// };

export default App;