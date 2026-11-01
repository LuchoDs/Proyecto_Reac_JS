import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { CartList } from "./CartList"
import { CartSummary } from "./CartSummary";
import "./Cart.css";

export const CartView = () => {
    const  {cart, clearCart} = useCart();
    
   
    return (
    <section className="cart-container">
        <h3 className ="titulo-principal text-dark">Tu carrito de compras</h3>

        {cart.length ? (
            <>  {/* // Fragments <></> me permite renderizar mas de una cosa */}
            <section className="section-cart">
                
                <aside className="cart-list">
                    <CartList/>
                </aside>
                    
                
                <aside className="cart-wrapper">
                    
                    <CartSummary/>

                    <button className="btn bg-secondary text-dark" onClick={clearCart}>Vaciar Carrito</button>
                </aside>
                </section>
            </>
            ) : (
            <>
            <div className="empty-cart-wrapper">
                <p className="empty-cart">Tu carrito está vacío 😶</p>
                <Link className="btn bg-secondary text-dark btn-link" to={"/"}>
                    Volver
                </Link>
            </div>
            </>
        )}
    </section>
    );
};
