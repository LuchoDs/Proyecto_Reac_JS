import "./Nav.css"
import { Link } from 'react-router-dom';


export const Nav = () => {
    
    return (
            <nav>
                <ul className="footer-nav">
                    <li><Link to="/" className="enlaces">HOME</Link></li>
                    <li><a className = "enlaces">CARRITO</a></li>
                    <li><Link to="/categorias" className="enlaces">CATEGORIAS</Link></li>
                    <li><Link to="/" className="enlaces">PRODUCTOS</Link></li>
                    <li><a className = "enlaces">SOBRE NOSOTROS/AS</a></li>
                </ul>
            </nav>
    );
};