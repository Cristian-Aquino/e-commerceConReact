import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { carrito, vaciarCarrito, cantidadTotal, precioTotal } = useContext(CartContext)

    if(cantidadTotal === 0){
        return(
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to="/" className='Option'>Productos</Link>
            </div>
        )
    }

    return(
        carrito.length > 0 ?
        <div className='bodyCarrito'>
            {
                carrito.map((prod) => (
                    <div className='contenedorCarrito'>
                    <div className='detalleCarrito' key={prod.id}>
                        <h4>{prod.nombre}</h4>
                        <label>Precio Unitario: ${prod.precio}</label>
                        <label>Precio Total: ${prod.precio * prod.cantidad}</label>
                        <label>Cantidad: {prod.cantidad}</label>
                    </div>  
                    </div>  
                ))
            }
            <div className='detalleAcciones'>
                <h3>Total: ${precioTotal()}</h3>
                <button onClick={ () => vaciarCarrito()} className='Boton'>Vaciar Carrito</button>
                <Link to="/checkout" className='Boton'>Checkout</Link>
            </div>
            
        </div>
        :
        <h2 className='aviso'>El carrito esta vacio</h2>
    )
}

export default Cart