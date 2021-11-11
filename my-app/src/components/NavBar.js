import '../styles/NavBar.css';
import logo from '../imag/logo.jpeg';
import CartWidgets from '../components/CartWidgets';
import { Link } from 'react-router-dom';
function NavBar() {
    return <>
        <nav className="conteiner">
           <Link Link to={'/cart'} ></Link><img src={logo}></img>
        <ul>
            <li className='navLi' to="/Inicio">Inicio</li>
            <li className='navLi' to="/Productos">Productos</li>
            <li className='navLi'to="/Como comprar">Como comprar</li>
            <li className='navLi' to="/Contacto">Contacto</li>
        </ul>
          <CartWidgets/>
        </nav>
    </>
}
export default NavBar


