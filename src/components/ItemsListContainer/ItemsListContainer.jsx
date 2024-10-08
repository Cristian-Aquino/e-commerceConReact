import { useEffect, useState } from "react";
/*import { getProductosByCategoria } from '../../asyncMock';*/
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemsListContainer = () => {

    const[productos, setProductos] = useState ([])
    const[cargando, setCargando] = useState([])

    const { categoriaId } = useParams()

    useEffect(() => {
        setCargando(true)

        const collectionRef = categoriaId
            ? query(collection(db, 'producto'), where('categoria', '==', categoriaId))
            : collection(db, 'producto')

        getDocs(collectionRef)
            .then(response => {
                const productosAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProductos(productosAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setCargando(false)
            })

    }, [categoriaId])

    if(cargando){
        return <h1 className="aviso">Cargando el sitio...</h1>
    }


    return <>
        <ItemList productos={productos}></ItemList>
    </>
}

export default ItemsListContainer;
