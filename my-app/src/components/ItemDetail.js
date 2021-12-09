import '../styles/itemsDetails.css';
import { getFirestore } from '@firebase/firestore';;
import { useState, useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail.js';
import Loader from '../../components/Loader/Loader';
import { useParams } from 'react-router';
import { doc, getDoc, getFirestore } from '@firebase/firestore';
import { NavLink } from 'react-router-dom';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [itemDetail, setItemDetail] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemRef = doc(db, 'items', itemId);
        getDoc(itemRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setItemDetail(snapshot.data());
                } else throw Error('Artículo inexistente.');
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(setLoading(false));
        }, [itemId]);

    return (
        <>
            <div className="itemDetailContainer">
                {!loading ?
                    <> {itemDetail ?
                        (
                            <ItemDetail
                            name={itemDetail.name}
                            pictureUrl={itemDetail.image}
                            price={itemDetail.price}
                            description={itemDetail.description}
                        />) : <div>
                                <h1 className="greeting">El item no existe!</h1>
                                <NavLink to={'/'}><button className="cartBuy">Ir a los productos</button></NavLink>
                        </div>
                    } </>
                : (<Loader />)
                } 
                
                
            </div>
        </>
    );
}

export default ItemDetail;