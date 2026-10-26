import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* CREACION DE CONTEXTO*/
const CartContext = createContext();


//ARMADO DE MI CUSTOM HOOK - PARA USO MAS AGIL Y ORDENADO
export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart debe usarse dentro de un CartProvider");
    }
    return context;
};

//ARMADO DEL PROVEEDOR
export const CartProvider = ({ children }) => {
    const navigate = useNavigate(); //para poder redirigir a otra pagina una vez que se haga la compra
    const [cart, setCart] = useState(()=> {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        }, [cart]);

    //FUNCION PARA VERIFICAR SI EL PRODUCTO YA ESTA EN EL CARRITO
    const isInCart = (item) => {
        const inCart = cart.some((element) => element.id === item.id);
        return inCart; //ver aca si esta funcion puede llamar a useState y agregar un elemento mas al contador
    }

    //FUNCION PARA AGREGAR UN PRODUCTO AL CARRITO - VER DE ADAPTAR PARA CANTIDAD -
    const addItem = (item) => {
        if (isInCart(item)){
            alert ("El producto ya se encuentra en el carrito. Podrá modificar la cantidad deseada en la pestaña 'Carrito' antes de finalizar el pedido.");
            return;
        }
        setCart([...cart, item]);
        alert("Producto agregado al carrito. Podrá elegir la cantidad deseada  desde la pestaña 'Carrito' antes de finalizar el pedido.");
        navigate(-1); //redirección a pagina anterior.
    };

    // FUNCION REMOVER UN PRODUCTO DEL CARRITO - USAR FILTER-
    const removeItem = (id) => {
        const updatedCart = cart.filter((element) => element.id !== id);
        setCart(updatedCart);
        alert("Producto eliminado del carrito");
    };

    //FUNCION PARA VACIAR EL CARRITO - USAR SETSTATE CON ARRAY VACIO
    const clearCart = () => {
        setCart([]);
    };

    //FUNCION PARA OBTENER EL TOTAL DE ITEMS EN EL CARRITO
    //si trabajo con cantidad, usar metodo reduce.
    const getTotalItems = () => {
        return cart.length;
    };
// aca debo modificar para trabajar con quantity
    const getCartTotal = () => {
        return cart.reduce((acc, element) => acc + element.price,0);
    }

    const checkout = () => {
        alert("Gracias por su compra. Su pedido ha sido procesado con éxito.")
        clearCart();
        navigate("/");
    };

    const values = {
        cart,
        addItem,
        removeItem,
        clearCart,
        getTotalItems,
        getCartTotal,
        checkout
    }


return <CartContext.Provider value= {values}>{children}</CartContext.Provider>}