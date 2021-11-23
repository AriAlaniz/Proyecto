import {useEffect, useState} from "react";
import { useParams } from "react-router";
//import Loader from "react-loader-spinner";
import '../styles/ItemsListConteiner';
import { getFirestore } from '../../Firebase';
import { collection, query, where, getDocs } from "firebase/firestore";


function ItemsListConteiner({categories}) {
    
    const [products, setProducts] = useState(null)
    const [msg, setMsg] = useState (null)
    const [loading, setLoading] = useState (true)
    const {id} = useParams()

useEffect( () => {
    setProducts (null)
    setLoading (true)


    const db = getFirestore();
    let q

    const isInCategories = categories.find( category => category.key === id)
    const hasIdAndIsInCategory = id && isInCategories
    const dinamicMsg = id && isInCategories ? "Productos de " + id: "Todos nuestros productos"

        q= query(
            collection(db, "items"),
            hasIdAndIsInCategory ? where ("category","==", id): undefined
        );
        
    getDocs(q).then ( snapshot => {

        setProducts(
            snapshot.docs.map( doc=> {
                const productInBase = { ...doc.data(), id: doc.id};
                return productInBase;
            })
        )
        setMsg(dinamicMsg)
        setLoading(fasle)
    })
}, [id, categories])
}


return (
    <div className="ItemListConteiner">
        {products &&
        <>
        {id && <h3 className="Title">{msg}</h3>}
        <ItemList items={products}/>
        </>
        }
        {loading && <Loader type='Rings' color='var(---accent-font-color)' height={80} width={80}/>}

    </div>
);

export default ItemsListConteiner