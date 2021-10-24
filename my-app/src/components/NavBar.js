import './styles/NavBar.css';
import CartWidgets from './CartWidgets';
import logo from '../imag/logo.jpeg';

function NavBar() {
    return <>
        <nav className="conteiner">
            <img src={logo}></img>
            <li className='navLi'>Inicio</li>
            <li className='navLi'>Productos</li>
            <li className='navLi'>Como comprar</li>
            <li className='navLi'>Contacto</li>
            <CartWidgets/>
        </nav>
    </>
}
export default NavBar


