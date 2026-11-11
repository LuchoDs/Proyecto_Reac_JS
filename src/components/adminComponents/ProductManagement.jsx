import { useState, useEffect } from "react";
import { getProducts, deleteProduct } from "../../services/productsService";
import "./ProductManagement.css";
import { ProductManagementCards } from "./ProductManagementCards";
import { Link } from "react-router-dom";

export const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => setErrors(error.message)) //error es un parametro
      .finally(() => setLoading(false));
  }, []);

  /* ------------------------ ELIMINAR PRODUCTOS POR ID ----------------------- */

  const HandleDelete = async (id) => {
    const confirmDelete = window.confirm(
      `estás seguro de querer borrar el ID: ${id}..??`,
    );
    if (!confirmDelete) return;

    try {
      await deleteProduct(id);
      //actualizo el estado con un filter, para sacar el producto de la panatalla
      setProducts(products.filter((product) => product.id !== id));
      alert(`El producto ID n°: ${id} ha sido eliminado correctamente.`);
      console.log(`El producto ID n°: ${id} ha sido eliminado correctamente.`);
    } catch (error) {
      console.error("Error al intentar eliminar el producto:", error);
      alert("No se pudo eliminar el producto. Intentalo de nuevo.");
    }
  };

  if (loading) return <p>cargando..</p>;
  if (errors) return <p>Error al cargar productos: {errors}</p>;

  return (
    <div className="management-wrapper">
      <div>
        <Link className="btn bg-secondary text-dark back" to="/admin">
          VOLVER AL DASHBOARD
        </Link>
      </div>
      <h2 className="title">Productos disponibles</h2>
      <ProductManagementCards products={products} onDelete={HandleDelete} />
    </div>
  );
};
