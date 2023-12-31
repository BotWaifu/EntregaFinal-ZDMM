
import { useEffect, useState } from "react"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'


import {getDocs, collection, query, where} from "firebase/firestore"
import {db} from "../../services/firebase/firebaseConfig"


const ItemListContainer = () => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(true);

    const { categoryId} = useParams ()
    
    useEffect (() => {
        setLoading (true);

        const collectionRef = categoryId
        ? query(collection(db, "products"), where("category", "==", categoryId))
        : collection(db, "products");
    
      getDocs(collectionRef)
        .then((response) => {
          const productsAdapted = response.docs.map((doc) => {
            const data = doc.data();
            return { id: doc.id, ...data };
          });
          console.log("Products:", productsAdapted);
          setProducts(productsAdapted);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [categoryId]);
    
    return (
        <div className="ItemListContainer">
          {loading ? (
            <p>Cargando...</p>
          ) : (
            <ItemList products={products} />
          )}
        </div>
      );
    };
export default ItemListContainer;
