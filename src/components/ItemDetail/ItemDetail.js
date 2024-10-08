
import { useContext, useState } from 'react';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";

import CartContext from '../../context/CartContext';

const ItemDetail = ({id, nombre, imagen, categoria, descripcion, precio, stock}) => {
    const [cantidadAgregada, setCantidadAgregada] = useState(0)

    const { agregarItem } = useContext(CartContext)

    const handleOnAdd = (cantidad) => {
        setCantidadAgregada(cantidad)

        const item = {
            id, nombre, precio
        }

        agregarItem(item, cantidad)
    }

    return(
        <article className="articulo">
            <header className='Header'>
                <h2 className="itemHeader">
                   {nombre} 
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className="itemImg"/>
            </picture>
            <section>
                <p className="info">
                    Categoria: {categoria}
                </p>
                <p className="info">
                    Descripcion: {descripcion}
                </p>
                <p className="info">
                    Precio: ${precio}
                </p>
                
            </section>
            <footer className="itemFooter">
                {
                    cantidadAgregada > 0 ? (
                        <Link to='/cart' className="Option">Ir al Carrito</Link>
                    ) : (
                        <ItemCount inicial={1} stock={stock} agregarCarrito={handleOnAdd}></ItemCount>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail;