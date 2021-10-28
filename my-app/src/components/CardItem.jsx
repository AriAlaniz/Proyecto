import React, { useState } from "react";
import Counter from '../components/Counter';
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


return (
    <div className="containerCard">
    <img src={item.picture}/>
    <h3>{item.title}</h3>
    <p>{item.description}</p>
    <p>{item.price}</p>
    <Counter onAdd={onAdd} onDis={onDis} initial={counter}/>
    </div>
)
}

export default CardItem 