
import { Link, NavLink } from "react-router-dom";
import CardWidget from "./components/CartWidget"
import './NavBar.css'

const NavBar = () => {
    return(
        <nav className="navBar">
            <h3 className="titulo">Tienda de libros</h3>
            <Link to='/'>
                <h3 className="categoria">Inicio</h3>
            </Link>
            <div className="categorias">
                <NavLink to={`/category/libro`} className={(({isActive}) => isActive ? 'ActiveOption' : 'Option') + ' categoria'}> Libros </NavLink>
                <NavLink to={`/category/comic`} className={(({isActive}) => isActive ? 'ActiveOption' : 'Option') + ' categoria'}> Comics </NavLink>
                <NavLink to={`/category/accesorio`} className={(({isActive}) => isActive ? 'ActiveOption' : 'Option') + ' categoria'}> Accesorios </NavLink>
            </div>
            <CardWidget />
        </nav>
    )
}

export default NavBar;