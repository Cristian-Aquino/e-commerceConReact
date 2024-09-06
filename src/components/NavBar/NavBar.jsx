
import { Link, NavLink } from "react-router-dom";
import CardWidget from "./components/CartWidget"
import './NavBar.css'

const NavBar = () => {
    return(
        <nav className="navBar">
            <h3>Tienda de libros</h3>
            <Link to='/'>
                <h3 className="inicio">Inicio</h3>
            </Link>
            <div className="categorias">
                <NavLink to={`/category/libro`} className={({isActive}) => isActive ? 'ActiveOpcion' : 'Option' }>Libros</NavLink>
                <NavLink to={`/category/comic`} className={({isActive}) => isActive ? 'ActiveOpcion' : 'Option' }>Ebooks</NavLink>
                <NavLink to={`/category/accesorio`} className={({isActive}) => isActive ? 'ActiveOpcion' : 'Option' }>Accesorios</NavLink>
            </div>
            <CardWidget />
        </nav>
    )
}

export default NavBar;