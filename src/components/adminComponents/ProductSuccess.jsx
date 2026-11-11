import { useParams, Link } from "react-router-dom";
import "./ProductSuccess.css";

export const ProductSuccess = () => {
  const { id } = useParams();

  return (
    <section className="success-page">
      <div className="success-icon">✅</div>

      <h3>Producto cargado con exito</h3>
      <p>ID de producto: {id}</p>

      <div className="success-actions">
        <Link className="btn bg-secondary text-dark back" to="/admin">
          Volver al Dashboard
        </Link>
        <Link
          className="btn bg-secondary text-dark another"
          to="/admin/dashboard/products/new"
        >
          Cargar otro producto
        </Link>
      </div>
    </section>
  );
};
