import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

/* --------------------------- CREACION LINK A LA BASE --------------------------- */
const orderRef = collection(db, "orders");

export const getOrders = async () => {
  try {
    const snapshot = await getDocs(orderRef);

    const orderFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return orderFormat;
  } catch (error) {
    console.log("Error al traer productos", error);
    throw error;
  }
};
