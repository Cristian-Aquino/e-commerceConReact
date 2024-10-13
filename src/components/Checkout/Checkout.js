import './Checkout.css'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, documentId, getDocs, query, Timestamp, where, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import CheckoutForm from '../CheckoutForm/CheckoutForm'

const Checkout = () => {
    const[cargando, setCargando] = useState(false)
    const[ordenId, setOrdenId] = useState('')

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

    const crearOrden = async ({nombre, telefono, email }) => {
        setCargando(true)

        try{
            const objOrden = {
                buyer: {
                    nombre, telefono, email
                },
                items: carrito,
                total: precioTotal(),
                fecha: Timestamp.fromDate(new Date()) || null

            }

            const batch = writeBatch(db)

            const fueraDeStock = []

            const ids = carrito.map(prod => prod.id)

            const productosRef = collection(db, 'producto')

            const productosAddedFromFirestore = await getDocs(query(productosRef, where(documentId(), 'in', ids)))

            const { docs } = productosAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productoAgregadoAlCarrito = carrito.find(prod => prod.id === doc.id)
                const cantidadProducto = productoAgregadoAlCarrito?.cantidad

                if(stockDb >= cantidadProducto){
                    batch.update(doc.ref, { stock: stockDb - cantidadProducto})
                }
                else{
                    fueraDeStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(fueraDeStock.length === 0){
                await batch.commit()

                const ordenRef = collection(db, 'pedido')

                const ordenAgregada = await addDoc(ordenRef, objOrden)

                setOrdenId(ordenAgregada.id)
                vaciarCarrito()
            }
            else{
                console.log('Selecciono productos que estan fuera de stock')
            }
        }
        catch (error){
            console.log(error)
        }
        finally{
            setCargando(false)
        }
    }

    if(cargando){
        return <h1 className='aviso'>Se esta generando su orden, espere...</h1>
    }

    if(ordenId){
        return <h1 className='aviso'>El ID de su orden es: {ordenId}</h1>
    }


    return(
        <div>
            <CheckoutForm onConfirm={crearOrden} />
        </div>
    )
}

export default Checkout