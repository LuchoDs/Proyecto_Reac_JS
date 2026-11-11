import { Link } from "react-router-dom";

export const ProductManagementCards = ({ products, onDelete }) => {
  if (!products.length) {
    return <p>No hay productos para mostrar</p>;
  }

  return (
    <div className="contenedor-tarjetas-principal">
      {products.map((product) => (
        <article className="card text-dark" key={product.id}>
          <p>ID: {product.id}</p>
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} />

          <Link to={`../products/edit/${product.id}`} className="btn-edit">
            ✏️
          </Link>

          <button
            className="btn btn-delete"
            onClick={() => onDelete(product.id)}
          >
            🗑️
          </button>
        </article>
      ))}
    </div>
  );
};
