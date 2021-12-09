import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
//import '../styles/cart';
import { AddShoppingCart } from '@material-ui/icons';


function Cart() {
    const {cart} = useCart ()

    return (
        <div className="Cart">

            { cart.length === 0 ?
            <section className="empCart">
                <div className="empMsg">
                    <i className="fas- fa-shopping-cart"></i>
                    <article>Todavia no has agregado ningun producto a tu carrito </article>
                     
                </div>
                <Link className="rendirect" to="/"><AddShoppingCart></AddShoppingCart>Buscar mas productos...</Link>

            </section>
            :
            <Cart cart={cart}/>
            }


        </div>
    );
}
export default Cart