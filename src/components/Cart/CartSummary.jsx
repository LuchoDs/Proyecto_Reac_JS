import { useCart } from "../../context/CartContext"


export const CartSummary = () => {
    const {getCartTotal, checkout} = useCart();

    const total = getCartTotal();

    return (
        <>
            {/* <p>TOTAL A PAGAR: ${quantity} x ${nombre} ($ ${price} c/u) = $ ${quantity * price}</p> */}
            <p>TOTAL A PAGAR: ${total}</p>
            <button className="btn bg-secondary text-dark" onClick={checkout}>
            Finalizar Compra
            </button>

              
        
        </>
    )



}