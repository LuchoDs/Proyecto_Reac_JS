import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <section className="dash-conteiner">
      <h1> Panel de administrador</h1>

      <div className="options">
        <Link to="/admin/products/new">Agregar Productos</Link>

        {/* <button
          className="btn bg-secondary text-dark eliminar"
          onClick="<p>Hello</p>"
        >
          Eliminar Productos
        </button>

        <button
          className="btn bg-secondary text-dark ventas"
          onClick="<p>Hello</p>"
        >
          Ver registros de ventas
        </button>

        <button
          className="btn bg-secondary text-dark meme"
          onClick="<p>Hello</p>"
        >
          Para ver un meme
        </button> */}

        <Link to="/">Ir a la tienda</Link>

        <button className="btn bg-secondary text-dark logout" onClick={logout}>
          Cerrar sesión
        </button>
      </div>
    </section>
  );
};
