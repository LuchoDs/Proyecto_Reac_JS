import { Item } from "../Item/Item";
import { useCart } from "../../context/CartContext";
import "./Cart.css";

export const CartItem = ({ item }) => {
  // recibe "item" de CartList
  const { removeItem, decrease, increase } = useCart();

  return (
    <div className="btn-wrapper">
      <Item {...item}>
        <div className="counter">
          <button
            className="modifiers less"
            onClick={() => decrease(item.id)}
            disabled={item.quantity === 1}
          >
            -
          </button>
          <span className="quantity-box">{item.quantity}</span>
          <button className="modifiers more" onClick={() => increase(item.id)}>
            +
          </button>
        </div>
        <div>
          <button
            className="btn bg-secondary text-dark"
            onClick={() => removeItem(item.id)}
          >
            {/* //como en la funcion defini que el parametro sea un string, es que hago item.id */}
            Eliminar
          </button>
        </div>
      </Item>
      {/* //se lo paso a Item con spread operator para que Item pinte la tarjeta */}
    </div>
  );
};
