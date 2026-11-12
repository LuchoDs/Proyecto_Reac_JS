import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProductFormUI } from "./ProductFormUI";
import { validateProduct } from "../../../utils/validateProducts";
import { uploadImage } from "../../../services/uploadImage";
import {
  createProduct,
  getProductsById,
  updateProduct,
} from "../../../services/productsService";
import "./ProductFormConteiner.css";

export const ProductFormConteiner = () => {
  const { id } = useParams();
  const inEdition = Boolean(id);

  const formFields = {
    name: "",
    price: "",
    category: "",
    description: "",
    volume: "",
    image: "", // Agregado para guardar la URL de la imagen existente
  };

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState(formFields);

  useEffect(() => {
    if (inEdition) {
      setLoading(true);
      getProductsById(id)
        .then((data) => {
          setProduct(data);
        })
        .catch((error) => setErrors({ general: error.message }))
        .finally(() => setLoading(false));
    }
  }, [id, inEdition]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    //esto me trae lo que tenia "...product", y le agrega la nueva clave, [name] y value son del label.
    // Y asi armar el objeto completo- nombre, precio, etc etc..
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0] || null;
    setFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //reseteamos los estados y ponemos "loading mientras se procesa".
    setErrors({});
    setLoading(true);

    //Validamos los datos cargados en los inputs
    const newErrors = validateProduct({
      ...product,
      file: file || (inEdition ? product.image : null),
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      //Subir la imagen
      let imageUrl = product.image;
      if (file) {
        imageUrl = await uploadImage(file);
      }

      //Unificar la imagen con el objeto, y estructurar el producto
      const productData = {
        ...product,
        price: Number(product.price),
        category: product.category.trim().toLowerCase(),
        image: imageUrl,
      };

      //Reemplazamos o damos de alta el nuevo producto
      if (inEdition) {
        await updateProduct(id, productData);
        navigate("/admin/dashboard/products/manage", { replace: true });
      } else {
        const newId = await createProduct(productData);
        navigate(`/admin/dashboard/products/success/${newId}`, {
          replace: true,
        });
      }
      // //Limpiar los campos del formulario, resetear estados
      setProduct(formFields); //vuelvo a cargar el objeto vacio del principio
      setFile(null); //limpio la imagen

      // //Navegar a la pagina de validación
      // navigate(`/admin/dashboard/products/success/${id}`, { replace: true });
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductFormUI
      //nombre de la prop = {valor o información que le envío} a traves del nombre. LO QUE "ENVIO" ES EL NOMBRE, Y DENTRO DE EL, LA INFO.
      product={product}
      errors={errors}
      loading={loading}
      onChange={handleChange}
      onFileChange={handleFileChange}
      onSubmit={handleSubmit}
      inEdition={inEdition}
    />
  );
};
