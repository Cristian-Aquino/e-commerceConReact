import './ItemCount.css'
import { useState } from 'react'

const ItemCount =({stock, inicial, agregarCarrito}) => {
    const [cantidad, setCantidad] = useState(inicial)

    const incrementar = () => {
        if(cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }

    const disminuir = () => {
        if(cantidad > 1){
            setCantidad(cantidad - 1)
        }
    }


    return(
        <div className='Contador'>
            <div className='Controles'>
                <button className='Boton' onClick={disminuir}>-</button>
                <h4 className='Numero'>{cantidad}</h4>
                <button className='Boton' onClick={incrementar}>+</button>
            </div>
            <div className='AgregarCarrito'>
                <button className='Boton' onClick={() => agregarCarrito(cantidad)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>

        </div>

    )
}

export default ItemCount