import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({productos}) => {
    return(
        <div className='listaGrupo'>
            {productos.map(producto => <Item key={productos.id} {...producto} />)}
        </div>
    )
}

export default ItemList;