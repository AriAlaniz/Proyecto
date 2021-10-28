import React, {useEffect, useState} from "react";
import CardItem from "./CardItem";
import { productList } from "./Cards";

const ItemsConteiner =  () => {
    console.log (productList)
    console.log(productList)
   
  

    return (
        <>
        <div className="containerItems">
        {productList.map(product => {
            return(
            <CardItem item= {productList[0]} />
            )
        })
               }
        </div>
        </>
    )
}
export default ItemsConteiner 