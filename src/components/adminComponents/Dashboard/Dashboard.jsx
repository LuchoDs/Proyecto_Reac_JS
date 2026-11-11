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

          {/* <button
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

          <Link to="/" className="linkOption">
            Ir a la tienda
          </Link>

          <button className="logout">
            <img
              className="imgout"
              src="/images/puerta.png"
              alt="salir"
              onClick={logout}
            />
            Cerrar sesión
          </button>
        </div>

        <div className="secondary">
          <Outlet />
        </div>
      </section>
    </>
  );
};
