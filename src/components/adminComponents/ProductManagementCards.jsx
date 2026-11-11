import { Link } from "react-router-dom";
import "./ProductManagement.css";

export const ProductManagementCards = ({ products, onDelete }) => {
  if (!products.length) {
    return <p>No hay productos para mostrar</p>;
  }

  return (
    <div className="contenedor-tarjetas-principal">
      {products.map((product) => (
        <article className="card text-dark manage-card" key={product.id}>
          <p>ID: {product.id}</p>
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} />

          <div className="product-actions">
            <Link to={`../products/edit/${product.id}`} className="btn-edit">
              ✏️
            </Link>

            <button
              className="btn btn-delete"
              onClick={() => onDelete(product.id)}
            >
              🗑️
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};
