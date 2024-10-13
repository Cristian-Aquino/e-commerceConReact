import carrito from './Imagenes/carrito.png'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CardWidget = () => {
    const {cantidadTotal} = useContext(CartContext)

    return <>
        <Link to="/cart" className='CartWidget' style={{ display: cantidadTotal() > 0 ? 'block' : 'none'}}>
            <img className="carrito" src={carrito} alt='carrito'/>
            <label className='cantidadProductos'> {cantidadTotal()} </label>
        </Link>
    </>
}

export default CardWidget;