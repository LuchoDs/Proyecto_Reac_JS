import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";

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
  const [cart, setCart] = useState(() => {
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
  };

  //FUNCION PARA AGREGAR UN PRODUCTO AL CARRITO
  const addItem = (item) => {
    if (isInCart(item)) {
      alert(
        "El producto ya se encuentra en el carrito. Podrá modificar la cantidad deseada en la pestaña 'Carrito' antes de finalizar el pedido.",
      );
      return;
    }
    setCart([...cart, { ...item, quantity: 1 }]);
    alert(
      "Producto agregado al carrito. Podrá elegir la cantidad deseada desde la pestaña 'Carrito' antes de finalizar el pedido.",
    );
    navigate(-1); //redirección a pagina anterior.
  };

  const decrease = (id) => {
    const updatedQuantity = cart.map((element) => {
      if (element.id == id) {
        return { ...element, quantity: element.quantity - 1 };
      }
      return element;
    });
    setCart(updatedQuantity);
  };

  const increase = (id) => {
    const updatedQuantity = cart.map((element) => {
      if (element.id == id) {
        return { ...element, quantity: element.quantity + 1 };
      }
      return element;
    });
    setCart(updatedQuantity);
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
    return cart.reduce((acc, element) => acc + element.quantity, 0);
  };
  // aca debo modificar para trabajar con quantity
  const getCartTotal = () => {
    return cart.reduce(
      (acc, element) => acc + element.quantity * element.price,
      0,
    );
  };

  const checkout = async () => {
    try {
      //armamos la nueva orden con los datos del carrito
      const newOrder = {
        date: serverTimestamp(), // Fecha oficial del servidor de Firebase
        total: getCartTotal(),
        item: cart.map((element) => ({
          name: element.name,
          price: element.price,
          quantity: element.quantity,
        })),
      };
      // guardado en la collecion
      const ordersCollection = collection(db, "orders");
      const docRef = await addDoc(ordersCollection, newOrder);

      alert(
        `Gracias por su compra. Su pedido ha sido procesado con éxito, con el código: ${docRef.id}.`,
      );
      clearCart();
      navigate("/");
    } catch (error) {
      console.error("Error al procesar la compra:", error);
      alert("Hubo un error al procesar su compra. Intente nuevamente.");
    }
  };

  const values = {
    cart,
    addItem,
    decrease,
    increase,
    removeItem,
    clearCart,
    getTotalItems,
    getCartTotal,
    checkout,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
