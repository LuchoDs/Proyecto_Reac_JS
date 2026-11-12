import "./Dashboard.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <>
      <h1> Panel de administrador</h1>
      <section className="dash-conteiner">
        <div className="options">
          <Link to="/admin/dashboard/products/new" className="linkOption">
            Agregar Productos
          </Link>

          <Link to="/admin/dashboard/products/manage" className="linkOption">
            Modificar o Eliminar Productos
          </Link>

          <Link to="/admin/dashboard/orders" className="linkOption">
            Ver ordenes de compra
          </Link>

          <Link to="/" className="linkOption">
            Ir a la tienda
          </Link>

          <button className="logout" onClick={logout}>
            <img className="imgout" src="/images/puerta.png" alt="salir" />
            Cerrar sesión
          </button>

          {/* <Link
            to="/admin/dashboard/meme"
            className="btn bg-secondary text-dark meme"
          >
            <img
              className="imgout"
              src="/images/palanca-de-mando.png"
              alt="meme"
            />
            Para ver un meme
          </Link> */}
        </div>

        <div className="secondary">
          <Outlet />
        </div>
      </section>
    </>
  );
};
