import React, {useEffect, useState} from "react";
import CardItem from "./CardItem";
import { productList } from "./Cards";
import ItemDetailConteiner from "./ItemDetailConteiner";


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
               <ItemDetailConteiner/>
        </div>
        </>
    )
}
export default ItemsConteiner