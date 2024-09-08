import { Link } from "react-router-dom";
import './Item.css'

const Item = ({id, nombre, img, precio, stock}) => {
    return(
        <article className="articulo">
            <header className='Header'>
                <h2 className="itemHeader">
                   {nombre} 
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="itemImg"/>
            </picture>
            <section>
                <p className="info">
                    Precio: ${precio}
                </p>
                <p className="info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="itemFooter">
                <Link to={`/item/${id}`} className="detalles">Ver detalles</Link>
            </footer>
        </article>
    )
}

export default Item;