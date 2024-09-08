
import './ItemDetail.css'

const ItemDetail = ({id, nombre, img, categoria, descripcion, precio, stock}) => {
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
                <button className="detalle">Ver detalles</button>
            </footer>
        </article>
    )
}

export default ItemDetail;