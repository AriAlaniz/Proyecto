import '../styles/NavBar.css';
import logo from '../imag/logo.jpeg';
import CartWidgets from '../components/CartWidgets';
import { Link } from 'react-router-dom';
function NavBar() {
    return <>
        <nav className="conteiner">
           <Link Link to={'/cart'} ></Link><img src={logo}></img>
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


