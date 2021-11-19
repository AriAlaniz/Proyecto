import React, { useEffect } from 'react';
import '../styles/itemsDetails.css';
import { getFirebase } from '../../Firebase';

export default function App(){
    useEffect(() => {
   const db=
    }, []);
}

class App extends React.Component {
    state= {
        products: [
            {
        "_id": "1",      
        "title": "Autocebante",
        "picture": ["./imag/autocebante.jpeg" ],
        "price": 800,
        "description": "capacidad de 800cc incluye bombilla material de plastico reforzado", 
        "colors": ["pink", "red", "green", "white"],
        "stock": 6
    }
  ]
}

render () {
 const { products } = this.state;
 return(
     <div className="App">
      {
          products.map(item =>(
              <div className="details">
              <div className="big-img">
                  <img src={item.src[0]}/>
              </div>
              <div className="box">
                  <div className="row"> 
                        <h2>{item.title}</h2>
                        <span>${item.price}</span>
                  </div>
                    <div className="colors">
                        {
                            item.colors.map(color =>(
                                <button style={{background: color}}></button>
                            ))
                        }
                    </div>
                    <p>{item.description}</p>
                    <p>{item.content}</p>

                    <div className="thumb"> 
                    {
                        item.src.map(img=>(
                            <img src={img}></img>
                        ))
                    }
                    </div>
                    <button className="carrito">Agregar al carrito</button>
              </div>
              </div>
          ))
      }
     </div>
  );   
 }
} 
export default App