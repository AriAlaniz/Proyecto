import {useRef, useState} from "react";
import { useAuth } from "react" ;
import { Button } from "@material-ui/core";
import ConfirmPopUp from './ConfirmPopUs';

function Checkout ({close}) {
const { user, preference } = useAuth()
const { cart, clearCart } = useCart ()

const [name, setName] = useState (user ? '${user.name} ${user.lastName}': '')
const [tel, setTel] = useState (( user && user.tel) ? '${user.tel} ${user.tel}': '')
const [mail, setMail] = useState (( user && user.mail) ? '${user.mail} ${user.mail}': '')  
const [newOrder, setNewOrder] = useState (null)
const [popUpBox, setPopUpBox] = useState (false)



const nameInput = useRef (null)
const tellInput = useRef (null)
const mailInput = useRef (null)

const inputHandler = (e) => {
    switch (e.target) {
        case nameInput.current:
            setName(e.target.value)
            
            break;
   
        case telInput.current:
            setTel(e.target.value)
            
            break;
    
        case mailInput.current:
            setMail(e.target.value)
            
            break;
    
        default:
            break;
    }
}

const confirmHandler = (e) => {
    e.preventDefault()
    setPopUpBox(true)
}
const closeHandler = () => {
    if (newOrder){
        clearCart()
        close()
    } else {
        close()
    }
}

return  (
    <div className="backChek"> 
    <form className="">
  <i onClick={closeHandler} className=""></i>
  {
    !newOrder &&
    <>
    <h3>Confirmar</h3>

    <div className="inputConteiner">
        <label>Nombre completo</label>
        <input ref={nameInput} type='text' value={name} onChange={(e) => inputHandler(e) } />
    </div>
    <div className="inputConteiner">
        <label>Telefono</label>
         <input  type='number' value={tel} onChange={ (e)=>inputHandler(e) }></input> 
    </div>
    <div className="inputConteiner">
    <label>Email</label>
    <input  type='email' value={mail} onChange={ (e)=> inputHandler(e) }></input>
    </div>

    <Button onClick={ (e) => confirmHandler(e)} className="addBtn">Confirmar</Button>
    <ConfirmPopUp actionBtn={buy} box={{removeBox:popUpBox, setRemoveBox: setPopUpBox}}>
        <p>Confirma<br/><span>la compra?</span></p>
        </ConfirmPopUp>
        </>
  }
  { newOrder &&

  <h3>Gracias por tu compra, {name}!</h3>}

  <div className="inputConteiner">
      <p>Ya se ha procesado la compra con el numero de orden.<span>{newOrder}</span></p>
  </div>
  <div style={{alingSelf:'center'}}>
       Seguir comprando productos...
  </div>
  
    </form>
    </div>
  );
}
export default Checkout;