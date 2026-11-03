import { useCart } from "../../context/CartContext";

export const CartSummary = () => {
  const { cart, getCartTotal, checkout } = useCart();

  const total = getCartTotal();

  return (
    <>
      <div className="cart-summary-details">
        <p className="total">TOTAL A PAGAR: ${total.toLocaleString("es-AR")}</p>

        <button
          className="btn bg-secondary text-dark summary-btn"
          onClick={checkout}
        >
          Finalizar Compra
        </button>

        <h3 className="details">Detalle del pedido</h3>
        <ul>
          {cart.map((element) => {
            const subtotal = element.quantity * element.price;
            return (
              <li key={element.id}>
                {element.name} x {element.quantity} = $
                {subtotal.toLocaleString("es-AR")}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
