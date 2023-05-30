import CartWidget from '../CartWidget/CartWidget';
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav_brand">
                    <a className="nav_link" href="#">Ecommerce</a>
                </div>
                <ul className="nav_list">
                    <li>
                        <a className="nav_link" href="#">Inicio</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">Productos</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">Contacto</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#"><CartWidget /></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
