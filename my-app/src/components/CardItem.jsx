import Item from "../components/Item";
import '../styles/cardItems.css'

const ItemList = ({ products }) => {
    return (
        <>
            <div className="itemList">
                {products.map(n =>
                    <Item title={n.name} pictureUrl={n.image} price={n.price} id={n.id} stock={n.stock} />
                )}
            </div>
        </>
    )
}

export default ItemList;