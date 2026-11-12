import { useEffect, useState } from "react";
import { OrdersManagementCards } from "./OrdersManagementCards";
import { Link } from "react-router-dom";
import { getOrders } from "../../services/ordersService";

export const OrdersManagement = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  /* --------------------- CONEXION PARA MOSTRAR LAS ORDENES -------------------- */
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
