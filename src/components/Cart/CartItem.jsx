import { Item } from "../Item/Item"
import { useCart } from "../../context/CartContext"
import "./Cart.css"

export const CartItem = ({item}) => { // recibe "item" de CartList
    const { removeItem } = useCart();

    return (
    <div className="btn-wrapper">
        <Item {...item}>

        <button className="btn bg-secondary text-dark"
            
            onClick={()=> removeItem(item.id)}> {/* //como en la funcion defini que el parametro sea un string, es que hago item.id */}
            Eliminar
        </button>
    
        </Item> {/* //se lo paso a Item con spread operator para que Item pinte la tarjeta */}

    </div>
    
    )}