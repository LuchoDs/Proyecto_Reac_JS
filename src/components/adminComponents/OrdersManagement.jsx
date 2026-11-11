import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { OrdersManagementCards } from "./OrdersManagementCards";
import { Link } from "react-router-dom";

export const OrdersManagement = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  /* --------------------------- CREACION LINK A LA BASE --------------------------- */
  const orderRef = collection(db, "orders");
  const getOrders = async () => {
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

  /* --------------------- CONEXION PARA TRAER LAS ORDENES -------------------- */
  useEffect(() => {
    getOrders()
      .then((data) => setOrders(data))
      .catch((error) => setErrors(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>cargando..</p>;
  if (errors) return <p>Error al cargar productos: {errors}</p>;

  return (
    <>
      <div className="management-wrapper">
        <div>
          <Link className="btn bg-secondary text-dark back" to="/admin">
            VOLVER AL DASHBOARD
          </Link>
        </div>
        <h2 className="title">Ordenes cargadas</h2>
        <OrdersManagementCards orders={orders} />
      </div>
    </>
  );
};
