 import React, { Component } from "react";

 export class ItemDetailConteiner extends Component {
             render () {
                 return (
                     <div className="detail" ref={this.myRef}>
                          <img src={img} key={index} 
                          onClick={() => this.handleTab(index)}
                           />
                 ))
             </div>
                 )
            }
 }

 export default ItemDetailConteiner
