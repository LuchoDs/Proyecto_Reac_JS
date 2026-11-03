export const validateProduct = (product) => {
  const errors = {}; //me devuelve un objeto con clave: valor

  if (!product.name.trim()) {
    errors.name = "Es obligatorio ingresar un nombre para el producto";
  }

  if (!product.price) {
    errors.price = "El campo precio es obligatorio";
  } else if (isNaN(product.price)) {
    errors.price = "Para cargar el precio, se debe usar un valor numérico.";
  } else if (product.price <= 0) {
    errors.price = "El precio debe ser mayor a 0";
  }

  if (!product.volume.trim()) {
    errors.volume = "Se debe cargar el volumen o peso del producto";
  }

  if (!product.category.trim()) {
    errors.category =
      "Se debe ingresar una categoria al producto - para algo general, utilice 'almacen'";
  }

  if (!product.description.trim()) {
    errors.description =
      "Se debe ingresar una descripción del producto a agaregar";
  }

  if (!product.file) {
    errors.file = "Se debe seleccionar una imagen";
  }

  return errors;
};
