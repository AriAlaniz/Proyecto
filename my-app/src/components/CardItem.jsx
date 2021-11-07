import React, { Component, useState } from "react";
import Counter from './ItemCount';
import '../styles/cardItems.css'

const CardItem = ({item})=>{

    const [counter, setCounter] = useState(1)
    const [arrayP, setArrayP] = useState([])

    const onAdd= () => {
        if(counter === item.stock){
            alert('No hay mas stock')
        }else {
            setCounter( counter + 1)
        }
    }

    const onDis = () => {
        if(counter === 1){
            alert ('No puede tener 0 productos')
        }else{
            setCounter ( counter - 1)
        }
    }


const [prueba, setPrueba] = useState(false)

/*useEffect(()=>{
setPrueba(true)
},[])

useEffect(()=> {
    setArrayP([...arrayP, counter])
},[counter])*/


class CardItem extends Component {
render ()
const = {picture, title, description, price} = this.props; 

return (
    <>
    <div className="conteinerCard">
    <img className="img">key={item.picture}</img>
    <h3 className="title">key={item.title}</h3>
    <p className="text">key={item.description}</p>
    <p className="text">key={item.price}</p>
    <Counter onAdd={onAdd} onDis={onDis} initial={counter} stock={item.stock}/>
    </div>
    </>
)
}

export default CardItem 