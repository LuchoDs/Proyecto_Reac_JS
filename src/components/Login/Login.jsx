import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export const Login = () => {
  // const adminFields = {
  //   email: "",
  //   password: "",
  // };
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(formData.email, formData.password);
      console.log("usuario & contraseña correctos");
      navigate("/admin", { replace: true });
    } catch (error) {
      console.error(error);
      alert("Error al iniciar sesión");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>

        <div className="form-group">
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            placeholder="correo electronico"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Contraseña: </label>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn bg-secondary text-dark" type="submit">
          Ingresar
        </button>
      </form>

      <div className="store">
        <Link to="/">No loguearse y volver a la tienda</Link>
        <p>(Credenciales</p>
        <p>usuario: admin@admin.com</p>
        <p>pass: admin123)</p>
      </div>
    </>
  );
};
