export const OrdersManagementCards = ({ orders }) => {
  if (!orders.length) {
    return <p>No hay órdenes para mostrar</p>;
  }

  return (
    <>
      <div className="contenedor-tarjetas-principal">
        {orders.map((order) => (
          <article className="card text-dark manage-card" key={order.id}>
            <p>
              ID: {order.id} - Fecha:
              {order.date && order.date.toDate
                ? order.date.toDate().toLocaleDateString("es-AR")
                : "Guardando fecha..."}{" "}
            </p>
            <h4>$ {order.total.toLocaleString("es-AR")}</h4>
            <div>
              <p>Detalle de la orden:</p>
              <ul>
                {order.item &&
                  order.item.map((prod, index) => (
                    <li key={index}>
                      {prod.name} - ({prod.quantity}u x ${" "}
                      {prod.price.toLocaleString("es-AR")}c/u) = $
                      {(prod.quantity * prod.price).toLocaleString("es-AR")}
                    </li>
                  ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};
