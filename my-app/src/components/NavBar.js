import './NavBar.css';
import CartWidgets from './CartWidgets';
import logo from '../imag/logo.jpeg';

function NavBar() {
    return <>
        <nav>
            <img src={logo}></img>
        <ul>
            <li className='navLi'>Inicio</li>
            <li className='navLi'>Productos</li>
            <li className='navLi'>Como comprar</li>
            <li className='navLi'>Contacto</li>
        </ul>
            <CartWidgets/>
        </nav>
    </>
}
export default NavBar


