import { productList } from "./Cards";
import '../styles/itemsDetails.css';
import React from "react";

class App extends React.Component {
    state= {
        products: [

        ],
        index:0
    }
};

myRef = React.createRef();
const images = this.myRef.current.children;
for(let i=0; i<images.length; i++){
    images [i].className = images [i].className.replace("active", "");
}
images [index].className = "active";

handleTab = index => {
    this.setState({index: index})
}


render () 
    const {productos, index} = this.state;
    return (
        <div className="App">
    {
productList.map(item =>{
    <div className="details">
     <div className="bigImg">
        <img src={item.src[0]}/>
     </div>

    <div className="box">
        <div className="row">
        <h2>{item.tilte}</h2>
        <span>${item.price}</span>
    </div>

    <div className="colors">
        {
            item.colors.map((color, index) => (
                <button style={{background: color}} key={index}></button>
            ))
        }
    </div>
    <p>{item.description}</p>
    <p>{item.content}</p>

    <div className="detail" ref={this.myRef}>
             {
                 item.src.map((imag,index) => (
                     <img sc={img} key={index}/>
                 ))
             }
    </div>

    <button className="cart">Agregar al carrito</button>

         </div>
    </div>
}
    </div>
};)


export default App