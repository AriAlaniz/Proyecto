import React, {useEffect, useState} from "react";
import CardItem from "./CardItem";


const ItemsConteiner =  () => {
    console.log (producList)
    console.log(producList)
   
  

    return (
        <>
        <div className="containerItems">
        {productList.map(product => {
            return(
            <CardItem item= {producList[0]} />
            )
        })
               }
        </div>
        </>
    )
}
export default ItemsConteiner 