import "./Nav.css"
import { Link } from 'react-router-dom';
import { useCart } from "../../context/CartContext"




export const Nav = () => {
   const { getTotalItems } = useCart(); //desestructuro para poder usar la funcion getTotalItems que esta en el contexto 
   const totalItems = getTotalItems(); //llamo a la funcion para obtener el total de items en el carrito

    return (
            <nav>
                <ul className="header-nav">
                    <li><Link to="/" className="enlaces">HOME</Link></li>
                    <li><Link to="/" className="enlaces">PRODUCTOS</Link></li>
                    <li><Link to="/categorias" className="enlaces">CATEGORIAS</Link></li>
                    <li><Link to ="/cart" className="enlaces">
                        <img className="cart" src="/images/shopping-cart.png" alt="carrito" />
                        {totalItems > 0 && <span className = "badge"> {totalItems}</span>}
                        </Link>
                    </li>
                </ul>
            </nav>
    );
};