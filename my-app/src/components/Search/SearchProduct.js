import { Container,Button } from "react-bootstrap"
import {NavLink} from 'react-router-dom'
import '../Checkout/check.css';
export const SearchProduct=()=>{
    return(
        <Container className="bg-Search pt-2 pb-2">
            <h1>No hay productos en el carrito.</h1>
            <h3>Vamos a buscar?🧐</h3>
            <Button variant="success"><NavLink to='/' activeClassName="linkHomeA" className="boton">Volver al Inicio</NavLink></Button>
        </Container>
    )
}