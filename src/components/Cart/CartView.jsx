import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { CartList } from "./CartList"
import { CartSummary } from "./CartSummary";
import "./Cart.css";

export const CartView = () => {
    const  {cart, clearCart} = useCart();
    
   
    return (
    <section className="cart-container">
        <h1 className ="titulo-principal text-dark">Tu carrito de compras</h1>

        {cart.length ? (
            <>  {/* // Fragments <></> me permite renderizar mas de una cosa */}
                <div>
                    <CartList/>
                    <CartSummary/>
                </div>
                <div className="cart-wrapper">
                    <button className="btn bg-secondary text-dark" onClick={clearCart}>Vaciar Carrito</button>
                </div>
            </>
            ) : (
            <>
            <p className="empty-cart">Tu carrito está vacío 😶</p>
            <Link className="btn bg-secondary text-dark" to={"/"}>
                Volver
            </Link>
            </>
        )}
    </section>
    );
};
