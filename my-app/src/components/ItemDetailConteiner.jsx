import React, { Component } from "react"; 


 export class ItemDetailConteiner extends Component {
             render () {
                 const {images, tab, myRef} = this.props;
                 return (
                     <div className="detail" ref={myRef}>
                         {
                         images.map((img, index) => (
                          <img src={img} key={index} 
                          onClick={() => tab(index)}
                           />
                 ))
                         }
             </div>
                 )
            }
 }

 export default ItemDetailConteiner
