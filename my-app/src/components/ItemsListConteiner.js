import ItemList from '../components/CardItem';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';
import { collection, getFirestore, getDocs } from 'firebase/firestore';


const ItemsListContainer = ({ greeting, category }) => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);
    const { categoryId } = useParams();
    category = categoryId;

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        getDocs(collection(db, 'items'))
            .then((snapshot) => {
                let unfiltered = snapshot.docs.map((doc) => doc.data());
                console.log(categoryId, category, "1")
                switch (categoryId) {
                    case "Deco":
                        setProducts(unfiltered.filter(prod => prod.categoryId === "Deco"));
                        break;
                    case "Cocina":
                        setProducts(unfiltered.filter(prod => prod.categoryId === "Cocina"));
                        break;
                    case "Accesorios":
                        setProducts(unfiltered.filter(prod => prod.categoryId === "Accesorios"));
                        break;
                    case "Papeleria":
                        setProducts(unfiltered.filter(prod => prod.categoryId === "Papeleria"));
                        break;
                    default:
                        setProducts(unfiltered);
                        break;
                }

               
            })
            .catch((err) => {
                console.log('Ocurrió un error al obtener los productos: ' + err);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [categoryId]);

    return (
        <section className="container">
            {
                !loading && products ? (
                    <>
                        <h1 className="greeting">{greeting}{category}</h1>
                        <ItemList products={products} />
                    </>
                ) : (<Loader />)
            }
        </section>
    );
}

export default ItemsListContainer;