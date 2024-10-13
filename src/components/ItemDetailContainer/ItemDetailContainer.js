import './ItemDetailContainer.css'
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const [cargando, setCargando] = useState(true)

    const { itemId } = useParams();

    useEffect(() => {
        setCargando(true)

        const docRef = doc(db, 'producto', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productoAdapted = { id: response.id, ...data}
                setProducto(productoAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setCargando(false)
            })
    }, [itemId])

    if(cargando){
        return <h1 className="aviso">Cargando el sitio...</h1>
    }

    return(
        <div className="itemDetailContainer">
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer;