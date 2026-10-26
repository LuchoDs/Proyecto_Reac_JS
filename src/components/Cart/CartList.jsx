import { useCart } from "../../context/CartContext";
import { CartItem } from "./CartItem";

export const CartList = () => {
    const { cart } = useCart();

    return (
    
        <div className="contenedor-tarjetas">
        
        {cart.map ((element) => (
            <CartItem item ={element} key={element.id}/>
        ))};
        </div>
    );
};
