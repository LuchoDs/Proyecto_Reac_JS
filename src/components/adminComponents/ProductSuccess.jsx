import { useParams, Link } from "react-router-dom";
import "./ProductSuccess.css";

export const ProductSuccess = () => {
  const { id } = useParams();

  return (
    <section className="success-page">
      <div className="success-icon">✅</div>

      <h3>Producto cargado con exito</h3>
      <p>ID de producto: {id}</p>
      <p>Puede cargar otro haciendo click en el botón.</p>

      <div className="success-actions">
        <Link className="btn bg-secondary text-dark" to="/admin">
          Cargar otro producto
        </Link>
      </div>
    </section>
  );
};
