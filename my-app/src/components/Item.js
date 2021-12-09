import { NavLink } from "react-router-dom";
//import '../styles/ItemsConteiner';
const Item = ({ pictureUrl, title, price, id, stock }) => {
    return (
        <>
            <div className="item">
                <NavLink to={`/item/${id}`} className="itemLinks">
                    <img src={pictureUrl} alt="Foto" className="itemPicture" />
                    <h3 className="Title">{title}</h3>
                    <h4 className="itemPrice">$ {price}</h4>
                    <button className="btnVer">Ver más!</button>
                    { stock > 1 ? <p className="stock">Quedan {stock} en stock!</p> : <p className="stock">Sin stock!</p>
                    }
                </NavLink>
            </div>
        </>
    )
}

export default Item;